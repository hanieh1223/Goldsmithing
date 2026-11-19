import { useState } from 'react'
import {
  ArrowLeft, ArrowUpLeft, Menu, Search, ShoppingBag, UserRound,
  Instagram, Gem, ShieldCheck, PackageCheck, Headphones, X
} from 'lucide-react'

const products = [
  { id: 1, name: 'گردنبند ون‌کلیف', type: 'گردنبند طلا', price: '۲۸,۴۵۰,۰۰۰', image: 'photo-1599643478518-a784e5dc4c8f', tag: 'پرفروش' },
  { id: 2, name: 'گوشواره مینیمال', type: 'گوشواره طلا', price: '۱۶,۸۰۰,۰۰۰', image: 'photo-1535632066927-ab7c9ab60908', tag: 'تازه رسیده' },
  { id: 3, name: 'انگشتر آوین', type: 'انگشتر طلا', price: '۳۲,۹۰۰,۰۰۰', image: 'photo-1605100804763-247f67b3557e', tag: '' },
  { id: 4, name: 'دستبند کارتیه', type: 'دستبند طلا', price: '۲۴,۶۰۰,۰۰۰', image: 'photo-1611652022419-a9419f74343d', tag: 'منتخب' },
]

const categories = [
  { title: 'گردنبند', subtitle: 'ظرافتی نزدیک به قلب', image: 'photo-1599643478518-a784e5dc4c8f' },
  { title: 'انگشتر', subtitle: 'برای لحظه‌های خاص', image: 'photo-1605100804763-247f67b3557e' },
  { title: 'گوشواره', subtitle: 'درخشش در هر نگاه', image: 'photo-1535632066927-ab7c9ab60908' },
  { title: 'دستبند', subtitle: 'جزئیاتی که می‌مانند', image: 'photo-1611652022419-a9419f74343d' },
]

const photo = (id, width = 900) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState('همه')

  const visibleProducts = activeCategory === 'همه'
    ? products
    : products.filter((product) => product.type.includes(activeCategory))

  return (
    <div className="site-shell">
      <div className="announcement">ارسال رایگان برای سفارش‌های بالای ۳۰ میلیون تومان <span>✦</span> بسته‌بندی ویژه هدیه</div>
      <header className="header">
        <button className="icon-button mobile-menu" aria-label="باز کردن منو" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav className={`nav-links ${menuOpen ? 'nav-open' : ''}`}>
          <a href="#home" onClick={() => setMenuOpen(false)}>خانه</a>
          <a href="#collections" onClick={() => setMenuOpen(false)}>مجموعه‌ها</a>
          <a href="#products" onClick={() => setMenuOpen(false)}>فروشگاه</a>
          <a href="#story" onClick={() => setMenuOpen(false)}>داستان ما</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>ارتباط</a>
        </nav>
        <a className="brand" href="#home" aria-label="Goldsmithing">
          <span className="brand-mark"><Gem size={23} strokeWidth={1.25} /></span>
          <span className="brand-name">GOLDSMITHING<small>TIMELESS TREASURES</small></span>
        </a>
        <div className="header-actions">
          <button className="icon-button" aria-label="جستجو"><Search size={19} /></button>
          <button className="icon-button account-button" aria-label="حساب کاربری"><UserRound size={19} /></button>
          <button className="icon-button bag-button" aria-label="سبد خرید"><ShoppingBag size={19} /><i>۰</i></button>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <img className="hero-image" src={photo('photo-1617038220319-276d3cfab638', 2000)} alt="زیورآلات طلای ظریف در نور گرم" />
          <div className="hero-overlay" />
          <div className="hero-content">
            <span className="eyebrow"><i /> THE ART OF FINE JEWELRY</span>
            <h1>زیبایی، در جزئیاتی‌ست<br />که <em>ماندگار</em> می‌شوند.</h1>
            <p>روایتی از هنر، ظرافت و درخشش؛ برای لحظه‌هایی که ارزش به‌یادماندن دارند.</p>
            <a className="gold-button" href="#collections">کشف مجموعه‌ها <ArrowLeft size={17} /></a>
          </div>
          <div className="hero-caption"><span>01</span><i /> COLLECTION — 2026</div>
          <div className="hero-scroll">SCROLL TO DISCOVER <span /></div>
        </section>

        <section className="intro section-wrap" id="story">
          <div className="intro-symbol"><Gem size={27} strokeWidth={1} /></div>
          <div>
            <span className="section-kicker">A TOUCH OF ETERNITY</span>
            <h2>هر قطعه، داستانی برای <em>همیشه</em></h2>
          </div>
          <p>ما باور داریم جواهرات فقط زینت نیستند؛ نشانی از خاطره‌ها، احساسات و لحظه‌هایی هستند که دوست داریم برای همیشه همراه‌مان بمانند.</p>
        </section>

        <section className="collections section-wrap" id="collections">
          <div className="section-heading">
            <div><span className="section-kicker">EXPLORE THE WORLD OF GOLD</span><h2>دسته‌بندی <em>محبوب شما</em></h2></div>
            <a className="text-link" href="#products">مشاهده همه <ArrowUpLeft size={17} /></a>
          </div>
          <div className="category-grid">
            {categories.map((category, index) => (
              <a className="category-card" href="#products" key={category.title} onClick={() => setActiveCategory(category.title)}>
                <img src={photo(category.image, 800)} alt={category.title} loading="lazy" />
                <div className="category-shade" />
                <span className="category-number">0{index + 1}</span>
                <div className="category-info"><div><h3>{category.title}</h3><p>{category.subtitle}</p></div><span className="circle-arrow"><ArrowUpLeft size={18} /></span></div>
              </a>
            ))}
          </div>
        </section>

        <section className="products-section" id="products">
          <div className="section-wrap">
            <div className="section-heading">
              <div><span className="section-kicker">CURATED FOR YOU</span><h2>انتخاب‌های <em>درخشان</em></h2></div>
              <a className="text-link" href="#contact">راهنمای خرید <ArrowUpLeft size={17} /></a>
            </div>
            <div className="filter-row">
              {['همه', 'گردنبند', 'انگشتر', 'گوشواره', 'دستبند'].map((item) => (
                <button key={item} className={activeCategory === item ? 'filter active' : 'filter'} onClick={() => setActiveCategory(item)}>{item}</button>
              ))}
            </div>
            <div className="product-grid">
              {visibleProducts.map((product) => (
                <article className="product-card" key={product.id}>
                  <div className="product-image-wrap">
                    <img src={photo(product.image, 800)} alt={product.name} loading="lazy" />
                    {product.tag && <span className="product-tag">{product.tag}</span>}
                    <button className="quick-add" aria-label={`افزودن ${product.name} به سبد`}><ShoppingBag size={17} /></button>
                  </div>
                  <div className="product-meta"><span>{product.type}</span><span>۱۸ عیار</span></div>
                  <h3>{product.name}</h3>
                  <p className="product-price">{product.price} <small>تومان</small></p>
                </article>
              ))}
              {visibleProducts.length === 0 && <p className="empty-state">محصولی در این دسته موجود نیست.</p>}
            </div>
          </div>
        </section>

        <section className="craft-banner">
          <img src={photo('photo-1611591437281-460bfbe1220a', 1800)} alt="جزئیات ساخت جواهرات" loading="lazy" />
          <div className="craft-overlay" />
          <div className="craft-content"><span className="section-kicker">MADE TO BE YOURS</span><h2>زیبایی‌ای که<br /><em>شبیه شماست.</em></h2><p>قطعه‌ای را انتخاب کنید که امضای استایل شما باشد.</p><a className="outline-button" href="#products">دیدن محصولات <ArrowLeft size={17} /></a></div>
        </section>

        <section className="promise section-wrap">
          <div className="promise-item"><ShieldCheck /><div><h3>تضمین اصالت</h3><p>اطمینان از کیفیت و عیار طلا</p></div></div>
          <div className="promise-item"><PackageCheck /><div><h3>بسته‌بندی ویژه</h3><p>آماده برای هدیه دادن</p></div></div>
          <div className="promise-item"><Headphones /><div><h3>همراهی در خرید</h3><p>پاسخ‌گوی پرسش‌های شما</p></div></div>
        </section>
      </main>

      <footer className="footer" id="contact">
        <div className="footer-main section-wrap">
          <div className="footer-brand"><a className="brand" href="#home"><span className="brand-mark"><Gem size={23} strokeWidth={1.25} /></span><span className="brand-name">GOLDSMITHING<small>TIMELESS TREASURES</small></span></a><p>درخشش لحظه‌های شما، الهام‌بخش ماست.</p></div>
          <div><h4>دسترسی سریع</h4><a href="#collections">مجموعه‌ها</a><a href="#products">فروشگاه</a><a href="#story">درباره ما</a></div>
          <div><h4>راهنمای مشتریان</h4><a href="#contact">راهنمای خرید</a><a href="#contact">روش‌های ارسال</a><a href="#contact">پرسش‌های متداول</a></div>
          <div><h4>با ما در ارتباط باشید</h4><p>برای دریافت تازه‌ترین مجموعه‌ها، همراه ما باشید.</p><a className="social-link" href="https://instagram.com" target="_blank" rel="noreferrer"><Instagram size={18} /> اینستاگرام</a></div>
        </div>
        <div className="footer-bottom section-wrap"><span>© 2026 GOLDSMITHING — ALL RIGHTS RESERVED</span><span>ساخته‌شده برای لحظه‌های ماندگار</span></div>
      </footer>
    </div>
  )
}

export default App
