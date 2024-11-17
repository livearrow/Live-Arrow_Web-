  document.addEventListener("DOMContentLoaded", function() {
      const hamburger = document.querySelector(".hamburger");
      const navLinks = document.querySelector(".nav-links");

      hamburger.addEventListener("click", function() {
          navLinks.classList.toggle("active");
      });
  });

  document.addEventListener("DOMContentLoaded", () => {
    fetch("https://script.google.com/macros/s/AKfycbzn5Y2sedBKROCXfEf0WCE1G5i7XNv-sFjVPR8MANhtuZwqDViMwQLxom9CdKjEFCYCIw/exec")
        .then(response => response.json())
        .then(products => {
            const gallery = document.querySelector(".product-gallery"); // Select the product gallery container
         
            // Loop through images and generate product cards
            products.forEach(product => {
                // Match: Name_Grade x-y_৳price.extension

                const name = product.Name
                const grade = product.Grade
                const price = `৳${product.Price}`; // Extract and format price
                const card = `
                    <div class="product-card">
                        <img src="${product.imageLink}" alt="${name}" class="product-image">
                        <h3 class="product-name">${name}</h3>
                        <p class="product-grade">Grade: ${grade}</p>
                        <p class="product-price">${price}</p>
                    </div>
                `;
                gallery.innerHTML += card; // Append each card to the gallery
                
            });
        })
        .catch(error => console.error("Error loading products:", error));
});





