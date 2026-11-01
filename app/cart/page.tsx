import Link from 'next/link';

export default function CartPage() {
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
          <div className="cart-item">
            <div className="cart-thumb thumb-guitar" />
            <div className="cart-copy">
              <h3>Aster Elite Guitar</h3>
              <p>Black lacquer finish • 1 unit</p>
            </div>
            <div className="cart-amount">$1,299</div>
          </div>

          <div className="cart-item">
            <div className="cart-thumb thumb-headphones" />
            <div className="cart-copy">
              <h3>Pulse Studio Headphones</h3>
              <p>Graphite • 1 unit</p>
            </div>
            <div className="cart-amount">$399</div>
          </div>
        </section>

        <aside className="summary-panel">
          <h2>Summary</h2>
          <div className="summary-line">
            <span>Subtotal</span>
            <strong>$1,698</strong>
          </div>
          <div className="summary-line">
            <span>Shipping</span>
            <strong>$60</strong>
          </div>
          <div className="summary-total">
            <span>Total</span>
            <strong>$1,758</strong>
          </div>
          <Link href="/checkout" className="primary-btn wide-btn">Checkout</Link>
        </aside>
      </div>
    </main>
  );
}
