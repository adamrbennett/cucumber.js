# Cucumber Acceptance Tests
> A demonstration of writing acceptance tests with cucumber.js

## Getting Started
1. `npm install`
1. `npm run acceptance-test`

## Overview
- Application code lives in the `app` directory.
- Feature Specifications are defined in the `features` directory.
  - A feature specification describes the feature and its associated scenarios with outcomes.
  - Feature specifications use the Gherkin syntax to describe test cases in a, "business readable, domain-specific language." For more information, consult the [Wiki](https://github.com/cucumber/cucumber/wiki/Gherkin).
- Step Definitions are defined in the `features/step_definitions` directory.
  - Step Definitions are automatically generated from the feature specifications, and are then implemented to verify the implementation of the feature's specification is correct.

## Benefits
- Executable specifications
- Automated testing of business rules and functionality
- Living documentation of business rules, keeping in sync with changes to the application
- Increased participation from business SMEs in the development lifecycle

## Documentation
Automatically generate documentation from the feature specifications!
- Run `npm run features-pdf` to generate a PDF. Results will be stored in `dist/pdf`.
- Run `npm run features-html` to generate HTML. Results will be stored in `dist/html`.
