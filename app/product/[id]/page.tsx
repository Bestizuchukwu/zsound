import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { products } from '@/lib/data';
import { addToCart } from '@/lib/cart';

export const metadata: Metadata = {
  title: 'Product | ZSOUND',
};

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((item) => item.id === Number(params.id));

  if (!product) {
    notFound();
  }

  return (
    <main className="product-shell">
      <div className="product-back">
        <Link href="/" className="back-link">← Back to shop</Link>
      </div>

      <div className="product-layout">
        <div className="product-image-panel">
          <div className="product-spotlight">
            <img src={product.gallery[0]} alt={product.name} />
          </div>
          <div className="gallery-row">
            {product.gallery.map((image, index) => (
              <div key={`${product.id}-${index}`} className="gallery-thumb">
                <img src={image} alt={`${product.name} view ${index + 1}`} />
              </div>
            ))}
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
            <button type="button" className="primary-btn" onClick={() => addToCart(product)}>
              Add to cart
            </button>
            <Link href="/checkout" className="secondary-btn">Buy now</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
