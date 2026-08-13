/**
 * THE LINE OF INTENT / CHAPTER 01
 * Intent: withhold the proof just long enough to earn a voluntary click into the deeper story.
 */
import { ArrowDownRight, MoveRight } from "lucide-react";
import { Link } from "wouter";

const heroImage = "/manus-storage/ishii-hero-line-of-intent_08136d36.png";

export default function Home() {
  return (
    <div className="site-shell surface-page">
      <a className="skip-link" href="#main">本文へ移動</a>
      <header className="topbar" aria-label="サイトヘッダー" style={{ position: "fixed", top: 0, background: "rgba(11,16,26,0.92)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(244,241,234,0.12)" }}>
        <a href="#home-title" className="brand-mark" aria-label="主見出しへ移動">
          <span>TAKUMI ISHII</span>
        </a>
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <a href="#home-title" className="header-cta">TOP</a>
          <a href="#profile-label" className="header-cta">PROFILE</a>
          <Link href="/chapter-02#contact-label" className="header-cta">CONTACT</Link>
        </div>
      </header>

      <main id="main">
        <section id="top" className="hero surface-hero" style={{ backgroundImage: `url(${heroImage})` }}>
          <div className="hero-noise" />
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-content page-wrap">
            <div className="hero-title-wrap">
              <h1 id="home-title" className="hero-title-text anchor-label">
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

        <section className="tension-section profile-section section-cream" style={{ borderBottom: "1px solid rgba(11,16,26,0.1)" }}>
          <div className="page-wrap profile-layout">
            <div className="profile-content">
              <p id="profile-label" className="eyebrow dark-eyebrow anchor-label"><span className="signal-dot" /> プロフィール</p>
              <h2>はじめまして、<em>石井 匠</em>です。</h2>
              <div className="profile-stage">
                <figure className="profile-photo-frame" aria-label="プロフィール写真">
                  <div className="profile-photo-container">
                    <img src={`${import.meta.env.BASE_URL}assets/profile-placeholder.jpg`} alt="石井 匠 プロフィール写真" className="profile-photo-img" />
                  </div>
                  <figcaption>TAKUMI ISHII</figcaption>
                </figure>
                <div className="profile-timeline-wrap">
                  <p className="profile-timeline-label">これまでの歩み</p>
                  <ol className="profile-timeline" aria-label="石井匠のこれまでの歩み">
                    <li><span>01</span><strong>自動車メーカー入社</strong></li>
                    <li><span>02</span><strong>物流部門に配属</strong></li>
                    <li><span>03</span><strong>倉庫オペレーション・システム領域へ</strong></li>
                    <li><span>04</span><strong>PM / 改善業務を担当</strong></li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 旧テンションセクション（素直なスタート）はHeroへ統合したため削除 */}

        <section className="spark-section">
          <div className="page-wrap spark-layout">
            <div className="spark-statement">
              <p className="eyebrow light-eyebrow"><span className="signal-dot" /> 挑戦を続ける理由</p>
              <h2 className="spark-title">
                <span>何歳になっても、</span>
                <span>今の自分を<br className="mobile-only-break" />超えていきたい。</span>
              </h2>
            </div>
            <div className="spark-copy">
              <ul className="spark-principles">
                <li><i className="principle-dot" aria-hidden="true" />一つ達成したら、また次の目標をつくる</li>
                <li><i className="principle-dot" aria-hidden="true" />失敗や経験を、自分の価値に変える</li>
                <li><i className="principle-dot" aria-hidden="true" />今回のWeb制作も、その挑戦の一つ</li>
              </ul>
              <div className="spark-action-banner">
                <strong>「だから今回も挑戦する」</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="threshold-section section-cream">
          <div className="page-wrap threshold-wrap">
            <p className="eyebrow dark-eyebrow"><span className="signal-dot" /> 実行力の根拠</p>
            <div className="threshold-question">
              <p>でも、熱意だけでは任せられない。</p>
              <h2>では、なぜ未経験でも<br /><em>「やり切れる」と言えるのか。</em></h2>
            </div>
            <p className="threshold-copy">
              ただ、「やりたい」だけで仕事を任せてほしいとは思っていません。<br />
              その答えは、これまでの仕事の中にあります。
            </p>
            <Link href="/chapter-02#proof-hero-label" className="deep-link">
              <strong>やり切れると言える根拠を見る</strong>
              <MoveRight size={20} />
            </Link>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>THE NEXT STEP BEGINS WITH YOUR CLICK</span>
      </footer>
    </div>
  );
}
