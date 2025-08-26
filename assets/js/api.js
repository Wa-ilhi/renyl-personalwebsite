  // Get the saved visitor count from localStorage
  let visitorCount = localStorage.getItem("visitorCount");

  // If it's not set yet, initialize it to 0
  if (!visitorCount) {
    visitorCount = 0;
  }

  // Increment the count
  visitorCount++;

  // Save the new count back to localStorage
  localStorage.setItem("visitorCount", visitorCount);

  // Display the count in the footer
  document.getElementById("visitors").textContent = visitorCount;