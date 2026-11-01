'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getCart, getCartTotal, removeFromCart, updateQuantity, type CartItem } from '@/lib/cart';

export default function CartPage() {
  const [items, setItems] = useState<CartItem[]>([]);
  const [total, setTotal] = useState(0);

  const syncCart = () => {
    const nextItems = getCart();
    setItems(nextItems);
    setTotal(getCartTotal());
  };

  useEffect(() => {
    syncCart();
    window.addEventListener('zsound:cart', syncCart);
    return () => window.removeEventListener('zsound:cart', syncCart);
  }, []);

  return (
    <main className="cart-shell">
      <div className="cart-header-row">
        <div>
          <span className="eyebrow">Your bag</span>
          <h1>Shopping cart</h1>
        </div>
        <Link href="/" className="back-link">Continue shopping</Link>
      </div>

      <div className="cart-layout">
        <section className="cart-items-panel">
          {items.length === 0 ? (
            <div className="empty-cart-box">
              <h3>Your cart is empty</h3>
              <p>Pick a few premium pieces to start your collection.</p>
              <Link href="/" className="primary-btn">Browse products</Link>
            </div>
          ) : (
            items.map((item) => (
              <div className="cart-item" key={item.id}>
                <div className="cart-thumb" style={{ backgroundImage: `linear-gradient(135deg, rgba(255,255,255,0.1), rgba(11,18,32,0.7)), url(${item.image})`, backgroundSize: 'cover' }} />
                <div className="cart-copy">
                  <h3>{item.name}</h3>
                  <p>{item.category} • {item.quantity} unit{item.quantity > 1 ? 's' : ''}</p>
                  <div className="cart-actions">
                    <button type="button" className="qty-button" onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                    <span>{item.quantity}</span>
                    <button type="button" className="qty-button" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                    <button type="button" className="text-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
                  </div>
                </div>
                <div className="cart-amount">${(item.price * item.quantity).toFixed(2)}</div>
              </div>
            ))
          )}
        </section>

        <aside className="summary-panel">
          <h2>Summary</h2>
          <div className="summary-line">
            <span>Subtotal</span>
            <strong>${total.toFixed(2)}</strong>
          </div>
          <div className="summary-line">
            <span>Shipping</span>
            <strong>${items.length ? 60 : 0}</strong>
          </div>
          <div className="summary-total">
            <span>Total</span>
            <strong>${(total + (items.length ? 60 : 0)).toFixed(2)}</strong>
          </div>
          <Link href="/checkout" className="primary-btn wide-btn">Checkout</Link>
        </aside>
      </div>
    </main>
  );
}
