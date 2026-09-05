/**
 * Todo lo que hablamos con GitHub para dar acceso al repositorio privado.
 *
 * Aqui conviven DOS tokens con papeles muy distintos, y la diferencia es lo
 * que sostiene la seguridad del flujo:
 *
 *   - El token DE LA PERSONA. Sale del OAuth, sirve para una sola cosa —
 *     preguntarle a GitHub quien es— y se descarta acto seguido. Solo lectura.
 *
 *   - El token DE ADMINISTRACION. Es tuyo, tiene permiso `admin:org` y es el
 *     que ejecuta la invitacion. Nunca sale del servidor. Si se filtrara,
 *     quien lo tuviera administraria toda la organizacion.
 *
 * Ningun secreto vive en este fichero: todos salen de variables de entorno.
 */

const API = "https://api.github.com";

export class GitHubError extends Error {}

function admin() {
  const token = process.env.GITHUB_ADMIN_TOKEN;
  if (!token) throw new GitHubError("Falta GITHUB_ADMIN_TOKEN");
  return token;
}

/** Canjea el codigo de un solo uso por un token de la persona. */
export async function canjearCodigo(code) {
  const r = await fetch("https://github.com/login/oauth/access_token", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      client_id: process.env.GITHUB_CLIENT_ID,
      client_secret: process.env.GITHUB_CLIENT_SECRET,
      code,
    }),
  });

  if (!r.ok) throw new GitHubError(`GitHub respondió ${r.status} al canjear el código`);

  const datos = await r.json();
  // GitHub devuelve 200 incluso cuando falla: el error viene en el cuerpo.
  if (datos.error) throw new GitHubError(datos.error_description ?? datos.error);
  if (!datos.access_token) throw new GitHubError("GitHub no devolvió token");
  return datos.access_token;
}

/** Pregunta a GitHub quien es el portador del token. */
export async function quienEs(tokenPersona) {
  const r = await fetch(`${API}/user`, {
    headers: {
      Authorization: `Bearer ${tokenPersona}`,
      Accept: "application/vnd.github+json",
    },
  });
  if (!r.ok) throw new GitHubError(`No se pudo leer el perfil (${r.status})`);

  const { login } = await r.json();
  if (!login) throw new GitHubError("GitHub no devolvió el nombre de usuario");
  return login;
}

/**
 * Mete a la persona en el equipo. Devuelve "active" o "pending".
 *
 * Es idempotente: invitar a quien ya esta dentro devuelve `active` en vez de
 * fallar, asi que pinchar el enlace dos veces no rompe nada.
 *
 * `pending` significa que le ha llegado la invitacion y le falta aceptarla.
 * `active` significa que ya esta dentro, sin mas pasos.
 */
export async function invitarAlEquipo(usuario) {
  const org = process.env.GITHUB_ORG;
  const equipo = process.env.GITHUB_TEAM;
  if (!org || !equipo) throw new GitHubError("Faltan GITHUB_ORG o GITHUB_TEAM");

  const r = await fetch(`${API}/orgs/${org}/teams/${equipo}/memberships/${usuario}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${admin()}`,
      Accept: "application/vnd.github+json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ role: "member" }),
  });

  if (r.status === 404) {
    throw new GitHubError(
      `No existe el equipo '${equipo}' en '${org}', o el token no tiene admin:org`,
    );
  }
  if (!r.ok) throw new GitHubError(`GitHub respondió ${r.status} al invitar`);

  const { state } = await r.json();
  return state === "active" ? "active" : "pending";
}

/** URL donde la persona acepta la invitación, sin pasar por el correo. */
export function urlDeAceptacion() {
  return `https://github.com/orgs/${process.env.GITHUB_ORG}/invitation`;
}

/** El repositorio al que se le da acceso. */
export function urlDelRepositorio() {
  return `https://github.com/${process.env.GITHUB_ORG}/astillero-ship-kit`;
}
