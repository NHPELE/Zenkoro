# ZENKORO

This repository contains a simple landing page for **ZENKORO**.

## Running the Frontend

Open `index.html` in your browser to see the page. Styling is provided in `style.css`. The page includes a login modal handled by `login.js`.

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
