// Front-end login script communicating with the backend
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
          if (modalEl) {
            const modal = bootstrap.Modal.getInstance(modalEl) || new bootstrap.Modal(modalEl);
            modal.hide();
          } else if (window.location.pathname.endsWith('login.html')) {
            window.location.href = 'dashboard.html';
          }
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