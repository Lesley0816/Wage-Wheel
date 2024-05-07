const button = document.getElementById('signUp');
const popUp = document.getElementById('popUp');
const closeButton = document.getElementById('closeButton');
const overlay = document.getElementById('overlay');

button.onclick = (event) => {
    event.preventDefault();
    popUp.style.display = 'block';
    overlay.style.display = 'block'; // Show the overlay
};

closeButton.onclick = (event) => {
    event.preventDefault();
    popUp.style.display = 'none';
    overlay.style.display = 'none'; // Hide the overlay
};
