// Fetch market data on page load
document.addEventListener('DOMContentLoaded', () => {
    fetch('https://api.coingecko.com/api/v3/simple/price?ids=gold,silver&vs_currencies=usd')
        .then(response => response.json())
        .then(data => {
            document.getElementById('gold-price').textContent = `$${data.gold.usd}`;
            document.getElementById('silver-price').textContent = `$${data.silver.usd}`;
        })
        .catch(error => console.error('Error fetching data:', error));
});

// Handle form submission (basic email simulation)
document.getElementById('share-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('client-email').value;
    const report = document.getElementById('report').value;
    alert(`Report sent to ${email}: ${report}`);
    // In a real app, use a service like EmailJS or backend API for actual sending.
});
