#  Model for Social Connect

## Project Structure
/cypress
  ├── integration
  │   ├── socialConnectTest.cy.js  # Test file
  ├── page-objects
  │   ├── socialConnectPage.js      # Page Object Model

## Installation & Setup
1. Clone the repository
2. Install dependencies:
   npm install
3. Run tests:
   npx cypress open

## Test Description
- **`socialConnectPage.js`** contains reusable methods for navigating and interacting with the Social Connect page.
- **`socialConnectTest.cy.js`** imports the page object and runs the tests in a structured way.

## Notes
- The Gmail authentication step might require manual login due to security restrictions.
- E

## Running Headless Mode
npx cypress run --headless

