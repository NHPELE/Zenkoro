# ZENKORO

This repository contains a simple landing page for **ZENKORO**.

## Running the Frontend

Open `index.html` in your browser to see the landing page. Styling is provided in `style.css`. The login button links to `login.html`, which uses `login.js` to communicate with the backend. After a successful login you will be redirected to `dashboard.html` where a placeholder portfolio dashboard is displayed. A waitlist form at the bottom of the page lets visitors submit an email for early access.

Developer credentials are preconfigured for testing:

- **Username:** `user`
- **Password:** `1234`

The landing page now supports connecting an Ethereum wallet via MetaMask. Click
the **Connect Wallet** button to trigger MetaMask and grant access to your
address on the Ethereum mainnet.

## Backend Server

A basic Express server (`server.js`) manages logins securely using hashed passwords and JSON Web Tokens.

1. Install dependencies:

```bash
npm install
```

2. Start the server:

```bash
npm start
```

Set `JWT_SECRET` in a `.env` file to override the default development secret.

Run `npm test` to execute the API test suite.

The dashboard lists sample coin holdings and now includes an interactive portfolio chart powered by Chart.js.
