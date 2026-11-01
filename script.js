const products = [
  {
    id: 1,
    name: "Aster Acoustic Guitar",
    category: "guitar",
    price: 299,
    oldPrice: 399,
    rating: 4.9,
    tag: "Best Seller",
  },
  {
    id: 2,
    name: "Nova Stage Piano",
    category: "keyboard",
    price: 899,
    oldPrice: 1099,
    rating: 4.8,
    tag: "Pro",
  },
  {
    id: 3,
    name: "Rhythm Drum Kit",
    category: "drums",
    price: 649,
    oldPrice: 799,
    rating: 4.7,
    tag: "New",
  },
  {
    id: 4,
    name: "Pulse Studio Headset",
    category: "audio",
    price: 149,
    oldPrice: 199,
    rating: 4.9,
    tag: "Hot",
  },
  {
    id: 5,
    name: "Velvet Electric Guitar",
    category: "guitar",
    price: 579,
    oldPrice: 699,
    rating: 4.8,
    tag: "Featured",
  },
  {
    id: 6,
    name: "Echo Synth Keyboard",
    category: "keyboard",
    price: 759,
    oldPrice: 899,
    rating: 4.7,
    tag: "Studio",
  },
  {
    id: 7,
    name: "Pulse Percussion Set",
    category: "drums",
    price: 499,
    oldPrice: 629,
    rating: 4.6,
    tag: "Popular",
  },
  {
    id: 8,
    name: "Mono Wireless Mic",
    category: "audio",
    price: 189,
    oldPrice: 239,
    rating: 4.9,
    tag: "Audio",
  },
];

const cart = [];
const productGrid = document.getElementById("productGrid");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const cartCount = document.getElementById("cartCount");
const cartPanel = document.getElementById("cartPanel");
const cartToggle = document.getElementById("cartToggle");
const closeCart = document.querySelector(".close-cart");
const chips = document.querySelectorAll(".chip");

function renderProducts(filter = "all") {
  const visibleProducts =
    filter === "all" ? products : products.filter((product) => product.category === filter);

  productGrid.innerHTML = visibleProducts
    .map(
      (product) => `
        <article class="product-card">
          <div class="product-visual ${product.category}"></div>
          <div class="product-body">
            <div class="product-topline">
              <span class="product-category">${product.category}</span>
              <span class="product-rating">★ ${product.rating}</span>
            </div>
            <h3 class="product-title">${product.name}</h3>
            <div class="product-price-row">
              <div>
                <div class="product-price">$${product.price}</div>
                <div class="product-old-price">$${product.oldPrice}</div>
              </div>
              <button class="add-cart-btn" data-id="${product.id}">Add</button>
            </div>
          </div>
        </article>
      `
    )
    .join("");

  document.querySelectorAll(".add-cart-btn").forEach((button) => {
    button.addEventListener("click", () => addToCart(Number(button.dataset.id)));
  });
}

function addToCart(productId) {
  const product = products.find((item) => item.id === productId);
  if (!product) return;

  const existingItem = cart.find((item) => item.id === productId);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  renderCart();
}

function renderCart() {
  if (!cart.length) {
    cartItems.innerHTML = '<p class="empty-cart">Your cart is empty.</p>';
    cartTotal.textContent = "$0.00";
    cartCount.textContent = "0";
    return;
  }

  cartItems.innerHTML = cart
    .map(
      (item) => `
        <div class="cart-item">
          <div>
            <div class="name">${item.name}</div>
            <div class="qty">Qty: ${item.quantity}</div>
          </div>
          <div class="total">$${(item.price * item.quantity).toFixed(2)}</div>
        </div>
      `
    )
    .join("");

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  cartTotal.textContent = `$${subtotal.toFixed(2)}`;
  cartCount.textContent = String(cart.reduce((sum, item) => sum + item.quantity, 0));
}

chips.forEach((chip) => {
  chip.addEventListener("click", () => {
    chips.forEach((item) => item.classList.remove("active"));
    chip.classList.add("active");
    renderProducts(chip.dataset.filter);
  });
});

cartToggle.addEventListener("click", () => {
  cartPanel.classList.add("open");
});

closeCart.addEventListener("click", () => {
  cartPanel.classList.remove("open");
});

renderProducts();
renderCart();
