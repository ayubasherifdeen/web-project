 	// Wait for the DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Get the search input and all image containers
  const searchInput = document.getElementById("searchInput");
  const images = document.querySelectorAll(".image");

  // Add an event listener to detect input changes
  searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value.toLowerCase().trim(); // Get the input value in lowercase

    // Iterate over all images and filter based on their data-name attribute
    images.forEach(image => {
      const imageName = image.dataset.name.toLowerCase(); // Get the data-name attribute in lowercase
      if (imageName.includes(searchTerm)) {
        image.style.display = "block"; // Show images that match the search term
      } else {
				image.style.display = "none"; // Hide images that do not match
      }
    });
  });
});