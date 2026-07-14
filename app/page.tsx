import SiteNav from "@/components/SiteNav";
import ScrollReveals from "@/components/ScrollReveals";

function WaveSep({ flip = false }: { flip?: boolean }) {
  return (
    <div className={`wave-sep${flip ? " flip" : ""}`} aria-hidden="true">
      <svg viewBox="0 0 1440 50" preserveAspectRatio="none">
        <path
          d="M0 25 C 120 50 240 0 360 25 S 600 50 720 25 960 0 1080 25 1320 50 1440 25"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <SiteNav />
      <ScrollReveals />

      <main id="top">
        {/* ============ HERO ============ */}
        <section className="hero">
          <div className="deco blob blob-a" aria-hidden="true" />
          <div className="deco blob blob-b" aria-hidden="true" />
          <div className="deco ring ring-hero" aria-hidden="true" />
          <div className="deco circle circle-hero" aria-hidden="true" />
          <div className="deco pill-shape" aria-hidden="true" />

          <p className="sticker reveal">✦ open to remote work</p>
          <h1 className="reveal">
            I build interfaces where{" "}
            <span className="squiggly">code and design meet</span> — and where
            people feel at home.
          </h1>
          <p className="hero-sub reveal">
            Frontend developer from Portugal 🇵🇹, somewhere between engineering,
            design and product. Currently looking for a small remote team with
            good energy — and taking a lot of inspiration from nature along the
            way.
          </p>
          <a className="cta reveal" href="#work">
            see what I&apos;ve been up to ↓
          </a>

          <svg className="hero-squiggle" viewBox="0 0 220 24" aria-hidden="true">
            <path
              d="M4 12 C 22 2, 40 22, 58 12 S 94 2, 112 12 148 22, 166 12 202 2, 216 12"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>
        </section>

        <WaveSep />

        {/* ============ ABOUT ============ */}
        <section id="about" className="section about-section">
          <h2 className="sec-title hl-sun tilt-l reveal">who I am</h2>

          <div className="about-grid">
            <div className="portrait-wrap reveal">
              <div className="deco rect-tilt" aria-hidden="true" />
              <div className="portrait" role="img" aria-label="Portrait coming soon">
                🌱
              </div>
              <div className="deco ring ring-portrait" aria-hidden="true" />
              <div className="deco circle circle-portrait" aria-hidden="true" />
            </div>
            <p className="reveal">
              I didn&apos;t start in frontend. My first job out of university
              was pure backend — PL/SQL in a warehouse, fixed hours, and a
              growing feeling that this wasn&apos;t it. So I quit, travelled
              for a while to figure out what actually drives me, and landed in
              a small Portuguese startup where everything clicked: React,
              interfaces, and — because the team was tiny — designing the very
              components I was building. That mix of design and engineering
              became my signature. It&apos;s still how I work today.
            </p>
          </div>

          <p className="about-b reveal">
            What I love most is turning a problem around and looking at it from
            angles nobody tried yet. When I walk through my city I catch myself
            studying gardens and public spaces, noticing how the beautiful
            paths are often the uncomfortable ones. I bring that same eye to
            software: interfaces should be fluid, practical and accessible for
            everyone — without giving up beauty.
          </p>

          <p className="about-c reveal">
            Away from the keyboard I&apos;m a certified permaculture designer
            with a garden of my own — right next to my granddad&apos;s
            traditional farm, so we watch each other&apos;s methods, compare
            harvests, and both get better. I play chess, make 80s-flavoured
            music on a synth, practice yoga, and run a tiny book club with my
            girlfriend and friends. Nature figured most things out long before
            we did; I just try to borrow her patterns.
          </p>
        </section>

        <WaveSep flip />

        {/* ============ WHAT I DO ============ */}
        <section className="section skills-section">
          <div className="clouds" aria-hidden="true">
            <span className="cloud cloud-1" />
            <span className="cloud cloud-2" />
            <span className="cloud cloud-3" />
          </div>

          <h2 className="sec-title hl-mint tilt-r reveal">what I do</h2>

          <div className="cards">
            <div className="card card-1 reveal">
              <span className="card-emoji">🧩</span>
              <h3>Frontend engineering</h3>
              <p>
                React, TypeScript and Next.js are home. I&apos;ve also done my
                share of backend with Node.js — and survived PL/SQL — so
                I&apos;m comfortable across the whole stack of a product.
              </p>
            </div>
            <div className="card card-2 reveal">
              <span className="card-emoji">🎨</span>
              <h3>Design that thinks of people</h3>
              <p>
                I design what I build: components, layouts, whole interfaces.
                I put myself in the user&apos;s shoes first and make things
                that feel effortless to navigate — and still look good.
              </p>
            </div>
            <div className="card card-3 reveal">
              <span className="card-emoji">🌀</span>
              <h3>Seeing problems sideways</h3>
              <p>
                My favourite part of the job: understanding <em>why</em>{" "}
                something breaks, looking at it from every perspective, and
                finding the non-obvious fix that actually holds.
              </p>
            </div>
          </div>
        </section>

        {/* ============ WORK / TIMELINE ============ */}
        <section id="work" className="section work-section">
          <h2 className="sec-title hl-sky tilt-l reveal">where I&apos;ve been</h2>

          <div className="timeline">
            <article className="entry reveal">
              <p className="entry-when">Now</p>
              <h3>Building my own things</h3>
              <p>
                A soap-making app for iOS — I surveyed the whole market, found
                every app lacking in interface and features, and built the one
                I wished existed (publishing soon). Also this site, and an
                educational page about eucalyptus monoculture and the wildfires
                it fuels in Portugal — because nature belongs to everyone.
              </p>
            </article>
            <article className="entry reveal">
              <p className="entry-when">The reset</p>
              <h3>Permaculture &amp; grounding</h3>
              <p>
                After a mass layoff and some personal storms, I stepped back to
                rest and reconnect with nature. I took a permaculture design
                course, got certified, volunteered — and came back to code with
                fresh eyes and more energy than I&apos;d had in years.
              </p>
            </article>
            <article className="entry reveal">
              <p className="entry-when">US company</p>
              <h3>Frontend developer</h3>
              <p>
                Built websites for the group&apos;s portfolio of brands with
                React, Shopify and server-side rendering. The best team
                I&apos;ve worked with — open-minded, proactive, funny people
                where everyone brought ideas to the table. It felt like home
                until the company went under.
              </p>
            </article>
            <article className="entry reveal">
              <p className="entry-when">PT startup</p>
              <h3>Frontend developer &amp; co-designer</h3>
              <p>
                Joined a small team, fell in love with React, and doubled as
                the designer — shaping components, layouts and the
                product&apos;s visual language. When we grew enough to hire a
                real designer, I kept working shoulder to shoulder with them on
                every design decision until the day I left.
              </p>
            </article>
            <article className="entry reveal">
              <p className="entry-when">Where it started</p>
              <h3>Backend &amp; freelance roots</h3>
              <p>
                Freelance sites with Shopify and Ruby on Rails while still
                studying, then a first job doing PL/SQL and Java for an Oracle
                retail backend. It taught me exactly what I <em>didn&apos;t</em>{" "}
                want — which turned out to be one of the most useful lessons of
                all.
              </p>
            </article>
          </div>
        </section>

        <WaveSep />

        {/* ============ NOW ============ */}
        <section id="now" className="section now-section">
          <h2 className="sec-title hl-lilac tilt-r reveal">right now</h2>

          <div className="now-grid">
            <svg
              className="diag"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <line
                x1="100"
                y1="0"
                x2="0"
                y2="100"
                stroke="currentColor"
                strokeWidth="0.6"
                strokeDasharray="3 2.4"
              />
            </svg>
            <p className="now-a reveal">
              I&apos;m looking for my next role:{" "}
              <strong>remote, at a small company with good energy</strong> —
              the kind of team where people have passions outside work and love
              sharing them, and where I can do a bit of everything across
              frontend, design and product. I love travelling and meeting
              people around the world, so I&apos;m happily looking beyond
              Portugal&apos;s borders.
            </p>
            <p className="now-b reveal">
              Meanwhile I&apos;m finishing the soap-making app, learning to
              synthesize music on my iPad, slowly getting better at chess,
              picking up a racket sport, and tending the garden. The long-term
              dream? A farm designed with permaculture, shared with good
              friends — a small community that inspires people to grow their
              own.
            </p>
          </div>
        </section>

        {/* ============ CONTACT ============ */}
        <section id="contact" className="section contact">
          <div className="deco confetti c1" aria-hidden="true" />
          <div className="deco confetti c2" aria-hidden="true" />
          <div className="deco confetti c3" aria-hidden="true" />
          <div className="deco confetti c4" aria-hidden="true" />
          <div className="deco ring ring-contact" aria-hidden="true" />

          <h2 className="sec-title hl-coral tilt-l reveal">say hi ✌️</h2>
          <p className="contact-line reveal">
            The best way to reach me is by email — I read everything, even if
            I&apos;m slow sometimes.
          </p>
          <a className="cta big reveal" href="mailto:danielbastos.work@gmail.com">
            danielbastos.work@gmail.com
          </a>
          <p className="socials reveal">
            <a href="https://github.com/danielbbastos">GitHub</a>
            <a href="https://www.linkedin.com/in/daniel-bbastos/">LinkedIn</a>
          </p>
        </section>
      </main>

      <footer className="site-footer">
        <p>made with care by Daniel Bastos · {new Date().getFullYear()}</p>
      </footer>
    </>
  );
}
