
console.log('script.js loaded');

function scrollToProducts() {
  const el = document.getElementById('products');
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

function subscribe() {
  const emailInput = document.getElementById('email');
  const email = emailInput ? emailInput.value.trim() : '';
  if (!email) {
    alert('Please enter your email');
    return;
  }
  alert('Thanks for subscribing — ' + email);
  if (emailInput) emailInput.value = '';
}
