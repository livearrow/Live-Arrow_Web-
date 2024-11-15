  document.addEventListener("DOMContentLoaded", function() {
      const hamburger = document.querySelector(".hamburger");
      const navLinks = document.querySelector(".nav-links");

      hamburger.addEventListener("click", function() {
          navLinks.classList.toggle("active");
      });
  });

  document.addEventListener("DOMContentLoaded", () => {
    fetch("products.json")
        .then(response => response.json())
        .then(images => {
            const gallery = document.querySelector(".product-gallery"); // Select the product gallery container
            
            
            
            // Loop through images and generate product cards
            images.forEach(image => {
                // Match: Name_Grade x-y_৳price.extension
                const match = image.match(/(.+)_Grade (\d+-\d+)_৳(\d+\.\d{2})/);
                if (match) {
                    const name = match[1].replace(/_/g, " "); // Replace underscores with spaces
                    const grade = match[2].replace("-", ":"); // Replace dash with colon for display
                    const price = `৳${match[3]}`; // Extract and format price
                    const card = `
                        <div class="product-card">
                            <img src="product-images/${image}" alt="${name}" class="product-image">
                            <h3 class="product-name">${name}</h3>
                            <p class="product-grade">Grade: ${grade}</p>
                            <p class="product-price">${price}</p>
                        </div>
                    `;
                    gallery.innerHTML += card; // Append each card to the gallery
                }
            });
        })
        .catch(error => console.error("Error loading products:", error));
});





