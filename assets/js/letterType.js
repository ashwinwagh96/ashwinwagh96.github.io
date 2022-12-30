// Get the website title element
var titleElement = document.getElementById('website-title');

// Set the initial text of the element to an empty string
titleElement.innerHTML = '';

// Set the text of the element to the desired website title, typing out each letter one at a time
function typeOutTitle(title) {
  // Initialize a counter to keep track of the current position in the title string
  var i = 0;

  // Set the interval at which each letter should be added to the element
  var interval = setInterval(function() {
    // Add the next letter to the element
    titleElement.innerHTML += title[i];

    // Increment the counter
    i++;

    // If we've reached the end of the title, clear the interval
    if (i >= title.length) {
      clearInterval(interval);
    }
  }, 50);  // Change the interval time (in milliseconds) to control the typing speed
}

// Call the typeOutTitle function with your desired website title
typeOutTitle('> Portfolio by Ashwin Wagh');
