const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const addCartButtons = document.querySelectorAll(".add-cart-btn");
const cartCount = document.getElementById("cartCount");
const productSearch = document.getElementById("productSearch");
const searchAction = document.getElementById("searchAction");
const productCards = document.querySelectorAll(".product-card");
const searchBtn = document.getElementById("searchBtn");

let cartTotal = 0;

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

addCartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    cartTotal += 1;
    cartCount.textContent = cartTotal;

    button.textContent = "Added";
    button.style.opacity = "0.8";

    setTimeout(() => {
      button.textContent = "Add to Cart";
      button.style.opacity = "1";
    }, 1000);
  });
});

function filterProducts() {
  const searchValue = productSearch.value.toLowerCase().trim();

  productCards.forEach((card) => {
    const productName = card.dataset.name.toLowerCase();

    if (productName.includes(searchValue)) {
      card.classList.remove("hidden");
    } else {
      card.classList.add("hidden");
    }
  });
}

if (searchAction) {
  searchAction.addEventListener("click", filterProducts);
}

if (productSearch) {
  productSearch.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
      filterProducts();
    }
  });
}

if (searchBtn) {
  searchBtn.addEventListener("click", () => {
    productSearch.focus();
    window.scrollTo({
      top: productSearch.offsetTop - 150,
      behavior: "smooth"
    });
  });
}
