// Simple front-end login script
// In a real application, you would authenticate against a backend.

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('login-form');
  const errorEl = document.getElementById('login-error');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const username = document.getElementById('username').value.trim();
      const password = document.getElementById('password').value.trim();
      // Very basic demo credentials
      if (username === 'user' && password === 'pass123') {
        errorEl.classList.add('d-none');
        alert('Login successful');
        const modalEl = document.getElementById('loginModal');
        const modal = bootstrap.Modal.getInstance(modalEl) || new bootstrap.Modal(modalEl);
        modal.hide();
      } else {
        errorEl.classList.remove('d-none');
      }
    });
  }
});
