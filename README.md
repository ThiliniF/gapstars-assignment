# Gapstars Assessment - Playwright Test Automation

## Project Overview

This project demonstrates automated testing of the following web application scenarios using Playwright and TypeScript with Page Object Model pattern.

- Dynamic element behavior (Add/remove Elements)
- Select and Deselect checkboxes
- Drag and Drop functionality
- Multiple window handling
- Basic HTTP authentication

#### Note:

This project covers only happy path scenarios due to time constraints. In a real-world testing scenario, I would include comprehensive edge cases, negative scenarios, and error handling tests.

## Project Structure

```
GapstarsAssessment/
├── .github/
│   └── workflows/
│       └── playwright.yml          # CI/CD workflow configuration
├── pages/                          # Page Object Model classes
│   ├── base-page.ts               # Base page with common methods
│   ├── page-object-manager.ts     # Central manager for all page objects
│   ├── add-remove-elements.ts     # Add/Remove Elements page object
│   ├── checkboxes-page.ts         # Checkboxes page object
│   ├── drag-and-drop-page.ts      # Drag and Drop page object
│   ├── home-page.ts               # Home page object
│   └── windows-page.ts            # Multiple Windows page object
├── tests/
│   ├── example.spec.ts            # Sample test file
│   └── the-internet.spec.ts       # Main test suite
├── .env                           # Environment variables (not in repo)
├── .gitignore                     # Git ignore configuration
├── package.json                   # Project dependencies
├── package-lock.json              # Locked dependencies
└── playwright.config.ts           # Playwright configuration
```

## Getting Started

### Prerequisites

- Node.js (LTS version)
- npm package manager

### Installation

1. Clone the repository:

```bash
git clone <https://github.com/ThiliniF/gapstars-assignment>
cd GapstarsAssessment
```

2. Install dependencies:

```bash
npm install
```

3. Install Playwright browsers:

```bash
npx playwright install
```

4. Create a `.env` file in the root directory:

```env
AUTH_USERNAME=admin
AUTH_PASSWORD=admin
```

## Running Tests

### Run all tests:

```bash
npm run test:all
```

### Run tests in headed mode:

```bash
npm run test:headed
```

### Run a specific test file:

```bash
npx playwright test tests/the-internet.spec.ts
```

### Run tests in debug mode:

```bash
npm run test:debug
```

### Run tests with UI mode:

```bash
npm run test:ui
```

## Test Reports

After running tests, view the HTML report:

```bash
npm run test:report
```
