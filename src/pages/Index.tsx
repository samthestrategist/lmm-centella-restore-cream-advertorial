import { Helmet } from "react-helmet-async";

const PDP_URL = "https://samthestrategist.github.io/lmm-centella-restore-cream-pdp/";

const CDN = {
  heroFront: "https://cdn.shopify.com/s/files/1/0462/8591/4267/files/crc-hero-front.png?v=1771408030",
  heroAngle: "https://cdn.shopify.com/s/files/1/0462/8591/4267/files/crc-hero-angle.png?v=1771408032",
  lifestyleHands: "https://cdn.shopify.com/s/files/1/0462/8591/4267/files/crc-lifestyle-hands.png?v=1771408035",
  textureSwatch: "https://cdn.shopify.com/s/files/1/0462/8591/4267/files/crc-texture-swatch.png?v=1771408037",
  bundle3jars: "https://cdn.shopify.com/s/files/1/0462/8591/4267/files/crc-bundle-3jars.png?v=1771408039",
  adOverlay: "https://cdn.shopify.com/s/files/1/0462/8591/4267/files/crc-ad-overlay.png?v=1771408041",
};

const COLORS = {
  primary: "#C4956A",
  cta: "#B85C38",
  headline: "#1A1A1A",
  body: "#333333",
  bg: "#FFFFF8",
  bgDark: "#F7F4EF",
  green: "#2D6A4F",
  accent: "#6B4F3A",
  disclosure: "#8B6954",
};

const CTAButton = ({ href, children, large = false }: { href: string; children: React.ReactNode; large?: boolean }) => (
  <a
    href={href}
    style={{
      display: "inline-block",
      background: COLORS.cta,
      color: "#fff",
      fontFamily: "'DM Sans', sans-serif",
      fontWeight: 700,
      fontSize: large ? "18px" : "16px",
      padding: large ? "18px 44px" : "14px 32px",
      borderRadius: "9999px",
      textDecoration: "none",
      letterSpacing: "0.01em",
      boxShadow: "0 4px 20px rgba(184,92,56,0.25)",
    }}
  >
    {children}
  </a>
);

const Index = () => {
  return (
    <>
      <Helmet>
        <title>The Morning She Stopped Blaming Herself — The Skin Intelligence Review</title>
        <meta name="description" content="For women whose skin changed faster than expected after 40: a new understanding of what's actually happening beneath the surface — and the first cream formulated specifically for that biology." />
      </Helmet>

      <div style={{ fontFamily: "'Georgia', serif", background: COLORS.bg, color: COLORS.body, minHeight: "100vh" }}>

        {/* ADVERTISEMENT DISCLOSURE */}
        <div style={{ background: "#1A1A1A", color: "#ccc", textAlign: "center", padding: "8px 16px", fontSize: "12px", letterSpacing: "0.08em" }}>
          ADVERTISEMENT | ADVERTISER DISCLOSURE
        </div>

        {/* PUBLICATION HEADER */}
        <header style={{ background: COLORS.bgDark, borderBottom: `2px solid ${COLORS.primary}`, padding: "20px 24px", textAlign: "center" }}>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: "24px", color: COLORS.headline, letterSpacing: "-0.02em" }}>
            The Skin Intelligence Review
          </div>
          <div style={{ fontSize: "12px", color: COLORS.accent, marginTop: "4px", letterSpacing: "0.05em" }}>
            INDEPENDENT EDITORIAL | SKINCARE SCIENCE FOR WOMEN 40+
          </div>
        </header>

        {/* DISCLOSURE BOX */}
        <div style={{ maxWidth: "740px", margin: "24px auto", padding: "0 24px" }}>
          <div style={{ background: "#F9F4EF", border: `1px solid ${COLORS.primary}`, borderRadius: "8px", padding: "12px 16px", fontSize: "13px", color: COLORS.disclosure, lineHeight: 1.6 }}>
            <strong>Advertiser Disclosure:</strong> This article is sponsored content produced in partnership with Little Miss Mineral. The Skin Intelligence Review receives compensation from brands we feature. All editorial opinions are our own. This article contains affiliate links — if you purchase through them, we may receive a commission at no additional cost to you.
          </div>
        </div>

        {/* ARTICLE CONTENT */}
        <article style={{ maxWidth: "740px", margin: "0 auto", padding: "0 24px 80px" }}>

          {/* HEADLINE */}
          <h1 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: "clamp(28px, 5vw, 42px)", lineHeight: 1.15, color: COLORS.headline, margin: "40px 0 20px", letterSpacing: "-0.02em" }}>
            The Morning She Stopped Blaming Herself — And Started Asking Why
          </h1>

          <p style={{ fontSize: "20px", fontStyle: "italic", color: COLORS.accent, lineHeight: 1.6, marginBottom: "32px", borderLeft: `3px solid ${COLORS.primary}`, paddingLeft: "16px" }}>
            For women whose skin changed faster than expected after 40: a new understanding of what's actually happening beneath the surface — and the first cream formulated specifically for that biology.
          </p>

          {/* HERO IMAGE */}
          <img
            src={CDN.lifestyleHands}
            alt="Centella Restore Cream — lifestyle"
            style={{ width: "100%", borderRadius: "12px", marginBottom: "40px", boxShadow: "0 8px 32px rgba(0,0,0,0.10)" }}
          />

          {/* OPENING STORY */}
          <p style={{ fontSize: "17px", lineHeight: 1.9, marginBottom: "20px" }}>
            It happened on a Tuesday in March, in her own kitchen.
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.9, marginBottom: "20px" }}>
            Jennifer was standing at the sink, rinsing a coffee mug before work. The morning light came in sideways through the window the way it does in early spring — that particular slant that shows everything. She caught her reflection in the darkened glass of the microwave and held there for a moment.
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.9, marginBottom: "20px" }}>
            She didn't look bad, exactly. She looked tired. She always looked tired now, regardless of how much sleep she got. There was a flatness to her face that hadn't been there at 40. A hollowness below the eyes. Skin that seemed somehow thinner, like the material had changed.
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.9, marginBottom: "20px", fontStyle: "italic", color: COLORS.accent }}>
            <em>I still feel 38 inside. I just want my face to match.</em>
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.9, marginBottom: "20px" }}>
            She was 47. She had a full routine — a good one, built carefully over years: the vitamin C serum her friend had recommended, the retinol she'd worked up to, the hyaluronic acid she used morning and night, the moisturizer that cost $82 and had a paragraph about "biomimetic peptides" on the box. She applied it faithfully every morning and every night. And every morning she woke up looking exactly the same.
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.9, marginBottom: "40px" }}>
            Standing there in the Tuesday morning light, she let herself feel what she'd been quietly feeling for two years: that something had changed in her skin at the cellular level, and no moisturizer — even a very expensive one — had been built to address it. She was more right than she knew.
          </p>

          {/* PROBLEM SECTION */}
          <h2 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: "clamp(22px, 3vw, 30px)", color: COLORS.headline, margin: "48px 0 20px" }}>
            What Nobody Told Her About Perimenopause and Skin
          </h2>
          <p style={{ fontSize: "17px", lineHeight: 1.9, marginBottom: "20px" }}>
            The frustration Jennifer felt wasn't about the wrong products. It was about biology that no skincare brand had bothered to explain to her.
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.9, marginBottom: "20px" }}>
            Starting in her early-to-mid 40s, estrogen levels begin a gradual but significant decline. Most women connect estrogen decline to hot flashes, mood changes, disrupted sleep. What's less discussed — almost never discussed in beauty marketing — is what estrogen decline does to the skin specifically.
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.9, marginBottom: "20px" }}>
            <strong>Estrogen is a collagen regulator.</strong> It stimulates the production of Type I collagen — the structural scaffold that gives skin its thickness, resilience, and the quality of "bounce" that makes skin look and feel alive. Studies show that skin loses approximately 30% of its collagen in the first five years of menopause. Not over a lifetime — in five years.
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.9, marginBottom: "20px" }}>
            More specifically: estrogen decline causes fibroblasts — the skin's "builder cells," responsible for collagen synthesis — to slow down dramatically. They don't disappear. They go dormant. They stop responding to the usual signals.
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.9, marginBottom: "20px" }}>
            Simultaneously, the skin barrier becomes more permeable. Ceramide production decreases, creating microscopic permeability in the tight junctions of the skin. This is the reason Jennifer's moisturizer wasn't holding — her skin had developed what researchers call increased transepidermal water loss (TEWL). She was moisturizing into a leaking system.
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.9, marginBottom: "40px", fontWeight: 600, color: COLORS.headline }}>
            This is why Jennifer's $82 moisturizer failed her. Not because it was a bad product. Because it was designed for skin that still had functional fibroblasts and an intact barrier — which is to say, it was designed for skin that was 25.
          </p>

          {/* PRODUCT IMAGE */}
          <img
            src={CDN.heroFront}
            alt="Centella Restore Cream™"
            style={{ width: "100%", maxWidth: "400px", display: "block", margin: "0 auto 40px", borderRadius: "16px", boxShadow: "0 8px 32px rgba(0,0,0,0.10)" }}
          />

          {/* MECHANISM */}
          <h2 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: "clamp(22px, 3vw, 30px)", color: COLORS.headline, margin: "0 0 20px" }}>
            The Discovery That Changed the Formulation
          </h2>
          <p style={{ fontSize: "17px", lineHeight: 1.9, marginBottom: "20px" }}>
            The team behind Little Miss Mineral had heard versions of Jennifer's story hundreds of times. Women in their late 40s, routines intact, doing everything right — and still losing ground.
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.9, marginBottom: "20px" }}>
            The research question they kept returning to was this: if the problem is biological, then the solution has to be biological too. It has to speak the language of fibroblasts and barrier proteins. It can't just sit on the surface and add moisture.
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.9, marginBottom: "20px" }}>
            That's when they focused on <strong>TECA: Titrated Extract of Centella Asiatica.</strong>
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.9, marginBottom: "20px" }}>
            Centella Asiatica has been used in pharmaceutical-grade wound healing since the 1960s. It's registered in the European Pharmacopoeia, the British Herbal Pharmacopoeia, and the Chinese Pharmacopoeia. Korean dermatologists have known about it for generations. But it's only recently that the specific mechanism has been fully documented in peer-reviewed research published by the NIH.
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.9, marginBottom: "20px" }}>
            The research (PMC3834700, Maquart et al.) confirmed that TECA's active compounds directly signal dormant fibroblasts to proliferate, migrate, and return to collagen production. It doesn't just nourish skin — it communicates with the cells that have gone quiet and tells them to wake up.
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.9, marginBottom: "40px" }}>
            The formulation team called the process they'd discovered the <strong>Centelloid Renewal Cascade™</strong>.
          </p>

          {/* THREE PHASES */}
          <h2 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: "clamp(22px, 3vw, 30px)", color: COLORS.headline, margin: "0 0 20px" }}>
            The Three Phases of the Centelloid Renewal Cascade™
          </h2>

          {[
            {
              phase: "Phase 1 — Fibroblast Reactivation",
              text: "TECA contains four documented active compounds — asiaticoside, madecassoside, asiatic acid, and madecassic acid. These compounds interact directly with dormant fibroblasts, signaling the cells to proliferate and migrate — essentially restarting the construction crew that estrogen decline had put on indefinite leave. This is documented cellular activity, confirmed in wound-healing studies and replicated in dermatological research. The cells that build collagen can be signaled back into action. Phase 1 is that signal.",
            },
            {
              phase: "Phase 2 — Type I Collagen Synthesis",
              text: "Reactivated fibroblasts specifically increase Type I collagen production — the structural scaffold that deteriorates fastest with age and estrogen decline. This is the collagen that gives skin its thickness and resilience — the quality that makes skin look like itself, not like a thinner, more fragile version. TECA also increases fibronectin production — the protein that holds collagen fibers in their proper formation. Together, TECA-stimulated collagen and fibronectin create genuine architectural restoration — not surface plumping, but structural rebuilding from within.",
            },
            {
              phase: "Phase 3 — Barrier & Hydration Restoration",
              text: "Rather than applying hyaluronic acid from outside, the triterpenoid compounds in TECA stimulate the skin's own glycosaminoglycan synthesis — signaling the skin to produce its own hyaluronic acid from within. Simultaneously, ceramide-supporting compounds rebuild the barrier — repairing the microscopic permeability that had been causing constant dryness. The bucket gets refilled. And for the first time, the hole gets patched.",
            },
          ].map((phase, i) => (
            <div key={i} style={{ background: COLORS.bgDark, borderRadius: "12px", padding: "28px 32px", marginBottom: "20px", borderLeft: `4px solid ${COLORS.primary}` }}>
              <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "18px", color: COLORS.headline, marginBottom: "12px" }}>{phase.phase}</h3>
              <p style={{ fontSize: "16px", lineHeight: 1.8, margin: 0 }}>{phase.text}</p>
            </div>
          ))}

          {/* SOCIAL PROOF */}
          <h2 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: "clamp(22px, 3vw, 30px)", color: COLORS.headline, margin: "48px 0 20px" }}>
            What Happened When Women Used It for 8 Weeks
          </h2>
          <p style={{ fontSize: "17px", lineHeight: 1.9, marginBottom: "20px" }}>
            After the first production run of Centella Restore Cream™, the response came in a particular pattern. Women weren't writing in about dramatic before-and-afters. They were writing in about quiet moments — recognizing themselves in a mirror they'd been avoiding. Going bare-faced on a Zoom call for the first time in years.
          </p>

          {[
            {
              quote: "I've been burned too many times to get excited about a new moisturizer. I ordered the 2-jar bundle because of the guarantee. Week seven, I realized I'd stopped dreading the bathroom mirror in the morning. That's it. That's the whole story. The mirror stopped being something I managed and started just being... a mirror.",
              name: "Carol, 52", location: "Portland, OR",
            },
            {
              quote: "My skin felt thin. Like the material had changed. Eight weeks into the Centella Restore Cream, it's different. There's something there again. My skin feels like it has structure. My skin feels like mine.",
              name: "Margaret, 48", location: "Houston, TX",
            },
          ].map((t, i) => (
            <div key={i} style={{ borderLeft: `4px solid ${COLORS.primary}`, paddingLeft: "20px", marginBottom: "28px" }}>
              <p style={{ fontSize: "17px", lineHeight: 1.8, fontStyle: "italic", marginBottom: "8px" }}>"{t.quote}"</p>
              <p style={{ fontSize: "14px", color: COLORS.accent, fontWeight: 600 }}>— {t.name}, {t.location}</p>
            </div>
          ))}

          {/* TEXTURE IMAGE */}
          <img
            src={CDN.textureSwatch}
            alt="Centella Restore Cream texture"
            style={{ width: "100%", borderRadius: "12px", margin: "32px 0", boxShadow: "0 4px 16px rgba(0,0,0,0.08)" }}
          />

          {/* OFFER */}
          <h2 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: "clamp(22px, 3vw, 30px)", color: COLORS.headline, margin: "48px 0 20px" }}>
            Centella Restore Cream™ by Little Miss Mineral — The Offer
          </h2>
          <p style={{ fontSize: "17px", lineHeight: 1.9, marginBottom: "20px" }}>
            Centella Restore Cream™ is available exclusively at LittleMissMineral.com in three bundle configurations designed around the Centelloid Renewal Cascade protocol.
          </p>

          {/* Offer box */}
          <div style={{ background: COLORS.bgDark, borderRadius: "16px", padding: "32px", marginBottom: "32px", border: `1px solid rgba(196,149,106,0.3)` }}>
            {[
              { name: "Try It — 1 Jar", price: "$79", discounted: "$59.25", extras: ["Digital \"Centella Skin Protocol\" Guide (free, $29 value)", "Free shipping on orders over $50"] },
              { name: "Best Seller — 2 Jars", price: "$149", discounted: "$111.75", badge: "⭐ MOST POPULAR", extras: ["Digital \"Centella Skin Protocol\" Guide (free)", "Mini Rose Quartz Facial Roller (free, $24.99 value)", "Free shipping included"] },
              { name: "Best Value — 3 Jars", price: "$197", discounted: "$147.75", extras: ["Digital \"Centella Skin Protocol\" Guide (free)", "Rose Quartz Roller (free, $24.99 value)", "3-Pack Collagen Sheet Masks (free, $24.99 value)", "Free shipping included"] },
            ].map((tier, i) => (
              <div key={i} style={{ borderBottom: i < 2 ? "1px solid rgba(196,149,106,0.2)" : "none", paddingBottom: i < 2 ? "20px" : "0", marginBottom: i < 2 ? "20px" : "0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", marginBottom: "8px" }}>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "18px", color: COLORS.headline }}>{tier.name}</span>
                  {tier.badge && <span style={{ background: COLORS.cta, color: "#fff", fontSize: "11px", fontWeight: 700, padding: "2px 8px", borderRadius: "9999px" }}>{tier.badge}</span>}
                </div>
                <div style={{ display: "flex", gap: "12px", alignItems: "baseline", marginBottom: "8px" }}>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: "22px", color: COLORS.cta }}>{tier.discounted}</span>
                  <span style={{ textDecoration: "line-through", color: "#9CA3AF" }}>reg. {tier.price}</span>
                  <span style={{ background: COLORS.green, color: "#fff", fontSize: "11px", fontWeight: 700, padding: "2px 8px", borderRadius: "9999px" }}>25% OFF with SECRET25</span>
                </div>
                <ul style={{ fontSize: "14px", color: COLORS.body, margin: "8px 0 0 0", paddingLeft: "20px" }}>
                  {tier.extras.map((e, j) => <li key={j} style={{ marginBottom: "4px" }}>✓ {e}</li>)}
                </ul>
              </div>
            ))}
          </div>

          {/* Guarantee */}
          <div style={{ background: "#EEF7F1", borderRadius: "12px", padding: "24px 28px", marginBottom: "32px", border: "1px solid #A8D5B5" }}>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "18px", color: "#166534", margin: "0 0 8px" }}>
              🛡️ 60-Day Money-Back Guarantee
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, margin: 0, color: "#1A4731" }}>
              The Centelloid Renewal Cascade takes 8 weeks to show its deepest work. If you're not seeing what we've described, email us and we'll refund every cent. No forms, no fine print, no hoops. The 60-day guarantee isn't a policy. It's a statement of confidence.
            </p>
          </div>

          {/* URGENCY */}
          <div style={{ background: "#FFF8F0", borderRadius: "12px", padding: "20px 24px", marginBottom: "40px", border: `1px solid rgba(196,149,106,0.4)` }}>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: "15px", color: COLORS.cta, margin: "0 0 8px" }}>
              📦 A Note on the Free Gifts
            </p>
            <p style={{ fontSize: "14px", lineHeight: 1.7, margin: 0 }}>
              The Rose Quartz Rollers and Collagen Sheet Masks ship from Little Miss Mineral's fulfillment center in limited quantities per month. If you're ordering the 2-jar or 3-jar bundle for the gifts specifically, the current inventory is live and shipping now. The cream itself is available without interruption.
            </p>
          </div>

          {/* CTA */}
          <div style={{ textAlign: "center", padding: "48px 24px", background: `linear-gradient(135deg, #FDF4EC 0%, #F5E6D3 100%)`, borderRadius: "20px" }}>
            <img src={CDN.bundle3jars} alt="Centella Restore Cream bundle" style={{ maxWidth: "320px", width: "100%", borderRadius: "16px", marginBottom: "24px" }} />
            <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: "clamp(22px, 3vw, 28px)", color: COLORS.headline, marginBottom: "16px" }}>
              Start Your Centelloid Renewal Cascade™
            </h3>
            <p style={{ fontSize: "16px", color: COLORS.accent, marginBottom: "8px" }}>
              → Use code <strong>SECRET25</strong> for 25% off any bundle
            </p>
            <p style={{ fontSize: "15px", color: COLORS.accent, marginBottom: "28px" }}>
              → 60-Day Money-Back Guarantee | Free gifts with every order
            </p>
            <CTAButton href={PDP_URL} large>
              View Bundles & Shop Now →
            </CTAButton>
            <p style={{ fontSize: "13px", color: COLORS.accent, marginTop: "16px" }}>
              "I still feel 38 inside. I just want my face to match."<br />
              If that sentence landed — this is for you.
            </p>
          </div>

        </article>

        {/* FOOTER */}
        <footer style={{ background: "#1A1A1A", color: "#9CA3AF", padding: "40px 24px", textAlign: "center" }}>
          <div style={{ maxWidth: "740px", margin: "0 auto" }}>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "16px", color: "#fff", marginBottom: "12px" }}>The Skin Intelligence Review</p>
            <p style={{ fontSize: "12px", lineHeight: 1.8, maxWidth: "600px", margin: "0 auto 12px" }}>
              <strong>Advertiser Disclosure:</strong> This page contains affiliate links and sponsored placements. Centella Restore Cream™ is a featured partner. We receive compensation for featuring this product.
            </p>
            <p style={{ fontSize: "12px", lineHeight: 1.8, maxWidth: "600px", margin: "0 auto 12px" }}>
              <strong>FDA Disclaimer:</strong> These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease. Results may vary.
            </p>
            <p style={{ fontSize: "12px" }}>
              © 2026 The Skin Intelligence Review | Published in partnership with Little Miss Mineral
            </p>
          </div>
        </footer>

      </div>
    </>
  );
};

export default Index;
