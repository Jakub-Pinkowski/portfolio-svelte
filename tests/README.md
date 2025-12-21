# Test Suite

## Structure

```
tests/
├── unit/          # Component and functionality tests
├── integration/   # Page loading and routing tests
└── data/          # Data validation tests
```

## Running Tests

```bash
npm test              # Run all tests
npm run test:ui       # Run with UI
npm run test:run      # Run once (CI)
npm run test:ci       # Full CI suite
```

## Coverage (127 tests)

- **Unit**: Accessibility, components, form validation, build
- **Integration**: Form submission, page rendering, routing
- **Data**: Projects, icons, URL validation, consistency checks
