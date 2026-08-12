/**
 * THE LINE OF INTENT / CHAPTER 01
 * Intent: withhold the proof just long enough to earn a voluntary click into the deeper story.
 */
import { ArrowDownRight, MoveRight } from "lucide-react";
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
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <a href="#profile" className="header-cta">プロフィール</a>
          <Link href="/chapter-02#deep-ask" className="header-cta">CONTACT</Link>
        </div>
      </header>

      <main id="main">
        <section id="top" className="hero surface-hero" style={{ backgroundImage: `url(${heroImage})` }}>
          <div className="hero-noise" />
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-content page-wrap">
            <div className="hero-title-wrap">
              <h1 className="hero-title-text">
                <span className="hero-line-1">経験がないことは、</span><br />
                <span className="hero-line-2"><em>挑戦しない理由にならない。</em></span>
              </h1>
            </div>
            <div className="hero-bottom" style={{ display: "grid", gridTemplateColumns: "1.25fr 1fr", gap: "26px", alignItems: "start" }}>
              <p className="hero-lede" style={{ margin: 0 }}>
                Webサイト制作の実績はありません。<br className="hero-lede-break" />それでも、この機会を任せてほしい。
              </p>
              <div className="hero-passion-block" style={{ borderLeft: "2px solid var(--vermillion)", paddingLeft: "18px", color: "rgba(244,241,234,0.9)", fontSize: "13px", lineHeight: "1.9" }}>
                <p style={{ margin: "0 0 6px", fontWeight: "700", color: "var(--paper)" }}><span>「未経験だから、やらない。」</span><br className="hero-passion-break" /><span>——そう言ってしまえば、簡単です。</span></p>
                <p style={{ margin: 0, color: "rgba(244,241,234,0.75)" }}>でも、自分はまだやったことがないことに踏み込んでいきたい。自分の可能性を自分で狭める選び方はしたくありません。今回のWebサイト立ち上げも、その一つです。</p>
              </div>
            </div>
          </div>
        </section>

        <section id="profile" className="tension-section section-cream" style={{ borderBottom: "1px solid rgba(11,16,26,0.1)" }}>
          <div className="page-wrap tension-grid">
            <div className="tension-index"><span>00</span><i /></div>
            <div>
              <p className="eyebrow dark-eyebrow">プロフィール / 誰がこの提案をしているのか</p>
              <h2>はじめまして、<br /><em>石井 匠</em>です。</h2>
              <p className="tension-answer" style={{ marginTop: "12px" }}>三菱自動車にて、倉庫システムマネジメントおよびオペレーション管理を担当しています。</p>
              <p className="tension-copy" style={{ marginTop: "16px" }}>
                日々の業務では、現場のオペレーションとITシステムをつなぎ、工程のボトルネック解消やシステムの改善・導入を進めてきました。「未経験の領域であっても、目的から逆算し、必要な知見を集めて最後まで形にする」という軸を持って仕事に取り組んでいます。今回のWebサイト立ち上げの機会にあたり、自分の経歴と仕事の進め方をこのページにまとめました。
              </p>
            </div>
          </div>
        </section>

        {/* 旧テンションセクション（素直なスタート）はHeroへ統合したため削除 */}

        <section className="spark-section">
          <div className="page-wrap spark-layout">
            <div className="spark-statement">
              <img className="section-symbol" src={symbolImage} alt="" />
              <p className="eyebrow light-eyebrow"><span className="signal-dot" /> 前へ踏み出す理由</p>
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
            <p className="eyebrow dark-eyebrow">次のステップへ</p>
            <div className="threshold-question">
              <p>ここから先は、<br />職務経歴書ではありません。</p>
              <h2>石井匠という人間を、<br /><em>もう少し知るための話です。</em></h2>
            </div>
            <p className="threshold-copy">
              実績、失敗、仕事の進め方。そして、なぜ自分は挑戦をやめないのか。<br className="desktop-break" />
              それぞれは別の話に見えるかもしれません。でも、自分の中ではすべて一つにつながっています。
            </p>
            <Link href="/chapter-02" className="deep-link">
              <span className="deep-link-caption">実務の証明と仕事の進め方</span>
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
