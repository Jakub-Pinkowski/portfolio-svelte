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

**Last Updated:** December 22, 2025
**Test Count:** 127 tests passing
**Structure:** Reorganized for scalability
**Coverage:** ~70% (estimated)
