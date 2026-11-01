import Link from 'next/link';
import Image from 'next/image';
import { products } from '@/lib/data';

export function ProductCard({ product }: { product: (typeof products)[number] }) {
  return (
    <article className="product-card">
      <div className="product-image-wrap">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="product-image"
        />
        <span className="product-pill">{product.badge}</span>
      </div>

      <div className="product-copy">
        <div className="product-header">
          <span className="product-category">{product.category}</span>
          <span className="product-rating">★ {product.rating}</span>
        </div>
        <Link href={`/product/${product.id}`} className="product-name-link">
          {product.name}
        </Link>
        <div className="product-meta">
          <div className="price-block">
            <strong>${product.price}</strong>
            <span>${product.oldPrice}</span>
          </div>
          <Link href={`/product/${product.id}`} className="mini-btn">View</Link>
        </div>
      </div>
    </article>
  );
}
