// JavaScript to add interactivity to the website

// Function to toggle the display of country details
function toggleCountryDetails(event) {
    const countryDetails = event.target.nextElementSibling;
    if (countryDetails.style.display === 'none' || countryDetails.style.display === '') {
        countryDetails.style.display = 'block';
    } else {
        countryDetails.style.display = 'none';
    }
}

// Function to toggle the display of full travel story
function toggleTravelStory(event) {
    const storyContent = event.target.nextElementSibling;
    if (storyContent.style.display === 'none' || storyContent.style.display === '') {
        storyContent.style.display = 'block';
    } else {
        storyContent.style.display = 'none';
    }
}

// Attach event listeners to country titles
document.querySelectorAll('.country h3').forEach(countryTitle => {
    countryTitle.addEventListener('click', toggleCountryDetails);
});

// Attach event listeners to travel story titles
document.querySelectorAll('article h3').forEach(storyTitle => {
    storyTitle.addEventListener('click', toggleTravelStory);
});
