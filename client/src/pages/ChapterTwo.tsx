/**
 * THE LINE OF INTENT / CHAPTER 02
 * Intent: turn curiosity into a coherent proof of ability, values, and a natural invitation to meet.
 */
import { useState } from "react";
import { ArrowUpRight, CircleDot, Mail, MessageCircle } from "lucide-react";
import { Link } from "wouter";

const systemsImage = "/manus-storage/ishii-systems-to-operations_2b5bf073.png";
// 連絡先URLが決まったら、この2行だけを差し替える。
const lineCtaUrl = "https://line.me/ti/p/JuqZS2mvxA";
const mailAddress = "takumi.ishii.0224@gmail.com";
const mailCtaUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(mailAddress)}`;
export default function ChapterTwo() {
  const [emailCopied, setEmailCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(mailAddress);
      setEmailCopied(true);
      window.setTimeout(() => setEmailCopied(false), 2400);
    } catch {
      window.prompt("メールアドレスをコピーしてください", mailAddress);
    }
  };

  return (
    <div className="site-shell chapter-two">
      <a className="skip-link" href="#deep-main">本文へ移動</a>
      <header className="topbar deep-topbar" aria-label="サイトヘッダー" style={{ position: "fixed", top: 0, background: "rgba(11,16,26,0.92)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(244,241,234,0.12)" }}>
        <Link href="/#home-title" className="brand-mark" aria-label="Homeの主見出しへ移動">
          <span>TAKUMI ISHII</span>
        </Link>
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <Link href="/#home-title" className="header-cta">TOP</Link>
          <Link href="/#profile-label" className="header-cta">PROFILE</Link>
          <a href="#contact-label" className="header-cta">CONTACT</a>
        </div>
      </header>

      <main id="deep-main">
        <section className="deep-hero section-ink chapter-proof-hero">
          <div className="page-wrap deep-hero-content">
            <p id="proof-hero-label" className="eyebrow light-eyebrow anchor-label"><span className="signal-dot" /> 自信の根拠</p>
            <div className="deep-title-block proof-hero-title-block">
              <h1 className="proof-hero-title">なぜ、未経験でも<br /><em>「やり切れる」と<span className="proof-hero-mobile-break"><br /></span>言えるのか。</em></h1>
            </div>
            <p className="deep-hero-copy">その自信は、根拠のないものではありません。<br />結果まで形にした経験と、想定外でも前へ進めた経験から示します。</p>
            <div className="proof-map proof-map--two" aria-label="Chapter 2で確認する2つの根拠">
              <article><span>01｜RESULT</span><strong>結果まで形にした経験</strong></article>
              <article><span>02｜RECOVERY</span><strong>問題が起きても、<br />終わらせなかった経験</strong></article>
            </div>
          </div>
        </section>

        <section id="proof-result" className="proof-section proof-result-section">
          <div className="page-wrap">
            <div className="section-heading standard-heading">
              <p className="eyebrow dark-eyebrow"><span className="signal-dot" /> 結果を出した経験</p>
              <h2><em>結果</em>で証明する。</h2>
              <p>実際に、課題を理解して結果まで形にしたことはあるのか。その問いに、ひとつの実例で答えます。</p>
            </div>
            <p className="proof-case-caption">CASE 01｜Accessダッシュボードによる工数可視化・改善</p>
            <div className="proof-flow" aria-label="Accessダッシュボードによる改善の流れ">
              <article>
                <span>ISSUE</span>
                <h3>課題</h3>
                <p>下請け会社に任せていた特定業務で、進捗・作業量・工数を十分に可視化できず、人員配置を定量的に判断できない状態でした。</p>
              </article>
              <article>
                <span>MY ROLE</span>
                <h3>自分の役割</h3>
                <p>課題整理からデータ・指標の定義、ダッシュボードの企画、Accessでの構築、実運用への定着までを担いました。</p>
              </article>
              <article>
                <span>ACTION</span>
                <h3>やったこと</h3>
                <p>作業量・進捗・工数を判断できるAccessダッシュボードを構築し、日々の運用へ落とし込みました。</p>
              </article>
              <article className="proof-result-card">
                <span>RESULT</span>
                <h3>人員適正化へ</h3>
                <p>作業量に応じた人員配置を判断できる状態をつくり、人員適正化につなげました。</p>
                <div className="proof-impact"><strong>1.4<small>人工 / 月</small></strong><p>平均削減量</p></div>
              </article>
            </div>
          </div>
        </section>

        <section id="proof-recovery" className="proof-recovery section-paper">
          <div className="page-wrap">
            <div className="recovery-heading">
              <p className="eyebrow dark-eyebrow"><span className="signal-dot" /> 問題との向き合い方</p>
              <h2>問題が起きたとき、<br /><em>やるべきことを見失わない。</em></h2>
              <p>想定外が重なっても、全部を一度に解こうとはしない。今やるべきことを優先し、一つずつ前へ進めた実例です。</p>
            </div>
            <div className="recovery-layout">
              <div className="recovery-context">
                <p className="recovery-case-caption">CASE 02｜新倉庫移管プロジェクト</p>
                <p>新倉庫への特定書類移管で、システムリリース後にインターフェース、データ量、キャンセル処理に関する問題が発生しました。</p>
              </div>
              <ol className="recovery-timeline" aria-label="問題発生後の対応手順">
                <li><span>01</span><div><h3>起きていることを把握する</h3><p>リリース後に起きた問題を、まずは事実として一つずつ把握する。</p></div></li>
                <li><span>02</span><div><h3>今、止めるべきことを決める</h3><p>影響の大きいものから優先し、対応の順番を決める。</p></div></li>
                <li><span>03</span><div><h3>必要な人と進める</h3><p>自分だけで抱えず、関係者と確認しながら、できる対応を進める。</p></div></li>
                <li><span>04</span><div><h3>一つ直したら、次へ進む</h3><p>修正と確認を重ね、残っている課題を一つずつ減らしていく。</p></div></li>
                <li><span>05</span><div><h3>使える状態になるまで続ける</h3><p>途中で止めず、仕事として使える状態になるまで進め続ける。</p></div></li>
              </ol>
            </div>
            <div className="recovery-close"><CircleDot size={19} /><span>全部を一度に解こうとはしない。<br />今やるべきことを見極め、一つずつ前へ進める。</span></div>
          </div>
        </section>

        <section className="proof-recap section-paper">
          <div className="page-wrap proof-recap-decision">
            <div className="proof-recap-intro">
              <p className="eyebrow dark-eyebrow"><span className="signal-dot" /> この挑戦への約束</p>
              <h2>この挑戦を、<br /><em>任せてよかったと<br />思える仕事にする。</em></h2>
              <p>Web制作の経験がないことは、変えられない事実です。それでも、自分に任せてください。立場にかかわらず、<strong>「石井 匠でよかった」</strong>と思ってもらえるように、必要なことに踏み込み、最後まで形にします。</p>
            </div>
            <div className="proof-recap-evidence">
              <p><span>PROOF 01</span>見えなかった作業量・工数を、<strong>人員配置を判断できる材料</strong>に変えた。</p>
              <p><span>PROOF 02</span>散らばった問題を、<strong>次に対応する順番</strong>に変えた。</p>
              <div className="proof-recap-conclusion">
                <strong>先が見えない状況を、次に判断できる状態へ変える。</strong>
                <p>案件が変わっても、この進め方は変わりません。まずは小さく任せて、進め方と結果を確かめてください。</p>
              </div>
            </div>
          </div>
        </section>

        <section className="deep-ask">
          <div className="ask-overlay" />
          <div className="page-wrap deep-ask-content">
            <p id="contact-label" className="eyebrow light-eyebrow anchor-label"><span className="signal-dot" /> はじめの一歩</p>
            <h2>ぜひ、ここまでの<br /><em>フィードバックをください。</em></h2>
            <p>このLPを読んで感じたこと、気になること、任せてもいいと思えたこと。<br className="desktop-break" />どんな一言でも、ぜひ聞かせてください。</p>
            <div className="final-contact-actions" aria-label="連絡方法">
              {lineCtaUrl ? (
                <a className="final-contact-cta final-contact-cta--line" href={lineCtaUrl}>
                  <MessageCircle size={20} aria-hidden="true" /> LINEで連絡する
                </a>
              ) : (
                <span className="final-contact-cta final-contact-cta--line is-pending" aria-disabled="true">
                  <MessageCircle size={20} aria-hidden="true" /> LINEで連絡する
                </span>
              )}
              {mailCtaUrl ? (
                <a className="final-contact-cta final-contact-cta--mail" href={mailCtaUrl} target="_blank" rel="noreferrer">
                  <Mail size={20} aria-hidden="true" /> Gmailで連絡する
                </a>
              ) : (
                <span className="final-contact-cta final-contact-cta--mail is-pending" aria-disabled="true">
                  <Mail size={20} aria-hidden="true" /> メールで連絡する
                </span>
              )}
            </div>
            <button type="button" className="email-copy-action" onClick={handleCopyEmail}>
              {emailCopied ? "メールアドレスをコピーしました" : "メールアドレスをコピー"}
              <span>{mailAddress}</span>
            </button>
            <Link href="/#home-title" className="back-to-top inline-flex items-center gap-2">
              最初から読み返す <ArrowUpRight size={18} />
            </Link>
          </div>
        </section>
      </main>
      <footer className="footer"><span>THE NEXT CONVERSATION STARTS HERE</span></footer>
    </div>
  );
}
