[![Netlify Status](https://api.netlify.com/api/v1/badges/12612b5b-d607-43eb-998a-267a76a83141/deploy-status)](https://app.netlify.com/sites/nu3/deploys)

### Task

- A product page and a search bar to search and filter products.

### How to test it locally

- Clone the repo by running `git clone https://github.com/fatukunda/e-commerce-product-page.git`
- Install dependencies by running `npm install`
- Run the application by running `npm start`
- Run tests by running `npm run test`
- Get test coverage by running `npm run test:coverage`

### Tasks implemented

- A product page that has the following:-
  - Displays product attributes (Attributes: title, body_html, vendor, images)
  - Displays available variants (Attributes: options, variants)
  - Displays a programmatically generated QR code for the product with the product url.
  - Displays a button to add the product to the cart
- A search bar component that achieves the following:-
  - Sorts products randomly, alphabetically, price high to low and price low to high.

### Technologies & packages used

- [Typescript](https://www.typescriptlang.org/) - Stongly typed language that builds on top of JavaScript
- [React 17](https://reactjs.org/blog/2020/10/20/react-v17.html) - A frontend UI framework
- [Redux Toolkit](https://redux-toolkit.js.org/) - For state management
- [Tailwind](https://tailwindcss.com/) - A utility-first css program
- [Json server](https://www.npmjs.com/package/json-server) - For creating REST API-like server
- [QRCode.React](https://www.npmjs.com/package/qrcode.react) - A package to generate QR code
- [Jest](https://jestjs.io/) & [React testing library](https://testing-library.com/docs/react-testing-library/intro/) - For writing Unit tests
- [Netlify](https://www.netlify.com/) - For hosting the application

## Bonus Features:

- Implemented mobile Responsiveness
- Deployed the project on Netlify.
- Implemented a shopping cart. Adding and deleting products from the shopping cart
