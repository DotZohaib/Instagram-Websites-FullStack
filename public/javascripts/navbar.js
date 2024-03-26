
function toggleNavigation() {
    const barsNavIcon = document.getElementById('bars-nav');
    const removeNavIcon = document.getElementById('remove-nav');
    const nav = document.querySelector('nav');

    // Handle initial display based on screen size
    if (window.innerWidth < 500) {
      barsNavIcon.style.display = 'inline-block';
      removeNavIcon.style.display = 'inline-block';
    } else {
      barsNavIcon.style.display = 'none';
      removeNavIcon.style.display = 'none';
      nav.style.display = 'block'; // Ensure navigation is initially visible on larger screens
    }

    // Toggle navigation visibility on click
    barsNavIcon.addEventListener('click', function () {
      nav.style.display = (nav.style.display === 'none' || nav.style.display === '') ? 'block' : 'none';
    });

    removeNavIcon.addEventListener('click', function () {
      nav.style.display = 'none';
    });
  }

  // Call the function on page load and window resize
  window.addEventListener('load', toggleNavigation);
  window.addEventListener('resize', toggleNavigation);






  // JavaScript for Search Bar
document.addEventListener('DOMContentLoaded', function () {
  var form = document.querySelector('form[action="/search"]');
  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent form submission
      
      // Retrieve the search query
      var searchQuery = form.querySelector('input[name="q"]').value;
      
      // Perform your desired action with the searchQuery, for example:
      console.log("Search query:", searchQuery);
      
      // You can redirect to the search results page by modifying window.location
      // window.location = "/search?q=" + encodeURIComponent(searchQuery);
    });
  }
});
