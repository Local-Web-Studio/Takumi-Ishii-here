/**
 * THE LINE OF INTENT / CHAPTER 02
 * Intent: turn curiosity into a coherent proof of ability, values, and a natural invitation to meet.
 */
import { ArrowLeft, ArrowUpRight, Check, CircleDot, MoveRight } from "lucide-react";
import { Link } from "wouter";

const symbolImage = "/manus-storage/ishii-ti-symbol_b6b82ae3.png";
const systemsImage = "/manus-storage/ishii-systems-to-operations_2b5bf073.png";
const workflowImage = "/manus-storage/ishii-workflow-gates_52abf2e6.png";

const gates = [
  ["01", "目的を定義する", "何のためにサイトを立ち上げるのか。誰に、何を届け、どの行動につなげるのかを確認する。"],
  ["02", "経路を複数つくる", "目的への到達方法を一つに決めつけず、必要な情報・知見とともに選択肢を洗い出す。"],
  ["03", "最適な道を合意する", "会社の基準、関係者の判断、実現性を照らし、進め方と優先順位を確認する。"],
  ["04", "ゲートで確かめる", "節目ごとに方向性、ペース、品質を確認し、手戻りを小さくする。"],
  ["05", "テストして届ける", "問題を見つけ、必要な改善を行い、納品・リリースまで責任を持って進める。"],
];

export default function ChapterTwo() {
  return (
    <div className="site-shell chapter-two">
      <a className="skip-link" href="#deep-main">本文へ移動</a>
      <header className="topbar deep-topbar" aria-label="サイトヘッダー" style={{ position: "fixed", top: 0, background: "rgba(11,16,26,0.92)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(244,241,234,0.12)" }}>
        <Link href="/" className="brand-mark" aria-label="第1章へ戻る">
          <span>TAKUMI ISHII</span>
        </Link>
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <a href="#deep-ask" style={{ font: "500 11px/1 'IBM Plex Mono', monospace", letterSpacing: "0.1em", color: "var(--paper)", borderBottom: "1px solid var(--vermillion)", paddingBottom: "2px" }}>CONTACT</a>
          <Link className="return-link" href="/" style={{ color: "rgba(244,241,234,0.7)" }}><ArrowLeft size={15} /> 最初に戻る</Link>
        </div>
      </header>

      <main id="deep-main">
        <section className="deep-hero section-ink">
          <div className="page-wrap deep-hero-content">
            <img className="deep-symbol" src={symbolImage} alt="" />
            <p className="eyebrow light-eyebrow"><span className="signal-dot" /> 実行の前提</p>
            <div className="deep-title-block">
              <span>TAKUMI<br />ISHII</span>
              <h1>経験のない領域でも、<br /><em>目的から逆算し、</em><br />最後まで形にする。</h1>
            </div>
            <p className="deep-hero-copy">未知の壁を理由に立ち止まらない。<br />目的を定め、必要な知見を集め、関係者と合意しながら、プロジェクトを前へ進め抜く。</p>
          </div>
        </section>

        <section className="spine-section section-cream">
          <div className="page-wrap">
            <p className="eyebrow dark-eyebrow"><span className="signal-dot" /> 仕事を前へ進める姿勢</p>
            <div className="spine-intro">
              <h2>実績も、失敗も、<br />挑戦も。<br /><em>全部、仕事を前へ進める力になる。</em></h2>
              <p>困難や未知の壁に直面したとき、どのように立ち向かい、どうやって前へ進むのか。その原動力となる仕事観を示します。</p>
            </div>
            <div className="spine-path">
              <article><span>01</span><h3>目的を定める</h3><p>誰に何を届け、どの行動につなげるかを最初に明確にする。</p></article>
              <article><span>02</span><h3>道筋をつくる</h3><p>課題を分解し、必要な知見と関係者をつないで進め方を設計する。</p></article>
              <article><span>03</span><h3>最後まで進める</h3><p>検証と改善を重ね、納品・リリースまで責任を持って形にする。</p></article>
            </div>
          </div>
        </section>

        <section className="proof-section">
          <div className="page-wrap">
            <div className="section-heading standard-heading">
              <p className="eyebrow dark-eyebrow"><span className="signal-dot" /> 実務で示す実行力</p>
              <h2>口だけでは、<br /><em>前に進まない。</em></h2>
              <p>三菱自動車での実務において、現場の課題をどのようにデータ化し、仕組みとして解決してきたか。具体的な成果を示す実例です。</p>
            </div>
            <div className="flagship-case">
              <div className="case-number"><span>CASE 01</span><i /></div>
              <div className="case-main">
                <p className="mono-label">FLAGSHIP CASE / ACCESS DASHBOARD</p>
                <h3>工数を「感覚」から<br />「判断できる情報」へ。</h3>
                <p>下請け会社に任せきりだった特定業務の進捗と工数を、Accessで自ら可視化。必要なデータと指標を定義し、ダッシュボードを企画・構築・運用。作業量に応じた人員配置の判断を可能にし、人員適正化へつなげました。</p>
              </div>
              <div className="metric-block"><span>AVERAGE IMPACT</span><strong>1.4<small>人工 / 月</small></strong><p>平均削減量</p></div>
            </div>
          </div>
        </section>

        <section className="truth-section section-ink">
          <div className="page-wrap truth-layout">
            <div>
              <p className="eyebrow light-eyebrow"><span className="signal-dot" /> 失敗から改善へ進む力</p>
              <h2>完璧ではなかった。<br />だから、<br /><em>終わらせなかった。</em></h2>
            </div>
            <div className="truth-copy">
              <p>新倉庫への特定書類移管において、システムリリース後にインターフェースやデータ量に関する課題が発生しました。キャンセル処理の不具合などに対しても、データ構造の不備を自ら切り分け、必要な改善を積み上げました。</p>
              <div className="release-statement"><CircleDot size={20} /><span>問題が起きたら止まらない。<br />原因を分解し、次の改善へ進める。</span></div>
            </div>
          </div>
        </section>

        <section className="method-section section-cream">
          <div className="page-wrap method-top">
            <div className="method-heading"><p className="eyebrow dark-eyebrow"><span className="signal-dot" /> 進め方の再現性</p><h2>知らない領域でも、<br /><em>進め方</em>はぶらさない。</h2><p>未知のプロジェクトに直面したとき、どのようなプロセスで不確実性を潰し、成果へ到達するかの具体的な手順を示します。</p></div>
            <figure className="workflow-art"><img src={workflowImage} alt="プロジェクトの検証ゲートを示す抽象図" /></figure>
          </div>
          <div className="gate-list page-wrap">{gates.map(([number, title, body]) => <article className="gate" key={number}><div className="gate-marker"><span>STEP {number}</span><i /></div><div><h3>{title}</h3><p>{body}</p></div><div className="gate-arrow" aria-hidden="true" style={{ opacity: 0.55, fontSize: "20px", fontFamily: "monospace" }}>→</div></article>)}</div>
        </section>

        <section className="reveal-section">
          <div className="page-wrap reveal-wrap">
            <div className="reveal-statement">
              <p className="eyebrow dark-eyebrow"><span className="signal-dot" /> 事業投資としての価値</p>
              <span className="reveal-quote">“</span>
              <h2>未経験の私に任せることは、<br /><em>あなた（Bさん）にとって</em><br />確かな事業投資になる。</h2>
              <p>「経験がない人に任せるリスク」を、私は圧倒的な当事者意識と、数字・事実に基づく泥臭い実行力でリターンに変えます。指示待ちの受注者ではなく、事業の成果を共につくるパートナーとして動く。</p>
              <p className="reveal-close">この人に任せてよかったと言わせるだけの成果を、ここで必ず証明する。</p>
              <a href="#deep-ask" className="reveal-cta">この挑戦の価値を確かめる <MoveRight size={18} /></a>
            </div>
            <div className="reveal-checks">
              <div><Check size={17} />指示を待たず、自ら課題を定義し突破する</div>
              <div><Check size={17} />三菱自動車で培った実務の精度を持ち込む</div>
              <div><Check size={17} />期待以上のリターンを結果で証明する</div>
            </div>
          </div>
        </section>

        <section id="deep-ask" className="deep-ask">
          <div className="ask-overlay" />
          <div className="page-wrap deep-ask-content">
            <p className="eyebrow light-eyebrow"><span className="signal-dot" /> 対話による最終判断</p>
            <h2>任せる価値があるか、<br /><em>直接、確かめてください。</em></h2>
            <p>この案件をどう理解し、何を先に決め、誰と連携し、どの順番で形にするのか。<br className="desktop-break" />これまでの実績と具体策を、直接お話しさせてください。</p>
            <div className="final-message">
              <img src={symbolImage} alt="" />
              <div>
                <span>最後に、直接お話しする機会をください。</span>
                <strong>Bさんと一度、対話させてください。</strong>
                <small>任せる価値があるかどうかは、その対話のあとでご判断ください。</small>
              </div>
            </div>
            <Link href="/" className="back-to-top inline-flex items-center gap-2">
              最初から読み返す <ArrowUpRight size={18} />
            </Link>
          </div>
        </section>
      </main>
      <footer className="footer"><span>TAKUMI ISHII / SELF SALES LP</span><span>THE NEXT CONVERSATION STARTS HERE</span></footer>
    </div>
  );
}
