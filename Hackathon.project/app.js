<script>
    function renewInsurance() {
  const policyNumber = document.getElementById('policyNumber').value;
  const expirationDate = document.getElementById('expirationDate').value;

  // Perform validation
  if (!policyNumber || !expirationDate) {
    alert('Please fill in all fields for insurance renewal.')
    return;
  }

  // Simulate renewal process (you would replace this with actual backend call)
  alert(`Insurance renewed for Policy Number: ${policyNumber}`);
}

function makePayment() {
  const cardNumber = document.getElementById('cardNumber').value;
  const expiry = document.getElementById('expiry').value;

  // Perform validation
  if (!cardNumber || !expiry) {
    alert('Please fill in all fields for payment.');
    return;
  }

  // Simulate payment process (you would replace this with actual payment gateway)
  alert(`Payment made with Card Number: ${cardNumber}`);
}

</script>

