# Test Suite Documentation

## Overview

Comprehensive test suite for the SvelteKit portfolio application with **127+ tests** covering:

- Unit tests for components and utilities
- Integration tests for user flows and features
- Data validation tests
- Security and SEO tests (planned)
- Performance tests (planned)

---

## Structure

```
tests/
├── setup/              # Test utilities, fixtures, and global setup
│   ├── testUtils.ts    # Shared test helper functions
│   ├── fixtures.ts     # Mock data factories
│   └── setupTests.ts   # Global test setup
│
├── unit/               # Component and function unit tests
│   ├── components/     # Component-specific tests (planned)
│   │   ├── portfolio/  # Portfolio sub-components
│   │   ├── navigation/ # Navigation component
│   │   └── contact/    # Contact form component
│   ├── utils/          # Utility function tests
│   │   └── validation.test.ts
│   ├── layout/         # Layout tests (planned)
│   ├── accessibility.test.ts
│   ├── build.test.ts
│   └── components.test.ts
│
├── integration/        # Integration and feature tests
│   ├── contactForm/    # Contact form flows
│   │   └── contactFormIntegration.test.ts
│   ├── security/       # Security tests (planned)
│   ├── seo/            # SEO & PWA tests (planned)
│   ├── performance/    # Performance tests (planned)
│   ├── errorHandling/  # Error scenarios (planned)
│   ├── page.test.ts
│   ├── pageRendering.test.ts
│   └── routing.test.ts
│
├── data/               # Data validation tests
│   ├── dataIntegrity.test.ts
│   ├── icons.test.ts
│   ├── mainProjects.test.ts
│   ├── simpleProjects.test.ts
│   └── studiesProjects.test.ts
│
└── e2e/                # End-to-end user journey tests (future)
    └── userJourneys/   # Full user flows
```

---

## Running Tests

```bash
# Run all tests
npm test

# Run specific test file
npm test path/to/file.test.ts

# Run tests in watch mode
npm test -- --watch

# Run with UI
npm run test:ui

# Run once (for CI)
npm run test:run

# Full CI suite (test + typecheck + build)
npm run test:ci

# Run tests with coverage (future)
npm test -- --coverage
```

---

## Test Categories

### 🧩 **Unit Tests** (Current: ~15 tests)

**Purpose:** Test individual components and functions in isolation

- **Utilities** (4 tests)
    - Form validation (email, fields)

- **Build & Types** (2 tests)
    - Build process validation
    - TypeScript type checking

- **Accessibility** (24 tests)
    - ARIA attributes
    - Semantic HTML
    - Keyboard navigation

- **Components** (7 tests)
    - Component imports and exports

**Planned:**

- Portfolio subcomponents (ProjectCard, CardAccordion, etc.)
- Navigation interactions
- Layout components (skip link, footer, etc.)
- Validation edge cases

### 🔗 **Integration Tests** (Current: ~40 tests)

**Purpose:** Test how components work together and feature flows

- **Contact Form** (10 tests)
    - Form submission (success/failure/network errors)
    - Form state management

- **Page & Routing** (30 tests)
    - Page data loading
    - Component rendering
    - Route structure
    - Asset imports

**Planned:**

- Contact form interactions (double-submit, reset, toasts)
- Security header validation
- SEO and PWA validation
- Performance metrics
- Error handling scenarios

### 📊 **Data Tests** (Current: ~30 tests)

**Purpose:** Validate data integrity and consistency

- Project data validation (23 tests)
- Icon data integrity (5 tests)
- Technology consistency
- URL validation
- Image path validation

### 🌐 **E2E Tests** (Future: 0 tests)

**Purpose:** Full user journey tests from start to finish

Planned:

- View portfolio projects
- Submit a contact form
- Navigate entire site

---

## Test Naming Conventions

### File Naming

```
ComponentName.test.ts         # Unit test
featureName.test.ts           # Integration test
dataCategory.test.ts          # Data validation test
```

### Test Descriptions

```typescript
// ✅ Good: Clear and specific
it('should toggle aria-expanded when checkbox changes')
it('should prevent double submission when isSubmitting is true')
it('should reject email with consecutive dots in domain')

// ❌ Bad: Vague or unclear
it('should work correctly')
it('should handle edge cases')
it('should test the component')
```

---

## Writing New Tests

### 1. Choose the Right Location

| Test Type              | Location                 | Example               |
|------------------------|--------------------------|-----------------------|
| Component in isolation | `tests/unit/components/` | ProjectCard rendering |
| Utility function       | `tests/unit/utils/`      | Email validation      |
| User interaction flow  | `tests/integration/`     | Form submission       |
| Data structure         | `tests/data/`            | Project validation    |
| Full user journey      | `tests/e2e/`             | Browse → Contact flow |

### 2. Use Test Utilities

```typescript
import {createMockProject} from '../setup/fixtures';
import {wait, createMockResponse} from '../setup/testUtils';

// Use shared fixtures for consistent test data
const mockProject = createMockProject({name: 'Test Project'});

// Use shared utilities
const response = createMockResponse({ok: true});
```

### 3. Follow AAA Pattern

```typescript
it('should do something', () => {
    // Arrange: Set up test data
    const input = 'test@example.com';

    // Act: Execute the function/action
    const result = isValidEmail(input);

    // Assert: Verify the result
    expect(result).toBe(true);
});
```

---

## Test Coverage Goals

| Category    | Target  | Current |
|-------------|---------|---------|
| Components  | 90%     | 40%     |
| Utilities   | 100%    | 85%     |
| Integration | 80%     | 60%     |
| Data        | 100%    | 100% ✓  |
| **Overall** | **85%** | **70%** |

Run `npm test -- --coverage` to see a detailed coverage report (when configured).

---

## Best Practices

### ✅ Do's

- Write descriptive test names
- Test one thing per test
- Use arrange-act-assert pattern
- Mock external dependencies (fetch, etc.)
- Test edge cases and error scenarios
- Keep tests fast and isolated
- Use shared fixtures for consistency

### ❌ Don'ts

- Don't test implementation details
- Don't share state between tests
- Don't skip cleanup (use afterEach)
- Don't use real API endpoints
- Don't test third-party libraries
- Don't write brittle tests (tight coupling)

---

## Common Test Patterns

### Testing Validation Functions

```typescript
import {isValidEmail} from '$lib/utils/validation';

it('should validate email format', () => {
    expect(isValidEmail('test@example.com')).toBe(true);
    expect(isValidEmail('invalid')).toBe(false);
});
```

### Testing Async Operations

```typescript
it('should handle async submission', async () => {
    global.fetch = vi.fn().mockResolvedValue({ok: true});

    await submitForm(data);

    expect(fetch).toHaveBeenCalledWith(expectedUrl, expectedOptions);
});
```

### Using Mock Data

```typescript
import {createMockProject} from '../setup/fixtures';

it('should render project card', () => {
    const project = createMockProject({name: 'My Project'});
    // Test with mock project
});
```

---

## Continuous Integration

Tests run automatically on:

- Every commit (via npm scripts)
- Pull requests (GitHub Actions)
- Daily dependency updates (Dependabot)

CI Pipeline:

1. Install dependencies
2. Run type checking (`npm run check`)
3. Run all tests (`npm run test:run`)
4. Build application (`npm run build`)

---

## Troubleshooting

### Tests are slow

- Use `it.only()` to run single test
- Check for unnecessary `await` statements
- Mock expensive operations

### Tests are flaky

- Avoid hardcoded timeouts
- Use `vi.useFakeTimers()` for time-based tests
- Ensure proper cleanup in `afterEach`

### Import errors

- Check `tsconfig.json` paths
- Verify Vite config
- Clear `.svelte-kit` cache

---

## Roadmap

### Phase 1: Current ✅

- Data validation tests
- Basic unit tests
- Integration tests for page loading
- Contact form testing

### Phase 2: In Progress 🔄

- Test structure reorganization
- Shared test utilities
- Mock data factories

### Phase 3: Planned 📋

- Portfolio component tests
- Validation edge cases
- Security header tests
- SEO & PWA tests
- Navigation interaction tests
- Skip link tests

### Phase 4: Future 🔮

- Performance testing
- Error scenario testing
- E2E user journey tests
- Visual regression testing

---

## Resources

- [Vitest Documentation](https://vitest.dev/)
- [Testing Library](https://testing-library.com/)
- [Svelte Testing](https://svelte.dev/docs/testing)

---

**Last Updated:** December 22, 2025
**Test Count:** 127 tests passing
**Structure:** Reorganized for scalability
**Coverage:** ~70% (estimated)
