/**
 *
 * @param {{
 *  Name: string;
 *  Grade: string;
 *  Price: number;
 *  imageLink: string;
 * }[]} products
 */
function renderProducts(products) {
  const gallery = document.querySelector(".product-gallery"); // Select the product gallery container
  products.forEach((product) => {
    const name = product.Name;
    const grade = product.Grade;
    const price = `৳${product.Price}`; // Extract and format price
    const card = `
      <div class="product-card">
        <img src="${product.imageLink}" alt="${name}" class="product-image">
        <h3 class="product-name">${name}</h3>
        <p class="product-grade">Grade: ${grade}</p>
        <p class="product-price">${price}</p>
      </div>
    `;
    gallery.insertAdjacentHTML("beforeend", card); // Append each card to the gallery
  });
}

function fetchProducts() {
  fetch(
    "https://script.google.com/macros/s/AKfycbzn5Y2sedBKROCXfEf0WCE1G5i7XNv-sFjVPR8MANhtuZwqDViMwQLxom9CdKjEFCYCIw/exec"
  )
    .then((response) => response.json())
    .then((products) => {
      localStorage.setItem(
        "products-cache",
        JSON.stringify({
          products,
          updatedAt: new Date(),
        })
      );
      renderProducts(products);
    });
}

document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  hamburger.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });

  try {
    const productsCache = JSON.parse(localStorage.getItem("products-cache"));
    if (
      productsCache &&
      Date.now() - Date.parse(productsCache.updatedAt) <= 3e5
    ) {
      renderProducts(productsCache.products);
    } else {
      fetchProducts();
    }
  } catch (error) {
    console.error("Error loading products:", error);
    fetchProducts();
  }
});
