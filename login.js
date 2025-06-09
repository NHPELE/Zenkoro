// Front-end login script communicating with the backend

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('login-form');
  const errorEl = document.getElementById('login-error');

  if (form) {
    form.addEventListener('submit', async function (e) {
      e.preventDefault();
      const username = document.getElementById('username').value.trim();
      const password = document.getElementById('password').value.trim();

      try {
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
          const modalEl = document.getElementById('loginModal');
          const modal = bootstrap.Modal.getInstance(modalEl) || new bootstrap.Modal(modalEl);
          modal.hide();
        } else {
          errorEl.classList.remove('d-none');
        }
      } catch (err) {
        console.error(err);
        errorEl.classList.remove('d-none');
      }
    });
  }
});
