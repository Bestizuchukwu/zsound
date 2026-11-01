import Link from 'next/link';
import { ProductCard } from '@/components/ProductCard';
import { products, type Product } from '@/lib/data';
import { addToCart, getCartCount } from '@/lib/cart';
import { useEffect, useMemo, useState } from 'react';

const categories = ['All', 'Guitar', 'Keyboard', 'Drums', 'Audio'] as const;

export function StorefrontClient() {
  const [selectedCategory, setSelectedCategory] = useState<(typeof categories)[number]>('All');
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const syncCartCount = () => setCartCount(getCartCount());
    syncCartCount();
    window.addEventListener('zsound:cart', syncCartCount);

    return () => window.removeEventListener('zsound:cart', syncCartCount);
  }, []);

  const visibleProducts = useMemo(() => {
    if (selectedCategory === 'All') return products;
    return products.filter((product) => product.category === selectedCategory);
  }, [selectedCategory]);

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    setCartCount(getCartCount());
  };

  return (
    <main className="page-shell">
      <header className="topbar">
        <div className="brand-block">
          <div className="brand-mark">ZS</div>
          <div>
            <p className="brand-name">ZSOUND</p>
            <p className="brand-subtitle">Luxury Music House</p>
          </div>
        </div>

        <nav className="nav">
          <Link href="/">Home</Link>
          <Link href="/#shop">Shop</Link>
          <Link href="/#collections">Collections</Link>
          <Link href="/checkout">Checkout</Link>
        </nav>

        <Link href="/cart" className="cart-link">
          Cart ({cartCount})
        </Link>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow">Curated for creators</span>
          <h1>Find the sound that defines your artistry.</h1>
          <p>
            Discover premium guitars, keyboards, drums, and studio gear crafted for
            musicians who demand performance, comfort, and presence.
          </p>
          <div className="hero-actions">
            <Link href="/#shop" className="primary-btn">Shop instruments</Link>
            <Link href="/#collections" className="secondary-btn">Explore collections</Link>
          </div>
          <div className="stats-row">
            <div>
              <strong>2.5k+</strong>
              <span>happy musicians</span>
            </div>
            <div>
              <strong>4.9/5</strong>
              <span>average rating</span>
            </div>
            <div>
              <strong>48h</strong>
              <span>fast delivery</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-card accent-one">
            <div className="guitar-figure" aria-label="Featured electric guitar" />
            <div className="floating-badge">Best Seller</div>
          </div>
        </div>
      </section>

      <section className="promo-band">
        <div>
          <span className="promo-tag">Limited offer</span>
          <p>Up to 30% off premium studio essentials this week.</p>
        </div>
        <button type="button">Claim deal</button>
      </section>

      <section id="collections" className="collections">
        <div className="section-heading">
          <span className="eyebrow">Built for every stage</span>
          <h2>Shop by performance style</h2>
        </div>

        <div className="category-grid">
          <div className="feature-card guitar">
            <span>Electric</span>
            <h3>Guitars</h3>
          </div>
          <div className="feature-card keys">
            <span>Expressive</span>
            <h3>Keyboards</h3>
          </div>
          <div className="feature-card drums">
            <span>Power</span>
            <h3>Drums</h3>
          </div>
          <div className="feature-card audio">
            <span>Immersive</span>
            <h3>Audio</h3>
          </div>
        </div>
      </section>

      <section id="shop" className="shop-section">
        <div className="section-heading row">
          <div>
            <span className="eyebrow">Featured gear</span>
            <h2>Curated essentials</h2>
          </div>
          <div className="filter-row">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={`filter-pill ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="product-grid">
          {visibleProducts.map((product) => (
            <ProductCard key={product.id} product={product} onAdd={handleAddToCart} />
          ))}
        </div>
      </section>
    </main>
  );
}
