# ZENKORO

This repository contains a simple landing page for **ZENKORO**.

## Running the Frontend

Open `index.html` in your browser to see the page. Styling is provided in `style.css`. The page includes a login modal handled by `login.js`.

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
