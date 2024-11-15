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
            const gallery = document.querySelector(".product-gallery");
            images.forEach(image => {
                const match = image.match(/(.+)_\$(\d+\.\d{2})/);
                if (match) {
                    const name = match[1].replace(/_/g, " ");
                    const price = `$${match[2]}`;
                    const card = `
                        <div class="product-card">
                            <img src="product-images/${image}" alt="${name}" class="product-image">
                            <h3 class="product-name">${name}</h3>
                            <p class="product-price">${price}</p>
                        </div>
                    `;
                    gallery.innerHTML += card;
                }
            });
        })
        .catch(error => console.error("Error loading products:", error));
});



