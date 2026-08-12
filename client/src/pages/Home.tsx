/**
 * THE LINE OF INTENT / CHAPTER 01
 * Intent: withhold the proof just long enough to earn a voluntary click into the deeper story.
 */
import { ArrowDownRight, ChevronDown, MoveRight } from "lucide-react";
import { Link } from "wouter";

const heroImage = "/manus-storage/ishii-hero-line-of-intent_08136d36.png";
const symbolImage = "/manus-storage/ishii-ti-symbol_b6b82ae3.png";

export default function Home() {
  return (
    <div className="site-shell surface-page">
      <a className="skip-link" href="#main">本文へ移動</a>
      <header className="topbar" aria-label="サイトヘッダー" style={{ position: "fixed", top: 0, background: "rgba(11,16,26,0.92)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(244,241,234,0.12)" }}>
        <a href="#top" className="brand-mark" aria-label="石井匠の自己営業、先頭へ">
          <span>TAKUMI ISHII</span>
        </a>
        <a href="#threshold" className="nav-contact" style={{ font: "500 11px/1 'IBM Plex Mono', monospace", letterSpacing: "0.1em", color: "var(--paper)", borderBottom: "1px solid var(--vermillion)", paddingBottom: "2px" }}>CONTACT</a>
      </header>

      <main id="main">
        <section id="top" className="hero surface-hero" style={{ backgroundImage: `url(${heroImage})` }}>
          <div className="hero-noise" />
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-content page-wrap">
            <p className="eyebrow light-eyebrow"><span className="signal-dot" /> NOT A PORTFOLIO / AN INVITATION</p>
            <div className="hero-title-wrap">
              <p className="hero-side-label">SELF SALES<br />LANDING PAGE</p>
              <h1>
                経験がないことは、<br />
                <em>挑戦しない<span className="hero-mobile-break"><br /></span>理由</em>に<br />
                ならない。
              </h1>
            </div>
            <div className="hero-bottom">
              <p className="hero-lede">
                Webサイト制作の実績はありません。<br />
                それでも、この機会を任せてほしい。
              </p>
              <a className="scroll-invite" href="#tension"><span>続きを読む</span><ChevronDown size={19} /></a>
            </div>
          </div>
          <div className="hero-credit">TAKUMI ISHII / PM CANDIDATE</div>
        </section>

        <section id="tension" className="tension-section section-cream">
          <div className="page-wrap tension-grid">
            <div className="tension-index"><span>01</span><i /></div>
            <div>
              <p className="eyebrow dark-eyebrow">THE HONEST START</p>
              <h2>「未経験だから、<br />やらない。」</h2>
              <p className="tension-answer">そう言ってしまえば、簡単です。</p>
              <p className="tension-copy">
                でも、自分はこれからも、まだやったことがないことに踏み込んでいきたい。自分の可能性を、自分で狭める選び方はしたくありません。
                今回のWebサイト立ち上げも、その一つです。
              </p>
            </div>
          </div>
        </section>

        <section className="spark-section">
          <div className="page-wrap spark-layout">
            <div className="spark-statement">
              <img className="section-symbol" src={symbolImage} alt="" />
              <p className="eyebrow light-eyebrow"><span className="signal-dot" /> THE REASON TO STEP FORWARD</p>
              <h2>知らない領域でも、<br />目的から逆算し、<br /><em>前へ進める。</em></h2>
            </div>
            <div className="spark-copy">
              <p>
                これは、仕事を増やしたいだけの話ではありません。経験のない領域でも、目的を定め、必要な知見を集め、最後まで前へ進められるか。その力を、Webサイト立ち上げで証明したい。
              </p>
              <p>
                ただし、熱意だけで任せてほしいとは言いません。自分が何をできるのか。なぜ、そう言えるのか。実務の根拠を、次の章で開示します。
              </p>
              <div className="tease-row"><span>目的を定める</span><span>根拠を示す</span><span>前へ進める</span></div>
            </div>
          </div>
        </section>

        <section className="threshold-section section-cream">
          <div className="page-wrap threshold-wrap">
            <p className="eyebrow dark-eyebrow">THE THRESHOLD</p>
            <div className="threshold-question">
              <p>ここから先は、<br />職務経歴書ではありません。</p>
              <h2>石井匠という人間を、<br /><em>もう少し知るための話です。</em></h2>
            </div>
            <p className="threshold-copy">
              実績、失敗、仕事の進め方。そして、なぜ自分は挑戦をやめないのか。<br className="desktop-break" />
              それぞれは別の話に見えるかもしれません。でも、自分の中ではすべて一つにつながっています。
            </p>
            <Link href="/chapter-02" className="deep-link">
              <span className="deep-link-caption">NEXT: REAL PROOF & METHOD</span>
              <strong>実績と、仕事の進め方を見る</strong>
              <MoveRight size={28} />
            </Link>
            <p className="deep-link-note">※ 次の章では、実績と自分の考えをお話しします。</p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>TAKUMI ISHII / SELF SALES LP</span>
        <span>THE NEXT STEP BEGINS WITH YOUR CLICK</span>
      </footer>
    </div>
  );
}
