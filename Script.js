// Move the Tipulator box to the right by 500px
document.getElementById('rightButton').addEventListener('click', function () {
  const tipulatorWrapper = document.getElementById('tipulator-wrapper');
  tipulatorWrapper.style.transition = "transform 0.5s"; // Add smooth transition for movement
  tipulatorWrapper.style.transform = 'translateX(500px)';
});

// Move the Tipulator box back to its original position
document.getElementById('leftButton').addEventListener('click', function () {
  const tipulatorWrapper = document.getElementById('tipulator-wrapper');
  tipulatorWrapper.style.transition = "transform 0.5s"; // Smooth transition for reset
  tipulatorWrapper.style.transform = 'translateX(0)';
});

// Close the page and display a thank you message
document.getElementById('closeButton').addEventListener('click', function () {
  document.body.innerHTML = '<h1>Thank you for using the tipulator</h1>';
});

// Form validation and tip calculation logic
document.getElementById('tipForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevents form from refreshing

  const ratingInput = document.getElementById('serviceRating');
  const feedback = document.getElementById('serviceRatingFeedback');
  const rating = ratingInput.value.trim().toLowerCase();

  const billTotal = parseFloat(document.getElementById('billTotal').value);
  const numPaying = parseInt(document.getElementById('numPaying').value);

  const validRatings = ['poor', 'good', 'excellent'];

  // Validate service rating input
  if (!validRatings.includes(rating)) {
    feedback.textContent = 'Please enter "poor", "good", or "excellent".';
    feedback.style.color = 'red';
  } else {
    feedback.textContent = ''; // Clear feedback if valid rating

    // Calculate the tip based on service rating
    let tipPercentage = 0;
    if (rating === 'excellent') {
      tipPercentage = 0.20; // 20% tip
    } else if (rating === 'good') {
      tipPercentage = 0.10; // 10% tip
    } else if (rating === 'poor') {
      tipPercentage = 0; // No tip
    }

    // Calculate the total tip and total amount with tip
    const tipAmount = billTotal * tipPercentage;
    const totalWithTip = billTotal + tipAmount;

    // Calculate the amount each person pays
    const perPerson = totalWithTip / numPaying;

    // Display the results
    document.getElementById('totalWithTip').textContent = `$${totalWithTip.toFixed(2)}`;
    document.getElementById('perPerson').textContent = `$${perPerson.toFixed(2)}`;

    // Make the results visible
    document.getElementById('results').classList.remove('hidden');
  }
});
