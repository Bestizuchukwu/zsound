import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Product | ZSOUND',
};

const product = {
  id: 1,
  name: 'Aster Elite Guitar',
  price: 1299,
  oldPrice: 1599,
  rating: 4.9,
  badge: 'Best Seller',
  description:
    'Premium alder body, satin-finished neck, precision pickups, and a warm tone designed for stage-ready performance.',
  specs: ['Mahogany body', 'HSS pickups', '24.75" scale', '7.5 lb'],
  image:
    'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1200&q=80',
};

export default function ProductPage() {
  return (
    <main className="product-shell">
      <div className="product-back">
        <Link href="/" className="back-link">← Back to shop</Link>
      </div>

      <div className="product-layout">
        <div className="product-image-panel">
          <div className="product-spotlight">
            <img src={product.image} alt={product.name} />
          </div>
        </div>

        <div className="product-details">
          <span className="product-pill product-pill-large">{product.badge}</span>
          <h1>{product.name}</h1>
          <div className="rating-line">★ {product.rating} / 5 • 180 reviews</div>
          <div className="price-line">
            <strong>${product.price}</strong>
            <span>${product.oldPrice}</span>
          </div>

          <p className="product-description">{product.description}</p>

          <div className="specs-list">
            {product.specs.map((spec) => (
              <span key={spec}>{spec}</span>
            ))}
          </div>

          <div className="purchase-actions">
            <button type="button" className="primary-btn">Add to cart</button>
            <Link href="/checkout" className="secondary-btn">Buy now</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
