const products = [
  {
    name: 'Waterproof & Stain-Resistant Hotel Pillow',
    desc: 'Cloud-soft comfort with built-in protection. 100% waterproof, oil-proof, and resistant to makeup and yellowing.',
    price: '$29',
    old: '$60',
  },
  {
    name: 'CloudAlign™ Pillow',
    desc: 'Our #1 best-selling ergonomic pillow, contoured for support and pressure-relieving comfort.',
    price: '$50',
    old: '$100',
  },
  {
    name: 'MarshMellow Comforter',
    desc: "A white double-stuffed comforter for more volume and bounce. Made with class A baby grade materials.",
    price: '$100',
    old: '$200',
  },
]

export default function App() {
  return (
    <div className="page">
      <div className="ticker">Mother&apos;s Day Sale is Live! • Get An Extra 20% Off Sitewide • Plus Free Shipping on orders over $100 •</div>
      <header className="nav wrap">
        <nav className="links" aria-label="Primary"><a href="#">Home</a><a href="#">Shop</a><a href="#">About</a><a href="#">Features</a><a href="#">Ambassadors</a></nav>
        <div className="logo">mellow</div>
        <div className="bag">◡</div>
      </header>

      <section className="hero">
        <div className="salebar">🌷 20% OFF SITEWIDE SALE 🌷 USE CODE: MOTHER AT CHECKOUT</div>
        <div className="wrap hero-inner">
          <div className="hero-copy">
            <h1>20% OFF</h1>
            <h2>Better Sleep<br />This Mother&apos;s Day</h2>
            <p>Pain-free mornings. Cloud-soft nights. Dreamy essentials for the woman that deserves it most.</p>
            <button>Use Code: MOTHER</button>
          </div>
          <div className="hero-image">
            <div className="badge">LIMITED TIME<br /><strong>20% OFF</strong><br />MOTHER&apos;S DAY SALE</div>
          </div>
        </div>
      </section>

      <section className="section wrap">
        <h3>Shop by Bestsellers</h3>
        <a className="shopall" href="#">Shop All</a>
        <div className="cards">
          {products.map((p) => (
            <article key={p.name}>
              <div className="card-media" />
              <p className="stars">★★★★★ <span>(6,416)</span></p>
              <h4>{p.name}</h4>
              <p className="desc">{p.desc}</p>
              <p className="price">{p.price} <s>{p.old}</s></p>
              <button>Shop Now</button>
            </article>
          ))}
        </div>
      </section>

      <section className="story wrap">
        <div>
          <h3>Redefining Sleep. One Innovation At A Time.</h3>
          <p>Mellow started with a comforter that changed everything. Now, we’re building a new standard for sleep with more innovative fabrics, dual-sided cooling, cloud-like pillows, and effortless design.</p>
          <div className="acc">Why Mellow <span>＋</span></div>
          <div className="acc">Built for Every Sleeper <span>＋</span></div>
          <div className="acc">Innovation in Every Detail <span>＋</span></div>
        </div>
        <div className="rounded-photo" />
      </section>

      <footer>
        <div className="wrap footer-cols">
          <div><h5>Links</h5><p>Home<br/>About Us<br/>Features<br/>Shop<br/>Blog<br/>News</p></div>
          <div><h5>Social</h5><p>Instagram<br/>Facebook<br/>TikTok</p></div>
          <div><h5>Support</h5><p>Contact Us<br/>Privacy Policy<br/>Terms of Service<br/>Lifetime Warranty<br/>Returns Policy</p></div>
        </div>
        <p className="copy">Copyright 2026 MELLOW LLC</p>
      </footer>
    </div>
  )
}
