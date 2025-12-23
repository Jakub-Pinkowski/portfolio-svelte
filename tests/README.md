# Test Suite Documentation

## Overview

Comprehensive test suite for the SvelteKit portfolio application with **182 tests** covering:

- Unit tests for components, routes, and utilities
- Integration tests for user flows and features
- Data validation tests
- E2E infrastructure (Playwright recommended)
- Security, SEO, and Performance (planned)

---

## Structure

```
tests/
├── setup/              # Test utilities, fixtures, and global setup
│   ├── testUtils.ts    # Shared test helper functions
│   ├── fixtures.ts     # Mock data factories
│   └── setupTests.ts   # Global test setup
│
├── unit/               # Component, Route, and Utility unit tests
│   ├── components/     # Component-specific tests (mirrors src/lib/components)
│   │   ├── contact/    # Contact sub-components
│   │   │   └── ContactForm.test.ts
│   │   ├── portfolio/  # Portfolio sub-components
│   │   │   ├── CardAccordion.test.ts
│   │   │   ├── CardActions.test.ts
│   │   │   ├── CardDescription.test.ts
│   │   │   ├── CardFigure.test.ts
│   │   │   └── ProjectCard.test.ts
│   │   ├── Banner.test.ts
│   │   ├── AboutMe.test.ts
│   │   ├── Portfolio.test.ts
│   │   ├── Navigation.test.ts
│   │   ├── Contact.test.ts
│   │   └── Footer.test.ts
│   ├── routes/         # Route component tests (e.g., +page.svelte)
│   │   └── Page.test.ts
│   ├── layout/         # Layout component tests (e.g., +layout.svelte)
│   │   └── Layout.test.ts
│   ├── utils/          # Utility function tests
│   │   └── validation.test.ts
│   ├── accessibility.test.ts
│   ├── build.test.ts
│   └── components.test.ts
│
├── integration/        # Integration and feature tests
│   ├── contactForm/    # Contact form flows
│   │   └── contactFormIntegration.test.ts
│   ├── navigation/     # Navigation and routing flows
│   │   └── routing.test.ts
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

**Last Updated:** December 23, 2025
**Test Count:** 182 tests passing
**Structure:** Reorganized to mirror `src` and use path aliases
**Coverage:** ~90% (estimated)
