const products = [
  { name: 'Waterproof & Stain-Resistant Hotel Pillow', price: '$29', old: '$60', desc: 'Cloud-soft comfort with built-in protection.' },
  { name: 'CloudAlign™ Pillow', price: '$50', old: '$100', desc: 'Ergonomic contour support and pressure-relief comfort.' },
  { name: 'MarshMellow Comforter', price: '$100', old: '$200', desc: 'Double-stuffed comforter with heat-adaptive softness.' },
]

export default function App() {
  return (
    <div className="page">
      <div className="ticker">Mother&apos;s Day Sale is Live! • Get An Extra 20% Off Sitewide • Plus Free Shipping on orders over $100</div>
      <header className="nav"><div className="links">Home Shop About Features Ambassadors</div><div className="logo">mellow</div><div>🛍️</div></header>
      <section className="hero">
        <div className="hero-copy">
          <h1>20% OFF</h1><h2>Better Sleep<br/>This Mother&apos;s Day</h2>
          <p>Pain-free mornings. Cloud-soft nights. Dreamy essentials for the woman that deserves it most.</p>
          <button>Use Code: MOTHER</button>
        </div>
        <div className="hero-image"><div className="badge">LIMITED TIME<br/><strong>20% OFF</strong><br/>MOTHER&apos;S DAY SALE</div></div>
      </section>

      <section className="section">
        <h3>Shop by Bestsellers</h3>
        <div className="cards">{products.map((p)=> <article key={p.name} className="card"><div className="image"/><h4>{p.name}</h4><p>{p.desc}</p><div className="price">{p.price} <s>{p.old}</s></div><button>Shop Now</button></article>)}</div>
      </section>

      <section className="split section">
        <div>
          <h3>Redefining Sleep. One Innovation At A Time.</h3>
          <p>Mellow started with a comforter that changed everything. Built for every sleeper with thoughtful details and soft minimalism.</p>
        </div>
        <div className="rounded-photo" />
      </section>

      <section className="section">
        <h3 className="center">What 100,000+ Happy Sleepers Are Saying</h3>
        <div className="reviews">{[1,2,3,4].map(i => <div key={i} className="review"><div className="thumb"/><strong>Reviewer {i}</strong><p>Super soft and comfortable with less discomfort.</p></div>)}</div>
      </section>

      <footer>
        <div className="footer-cols"><div><h5>Links</h5><p>Home<br/>About Us<br/>Features<br/>Shop</p></div><div><h5>Social</h5><p>Instagram<br/>Facebook<br/>TikTok</p></div><div><h5>Support</h5><p>Contact Us<br/>Privacy Policy<br/>Terms of Service</p></div></div>
        <p className="copy">Copyright 2026 MELLOW LLC</p>
      </footer>
    </div>
  )
}
