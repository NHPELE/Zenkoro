// Basic login form submission handler
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('login-form');
  const errorEl = document.getElementById('login-error');

  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    try {
      // POST credentials to server and store token on success
      const resp = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });
      const data = await resp.json();
      if (resp.ok) {
        errorEl.classList.add('d-none');
        localStorage.setItem('token', data.token);
        alert('Login successful');
        if (window.location.pathname.endsWith('login.html')) {
          window.location.href = 'dashboard.html';
        }
      } else {
        errorEl.classList.remove('d-none');
      }
    } catch (err) {
      console.error(err);
      // Show generic error message
      errorEl.classList.remove('d-none');
    }
  });
});
