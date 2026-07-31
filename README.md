# Enterprise Playwright Test Automation Framework

An enterprise-grade test automation framework built with **Playwright, TypeScript, Docker, and CI/CD best practices**. This framework provides a scalable foundation for UI, API, and end-to-end testing with automated quality controls and reporting.

---

## 🚀 Features

### Test Automation

* Playwright-based end-to-end testing
* TypeScript support
* Cross-browser testing
* UI and API automation capabilities
* Data-driven testing support
* Reusable test fixtures and utilities

### Code Quality & Developer Experience

* ESLint for code quality enforcement
* Prettier for consistent formatting
* TypeScript validation
* Husky pre-commit hooks
* lint-staged validation
* Commit message standards using Commitlint

### Containerization

* Dockerized test execution
* Docker Compose support
* Consistent execution environment across local and CI environments

### CI/CD Ready

* GitHub Actions integration
* Automated test execution
* Quality gates
* Test reporting
* Artifact collection

### Reporting

* Playwright HTML reports
* Allure reporting support
* Test execution artifacts and debugging evidence

---

# Technology Stack

| Category                | Technology                 |
| ----------------------- | -------------------------- |
| Automation Framework    | Playwright                 |
| Language                | TypeScript                 |
| Runtime                 | Node.js                    |
| Package Manager         | npm                        |
| Containerization        | Docker                     |
| Container Orchestration | Docker Compose             |
| CI/CD                   | GitHub Actions             |
| Code Quality            | ESLint, Prettier           |
| Git Hooks               | Husky, lint-staged         |
| Reporting               | Playwright Reports, Allure |

---

# Project Structure

```
enterprise-playwright-test-automation-framework
│
├── .github/
│   └── workflows/
│       └── playwright.yml
│
├── .husky/
│   └── pre-commit
│
├── docker/
│   └── Dockerfile
│
├── tests/
│   ├── smoke/
│   ├── regression/
│   └── api/
│
├── test-data/
│
├── playwright-report/
│
├── test-results/
│
├── docker-compose.yml
├── playwright.config.ts
├── package.json
├── tsconfig.json
├── eslint.config.js
├── prettier.config.js
└── commitlint.config.cjs
```

---

# Prerequisites

Install:

* Node.js (LTS)
* npm
* Docker Desktop
* Git

Verify installations:

```bash
node --version
npm --version
docker --version
docker compose version
```

---

# Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate to the project:

```bash
cd enterprise-playwright-test-automation-framework
```

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

---

# Running Tests

## Run all Playwright tests

```bash
npx playwright test
```

## Run tests with UI mode

```bash
npx playwright test --ui
```

## Run a specific test

```bash
npx playwright test tests/example.spec.ts
```

---

# Running Tests with Docker

Build and execute:

```bash
docker compose up --build
```

Docker provides a consistent environment containing:

* Node.js
* Playwright browsers
* Project dependencies
* Test execution environment

---

# Code Quality Checks

Run linting:

```bash
npm run lint
```

Check formatting:

```bash
npm run format:check
```

Validate TypeScript:

```bash
npm run type-check
```

---

# Git Workflow

Before every commit, Husky automatically validates:

* ESLint rules
* Prettier formatting
* TypeScript compilation
* Code quality standards

Example commit:

```bash
git add .
git commit -m "feat: add login automation"
```

Commit messages follow Conventional Commit standards:

```
feat: new functionality
fix: defect correction
test: add automation coverage
docs: documentation updates
```

---

# CI/CD Pipeline

The GitHub Actions pipeline performs:

1. Dependency installation
2. Code quality validation
3. Security checks
4. Playwright test execution
5. Test reporting
6. Artifact publishing

Pipeline flow:

```
Developer Commit
        |
        ↓
Pre-Commit Validation
        |
        ↓
Pull Request
        |
        ↓
GitHub Actions
        |
        ↓
Automated Tests
        |
        ↓
Reports & Artifacts
```

---

# Best Practices Implemented

✅ Page Object Model architecture
✅ Reusable test utilities
✅ Environment-based configuration
✅ Automated quality gates
✅ Containerized execution
✅ CI/CD integration
✅ Consistent coding standards
✅ Scalable enterprise structure

---

# Future Enhancements

Planned improvements:

* API contract testing
* Accessibility testing
* Performance testing integration
* Security scanning (SAST/DAST)
* Parallel execution optimization
* Cloud test execution support
* Advanced test analytics dashboards

---
# Author

**Marwan Sultan**  
Senior QA Automation Engineer | Test Automation Lead

Experienced QA Automation Engineer specializing in enterprise test automation, DevSecOps practices, and scalable CI/CD quality frameworks.

Areas of expertise:

- Playwright & TypeScript automation frameworks
- UI, API, and end-to-end testing strategies
- CI/CD pipeline automation with GitHub Actions
- Docker-based test execution environments
- Automated quality gates and developer workflows
- Test strategy, framework architecture, and scalable automation solutions

GitHub: https://github.com/MarwanSultan

---

## License

This project is intended for internal testing and automation framework development.
