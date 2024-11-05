let noButton = document.getElementById('noButton');
let yesButton = document.getElementById('yesButton');
let clickCount = 0;

yesButton.addEventListener('click', () => {
    clickCount++;
    noButton.style.fontSize = (16 + clickCount * 2) + 'px'; // Increase size
});

noButton.addEventListener('click', () => {
    // Redirect to second page
    window.location.href = "second.html"; // Ensure secondPage.html exists
});
