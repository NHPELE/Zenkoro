// Trigger MetaMask connection and display the active account
async function connectWallet() {
  if (typeof window.ethereum === 'undefined') {
    alert('MetaMask is not installed. Please install it to continue.');
    return;
  }
  try {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    const account = accounts[0];
    try {
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: '0x1' }]
      });
    } catch (switchErr) {
      console.warn('Network switch failed', switchErr);
    }
    alert('Wallet connected: ' + account);
  } catch (err) {
    console.error('Failed to connect wallet', err);
    alert('Wallet connection failed.');
  }
}

// Initialize sample charts when the page is ready
document.addEventListener('DOMContentLoaded', () => {
  if (window.Chart) {
    const heroCtx = document.getElementById('heroChart');
    if (heroCtx) {
      // Hero preview line chart
      new Chart(heroCtx, {
        type: 'line',
        data: {
          labels: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
          datasets: [{
            data: [10,12,9,14,13,15,16],
            borderColor: '#ffd95e',
            tension: 0.4,
            fill: false
          }]
        },
        options: {
          plugins: { legend: { display: false } },
          scales: { x: { display: false }, y: { display: false } }
        }
      });
    }

    const perfCtx = document.getElementById('performanceChart');
    if (perfCtx) {
      // Portfolio performance chart
      new Chart(perfCtx, {
        type: 'line',
        data: {
          labels: ['1','2','3','4','5','6','7'],
          datasets: [{
            data: [11,13,8,15,14,17,18],
            borderColor: '#ff7f63',
            tension: 0.4,
            fill: false
          }]
        },
        options: { plugins:{legend:{display:false}}, scales:{x:{display:false},y:{display:false}} }
      });
    }

    const allocCtx = document.getElementById('allocationChart');
    if (allocCtx) {
      // Asset allocation pie chart
      new Chart(allocCtx, {
        type: 'pie',
        data: {
          labels: ['ETH','BTC','SOL','SUI'],
          datasets: [{
            data: [40,25,20,15],
            backgroundColor: ['#ffd95e','#ff7f63','#f9b64d','#b87333']
          }]
        },
        options: { plugins: { legend: { position: 'bottom' } } }
      });
    }

    const profitCtx = document.getElementById('profitChart');
    if (profitCtx) {
      // Profit and loss bar chart
      new Chart(profitCtx, {
        type: 'bar',
        data: {
          labels: ['ETH','BTC','SOL','SUI'],
          datasets: [{
            data: [5,-2,3,1],
            backgroundColor: ['#ffd95e','#ff7f63','#f9b64d','#b87333']
          }]
        },
        options: { plugins:{legend:{display:false}}, scales:{x:{grid:{display:false}}, y:{grid:{display:false}}} }
      });
    }

    const portfolioCtx = document.getElementById('portfolioChart');
    if (portfolioCtx) {
      // Dashboard portfolio line chart
      new Chart(portfolioCtx, {
        type: 'line',
        data: {
          labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul'],
          datasets: [{
            label: 'Total Value',
            data: [10,12,11,14,13,15,17],
            borderColor: '#ffd95e',
            tension: 0.4,
            fill: false
          }]
        },
        options: { plugins:{ legend:{ display:false } }, scales:{ x:{ display:false }, y:{ display:false } } }
      });
    }
  }

  const waitlistForm = document.getElementById('waitlist-form');
  if (waitlistForm) {
    waitlistForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('email').value.trim();
      alert('Thanks! We will notify you at ' + email);
      waitlistForm.reset();
    });
  }
}); // end DOMContentLoaded
