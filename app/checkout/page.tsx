import Link from 'next/link';

export default function CheckoutPage() {
  const orderTotal = 2999;

  return (
    <main className="checkout-shell">
      <div className="checkout-header">
        <Link href="/cart" className="back-link">← Back to cart</Link>
        <h1>Secure checkout</h1>
      </div>

      <div className="checkout-layout">
        <section className="checkout-form-panel">
          <div className="form-block">
            <h2>Shipping details</h2>
            <div className="field-grid">
              <label>
                Full name
                <input type="text" placeholder="Your name" defaultValue="Ava Thompson" />
              </label>
              <label>
                Email
                <input type="email" placeholder="you@example.com" defaultValue="ava@example.com" />
              </label>
              <label className="full-width">
                Address
                <input type="text" placeholder="Street address" defaultValue="24 Riverside Avenue" />
              </label>
              <label>
                City
                <input type="text" placeholder="City" defaultValue="Los Angeles" />
              </label>
              <label>
                ZIP code
                <input type="text" placeholder="ZIP code" defaultValue="90001" />
              </label>
            </div>
          </div>

          <div className="form-block">
            <h2>Payment</h2>
            <label>
              Card number
              <input type="text" placeholder="•••• •••• •••• ••••" defaultValue="4242 4242 4242 4242" />
            </label>
            <div className="field-grid small-grid">
              <label>
                Expiry
                <input type="text" placeholder="MM/YY" defaultValue="08/29" />
              </label>
              <label>
                CVV
                <input type="text" placeholder="CVV" defaultValue="202" />
              </label>
            </div>
          </div>
        </section>

        <aside className="summary-panel">
          <h2>Order summary</h2>
          <div className="summary-line">
            <span>Subtotal</span>
            <strong>$2,699</strong>
          </div>
          <div className="summary-line">
            <span>Shipping</span>
            <strong>$120</strong>
          </div>
          <div className="summary-line">
            <span>Warranty</span>
            <strong>$180</strong>
          </div>
          <div className="summary-total">
            <span>Total</span>
            <strong>${orderTotal.toLocaleString()}</strong>
          </div>
          <button type="button" className="primary-btn wide-btn">Pay now</button>
        </aside>
      </div>
    </main>
  );
}
