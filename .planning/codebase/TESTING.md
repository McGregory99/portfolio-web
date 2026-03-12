# Testing Patterns

**Analysis Date:** 2026-03-12

## Test Framework

**Runner:**
- Not configured
- No test framework detected in `package.json` (no jest, vitest, or other runner)

**Assertion Library:**
- Not applicable (no test framework installed)

**Run Commands:**
- Not applicable - testing is not configured in this project

## Test File Organization

**Location:**
- Not applicable - no test files found
- Searched for `.test.*` and `.spec.*` files with no results

**Naming:**
- No test files detected

**Structure:**
- Not applicable

## Test Structure

**Suite Organization:**
- Not detected

**Patterns:**
- Not detected

## Mocking

**Framework:**
- Not configured

**Patterns:**
- Not applicable (no test framework setup)

**What to Mock:**
- Not defined (testing not implemented)

**What NOT to Mock:**
- Not defined (testing not implemented)

## Fixtures and Factories

**Test Data:**
- Not detected
- Data defined inline in components as constants: `experiences` array and `projects` array in `page.js`

**Location:**
- Not applicable

## Coverage

**Requirements:**
- Not enforced (no test configuration)

**View Coverage:**
- Not applicable

## Test Types

**Unit Tests:**
- Not implemented
- Recommendation: Implement unit tests for component logic, especially:
  - `Header.js`: Social links rendering
  - `ProjectItem.js`: Domain name extraction logic (line 14)
  - `ExperienceItem.js`: Conditional project/technology rendering

**Integration Tests:**
- Not implemented

**E2E Tests:**
- Not implemented

## Test Recommendations

**Components that would benefit from testing:**
1. `ProjectItem.js` - `domain.replace(/^https?:\/\//, "").split("/")[0]` string manipulation
2. `ExperienceItem.js` - Conditional rendering of projects and technologies
3. `page.js` - Experience and project data mapping, null checks

**Testing Framework Recommendation:**
- Vitest (modern, fast, ESM-first) or Jest with React Testing Library
- Next.js has built-in support for both

**Testing Strategy:**
- Component snapshot tests for UI consistency
- Unit tests for data transformation logic (domain name extraction)
- Integration tests for data rendering (experiences and projects display)

**Current State:**
- No automated testing setup
- Manual testing only
- No test coverage metrics

---

*Testing analysis: 2026-03-12*
