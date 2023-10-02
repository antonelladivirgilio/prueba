# Currency Exchange Calculator

You can see the app working on https://currency-exchange-ppi.netlify.app/

## Table of Contents
1. Installation and Setup Instructions
2. Run the E2E tests
    * Running E2E tests with the cypress interface
    * Running E2E test in the terminal
3. Run Build

## Installation and Setup Instructions
1. Clone the repo `git clone https://github.com/antonelladivirgilio/prueba`
2. Run in your terminal `cd prueba` to enter the project folder
3. Use the package manager script to install the dependencies `npm install` or `npm i`
4. Start the development server `npm run dev`  
5. Visit the App `http://localhost:5173/`  

## Running E2E Test
**_NOTE:_** it is important to have the app running on localhost to run the E2E tests

1. Start the development server `npm run dev`
2. You have two options: 
    * Run the tests with the cypress interface or 
    * Run the tests in the terminal
    
### Running E2E tests with the cypress interface
1. Run the script `npm run cy:open` to open the Cypress interface. After the interface is open. You will be able to select the browser in which you want to run the tests.

    There are 5 browser options to run the test:
    * Chrome
    * Edge
    * Firefox
    * Electron
    * Webkit (to check IOS Support)
    
2. Select one option and wait for the test to be completed

### Running E2E test in the terminal
1. There are 3 scripts to run the tests in the terminal and each script runs the tests for the different browsers

    * for Chrome: `npm run cy:run:chrome`
    * for Firefox: `npm run cy:run:firefox`
    * for Webkit (IOS Support): `npm run cy:run:webkit`

2. Run one script and wait for the test to be completed

## Run Build
1. Run the script `npm run build`  to create the production version
2. Run the script `npm run preview` to see the version ready to upload to production
3. Go to http://localhost:4173/ to see the application running in the browser
