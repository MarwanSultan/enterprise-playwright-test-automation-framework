# Playwright CI/CD Pipeline

Enterprise-grade Playwright automation framework demonstrating modern CI/CD, automated quality gates, and DevSecOps best practices.

## Overview

This project provides a scalable test automation framework built with Playwright and GitHub Actions to support continuous testing throughout the software delivery lifecycle.

### Key Features

- Playwright end-to-end automation
- GitHub Actions CI/CD pipeline
- Cross-browser testing (Chromium, Firefox, WebKit)
- Data-driven testing
- API and UI test automation
- Parallel test execution
- HTML and Allure reporting
- Screenshots, videos, and traces on failures
- Configurable environments
- Enterprise-ready project structure

## Technology Stack

| Technology | Purpose |
|------------|---------|
| Playwright | UI & API Automation |
| TypeScript | Test Development |
| GitHub Actions | Continuous Integration |
| Node.js | Runtime |
| Allure Reports | Test Reporting |
| Docker | Containerized Execution |

## Project Structure

```text
playwright_ci_cd_pipeline/
├── .github/workflows/
├── tests/
├── pages/
├── fixtures/
├── test-data/
├── utils/
├── config/
├── playwright.config.ts
└── package.json
```

## Getting Started

### Install dependencies

```bash
npm install
```

### Install Playwright browsers

```bash
npx playwright install
```

### Run all tests

```bash
npx playwright test
```

### View HTML Report

```bash
npx playwright show-report
```

## CI/CD

The GitHub Actions pipeline automatically:

- Installs dependencies
- Installs Playwright browsers
- Executes automated tests
- Publishes test reports
- Validates pull requests before merge

This aligns with Playwright's recommended CI workflow for GitHub Actions. :contentReference[oaicite:0]{index=0}

## Best Practices

- Page Object Model (POM)
- Reusable test utilities
- Data-driven testing
- Environment configuration
- Parallel execution
- Clean code principles
- Automated reporting
- CI/CD quality gates

## Future Enhancements

- Accessibility testing
- Performance testing
- Visual regression testing
- Security scanning
- Docker-based execution
- Kubernetes deployment
- Slack and Microsoft Teams notifications
- AI-assisted test generation

## License

MIT License

## Author
Marwan Sultan
