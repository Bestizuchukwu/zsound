const CART_KEY = 'zsound-cart';

export type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  category: string;
};

function notifyCart() {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new Event('zsound:cart'));
  }
}

export function getCart(): CartItem[] {
  if (typeof window === 'undefined') return [];

  try {
    const raw = window.localStorage.getItem(CART_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveCart(items: CartItem[]) {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(CART_KEY, JSON.stringify(items));
  notifyCart();
}

export function addToCart(product: { id: number; name: string; price: number; image: string; category: string }) {
  const cart = getCart();
  const existing = cart.find((item) => item.id === product.id);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
      quantity: 1,
    });
  }

  saveCart(cart);
}

export function updateQuantity(productId: number, quantity: number) {
  const cart = getCart();
  const next = cart
    .map((item) => (item.id === productId ? { ...item, quantity: Math.max(0, quantity) } : item))
    .filter((item) => item.quantity > 0);

  saveCart(next);
}

export function removeFromCart(productId: number) {
  saveCart(getCart().filter((item) => item.id !== productId));
}

export function getCartCount() {
  return getCart().reduce((sum, item) => sum + item.quantity, 0);
}

export function getCartTotal() {
  return getCart().reduce((sum, item) => sum + item.price * item.quantity, 0);
}
