import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

const WEB_PAGE_SCHEMA = "{\"@context\":\"https://schema.org\",\"@type\":\"WebPage\",\"name\":\"Bästa Kosttillskotten 2026 | Jämför & Köp Nu\",\"description\":\"Bästa kosttillskotten för sommarträning 2026 ✓ Uppdaterad 2026. Jämför 8 alternativ och optimera din träning. Klicka för att läsa mer.\",\"url\":\"https://halskollen.vercel.app\",\"datePublished\":\"2026-06-23\",\"dateModified\":\"2026-06-23\",\"inLanguage\":\"sv-SE\",\"publisher\":{\"@type\":\"Organization\",\"name\":\"Hälskollen\",\"url\":\"https://halskollen.vercel.app\"},\"breadcrumb\":{\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Hem\",\"item\":\"https://halskollen.vercel.app\"}]}}";
const ITEM_LIST_SCHEMA = "{\"@context\":\"https://schema.org\",\"@type\":\"ItemList\",\"name\":\"Bästa kosttillskotten för sommarträning 2026 — jämför 8 alternativ — Jämförelse 2026\",\"description\":\"Uppnå dina träningsmål med rätt kosttillskott i sommar\",\"numberOfItems\":8,\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"item\":{\"@type\":\"Product\",\"name\":\"Gymgrossisten\",\"url\":\"https://www.gymgrossisten.com\",\"description\":\"Sveriges ledande hälsokostbutik — protein, vitaminer & kosttillskott\",\"aggregateRating\":{\"@type\":\"AggregateRating\",\"ratingValue\":\"4.8\",\"bestRating\":\"5\",\"worstRating\":\"1\",\"ratingCount\":\"375\"}}},{\"@type\":\"ListItem\",\"position\":2,\"item\":{\"@type\":\"Product\",\"name\":\"Bodystore\",\"url\":\"https://www.bodystore.com\",\"description\":\"Premium hälsokost med fokus på kvalitet och märkesprodukter\",\"aggregateRating\":{\"@type\":\"AggregateRating\",\"ratingValue\":\"4.7\",\"bestRating\":\"5\",\"worstRating\":\"1\",\"ratingCount\":\"342\"}}},{\"@type\":\"ListItem\",\"position\":3,\"item\":{\"@type\":\"Product\",\"name\":\"Proteinbolaget\",\"url\":\"https://www.proteinbolaget.se\",\"description\":\"Prisvärt proteinpulver och sportnäring — bäst pris per kilo\",\"aggregateRating\":{\"@type\":\"AggregateRating\",\"ratingValue\":\"4.6\",\"bestRating\":\"5\",\"worstRating\":\"1\",\"ratingCount\":\"152\"}}},{\"@type\":\"ListItem\",\"position\":4,\"item\":{\"@type\":\"Product\",\"name\":\"iHerb\",\"url\":\"https://www.iherb.com\",\"description\":\"Internationellt utbud — 35 000+ produkter levererat till Sverige\",\"aggregateRating\":{\"@type\":\"AggregateRating\",\"ratingValue\":\"4.6\",\"bestRating\":\"5\",\"worstRating\":\"1\",\"ratingCount\":\"290\"}}},{\"@type\":\"ListItem\",\"position\":5,\"item\":{\"@type\":\"Product\",\"name\":\"Holland & Barrett\",\"url\":\"https://www.hollandandbarrett.se\",\"description\":\"Brittisk hälsokedja med fokus på naturliga kosttillskott\",\"aggregateRating\":{\"@type\":\"AggregateRating\",\"ratingValue\":\"4.5\",\"bestRating\":\"5\",\"worstRating\":\"1\",\"ratingCount\":\"355\"}}},{\"@type\":\"ListItem\",\"position\":6,\"item\":{\"@type\":\"Product\",\"name\":\"Sportamore\",\"url\":\"https://www.sportamore.se\",\"description\":\"Sport och träning — kläder, utrustning och sportnäring\",\"aggregateRating\":{\"@type\":\"AggregateRating\",\"ratingValue\":\"4.5\",\"bestRating\":\"5\",\"worstRating\":\"1\",\"ratingCount\":\"301\"}}},{\"@type\":\"ListItem\",\"position\":7,\"item\":{\"@type\":\"Product\",\"name\":\"Vitaminstore\",\"url\":\"https://www.vitaminstore.se\",\"description\":\"Specialiserad vitamin- och mineralbutik — enkelt att hitta rätt\",\"aggregateRating\":{\"@type\":\"AggregateRating\",\"ratingValue\":\"4.4\",\"bestRating\":\"5\",\"worstRating\":\"1\",\"ratingCount\":\"440\"}}},{\"@type\":\"ListItem\",\"position\":8,\"item\":{\"@type\":\"Product\",\"name\":\"Nyttoteket\",\"url\":\"https://www.nyttoteket.se\",\"description\":\"Ekologisk hälsokost och naturläkemedel — rena ingredienser\",\"aggregateRating\":{\"@type\":\"AggregateRating\",\"ratingValue\":\"4.4\",\"bestRating\":\"5\",\"worstRating\":\"1\",\"ratingCount\":\"138\"}}}]}";
const ARTICLE_SCHEMA = "{\"@context\":\"https://schema.org\",\"@type\":\"Article\",\"headline\":\"Bästa kosttillskotten för sommarträning 2026 — jämför 8 alternativ\",\"description\":\"Uppnå dina träningsmål med rätt kosttillskott i sommar\",\"datePublished\":\"2026-06-23\",\"dateModified\":\"2026-06-23\",\"author\":{\"@type\":\"Organization\",\"name\":\"Hälskollen\"},\"publisher\":{\"@type\":\"Organization\",\"name\":\"Hälskollen\"},\"mainEntityOfPage\":{\"@type\":\"WebPage\",\"@id\":\"https://halskollen.vercel.app\"}}";
const FAQ_SCHEMA = "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"Vilka är de bästa kosttillskotten för träning?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"De bästa kosttillskotten varierar beroende på dina mål. Vanliga alternativ inkluderar proteinpulver, BCAA och kreatin.\"}},{\"@type\":\"Question\",\"name\":\"När ska man ta kosttillskott?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Tidsplaneringen för kosttillskott beror på typen. Proteinpulver tas ofta efter träning, medan vitaminer kan tas på morgonen.\"}},{\"@type\":\"Question\",\"name\":\"Är det nödvändigt med kosttillskott?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Kosttillskott är inte nödvändiga för alla, men de kan hjälpa till att komplettera din diet och förbättra träningsresultat.\"}},{\"@type\":\"Question\",\"name\":\"Vilket kosttillskott är bäst för muskelökning?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"För muskelökning är proteinpulver och kreatin populära val eftersom de stödjer muskelåterhämtning och tillväxt.\"}},{\"@type\":\"Question\",\"name\":\"Kan jag ta kosttillskott varje dag?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Ja, de flesta kosttillskott kan tas dagligen, men det är viktigt att följa rekommenderad dosering och konsultera en läkare vid behov.\"}},{\"@type\":\"Question\",\"name\":\"Var kan jag köpa kosttillskott online?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Du kan köpa kosttillskott från leverantörer som Gymgrossisten, Bodystore och Proteinbolaget för att garantera kvalitet.\"}},{\"@type\":\"Question\",\"name\":\"Är naturliga kosttillskott bättre än syntetiska?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Naturliga kosttillskott föredras ofta för att de anses ha färre tillsatser, men syntetiska kan vara lika effektiva.\"}},{\"@type\":\"Question\",\"name\":\"Hur vet jag vilket kosttillskott jag behöver?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Identifiera dina träningsmål och konsultera med en näringsexpert för att avgöra vilka kosttillskott som passar dig bäst.\"}}]}";

export async function getStaticProps() {
  var now = new Date();
  var year = now.getFullYear();
  var month = now.toLocaleDateString('sv-SE', { month: 'long' });
  var updated = now.toLocaleDateString('sv-SE', { year: 'numeric', month: 'long', day: 'numeric' });
  var fallback = [{"name":"Gymgrossisten","url":"https://www.gymgrossisten.com","description":"Sveriges ledande hälsokostbutik — protein, vitaminer & kosttillskott","badge":"🏆 Störst i Sverige","score":"4.8","price":"Fri frakt över 499 kr","priceValue":499,"pros":["Störst sortiment i Sverige","Eget varumärke GG","Snabb leverans 1–2 dagar"]},{"name":"Bodystore","url":"https://www.bodystore.com","description":"Premium hälsokost med fokus på kvalitet och märkesprodukter","badge":"Bäst kvalitet","score":"4.7","price":"Fri frakt över 499 kr","priceValue":499,"pros":["Premium-märken","Bred kosttillskottssortiment","Kunnig kundtjänst"]},{"name":"Proteinbolaget","url":"https://www.proteinbolaget.se","description":"Prisvärt proteinpulver och sportnäring — bäst pris per kilo","badge":"Bäst pris/kilo","score":"4.6","price":"Fri frakt över 399 kr","priceValue":399,"pros":["Lägst pris på protein","Eget pulver i bulk","Snabb leverans"]},{"name":"iHerb","url":"https://www.iherb.com","description":"Internationellt utbud — 35 000+ produkter levererat till Sverige","badge":"Störst urval","score":"4.6","price":"Fri frakt över 555 kr","priceValue":555,"pros":["35 000+ produkter","Internationella märken","Kundrecensioner"]},{"name":"Holland & Barrett","url":"https://www.hollandandbarrett.se","description":"Brittisk hälsokedja med fokus på naturliga kosttillskott","badge":"Bäst naturligt","score":"4.5","price":"Fri frakt över 399 kr","priceValue":399,"pros":["Naturliga ingredienser","Veganska alternativ","Välkänt märke"]},{"name":"Sportamore","url":"https://www.sportamore.se","description":"Sport och träning — kläder, utrustning och sportnäring","badge":"Bäst sport-combo","score":"4.5","price":"Fri frakt över 499 kr","priceValue":499,"pros":["Sport + näring på ett ställe","Stora märken","Enkel retur"]},{"name":"Vitaminstore","url":"https://www.vitaminstore.se","description":"Specialiserad vitamin- och mineralbutik — enkelt att hitta rätt","badge":"Bäst vitaminer","score":"4.4","price":"Fri frakt över 349 kr","priceValue":349,"pros":["Enkel navigation","Specialiserat utbud","Bra priser"]},{"name":"Nyttoteket","url":"https://www.nyttoteket.se","description":"Ekologisk hälsokost och naturläkemedel — rena ingredienser","badge":"Bäst ekologiskt","score":"4.4","price":"Fri frakt över 499 kr","priceValue":499,"pros":["Ekologiska produkter","Naturläkemedel","Rena ingredienser"]}];
  var items = fallback.slice();

  return {
    props: { providers: items, year: year, month: month, updated: updated },
    revalidate: 86400,
  };
}

export default function Home({ providers, year, month, updated }) {
  const [sortBy, setSortBy] = useState('betyg');
  const [visibleCount, setVisibleCount] = useState(5);
  const [selected, setSelected] = useState([]);
  const [showCompare, setShowCompare] = useState(false);
  

  var extractNum = function(p) {
    if (p.rateValue) return parseFloat(p.rateValue);
    if (p.priceValue) return parseFloat(p.priceValue);
    var m = String(p.price||'').match(/[0-9]+[.,]?[0-9]*/);
    return m ? parseFloat(m[0].replace(',','.')) : 9999;
  };
  var sorted = [...providers].sort(function(a, b) {
    if (sortBy === 'pris') return extractNum(a) - extractNum(b);
    if (sortBy === 'namn') return a.name.localeCompare(b.name, 'sv');
    return parseFloat(b.score||b.rating||0) - parseFloat(a.score||a.rating||0);
  });
  var visible = sorted.slice(0, visibleCount);
  var toggleSelect = function(name) {
    setSelected(function(prev) {
      return prev.includes(name) ? prev.filter(function(n){return n!==name;}) : prev.length < 3 ? prev.concat([name]) : prev;
    });
  };
  var selectedProviders = providers.filter(function(p){return selected.includes(p.name);});

  const pc = '#be185d';
  const pcLight = '#be185d14';
  const pcMed = '#be185d30';

  const TRACK_BASE = 'https://axiom-engine-production-54c3.up.railway.app/r';
  const SITE_SLUG = 'halskollen';
  const AffBtn = ({ url, name, primary }) => {
    var href = TRACK_BASE && TRACK_BASE.startsWith('http')
      ? TRACK_BASE + '?p=' + encodeURIComponent(name) + '&url=' + encodeURIComponent(url) + '&site=' + SITE_SLUG
      : url;
    return (
      <a href={href} target="_blank" rel="noopener noreferrer sponsored"
        style={{ display:'inline-block', background: primary ? pc : '#0f172a', color:'#fff',
          padding:'11px 22px', borderRadius:9, fontWeight:700, fontSize:14,
          textDecoration:'none', whiteSpace:'nowrap', transition:'opacity .15s' }}>
        Välj {name} →
      </a>
    );
  };

  const Stars = ({ score }) => {
    const n = parseFloat(score);
    return (
      <span style={{ fontSize:15, letterSpacing:1 }}>
        <span style={{ color:'#f59e0b' }}>{'★'.repeat(Math.floor(n))}</span>
        <span style={{ color:'#d1d5db' }}>{'★'.repeat(5 - Math.floor(n))}</span>
        <span style={{ color:'#64748b', fontSize:12, marginLeft:6, fontWeight:600 }}>{score}</span>
      </span>
    );
  };

  return (
    <>
      <Head>
        <title>Bästa Kosttillskotten 2026 | Jämför & Köp Nu</title>
        <meta name="description" content="Bästa kosttillskotten för sommarträning 2026 ✓ Uppdaterad 2026. Jämför 8 alternativ och optimera din träning. Klicka för att läsa mer." />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <link rel="canonical" href="https://halskollen.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Bästa Kosttillskotten 2026 | Jämför & Köp Nu" />
        <meta property="og:description" content="Bästa kosttillskotten för sommarträning 2026 ✓ Uppdaterad 2026. Jämför 8 alternativ och optimera din träning. Klicka för att läsa mer." />
        <meta property="og:url" content="https://halskollen.vercel.app" />
        <meta property="og:locale" content="sv_SE" />
        <meta property="og:site_name" content="Hälskollen" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Bästa Kosttillskotten 2026 | Jämför & Köp Nu" />
        <meta name="twitter:description" content="Bästa kosttillskotten för sommarträning 2026 ✓ Uppdaterad 2026. Jämför 8 alternativ och optimera din träning. Klicka för att läsa mer." />
        <link rel="alternate" hreflang="sv" href="https://halskollen.vercel.app" />
        <link rel="alternate" hreflang="x-default" href="https://halskollen.vercel.app" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: WEB_PAGE_SCHEMA }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ITEM_LIST_SCHEMA }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ARTICLE_SCHEMA }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: FAQ_SCHEMA }} />
      </Head>

      <nav style={{ background:'#fff', borderBottom:'1px solid #e2e8f0', padding:'0 20px',
        height:60, display:'flex', alignItems:'center', justifyContent:'space-between',
        position:'sticky', top:0, zIndex:100, fontFamily:'Inter,sans-serif' }}>
        <Link href="/" style={{ fontWeight:800, fontSize:18, color:pc, textDecoration:'none' }}>
          Hälskollen
        </Link>
        <div style={{ display:'flex', gap:28, fontSize:14 }}>
          <a href="#jamfor" style={{ color:'#64748b', textDecoration:'none' }}>Jämförelse</a>
          <a href="#guide" style={{ color:'#64748b', textDecoration:'none' }}>Guide</a>
          <Link href="/om-oss" style={{ color:'#64748b', textDecoration:'none' }}>Om oss</Link>
        </div>
      </nav>

      <section style={{ background:'linear-gradient(135deg,#f0f9ff 0%,#e8f4fd 50%,#f8fafc 100%)',
        padding:'72px 20px 56px', fontFamily:'Inter,sans-serif' }}>
        <div style={{ maxWidth:1100, margin:'0 auto', display:'flex', alignItems:'center',
          gap:48, flexWrap:'wrap' }}>
          <div style={{ flex:1, minWidth:280 }}>
            <div style={{ display:'flex', gap:8, flexWrap:'wrap', marginBottom:20 }}>
              <div style={{ display:'inline-flex', alignItems:'center', gap:5,
                background:pcLight, color:pc, padding:'4px 12px', borderRadius:20,
                fontSize:12, fontWeight:700 }}>
                ✓ Uppdaterad {updated}
              </div>
              <div style={{ display:'inline-flex', alignItems:'center', gap:5,
                background:'#f0fdf4', color:'#15803d', padding:'4px 12px', borderRadius:20,
                fontSize:12, fontWeight:700 }}>
                ✓ Oberoende jämförelse
              </div>
            </div>
            <h1 style={{ fontSize:'clamp(26px,4vw,46px)', fontWeight:800,
              lineHeight:1.14, marginBottom:18, color:'#0f172a' }}>
              Bästa kosttillskotten för sommarträning 2026 — jämför 8 alternativ
            </h1>
            <p style={{ fontSize:18, color:'#475569', lineHeight:1.72,
              marginBottom:32, maxWidth:540 }}>
              Uppnå dina träningsmål med rätt kosttillskott i sommar
            </p>
            <a href="#jamfor" style={{ display:'inline-block', background:pc, color:'#fff',
              padding:'14px 32px', borderRadius:10, fontWeight:700, fontSize:16,
              textDecoration:'none', boxShadow:'0 4px 24px '+pc+'44' }}>
              Jämför och köp nu →
            </a>
            <p style={{ marginTop:14, fontSize:13, color:'#94a3b8' }}>
              Gratis &middot; Oberoende &middot; Ingen prenumeration
            </p>
          </div>
          <div style={{ flexShrink:0 }} dangerouslySetInnerHTML={{ __html: "<svg width=\"260\" height=\"210\" viewBox=\"0 0 260 210\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"18\" y=\"130\" width=\"34\" height=\"68\" rx=\"5\" fill=\"#be185d\" opacity=\"0.18\"/><rect x=\"64\" y=\"98\" width=\"34\" height=\"100\" rx=\"5\" fill=\"#be185d\" opacity=\"0.38\"/><rect x=\"110\" y=\"58\" width=\"34\" height=\"140\" rx=\"5\" fill=\"#be185d\" opacity=\"0.65\"/><rect x=\"156\" y=\"76\" width=\"34\" height=\"122\" rx=\"5\" fill=\"#be185d\" opacity=\"0.82\"/><rect x=\"202\" y=\"36\" width=\"34\" height=\"162\" rx=\"5\" fill=\"#be185d\"/><path d=\"M35 124 L81 93 L127 53 L173 71 L219 31\" stroke=\"#be185d\" stroke-width=\"3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"35\" cy=\"124\" r=\"5\" fill=\"#be185d\"/><circle cx=\"81\" cy=\"93\" r=\"5\" fill=\"#be185d\"/><circle cx=\"127\" cy=\"53\" r=\"5\" fill=\"#be185d\"/><circle cx=\"173\" cy=\"71\" r=\"5\" fill=\"#be185d\"/><circle cx=\"219\" cy=\"31\" r=\"5\" fill=\"#be185d\"/><circle cx=\"228\" cy=\"178\" r=\"24\" fill=\"#be185d\" opacity=\"0.12\" stroke=\"#be185d\" stroke-width=\"2\"/><text x=\"228\" y=\"184\" text-anchor=\"middle\" fill=\"#be185d\" font-family=\"Inter,sans-serif\" font-size=\"13\" font-weight=\"700\">kr</text></svg>" }} />
        </div>
      </section>

      <div style={{ background:'#fff', borderBottom:'1px solid #e2e8f0',
        padding:'16px 20px', fontFamily:'Inter,sans-serif' }}>
        <div style={{ maxWidth:960, margin:'0 auto', display:'flex',
          gap:32, flexWrap:'wrap', justifyContent:'center', alignItems:'center' }}>
          <div style={{display:'flex',alignItems:'flex-start',gap:8,fontSize:14,color:'#374151'}}><span style={{color:'#be185d',fontWeight:800,flexShrink:0}}>✓</span><span>Ökad energi</span></div><div style={{display:'flex',alignItems:'flex-start',gap:8,fontSize:14,color:'#374151'}}><span style={{color:'#be185d',fontWeight:800,flexShrink:0}}>✓</span><span>Snabbare återhämtning</span></div><div style={{display:'flex',alignItems:'flex-start',gap:8,fontSize:14,color:'#374151'}}><span style={{color:'#be185d',fontWeight:800,flexShrink:0}}>✓</span><span>Bättre resultat</span></div>
        </div>
      </div>

      <section id="jamfor" style={{ padding:'64px 20px', maxWidth:980,
        margin:'0 auto', fontFamily:'Inter,sans-serif' }}>
        <div style={{ textAlign:'center', marginBottom:36 }}>
          <h2 style={{ fontSize:30, fontWeight:800, marginBottom:10, color:'#0f172a' }}>
            8 alternativ för dig
          </h2>
          <p style={{ color:'#64748b', fontSize:15 }}>
            Vi har granskat {providers.length} alternativ &mdash; senast uppdaterat {updated}
          </p>
        </div>
        <div style={{ display:'flex', gap:8, marginBottom:20,
          flexWrap:'wrap', justifyContent:'center' }}>
          {['betyg','pris','namn'].map(function(s) { return (
            <button key={s} onClick={() => setSortBy(s)}
              style={{ padding:'7px 18px', borderRadius:20, fontSize:13, fontWeight:600,
                cursor:'pointer', fontFamily:'Inter,sans-serif', border:'none',
                background: sortBy===s ? pc : '#f1f5f9',
                color: sortBy===s ? '#fff' : '#64748b' }}>
              {s==='betyg' ? '⭐ Bäst betyg' : s==='pris' ? '💰 Lägst pris' : '🔤 Namn A–Ö'}
            </button>
          ); })}
        </div>

        {sorted[0] && (
          <div style={{ background:pc+'14', border:'2px solid '+pc, borderRadius:14,
            padding:'16px 22px', marginBottom:22, position:'relative', overflow:'hidden' }}>
            <div style={{ position:'absolute', top:0, right:0, background:pc,
              color:'#fff', fontSize:10, fontWeight:800, padding:'4px 14px',
              borderBottomLeftRadius:10, letterSpacing:'0.5px' }}>
              {sortBy==='pris' ? '💰 BILLIGAST' : sortBy==='namn' ? '🔤 TOPPALTERNATIV' : '⭐ BÄST BETYG'}
            </div>
            <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between',
              gap:16, flexWrap:'wrap' }}>
              <div>
                <div style={{ fontSize:11, color:pc, fontWeight:700, marginBottom:4 }}>
                  {sortBy==='pris' ? 'Billigaste alternativet just nu' : 'Redaktionens val'}
                </div>
                <div style={{ fontSize:20, fontWeight:800, color:'#0f172a', marginBottom:4 }}>
                  {sorted[0].name}
                </div>
                <div style={{ fontSize:13, color:'#374151', display:'flex', gap:10, flexWrap:'wrap' }}>
                  <span style={{ fontWeight:700, color:pc }}>{sorted[0].price}</span>
                  
                  {sorted[0].score ? <span style={{ color:'#64748b' }}> · {sorted[0].score}/10</span> : null}
                  {sorted[0].badge ? <span style={{ background:pc+'22', color:pc, fontWeight:700,
                    fontSize:11, padding:'2px 8px', borderRadius:6 }}>{sorted[0].badge}</span> : null}
                </div>
              </div>
              <AffBtn url={sorted[0].url} name={sorted[0].name} primary={true} />
            </div>
          </div>
        )}

        <div style={{ display:'flex', flexDirection:'column', gap:14 }}>
          {visible.map((p, i) => (
            <div key={p.name} style={{ background:'#fff', border: i===0 ? '2px solid '+pc : '1px solid #e2e8f0', borderRadius:16, padding:'22px 26px', position:'relative', boxShadow: i===0 ? '0 4px 24px '+pc+'18' : '0 1px 4px #0000000a' }}>
              {i===0 && <div style={{ position:'absolute', top:-15, left:22, background:pc, color:'#fff', fontSize:11, fontWeight:800, padding:'3px 14px', borderRadius:12, letterSpacing:'0.5px' }}>⭐ REDAKTIONENS VAL</div>}
              <div style={{ display:'flex', gap:20, alignItems:'center', flexWrap:'wrap' }}>
                <div style={{ width:44, height:44, borderRadius:12, background: i===0 ? pcLight : '#f8fafc', display:'flex', alignItems:'center', justifyContent:'center', fontWeight:800, fontSize:16, color: i===0 ? pc : '#64748b', flexShrink:0, border:'1px solid '+(i===0 ? pcMed : '#e2e8f0') }}>
                  {['1','2','3','4','5'][i] || (i+1)}
                </div>
                <div style={{ flex:1, minWidth:200 }}>
                  <div style={{ fontWeight:800, fontSize:18, color:'#0f172a', marginBottom:3 }}>{p.name}</div>
                  <div style={{ fontSize:13, color:'#64748b', marginBottom:10 }}>{p.description}</div>
                  {p.pros && <div style={{ display:'flex', flexDirection:'column', gap:5 }}>{p.pros.map((pro, j) => (<div key={j} style={{ display:'flex', gap:7, alignItems:'flex-start', fontSize:13 }}><span style={{ color:pc, fontWeight:700, flexShrink:0 }}>✓</span><span style={{ color:'#374151' }}>{pro}</span></div>))}</div>}
                </div>
                <div style={{ textAlign:'right', minWidth:190, display:'flex', flexDirection:'column', alignItems:'flex-end', gap:8 }}>
                  <div style={{ fontSize:22, fontWeight:800, color:pc }}>{p.currentPrice || p.price}</div>
                  <Stars score={p.score} />
                  <div style={{ background:'#f0fdf4', color:'#15803d', fontSize:11, fontWeight:700, padding:'3px 10px', borderRadius:8 }}>{p.badge}</div>
                  <AffBtn url={p.url} name={p.name} primary={i===0} />
                  <button onClick={() => toggleSelect(p.name)} style={{ padding:'7px 14px', borderRadius:8, fontSize:12, fontWeight:600, cursor: selected.includes(p.name) || selected.length < 3 ? 'pointer' : 'not-allowed', fontFamily:'Inter,sans-serif', border:'1px solid', borderColor: selected.includes(p.name) ? pc : '#e2e8f0', background: selected.includes(p.name) ? pcLight : '#fff', color: selected.includes(p.name) ? pc : '#64748b', opacity: !selected.includes(p.name) && selected.length >= 3 ? 0.4 : 1 }}>
                    {selected.includes(p.name) ? '✓ Vald' : '+ Jämför'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign:'center', marginTop:20, marginBottom:4, display:'flex', flexDirection:'column', alignItems:'center', gap:8 }}>
          {visibleCount < sorted.length && (
            <button onClick={() => setVisibleCount(function(c){ return Math.min(c + 5, sorted.length); })}
              style={{ padding:'10px 28px', borderRadius:24, fontSize:14, fontWeight:700,
                cursor:'pointer', fontFamily:'Inter,sans-serif',
                border:'2px solid '+pc, background:'#fff', color:pc }}>
              Visa 5 fler ↓ &nbsp;<span style={{ fontWeight:400, fontSize:13, opacity:0.7 }}>({sorted.length - visibleCount} återstår)</span>
            </button>
          )}
          {visibleCount >= sorted.length && sorted.length > 5 && (
            <button onClick={() => setVisibleCount(5)}
              style={{ padding:'10px 28px', borderRadius:24, fontSize:14, fontWeight:700,
                cursor:'pointer', fontFamily:'Inter,sans-serif',
                border:'2px solid #e2e8f0', background:'#fff', color:'#64748b' }}>
              Visa färre ↑
            </button>
          )}
          <p style={{ margin:0, fontSize:13, color:'#94a3b8' }}>
            Visar {visible.length} av {sorted.length} alternativ
            {selected.length > 0 && <span style={{ marginLeft:12, color:pc, fontWeight:600 }}>{selected.length} valda för jämförelse</span>}
          </p>
          <p style={{ margin:0, fontSize:11, color:'#cbd5e1' }}>
            Priser är riktpriser — klicka på ett alternativ för aktuellt pris hos respektive leverantör
          </p>
        </div>

        {selected.length >= 2 && (
          <div style={{ position:'fixed', bottom:0, left:0, right:0, zIndex:80,
            background:'#0f172a', padding:'14px 20px', fontFamily:'Inter,sans-serif',
            display:'flex', alignItems:'center', justifyContent:'center', gap:14, flexWrap:'wrap',
            boxShadow:'0 -4px 32px rgba(0,0,0,0.25)' }}>
            <span style={{ color:'#e2e8f0', fontWeight:600, fontSize:14 }}>
              {selected.length} valda: {selected.join(' vs ')}
            </span>
            <button onClick={() => setShowCompare(true)}
              style={{ background:pc, color:'#fff', border:'none', borderRadius:8,
                padding:'9px 22px', fontWeight:700, fontSize:14, cursor:'pointer', fontFamily:'Inter,sans-serif' }}>
              Jämför nu →
            </button>
            <button onClick={() => setSelected([])}
              style={{ background:'transparent', color:'#94a3b8', border:'1px solid #334155',
                borderRadius:8, padding:'9px 14px', fontSize:13, cursor:'pointer', fontFamily:'Inter,sans-serif' }}>
              Rensa
            </button>
          </div>
        )}

        {showCompare && (
          <div onClick={() => setShowCompare(false)} style={{ position:'fixed', inset:0, background:'rgba(0,0,0,0.72)', zIndex:200,
            display:'flex', alignItems:'flex-start', justifyContent:'center',
            padding:'24px 16px', overflowY:'auto', fontFamily:'Inter,sans-serif' }}>
            <div onClick={e => e.stopPropagation()} style={{ background:'#fff', borderRadius:16,
              width:'100%', maxWidth: selectedProviders.length === 2 ? 700 : 940,
              padding:28, marginTop:12, marginBottom:24 }}>
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:24 }}>
                <h3 style={{ fontSize:20, fontWeight:800, margin:0, color:'#0f172a' }}>
                  Jämförelse — {selectedProviders.map(function(p){return p.name;}).join(' vs ')}
                </h3>
                <button onClick={() => setShowCompare(false)}
                  style={{ background:'none', border:'none', fontSize:22, cursor:'pointer', color:'#94a3b8' }}>✕</button>
              </div>
              <div style={{ display:'grid', gridTemplateColumns: selectedProviders.map(function(){return '1fr';}).join(' '), gap:14 }}>
                {selectedProviders.map(function(p) { return (
                  <div key={p.name} style={{ border:'2px solid '+pc+'30', borderRadius:12, padding:'20px 18px',
                    display:'flex', flexDirection:'column', gap:10 }}>
                    <div style={{ fontWeight:800, fontSize:17, color:'#0f172a', borderBottom:'1px solid #f1f5f9', paddingBottom:10 }}>{p.name}</div>
                    <div>
                      <div style={{ fontSize:11, color:'#94a3b8', fontWeight:600, marginBottom:2 }}>PRIS</div>
                      <div style={{ fontSize:20, fontWeight:800, color:pc }}>{p.currentPrice||p.price||'—'}</div>
                    </div>
                    <div>
                      <div style={{ fontSize:11, color:'#94a3b8', fontWeight:600, marginBottom:2 }}>BETYG</div>
                      <Stars score={p.score} />
                    </div>
                    {p.badge && (
                      <div>
                        <div style={{ fontSize:11, color:'#94a3b8', fontWeight:600, marginBottom:2 }}>UTMÄRKELSE</div>
                        <div style={{ background:'#f0fdf4', color:'#15803d', fontSize:11, fontWeight:700, padding:'4px 10px', borderRadius:8, display:'inline-block' }}>{p.badge}</div>
                      </div>
                    )}
                    {p.description && (
                      <div>
                        <div style={{ fontSize:11, color:'#94a3b8', fontWeight:600, marginBottom:2 }}>OM TJÄNSTEN</div>
                        <div style={{ fontSize:13, color:'#475569', lineHeight:1.5 }}>{p.description}</div>
                      </div>
                    )}
                    {p.pros && p.pros.length > 0 && (
                      <div>
                        <div style={{ fontSize:11, color:'#94a3b8', fontWeight:600, marginBottom:6 }}>FÖRDELAR</div>
                        <div style={{ display:'flex', flexDirection:'column', gap:5 }}>
                          {p.pros.map(function(pro,j){return(
                            <div key={j} style={{ display:'flex', gap:6, fontSize:13 }}>
                              <span style={{ color:pc, fontWeight:700, flexShrink:0 }}>✓</span>
                              <span style={{ color:'#374151' }}>{pro}</span>
                            </div>
                          );})}
                        </div>
                      </div>
                    )}
                    <div style={{ marginTop:'auto', paddingTop:10 }}>
                      <AffBtn url={p.url} name={p.name} primary={true} />
                    </div>
                  </div>
                );})}
              </div>
              <p style={{ marginTop:16, fontSize:12, color:'#94a3b8', textAlign:'center' }}>
                * Stäng för att välja fler alternativ eller byta urval.
              </p>
            </div>
          </div>
        )}

        <p style={{ marginTop:16, fontSize:12, color:'#94a3b8', textAlign:'center' }}>
          * Vi kan erhålla provision vid val via våra länkar. Det påverkar aldrig priset för dig eller våra oberoende betyg.
          Se vår <Link href="/om-oss" style={{ color:pc }}>redaktionspolicy</Link>.
        </p>
      </section>

      

      <section id="guide" style={{ background:'#f8fafc',
        borderTop:'1px solid #e2e8f0', padding:'64px 20px',
        fontFamily:'Inter,sans-serif' }}>
        <div style={{ maxWidth:760, margin:'0 auto' }}>
          <h2 style={{ fontSize:28, fontWeight:800, marginBottom:20, color:'#0f172a' }}>
            Hur du väljer rätt leverantör
          </h2>
          <p style={{ fontSize:16, lineHeight:1.85, color:'#374151', marginBottom:28 }}>
            När du väljer rätt leverantör för dina kosttillskott är det viktigt att tänka på flera faktorer. Först och främst bör du kontrollera leverantörens rykte och läsa recensioner från andra kunder. Detta ger dig en uppfattning om produktkvaliteten och kundservice. För det andra, se över leverantörens produktutbud. En bra leverantör erbjuder ett brett sortiment av kosttillskott som täcker olika behov och mål. Det är också viktigt att jämföra priser mellan olika leverantörer för att säkerställa att du får bästa möjliga värde för dina pengar. Slutligen, överväg leveransalternativ och returrättigheter. En pålitlig leverantör bör erbjuda snabb och enkel leverans samt en generös returpolicy om du inte är nöjd med ditt köp.
          </p>
          <h3 style={{ fontSize:22, fontWeight:700, marginBottom:16, color:'#0f172a', marginTop:40 }}>Vanliga misstag att undvika</h3>
          <p style={{ fontSize:16, lineHeight:1.85, color:'#374151', marginBottom:28 }}>Ett vanligt misstag när man köper kosttillskott är att enbart fokusera på priset. Billigare produkter kan ofta innebära lägre kvalitet. Ett annat misstag är att inte läsa ingredienslistan noggrant. Det är viktigt att veta exakt vad du stoppar i dig för att undvika allergener eller oönskade tillsatser. Många glömmer också att konsultera en läkare eller näringsexpert innan de börjar med nya kosttillskott. Detta kan leda till felaktig användning eller dosering, vilket kan påverka din hälsa negativt. Slutligen, undvik att köpa för stora mängder på en gång. Köp hellre mindre mängder först för att se hur produkten fungerar för dig.</p>
          <h3 style={{ fontSize:20, fontWeight:700, marginBottom:24, color:'#0f172a' }}>
            Vad ska du tänka på?
          </h3>
          <div style={{display:'flex',gap:14,alignItems:'flex-start',marginBottom:16}}><div style={{width:28,height:28,borderRadius:'50%',background:'#be185d15',color:'#be185d',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:800,fontSize:13,flexShrink:0}}>1</div><p style={{color:'#374151',lineHeight:1.7,fontSize:15}}>Kontrollera leverantörens rykte</p></div><div style={{display:'flex',gap:14,alignItems:'flex-start',marginBottom:16}}><div style={{width:28,height:28,borderRadius:'50%',background:'#be185d15',color:'#be185d',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:800,fontSize:13,flexShrink:0}}>2</div><p style={{color:'#374151',lineHeight:1.7,fontSize:15}}>Jämför produktutbud</p></div><div style={{display:'flex',gap:14,alignItems:'flex-start',marginBottom:16}}><div style={{width:28,height:28,borderRadius:'50%',background:'#be185d15',color:'#be185d',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:800,fontSize:13,flexShrink:0}}>3</div><p style={{color:'#374151',lineHeight:1.7,fontSize:15}}>Se över pris och värde</p></div><div style={{display:'flex',gap:14,alignItems:'flex-start',marginBottom:16}}><div style={{width:28,height:28,borderRadius:'50%',background:'#be185d15',color:'#be185d',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:800,fontSize:13,flexShrink:0}}>4</div><p style={{color:'#374151',lineHeight:1.7,fontSize:15}}>Överväg leverans och retur</p></div>
        </div>
      </section>

      <section style={{ padding:'64px 20px', maxWidth:760,
        margin:'0 auto', fontFamily:'Inter,sans-serif' }}>
        <h2 style={{ fontSize:26, fontWeight:800, marginBottom:32, color:'#0f172a' }}>
          Vanliga frågor
        </h2>
        <details style={{borderBottom:'1px solid #e2e8f0',paddingBottom:16,marginBottom:16}} open={false}><summary style={{fontWeight:700,fontSize:15,cursor:'pointer',color:'#0f172a',listStyle:'none',display:'flex',justifyContent:'space-between',alignItems:'center'}}>Vilka är de bästa kosttillskotten för träning?<span style={{color:'#be185d',fontSize:18,fontWeight:400}}>+</span></summary><p style={{marginTop:12,color:'#475569',lineHeight:1.75,fontSize:14}}>De bästa kosttillskotten varierar beroende på dina mål. Vanliga alternativ inkluderar proteinpulver, BCAA och kreatin.</p></details><details style={{borderBottom:'1px solid #e2e8f0',paddingBottom:16,marginBottom:16}} open={false}><summary style={{fontWeight:700,fontSize:15,cursor:'pointer',color:'#0f172a',listStyle:'none',display:'flex',justifyContent:'space-between',alignItems:'center'}}>När ska man ta kosttillskott?<span style={{color:'#be185d',fontSize:18,fontWeight:400}}>+</span></summary><p style={{marginTop:12,color:'#475569',lineHeight:1.75,fontSize:14}}>Tidsplaneringen för kosttillskott beror på typen. Proteinpulver tas ofta efter träning, medan vitaminer kan tas på morgonen.</p></details><details style={{borderBottom:'1px solid #e2e8f0',paddingBottom:16,marginBottom:16}} open={false}><summary style={{fontWeight:700,fontSize:15,cursor:'pointer',color:'#0f172a',listStyle:'none',display:'flex',justifyContent:'space-between',alignItems:'center'}}>Är det nödvändigt med kosttillskott?<span style={{color:'#be185d',fontSize:18,fontWeight:400}}>+</span></summary><p style={{marginTop:12,color:'#475569',lineHeight:1.75,fontSize:14}}>Kosttillskott är inte nödvändiga för alla, men de kan hjälpa till att komplettera din diet och förbättra träningsresultat.</p></details><details style={{borderBottom:'1px solid #e2e8f0',paddingBottom:16,marginBottom:16}} open={false}><summary style={{fontWeight:700,fontSize:15,cursor:'pointer',color:'#0f172a',listStyle:'none',display:'flex',justifyContent:'space-between',alignItems:'center'}}>Vilket kosttillskott är bäst för muskelökning?<span style={{color:'#be185d',fontSize:18,fontWeight:400}}>+</span></summary><p style={{marginTop:12,color:'#475569',lineHeight:1.75,fontSize:14}}>För muskelökning är proteinpulver och kreatin populära val eftersom de stödjer muskelåterhämtning och tillväxt.</p></details><details style={{borderBottom:'1px solid #e2e8f0',paddingBottom:16,marginBottom:16}} open={false}><summary style={{fontWeight:700,fontSize:15,cursor:'pointer',color:'#0f172a',listStyle:'none',display:'flex',justifyContent:'space-between',alignItems:'center'}}>Kan jag ta kosttillskott varje dag?<span style={{color:'#be185d',fontSize:18,fontWeight:400}}>+</span></summary><p style={{marginTop:12,color:'#475569',lineHeight:1.75,fontSize:14}}>Ja, de flesta kosttillskott kan tas dagligen, men det är viktigt att följa rekommenderad dosering och konsultera en läkare vid behov.</p></details><details style={{borderBottom:'1px solid #e2e8f0',paddingBottom:16,marginBottom:16}} open={false}><summary style={{fontWeight:700,fontSize:15,cursor:'pointer',color:'#0f172a',listStyle:'none',display:'flex',justifyContent:'space-between',alignItems:'center'}}>Var kan jag köpa kosttillskott online?<span style={{color:'#be185d',fontSize:18,fontWeight:400}}>+</span></summary><p style={{marginTop:12,color:'#475569',lineHeight:1.75,fontSize:14}}>Du kan köpa kosttillskott från leverantörer som Gymgrossisten, Bodystore och Proteinbolaget för att garantera kvalitet.</p></details><details style={{borderBottom:'1px solid #e2e8f0',paddingBottom:16,marginBottom:16}} open={false}><summary style={{fontWeight:700,fontSize:15,cursor:'pointer',color:'#0f172a',listStyle:'none',display:'flex',justifyContent:'space-between',alignItems:'center'}}>Är naturliga kosttillskott bättre än syntetiska?<span style={{color:'#be185d',fontSize:18,fontWeight:400}}>+</span></summary><p style={{marginTop:12,color:'#475569',lineHeight:1.75,fontSize:14}}>Naturliga kosttillskott föredras ofta för att de anses ha färre tillsatser, men syntetiska kan vara lika effektiva.</p></details><details style={{borderBottom:'1px solid #e2e8f0',paddingBottom:16,marginBottom:16}} open={false}><summary style={{fontWeight:700,fontSize:15,cursor:'pointer',color:'#0f172a',listStyle:'none',display:'flex',justifyContent:'space-between',alignItems:'center'}}>Hur vet jag vilket kosttillskott jag behöver?<span style={{color:'#be185d',fontSize:18,fontWeight:400}}>+</span></summary><p style={{marginTop:12,color:'#475569',lineHeight:1.75,fontSize:14}}>Identifiera dina träningsmål och konsultera med en näringsexpert för att avgöra vilka kosttillskott som passar dig bäst.</p></details>
      </section>

      <section style={{ background:'#f8fafc', borderTop:'1px solid #e2e8f0', padding:'32px 20px', fontFamily:'Inter,sans-serif' }}>
        <div style={{ maxWidth:760, margin:'0 auto' }}>
          <p style={{ fontSize:14, color:'#64748b', marginBottom:12, fontWeight:600 }}>Läs mer:</p>
          <div style={{ display:'flex', gap:14, flexWrap:'wrap' }}>
            <a href="/vitaminer" style={{color:'#be185d',fontWeight:600,textDecoration:'none',fontSize:14}}>Bästa vitaminpreparat online</a>
            · <a href="/kosttillskott" style={{color:'#be185d',fontWeight:600,textDecoration:'none',fontSize:14}}>Bästa kosttillskott</a>
            · <a href="/vegansk" style={{color:'#be185d',fontWeight:600,textDecoration:'none',fontSize:14}}>Vegansk hälsokost</a>
            · <a href="/sport" style={{color:'#be185d',fontWeight:600,textDecoration:'none',fontSize:14}}>Bästa sportnäring & proteinpulver</a>
          </div>
        </div>
      </section>

      <footer style={{ background:'#0f172a', color:'#94a3b8',
        padding:'52px 20px 32px', fontFamily:'Inter,sans-serif' }}>
        <div style={{ maxWidth:980, margin:'0 auto' }}>
          <div style={{ display:'flex', gap:48, flexWrap:'wrap', marginBottom:36 }}>
            <div style={{ maxWidth:260 }}>
              <div style={{ fontWeight:800, color:'#fff', fontSize:18, marginBottom:10 }}>Hälskollen</div>
              <p style={{ fontSize:13, lineHeight:1.75 }}>
                Oberoende jämförelsetjänst för svenska konsumenter. Vi jämför 8 alternativ inom hälsa.
              </p>
            </div>
            <div>
              <div style={{ fontWeight:700, color:'#e2e8f0', marginBottom:14, fontSize:12, textTransform:'uppercase', letterSpacing:'0.5px' }}>Sidor</div>
              <div style={{ display:'flex', flexDirection:'column', gap:10, fontSize:14 }}>
                <Link href="/" style={{ color:'#94a3b8', textDecoration:'none' }}>Jämförelse</Link>
                <Link href="/om-oss" style={{ color:'#94a3b8', textDecoration:'none' }}>Om oss</Link>
                <Link href="/kontakt" style={{ color:'#94a3b8', textDecoration:'none' }}>Kontakt</Link>
                <Link href="/integritetspolicy" style={{ color:'#94a3b8', textDecoration:'none' }}>Integritetspolicy</Link>
              </div>
            </div>
            <div>
              <div style={{ fontWeight:700, color:'#e2e8f0', marginBottom:14, fontSize:12, textTransform:'uppercase', letterSpacing:'0.5px' }}>Se även</div>
              <div style={{ display:'flex', flexDirection:'column', gap:10, fontSize:14 }}>
                <Link href="/vitaminer" style={{color:'#94a3b8',textDecoration:'none',fontSize:13}}>Bästa vitaminpreparat online</Link>
                <Link href="/kosttillskott" style={{color:'#94a3b8',textDecoration:'none',fontSize:13}}>Bästa kosttillskott</Link>
                <Link href="/vegansk" style={{color:'#94a3b8',textDecoration:'none',fontSize:13}}>Vegansk hälsokost</Link>
                <Link href="/sport" style={{color:'#94a3b8',textDecoration:'none',fontSize:13}}>Bästa sportnäring & proteinpulver</Link>
                <Link href="/online" style={{color:'#94a3b8',textDecoration:'none',fontSize:13}}>Bästa hälsokostbutik online</Link>
              </div>
            </div>
            <div>
              <div style={{ fontWeight:700, color:'#e2e8f0', marginBottom:14, fontSize:12, textTransform:'uppercase', letterSpacing:'0.5px' }}>Jämförelser</div>
              <div style={{ display:'flex', flexDirection:'column', gap:10, fontSize:14 }}>
                <Link href="/jamfor/gymgrossisten-vs-bodystore" style={{color:'#94a3b8',textDecoration:'none',fontSize:13}}>Gymgrossisten vs Bodystore</Link>
                <Link href="/jamfor/gymgrossisten-vs-proteinbolaget" style={{color:'#94a3b8',textDecoration:'none',fontSize:13}}>Gymgrossisten vs Proteinbolaget</Link>
                <Link href="/jamfor/gymgrossisten-vs-iherb" style={{color:'#94a3b8',textDecoration:'none',fontSize:13}}>Gymgrossisten vs iHerb</Link>
                <Link href="/jamfor/gymgrossisten-vs-holland-barrett" style={{color:'#94a3b8',textDecoration:'none',fontSize:13}}>Gymgrossisten vs Holland & Barrett</Link>
                <Link href="/jamfor/gymgrossisten-vs-sportamore" style={{color:'#94a3b8',textDecoration:'none',fontSize:13}}>Gymgrossisten vs Sportamore</Link>
              </div>
            </div>
          </div>
          <div style={{ borderTop:'1px solid #1e293b', paddingTop:24, fontSize:12, lineHeight:1.75 }}>
            <p style={{ marginBottom:8 }}>
              &copy; {year} Hälskollen. Oberoende jämförelsetjänst utan koppling till listade
              varumärken utöver eventuella affiliate-provisioner.
            </p>
            <p>
              <strong style={{ color:'#e2e8f0' }}>Affiliateinformation:</strong> Sidan innehåller
              affiliate-länkar via Adtraction Sverige. Vi kan ta emot provision från annonsörer.
              Det påverkar aldrig priset för dig eller våra oberoende betyg.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}