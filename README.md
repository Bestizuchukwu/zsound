html {
  scroll-behavior: smooth;
}

:root {
  --bg: #090d16;
  --bg-elevated: #101827;
  --panel: rgba(18, 26, 39, 0.88);
  --panel-strong: #111c2d;
  --text: #ecf3ff;
  --muted: #aac0dd;
  --line: rgba(255, 255, 255, 0.08);
  --gold: #f9d77e;
  --gold-strong: #e8b74c;
  --cyan: #64f3d7;
  --shadow: rgba(0, 0, 0, 0.35);
}

* { box-sizing: border-box; }

body {
  margin: 0;
  min-height: 100vh;
  background:
    radial-gradient(circle at top, rgba(100, 243, 215, 0.15), transparent 26%),
    linear-gradient(180deg, #090d16 0%, #0d1323 30%, #0a0e19 100%);
  color: var(--text);
  font-family: Arial, Helvetica, sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
}

button,
input {
  font: inherit;
}

img {
  max-width: 100%;
  display: block;
}

.page-shell,
.checkout-shell,
.cart-shell,
.product-shell {
  width: min(1200px, calc(100% - 32px));
  margin: 0 auto;
  padding: 20px 0 80px;
}

.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 18px 20px;
  background: rgba(16, 24, 39, 0.7);
  border: 1px solid var(--line);
  border-radius: 20px;
  backdrop-filter: blur(14px);
  position: sticky;
  top: 12px;
  z-index: 10;
}

.brand-block {
  display: flex;
  align-items: center;
  gap: 12px;
}

.brand-mark {
  width: 44px;
  height: 44px;
  border-radius: 14px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, var(--cyan), var(--gold));
  color: #0b1220;
  font-weight: 900;
  letter-spacing: 0.06em;
}

.brand-name {
  margin: 0;
  font-weight: 800;
  letter-spacing: 0.16em;
}

.brand-subtitle {
  margin: 0;
  color: var(--muted);
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.nav {
  display: flex;
  align-items: center;
  gap: 18px;
  color: var(--muted);
  font-size: 14px;
}

.nav a:hover,
.text-link:hover,
.back-link:hover {
  color: var(--text);
}

.cart-link,
.primary-btn,
.secondary-btn,
.mini-btn,
.text-link,
.back-link {
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.cart-link,
.primary-btn,
.secondary-btn,
.mini-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  font-weight: 700;
}

.cart-link {
  padding: 10px 16px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--line);
}

.primary-btn,
.secondary-btn,
.mini-btn {
  padding: 12px 18px;
  border: 1px solid transparent;
}

.primary-btn {
  background: linear-gradient(135deg, var(--gold), var(--gold-strong));
  color: #0a0e19;
  box-shadow: 0 12px 24px rgba(233, 183, 76, 0.25);
}

.secondary-btn {
  background: rgba(255, 255, 255, 0.02);
  border-color: var(--line);
  color: var(--text);
}

.mini-btn {
  padding: 9px 12px;
  background: rgba(100, 243, 215, 0.08);
  border-color: rgba(100, 243, 215, 0.2);
  color: var(--cyan);
}

.hero {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 28px;
  margin-top: 30px;
  align-items: center;
  padding: 30px;
  background: linear-gradient(135deg, rgba(16, 24, 39, 0.88), rgba(18, 39, 43, 0.9));
  border: 1px solid var(--line);
  border-radius: 28px;
  box-shadow: 0 28px 50px var(--shadow);
}

.eyebrow {
  display: inline-block;
  margin-bottom: 16px;
  color: var(--cyan);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 11px;
  font-weight: 700;
}

.hero-copy h1,
.section-heading h2,
.checkout-header h1,
.cart-header-row h1,
.product-details h1 {
  margin: 0 0 12px;
  line-height: 1.05;
}

.hero-copy h1 {
  font-size: clamp(2.6rem, 5vw, 5rem);
  letter-spacing: -0.04em;
}

.hero-copy p {
  margin: 0;
  max-width: 600px;
  color: var(--muted);
  font-size: 1.05rem;
  line-height: 1.7;
}

.hero-actions {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-top: 24px;
  flex-wrap: wrap;
}

.stats-row {
  display: flex;
  gap: 26px;
  flex-wrap: wrap;
  margin-top: 24px;
}

.stats-row div {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.stats-row strong {
  font-size: 1.5rem;
}

.stats-row span {
  color: var(--muted);
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.hero-visual {
  display: flex;
  justify-content: center;
}

.visual-card {
  position: relative;
  width: min(100%, 420px);
  height: 420px;
  border-radius: 30px;
  background: linear-gradient(180deg, rgba(255,255,255,.06), rgba(255,255,255,.02));
  border: 1px solid var(--line);
  display: grid;
  place-items: center;
  overflow: hidden;
}

.accent-one {
  background: radial-gradient(circle at 30% 20%, rgba(100,243,215,.28), transparent 18%),
              linear-gradient(160deg, rgba(20,30,44,.9), rgba(16,24,35,.8));
}

.guitar-figure {
  position: relative;
  width: 270px;
  height: 180px;
  border-radius: 40px 40px 20px 20px;
  background: linear-gradient(135deg, #4f8cff 0%, #111827 25%, #f4b95f 100%);
  box-shadow: inset 0 0 0 12px rgba(255,255,255,.16);
  transform: rotate(-11deg);
}

.guitar-figure::before {
  content: "";
  position: absolute;
  inset: 32px 15px 32px 15px;
  border-radius: 30px;
  background: rgba(255,255,255,.1);
}

.guitar-figure::after {
  content: "";
  position: absolute;
  width: 180px;
  height: 20px;
  border-radius: 999px;
  background: rgba(15, 21, 28, 0.7);
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.floating-badge {
  position: absolute;
  top: 20px;
  right: 20px;
  background: rgba(249, 215, 126, 0.12);
  border: 1px solid rgba(249, 215, 126, 0.35);
  color: var(--gold);
  border-radius: 999px;
  padding: 8px 12px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.promo-band {
  margin-top: 28px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  background: linear-gradient(135deg, rgba(249, 215, 126, 0.08), rgba(100, 243, 215, 0.08));
  border: 1px solid rgba(249, 215, 126, 0.25);
  border-radius: 18px;
  padding: 16px 20px;
}

.promo-tag {
  color: var(--gold);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 11px;
  font-weight: 700;
}

.promo-band p {
  margin: 6px 0 0;
  font-weight: 600;
}

.promo-band button {
  border: none;
  background: linear-gradient(135deg, var(--gold), var(--gold-strong));
  color: #0d1321;
  padding: 12px 16px;
  border-radius: 999px;
  font-weight: 800;
}

.collections,
.shop-section {
  margin-top: 36px;
}

.section-heading {
  margin-bottom: 18px;
}

.row {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 14px;
  flex-wrap: wrap;
}

.section-heading h2 {
  font-size: clamp(2rem, 4vw, 3rem);
}

.category-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;
}

.feature-card {
  padding: 24px 18px;
  min-height: 180px;
  border-radius: 22px;
  border: 1px solid var(--line);
  display: flex;
  flex-direction: column;
  justify-content: end;
  position: relative;
  overflow: hidden;
}

.feature-card::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent, rgba(10,15,24,.4));
}

.feature-card span,
.feature-card h3 {
  position: relative;
  z-index: 1;
}

.feature-card span {
  color: rgba(236, 243, 255, 0.75);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 10px;
}

.feature-card h3 {
  margin: 8px 0 0;
  font-size: 2rem;
}

.feature-card.guitar {
  background: linear-gradient(135deg, rgba(109, 135, 255, 0.38), rgba(20, 24, 35, 0.9));
}

.feature-card.keys {
  background: linear-gradient(135deg, rgba(100, 243, 215, 0.36), rgba(20, 24, 35, 0.9));
}

.feature-card.drums {
  background: linear-gradient(135deg, rgba(249, 215, 126, 0.3), rgba(20, 24, 35, 0.9));
}

.feature-card.audio {
  background: linear-gradient(135deg, rgba(214, 120, 255, 0.3), rgba(20, 24, 35, 0.9));
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

.product-card {
  background: rgba(16,24,39,.7);
  border: 1px solid var(--line);
  border-radius: 22px;
  overflow: hidden;
  box-shadow: 0 16px 32px rgba(0,0,0,.18);
}

.product-image-wrap {
  position: relative;
  height: 240px;
  background: #0a101a;
}

.product-image {
  object-fit: cover;
}

.product-pill {
  position: absolute;
  top: 14px;
  left: 14px;
  padding: 7px 10px;
  background: rgba(11, 18, 32, 0.6);
  border: 1px solid rgba(255,255,255,.1);
  border-radius: 999px;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--gold);
}

.product-copy {
  padding: 16px;
}

.product-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  color: var(--muted);
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
}

.product-name-link {
  display: block;
  margin-top: 12px;
  font-size: 1.45rem;
  font-weight: 700;
}

.product-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-top: 16px;
}

.price-block {
  display: flex;
  align-items: baseline;
  gap: 10px;
}

.price-block strong {
  font-size: 1.5rem;
}

.price-block span {
  color: var(--muted);
  text-decoration: line-through;
}

.text-link,
.back-link {
  color: var(--muted);
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.checkout-header,
.cart-header-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 24px;
}

.checkout-layout,
.cart-layout,
.product-layout {
  display: grid;
  grid-template-columns: 1.3fr 0.7fr;
  gap: 22px;
}

.checkout-form-panel,
.summary-panel,
.cart-items-panel,
.product-image-panel,
.product-details {
  background: rgba(16,24,39,.7);
  border: 1px solid var(--line);
  border-radius: 22px;
  padding: 22px;
}

.form-block + .form-block {
  margin-top: 22px;
}

.form-block h2,
.summary-panel h2 {
  margin: 0 0 18px;
  font-size: 1.3rem;
}

.field-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
}

.full-width {
  grid-column: 1 / -1;
}

label {
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: var(--muted);
  font-size: 0.8rem;
}

input {
  height: 48px;
  border-radius: 12px;
  border: 1px solid var(--line);
  background: rgba(255,255,255,.02);
  padding: 0 14px;
  color: var(--text);
}

.summary-panel {
  align-self: start;
}

.summary-line,
.summary-total {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 10px 0;
  border-bottom: 1px solid var(--line);
  color: var(--muted);
}

.summary-total {
  border-bottom: none;
  margin: 10px 0 18px;
  color: var(--text);
  font-size: 1.1rem;
}

.wide-btn {
  width: 100%;
  justify-content: center;
  border: none;
}

.cart-items-panel {
  display: grid;
  gap: 16px;
}

.cart-item {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 12px;
  border: 1px solid var(--line);
  border-radius: 16px;
  background: rgba(255,255,255,.02);
}

.cart-thumb {
  width: 96px;
  height: 96px;
  border-radius: 14px;
  background: linear-gradient(135deg, rgba(255,255,255,.08), rgba(255,255,255,.02));
}

.thumb-guitar {
  background: linear-gradient(135deg, #2d4a96, #111827 45%, #f9d77e 100%);
}

.thumb-headphones {
  background: linear-gradient(135deg, #64f3d7, #111827 50%, #c89bff 100%);
}

.cart-copy h3 {
  margin: 0;
  font-size: 1.1rem;
}

.cart-copy p {
  margin: 8px 0 0;
  color: var(--muted);
}

.cart-amount {
  margin-left: auto;
  font-size: 1.15rem;
  font-weight: 700;
}

.product-shell {
  padding-top: 30px;
}

.product-back {
  margin-bottom: 20px;
}

.product-image-panel {
  padding: 18px;
}

.product-spotlight {
  position: relative;
  overflow: hidden;
  border-radius: 22px;
  min-height: 520px;
}

.product-spotlight img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.product-details {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.product-pill-large {
  position: static;
  width: fit-content;
  margin-bottom: 12px;
}

.rating-line {
  color: var(--gold);
  font-weight: 600;
  margin-bottom: 14px;
}

.price-line {
  display: flex;
  align-items: baseline;
  gap: 12px;
}

.price-line strong {
  font-size: 2.2rem;
}

.price-line span {
  color: var(--muted);
  text-decoration: line-through;
}

.product-description {
  margin: 18px 0 0;
  color: var(--muted);
  line-height: 1.7;
  font-size: 1.02rem;
}

.specs-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 22px;
}

.specs-list span {
  padding: 8px 12px;
  background: rgba(255,255,255,.03);
  border-radius: 999px;
  border: 1px solid var(--line);
  font-size: 0.86rem;
  color: var(--muted);
}

.purchase-actions {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  margin-top: 24px;
}

@media (max-width: 900px) {
  .hero,
  .checkout-layout,
  .cart-layout,
  .product-layout {
    grid-template-columns: 1fr;
  }

  .category-grid,
  .product-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .nav {
    display: none;
  }
}

@media (max-width: 640px) {
  .page-shell,
  .checkout-shell,
  .cart-shell,
  .product-shell {
    width: min(100% - 20px, 1200px);
  }

  .topbar {
    padding: 14px 12px;
  }

  .hero,
  .promo-band,
  .checkout-form-panel,
  .summary-panel,
  .cart-items-panel,
  .product-image-panel,
  .product-details {
    padding: 16px;
  }

  .category-grid,
  .product-grid,
  .field-grid {
    grid-template-columns: 1fr;
  }

  .hero-copy h1 {
    font-size: 2.5rem;
  }

  .stats-row {
    justify-content: space-between;
  }

  .product-spotlight {
    min-height: 340px;
  }
}
