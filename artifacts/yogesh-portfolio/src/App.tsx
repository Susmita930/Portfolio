import { useEffect, useState, type CSSProperties } from 'react';
import { ArrowDownRight, ArrowUpRight, Check, Github, Linkedin, Mail, Menu, Phone, X } from 'lucide-react';

const portrait = '/assets/yogesh-portrait.png';

const skills = [
  ['SQL (PostgreSQL / MySQL)', '90%'],
  ['Python (Pandas, NumPy, Matplotlib)', '85%'],
  ['Power BI (DAX, Power Query)', '90%'],
  ['Excel Charts / Reporting', '88%'],
  ['Data Cleaning & EDA', '87%'],
  ['C / C++', '75%'],
  ['Tableau', '70%'],
  ['Git / GitHub', '80%'],
];

const navItems = ['about', 'skills', 'projects', 'experience', 'education'];

function App() {
  const [active, setActive] = useState('about');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const visible = navItems.find((id) => {
        const el = document.getElementById(id);
        return el && el.getBoundingClientRect().top < window.innerHeight * 0.36 && el.getBoundingClientRect().bottom > 120;
      });
      if (visible) setActive(visible);
    };
    const reveals = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    }), { threshold: 0.12 });
    reveals.forEach((el) => observer.observe(el));
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const goTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <div className="page-shell">
      <header className={`topbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-inner">
          <a className="brand" href="#top" data-testid="link-brand" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            <span className="brand-mark">Y</span>
            <span>Susmita Kumari<small>DATA ANALYST · JAIPUR</small></span>
          </a>
          <nav className={`nav-links ${menuOpen ? 'open' : ''}`} aria-label="Main navigation">
            {navItems.map((item) => (
              <a key={item} className={`nav-link ${active === item ? 'active' : ''}`} href={`#${item}`} data-testid={`link-nav-${item}`} onClick={(e) => { e.preventDefault(); goTo(item); }}>
                {item}
              </a>
            ))}
          </nav>
          <a className="nav-contact" href="#contact" data-testid="link-nav-contact" onClick={(e) => { e.preventDefault(); goTo('contact'); }}>Let&apos;s connect ↗</a>
          <button className="mobile-toggle" type="button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} data-testid="button-mobile-menu" onClick={() => setMenuOpen((value) => !value)}>
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
      </header>

      <main id="top" className="wrap">
        <section className="hero">
          <div className="hero-copy-block">
            <div className="eyebrow reveal"><span className="live-dot" /> Data analyst · dashboards, KPIs & business insights</div>
            <h1 className="reveal delay-1">I read the numbers<br />so the story <span className="italic">reads itself.</span></h1>
            <p className="hero-copy reveal delay-2">Results-driven Data Analyst and final-year B.Tech Computer Science student. I turn messy datasets into clear dashboards, useful questions, and business decisions that move.</p>
            <div className="hero-actions reveal delay-3">
              <a className="button primary" href="#projects" data-testid="button-view-projects" onClick={(e) => { e.preventDefault(); goTo('projects'); }}>See the work <ArrowDownRight size={15} /></a>
              <a className="button secondary" href="mailto:susmita120506@gmail.com" data-testid="button-email-hero">Start a conversation <ArrowUpRight size={15} /></a>
            </div>
            <div className="hero-meta reveal delay-3">
              <div><span className="meta-value">8.1 / 10</span><span className="meta-label">B.Tech CGPA</span></div>
              <div><span className="meta-value">2</span><span className="meta-label">BI projects</span></div>
              <div><span className="meta-value">4+</span><span className="meta-label">months in practice</span></div>
            </div>
          </div>
          <div className="hero-visual reveal delay-2" aria-label="Susmita Kumari portrait and data dashboard accent">
            <div className="orb" />
            <img className="portrait" src={portrait} alt="Portrait of Susmita Kumari" data-testid="img-portrait-hero" />
            <div className="visual-note"><span className="mono">CURRENT FOCUS</span><strong>Signal over noise.</strong></div>
            <div className="visual-note two"><span className="mono">LOCATION</span><strong>Jaipur, IN</strong></div>
            <div className="chart-card"><small>SALES PULSE · LIVE VIEW</small><div className="chart-number">+24.8%</div><div className="mini-bars" aria-hidden="true"><span /><span /><span /><span /><span /><span /></div></div>
          </div>
          <div className="scroll-cue mono">SCROLL TO EXPLORE</div>
        </section>
      </main>

      <div className="ticker" aria-label="Portfolio highlights">
        <div className="ticker-track">
          {['2 end-to-end BI dashboards shipped', '8.1 CGPA in B.Tech CSE', '4+ months hands-on internship', 'Python / SQL / C / C++', 'PostgreSQL → Power BI pipelines', '2 certifications earned', '2 end-to-end BI dashboards shipped', '8.1 CGPA in B.Tech CSE', '4+ months hands-on internship'].map((item, index) => <span className="ticker-item" key={`${item}-${index}`}><b>↗</b> {item}</span>)}
        </div>
      </div>

      <div className="wrap">
        <section className="section" id="about">
          <div className="section-kicker reveal">01 / the person behind the pivot</div>
          <h2 className="section-title reveal delay-1">Curious by nature.<br /><em>Precise by practice.</em></h2>
          <p className="section-intro reveal delay-2">Good analysis starts before the query. It starts with noticing what feels strange, asking who needs the answer, and building the shortest path from raw data to a confident next step.</p>
          <div className="about-grid">
            <div className="portrait-card reveal"><img src={portrait} alt="Susmita Kumari in a navy blazer" data-testid="img-portrait-about" /></div>
            <div className="about-copy reveal delay-1">
              <p>I&apos;m <strong>Susmita Kumari</strong>, a results-driven Data Analyst and final-year B.Tech Computer Science student based in Jaipur, working hands-on with SQL, Power BI, Excel, PostgreSQL, and Python.</p>
              <p>I&apos;m proficient in <strong>data cleaning, data visualization, dashboard development, KPI reporting, and trend analysis</strong> — turning complex, messy datasets into dashboards and insights that support real decisions rather than just looking good in a slide.</p>
              <p>Recently, as a Data Analytics Intern at Upflairs Pvt. Ltd., I cleaned and preprocessed datasets with Excel and Python, wrote SQL queries to analyze relational databases, and built interactive Power BI dashboards for sales trends and business performance.</p>
              <div className="stat-grid">
                <div className="stat-box" data-testid="stat-cgpa"><div className="number mono">8.1</div><div className="label">CGPA / 10</div></div>
                <div className="stat-box" data-testid="stat-projects"><div className="number mono">02</div><div className="label">BI projects</div></div>
                <div className="stat-box" data-testid="stat-certifications"><div className="number mono">02</div><div className="label">certifications</div></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="skills">
          <div className="section-kicker reveal">02 / the working toolkit</div>
          <h2 className="section-title reveal delay-1">Tools for finding<br /><em>the useful thread.</em></h2>
          <div className="skill-layout" style={{ marginTop: '47px' }}>
            <div className="skill-lead reveal"><span className="quote">“The goal isn&apos;t more charts. It&apos;s a clearer next move.”</span>From a clean query to a dashboard someone can trust, I enjoy the entire analytical loop — especially the handoff between technical detail and business language.</div>
            <div className="skill-stack reveal delay-1" data-testid="list-skills">
              {skills.map(([name, percentage]) => <div className="skill-row" key={name}><span className="skill-name">{name}</span><span className="skill-bar"><span style={{ '--skill': percentage } as CSSProperties} /></span><span className="skill-pct mono">{percentage}</span></div>)}
            </div>
          </div>
        </section>

        <section className="section" id="projects">
          <div className="section-kicker reveal">03 / selected work</div>
          <h2 className="section-title reveal delay-1">Proof in the<br /><em>patterns.</em></h2>
          <p className="section-intro reveal delay-2">Two end-to-end builds that connect collection, cleaning, modeling, and visual explanation — with the decision-maker always in view.</p>
          <div className="project-grid">
            <article className="project-card reveal" data-testid="card-project-starbucks">
              <div className="project-visual uber-visual">
                <span className="project-number">PROJECT / 01 · DATA ANALYTICS</span>
                <div className="uber-scene">
                  <div className="uber-person" aria-hidden="true">
                    <span className="head" />
                    <span className="body" />
                    <span className="bag" />
                  </div>
                  <div className="uber-car" aria-hidden="true">
                    <span className="car-body" />
                    <span className="car-window" />
                    <span className="wheel wheel-left" />
                    <span className="wheel wheel-right" />
                  </div>
                  <div className="uber-word">Uber</div>
                </div>
              </div>
              <div className="project-body"><div className="project-top"><span>DATA ANALYTICS | EXCEL | POWER BI | DAX</span><span>01</span></div><h3>Uber Sales &amp; Ride Analytics Dashboard</h3><p>An interactive Uber Sales &amp; Ride Analytics Dashboard built with Microsoft Excel and Power BI. It analyzes ride bookings, revenue, customer trends, payment methods, and location performance using data cleaning, DAX measures, and interactive visualizations to uncover actionable business insights.</p><div className="project-tags"><span className="tag">Microsoft Excel</span><span className="tag">Power BI</span><span className="tag">DAX</span><span className="tag">Data Cleaning</span></div><a className="project-link" href="https://github.com/Susmita930" target="_blank" rel="noopener noreferrer" data-testid="link-project-starbucks">View on GitHub <ArrowUpRight size={14} /></a></div>
            </article>
            <article className="project-card reveal delay-1" data-testid="card-project-enfield">
              <div className="project-visual"><span className="project-number">PROJECT / 02 · MAY 2026 — AUG 2026</span><div className="dashboard"><div className="dash-top"><span>BOND PORTFOLIO</span><span className="dash-chip">RISK</span></div><div className="dash-content"><div><div className="dash-big">DURATION</div><div className="dash-small">CONVEXITY &amp; VaR</div></div><div className="dash-lines"><span /><span /><span /><span /><span /><span /></div></div></div></div>
              <div className="project-body"><div className="project-top"><span>PYTHON · EXCEL · POWER BI · DAX</span><span>02</span></div><h3>Bond Portfolio Risk &amp; Convexity Sensitivity Analytics</h3><p>Analyzed bond portfolio risk using Duration, Convexity, DV01, and Key Rate Duration. Developed Monte Carlo simulations to evaluate portfolio P&amp;L, VaR, and CVaR under different yield curve scenarios. Built interactive Power BI dashboards with 40+ DAX measures for portfolio risk, sensitivity, and scenario analysis. Implemented yield-change What-If analysis from -300bps to +300bps to evaluate portfolio impact.</p><div className="project-tags"><span className="tag">Python</span><span className="tag">Microsoft Excel</span><span className="tag">Power BI</span><span className="tag">DAX</span></div><a className="project-link" href="https://github.com/Susmita930" target="_blank" rel="noopener noreferrer" data-testid="link-project-enfield">View on GitHub <ArrowUpRight size={14} /></a></div>
            </article>
          </div>
        </section>

        <section className="section" id="experience">
          <div className="section-kicker reveal">04 / where I&apos;ve applied it</div>
          <h2 className="section-title reveal delay-1">From raw rows<br /><em>to real context.</em></h2>
          <div className="experience-grid" style={{ marginTop: '50px' }}>
            <div className="timeline reveal">
              <div className="timeline-item"><div className="timeline-date">MAY 2025 — AUG 2025</div><div className="timeline-role">Data Analytics Intern</div><div className="timeline-company">Upflairs Pvt. Ltd. · Jaipur</div><p className="timeline-desc">Cleaned and preprocessed datasets with Excel and Python; wrote SQL queries using SELECT, JOIN, and GROUP BY to analyze relational databases; and built interactive Power BI dashboards for sales trends and business performance.</p></div>
            </div>
            <div className="edu-card reveal delay-1" id="education">
              <h3>B.Tech, Computer Science & Engineering</h3><p>2023 — 2027<br />Laxmi Devi Institute of Engineering and Technology, affiliated to Bikaner Technical University.</p>
              <div className="cgpa"><strong>8.1 / 10</strong><span>current CGPA</span></div>
              <div className="certs"><div className="certs-title">Certifications</div><div className="cert-row">Data Analytics Certification <span><Check size={13} /> earned</span></div><div className="cert-row">Soft Skills Certification <span><Check size={13} /> earned</span></div></div>
            </div>
          </div>
        </section>

        <section className="contact-wrap" id="contact">
          <div className="contact-panel reveal">
            <div><h2>Let&apos;s talk<br /><em>data.</em></h2><p>Open to full-time analytics roles and select freelance dashboard or forecasting work. If there&apos;s a messy dataset and a useful question behind it, I&apos;d like to hear about it.</p><a className="contact-button" href="mailto:susmita120506@gmail.com" data-testid="button-email-contact">Send an email <ArrowUpRight size={14} /></a></div>
            <div className="contact-list">
              <a className="contact-item" href="mailto:susmita120506@gmail.com" data-testid="link-contact-email"><span className="contact-icon"><Mail size={17} /></span><span className="contact-detail"><small>Email</small><span>susmita120506@gmail.com</span></span></a>
              <a className="contact-item" href="tel:+919305496893" data-testid="link-contact-phone"><span className="contact-icon"><Phone size={17} /></span><span className="contact-detail"><small>Phone</small><span>+91 93054 96893</span></span></a>
              <a className="contact-item" href="https://www.linkedin.com/in/susmita-kumari-b497bb359" target="_blank" rel="noopener noreferrer" data-testid="link-contact-linkedin"><span className="contact-icon"><Linkedin size={17} /></span><span className="contact-detail"><small>LinkedIn</small><span>linkedin.com/in/susmita-kumari-b497bb359</span></span></a>
              <a className="contact-item" href="https://github.com/Susmita930" target="_blank" rel="noopener noreferrer" data-testid="link-contact-github"><span className="contact-icon"><Github size={17} /></span><span className="contact-detail"><small>GitHub</small><span>github.com/Susmita930</span></span></a>
            </div>
          </div>
        </section>
        <footer className="footer"><span>© 2026 Susmita Kumari — building dashboards that drive decisions.</span><a href="#top" data-testid="link-back-top">Back to top ↑</a></footer>
      </div>
    </div>
  );
}

export default App;