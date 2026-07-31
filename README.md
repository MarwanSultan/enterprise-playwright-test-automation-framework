# Playwright CI/CD Automation Framework

A production-ready browser and API automation framework built with Playwright and TypeScript for validating critical public web experiences at scale. This repository is designed for enterprise-quality regression assurance, security-minded automation, and repeatable CI/CD execution.

## Overview

This project automates end-to-end testing for VA.gov, covering:

- UI workflow validation
- API contract checks
- visual regression verification
- cross-browser execution
- secure delivery through CI policy enforcement

The framework follows enterprise software engineering practices: modular test design, reusable fixtures, explicit quality gates, and traceable execution in automation pipelines.

## Architecture

- src/pages: page object models for common user journeys
- src/fixtures: shared Playwright fixtures for consistent setup and teardown
- tests: functional, API, workflow, and visual regression suites
- .github/workflows: CI pipeline definitions
- .githooks: local git hooks for developer enforcement

## Key capabilities

- Page Object Model design for maintainability and scalability
- Cross-browser coverage across Chromium, Firefox, and WebKit
- Structured API testing for health, redirect, security, and content validation
- Visual regression snapshot checks for UI stability
- CI/CD execution with linting, type validation, and security scanning
- Local developer guardrails to reduce low-quality changes before commit

## Getting started

1. Install dependencies:
   npm ci

2. Install Git hooks:
   npm run hooks:install

3. Run the full suite:
   npx playwright test

4. Run a focused browser suite:
   npx playwright test --project=chromium

5. Open the HTML report:
   npx playwright show-report

## Useful commands

- npm run lint
- npm run typecheck
- npm run test
- npm run test:ci
- npm run test:chromium
- npm run hooks:install

## Quality and security controls

This project incorporates layered controls common in Fortune 500 engineering organizations:

- Local pre-commit checks to reduce risk before code reaches the repository
- CI enforcement for linting and TypeScript validation
- Dependency vulnerability scanning with GitHub CodeQL
- Code quality and security analysis with SonarQube
- Browser and API validation in a repeatable build pipeline

## CI/CD pipeline

The GitHub Actions workflow runs automated validation on pushes and pull requests and includes:

- dependency installation
- ESLint validation
- TypeScript validation
- CodeQL security scanning when configured
- SonarQube analysis when configured
- Playwright test execution
- artifact upload for test and HTML reporting

## Repository standards

- Keep test logic readable and deterministic
- Use fixtures for shared state and teardown consistency
- Prefer stable selectors and resilient assertions
- Validate real end-user behavior rather than implementation details
- Treat security, quality, and observability as first-class engineering concerns

## Contributing

Contributors should follow the existing repository patterns, keep test coverage meaningful, and validate changes locally before pushing. Security and code-quality gates are designed to help prevent regressions and reduce operational risk.

## License

ISC

## Author
Marwan Sultan