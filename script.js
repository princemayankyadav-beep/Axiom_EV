/* ============= Axion ONE — static logic ============= */

/* ---- Systems data (mirrors React app) ---- */
const SYSTEMS = [
  { slug:"neural-drive", tag:"Neural Drive", title:"Predictive Path AI",
    desc:"12-camera, 8-radar fusion. Anticipates the road three corners ahead.", glyph:"◇",
    headline:"The car that thinks in corners.",
    intro:"Neural Drive fuses twelve 8K cameras, eight imaging radars and a solid-state LiDAR into a single 360° perception field, processed by a 1,400 TOPS on-board inference engine.",
    metrics:[{label:"Compute",value:"1,400 TOPS"},{label:"Sensors",value:"12 cam · 8 radar · 1 LiDAR"},{label:"Latency",value:"4 ms"},{label:"Look-ahead",value:"3 corners"}],
    sections:[
      {title:"Perception",body:"A unified 360° field rebuilt every 4 milliseconds — weather, surface, traffic and intent fused into one model of the road."},
      {title:"Prediction",body:"Trajectory networks anticipate three corners ahead, pre-loading suspension, torque vectoring and downforce before the driver lifts."},
      {title:"Co-pilot",body:"An ambient intelligence layer — never intrusive, always present. It teaches the line, then disappears."}
    ]},
  { slug:"battery", tag:"Battery", title:"Crystalline 142 kWh",
    desc:"Solid-state cells. 0–80% in 9 minutes on Axion HyperCharge.", glyph:"◈",
    headline:"Energy, crystallised.",
    intro:"A solid-state crystalline lattice replaces liquid electrolyte — denser, cooler, safer. 142 kWh of usable energy in a structural pack that stiffens the chassis itself.",
    metrics:[{label:"Capacity",value:"142 kWh"},{label:"10–80%",value:"9 min"},{label:"Peak charge",value:"480 kW"},{label:"Cycle life",value:"4,000+"}],
    sections:[
      {title:"Solid-state cells",body:"No liquid electrolyte, no thermal runaway. Energy density rises 38% while pack mass falls by 22%."},
      {title:"HyperCharge",body:"A 480 kW direct-cooled interface refills 10 to 80 percent in under nine minutes — faster than a coffee."},
      {title:"Structural pack",body:"The pack is the spine. Cells are bonded into a load-bearing monolith that increases torsional rigidity by 19%."}
    ]},
  { slug:"aero", tag:"Aero", title:"Active Morphing Skin",
    desc:"1,800 micro-actuators reshape the body for downforce or efficiency.", glyph:"◉",
    headline:"A body that breathes.",
    intro:"1,800 magnetorheological micro-actuators reshape the outer skin in real time — flattening for range, swelling for downforce, opening for cooling.",
    metrics:[{label:"Actuators",value:"1,800"},{label:"Cd (low)",value:"0.19"},{label:"Downforce",value:"640 kg @ 300 km/h"},{label:"Response",value:"12 ms"}],
    sections:[
      {title:"Morphing skin",body:"Every panel is alive. Surfaces shift by millimetres to redirect airflow without the visual noise of wings or flaps."},
      {title:"Adaptive cooling",body:"Vents open only when the powertrain demands them — invisible at cruise, fully exposed on track."},
      {title:"Stealth mode",body:"At motorway speed the body collapses into its lowest drag state. Range climbs. Silence deepens."}
    ]},
  { slug:"materials", tag:"Materials", title:"Forged Carbon Spine",
    desc:"37% lighter than aluminum. Recyclable in a single thermal cycle.", glyph:"◊",
    headline:"Engineered to return.",
    intro:"A monocoque of forged recycled carbon — pressure-formed at 180°C, fully reclaimable in a single thermal cycle. Strength of titanium, conscience of glass.",
    metrics:[{label:"Mass saving",value:"−37%"},{label:"Stiffness",value:"48 kNm/deg"},{label:"Recyclability",value:"100%"},{label:"Process CO₂",value:"−61%"}],
    sections:[
      {title:"Forged carbon",body:"Short-fibre carbon is forged under heat and pressure into complex monolithic shapes — no layup, no waste."},
      {title:"Single-cycle recycling",body:"At end of life, one thermal cycle separates fibre from resin. Both return to production."},
      {title:"Bio-resins",body:"A plant-derived matrix replaces petrochemical epoxy without compromising stiffness or thermal range."}
    ]},
  { slug:"lighting", tag:"Lighting", title:"Liquid Matrix Headlamps",
    desc:"5,200 individually-addressable pixels project guidance onto the road.", glyph:"✦",
    headline:"Light that draws the road.",
    intro:"Each headlamp holds 5,200 micro-mirrors — a projector capable of painting symbols, lanes and warnings directly onto the tarmac at 240 km/h.",
    metrics:[{label:"Pixels / lamp",value:"5,200"},{label:"Range",value:"640 m"},{label:"Refresh",value:"240 Hz"},{label:"Glare to oncoming",value:"0"}],
    sections:[
      {title:"Pixel projection",body:"Lane guidance, hazard outlines and navigation arrows are drawn on the road surface — visible only to the driver."},
      {title:"Glare-free beam",body:"Oncoming vehicles are masked pixel-by-pixel; the rest of the world remains daylight-bright."},
      {title:"Signature light",body:"A liquid signature greets you on approach — a slow, intentional choreography of arrival."}
    ]},
  { slug:"sound", tag:"Sound", title:"Spatial Cabin Field",
    desc:"Engineered acoustic envelope. Silent at speed. Cinematic on demand.", glyph:"◐",
    headline:"An auditorium at 300 km/h.",
    intro:"32 calibrated drivers and active noise cancellation construct a private acoustic envelope — silent at cruise, symphonic on command, individual to every seat.",
    metrics:[{label:"Drivers",value:"32"},{label:"Cabin noise @ 200 km/h",value:"54 dB"},{label:"Zones",value:"4 personal"},{label:"Headroom",value:"112 dB"}],
    sections:[
      {title:"Personal zones",body:"Four spatial zones let each occupant inhabit a different sound world without headphones."},
      {title:"Active silence",body:"Road and motor noise are nulled in real time — the cabin becomes quieter than the air outside."},
      {title:"Cinematic mode",body:"On demand the car becomes an instrument: a tuned, layered, room-correct concert hall."}
    ]}
];

const EXPLODED_LAYERS = [
  { id:"AERO·01", label:"Active Aero Shell",         x:-180, y:-120, rot:-8 },
  { id:"BATT·02", label:"Crystalline Battery Spine", x: 200, y: -60, rot: 6 },
  { id:"QMD·03",  label:"Quad-Motor Drive Unit",     x:-220, y: 100, rot:-6 },
  { id:"ADS·04",  label:"Adaptive Suspension",       x: 230, y: 130, rot: 8 },
];

let revealObserver;
function observeReveals(root = document){
  const items = root.querySelectorAll(".reveal:not(.in)");
  if(!items.length) return;
  if(!("IntersectionObserver" in window)){
    items.forEach(el=>el.classList.add("in"));
    return;
  }
  if(!revealObserver){
    revealObserver = new IntersectionObserver(entries=>{
      entries.forEach(e=>{
        if(e.isIntersecting){
          e.target.classList.add("in");
          revealObserver.unobserve(e.target);
        }
      });
    },{ rootMargin:"-60px" });
  }
  items.forEach(el=>revealObserver.observe(el));
}

/* ---- Stars ---- */
(function stars(){
  const el = document.getElementById("stars");
  if(!el) return;
  let html = "";
  for(let i=0;i<60;i++){
    const top = (i*137)%100, left=(i*53)%100, delay=(i%7)*0.4;
    html += `<span style="top:${top}%;left:${left}%;animation-delay:${delay}s"></span>`;
  }
  el.innerHTML = html;
})();

/* ---- Hero motion particles ---- */
(function heroParticles(){
  const el = document.getElementById("heroParticles");
  if(!el) return;
  let html = "";
  for(let i=0;i<24;i++){
    const top = 16 + ((i * 19) % 52);
    const left = 56 + ((i * 11) % 36);
    const delay = ((i % 9) * -0.34).toFixed(2);
    html += `<span class="hero-dot" style="top:${top}%;left:${left}%;--d:${delay}s"></span>`;
  }
  el.innerHTML = html;
})();

/* ---- Cursor glow ---- */
(function cursor(){
  const el = document.getElementById("cursorGlow");
  if(!el) return;
  let tx=0,ty=0,x=0,y=0;
  window.addEventListener("mousemove",e=>{tx=e.clientX;ty=e.clientY;});
  (function tick(){
    x += (tx-x)*0.15; y += (ty-y)*0.15;
    el.style.transform = `translate3d(${x-200}px,${y-200}px,0)`;
    requestAnimationFrame(tick);
  })();
})();

/* ---- Mobile menu ---- */
(function mobileMenu(){
  const toggle = document.querySelector(".nav-toggle");
  const menu = document.getElementById("mobileMenu");
  if(!toggle || !menu) return;

  function setOpen(open){
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    menu.classList.toggle("open", open);
  }

  toggle.addEventListener("click", ()=>{
    setOpen(toggle.getAttribute("aria-expanded") !== "true");
  });
  menu.querySelectorAll("a").forEach(link=>{
    link.addEventListener("click", ()=>setOpen(false));
  });
  document.addEventListener("keydown", e=>{
    if(e.key === "Escape") setOpen(false);
  });
})();

/* ---- Intelligence motion core ---- */
(function neuralCore(){
  const nodes = document.getElementById("coreNodes");
  if(!nodes) return;
  let html = "";
  for(let i=0;i<34;i++){
    const angle = (i / 34) * Math.PI * 2;
    const radius = 25 + (i % 5) * 6;
    const x = 50 + Math.cos(angle) * radius;
    const y = 50 + Math.sin(angle) * radius * 0.68;
    const delay = ((i % 8) * -0.22).toFixed(2);
    html += `<span class="core-node" style="--x:${x.toFixed(2)}%;--y:${y.toFixed(2)}%;--d:${delay}s"></span>`;
  }
  nodes.innerHTML = html;
})();

/* ---- Exploded view list + chips ---- */
(function exploded(){
  const list = document.getElementById("explodedList");
  const chips = document.getElementById("explodedChips");
  if(!list || !chips) return;
  list.innerHTML = EXPLODED_LAYERS.map((l,i)=>`
    <div class="ex-row glass reveal">
      <div class="ex-num">${String(i+1).padStart(2,"0")}</div>
      <div>
        <div class="ex-label">${l.label}</div>
        <div class="ex-id">${l.id}</div>
      </div>
      <span class="ex-arrow">→</span>
    </div>`).join("");
  chips.innerHTML = EXPLODED_LAYERS.map((l,i)=>`
    <div class="chip glass" data-i="${i}" style="--tx:${l.x}px;--ty:${l.y}px;--r:${l.rot}deg;animation-delay:${i*0.7}s">
      <div class="chip-id">${l.id}</div>
      <div class="chip-label">${l.label}</div>
    </div>`).join("");
  observeReveals(list);

  // scroll-driven explode
  const stage = document.querySelector(".exploded");
  const carImg = document.querySelector(".car-top");
  function onScroll(){
    const r = stage.getBoundingClientRect();
    const vh = window.innerHeight;
    const p = Math.max(0, Math.min(1, 1 - (r.top + r.height*0.2) / vh));
    stage.style.setProperty("--p", p.toFixed(3));
    if(carImg) carImg.style.transform = `scale(${1 - 0.22*p})`;
  }
  window.addEventListener("scroll", onScroll, { passive:true });
  onScroll();
})();

/* ---- Performance: parallax car + dashed road ---- */
(function performance(){
  const dashes = document.getElementById("roadDashes");
  if(dashes){
    let h="";
    for(let i=0;i<10;i++) h+=`<span style="animation-delay:${i*-0.7}s"></span>`;
    dashes.innerHTML = h;
  }
  const car = document.getElementById("carSide");
  const stage = document.querySelector(".perf-stage");
  if(!car || !stage) return;
  function onScroll(){
    const r = stage.getBoundingClientRect();
    const vh = window.innerHeight;
    const p = Math.max(0, Math.min(1, 1 - (r.top + r.height*0.5) / vh));
    const x = (p - 0.5) * 60; // -30% .. 30%
    const blur = Math.abs(p - 0.5) * 8;
    car.style.transform = `translateX(${x}%)`;
    car.style.filter = `blur(${blur}px)`;
  }
  window.addEventListener("scroll", onScroll, { passive:true });
  onScroll();
})();

/* ---- Intelligence cards (link to system.html?slug=) ---- */
(function intel(){
  const grid = document.getElementById("systemsGrid");
  if(!grid) return;
  grid.innerHTML = SYSTEMS.map(s=>`
    <a class="card glass reveal sys-card" href="system.html?slug=${s.slug}">
      <div class="sys-head">
        <span class="sys-tag">${s.tag}</span>
        <span class="sys-glyph">${s.glyph}</span>
      </div>
      <h3>${s.title}</h3>
      <p>${s.desc}</p>
      <div class="sys-explore"><span class="sys-line"></span>Explore</div>
    </a>`).join("");
  observeReveals(grid);
})();

/* ---- Configurator ---- */
(function configurator(){
  const root = document.getElementById("configRoot");
  if(!root) return;

  const basePrice = 2450000;
  const state = {
    paint:{ label:"Aurora Silver", price:0, color:"#dce8f2", code:"AS" },
    interior:{ label:"Obsidian Black", price:0, color:"#111318", code:"OB" },
    package:{ label:"Grand Touring", price:0, code:"GT" }
  };
  const els = {
    buildName:document.getElementById("buildName"),
    buildCode:document.getElementById("buildCode"),
    price:document.getElementById("configPrice"),
    paint:document.getElementById("summaryPaint"),
    interior:document.getElementById("summaryInterior"),
    package:document.getElementById("summaryPackage"),
    paintWash:document.getElementById("paintWash"),
    paintGlow:document.getElementById("paintGlow"),
    interiorWash:document.getElementById("interiorWash"),
    interiorChip:document.getElementById("interiorChip")
  };
  const formatPrice = value => `€${value.toLocaleString("en-US")}`;

  function render(){
    const total = basePrice + Object.values(state).reduce((sum,item)=>sum + item.price,0);
    root.style.setProperty("--paint", state.paint.color);
    root.style.setProperty("--interior", state.interior.color);
    if(els.paintWash) els.paintWash.style.background = state.paint.color;
    if(els.paintGlow) els.paintGlow.style.background = state.paint.color;
    if(els.interiorWash) els.interiorWash.style.background = state.interior.color;
    if(els.buildName) els.buildName.textContent = `Axion ONE ${state.paint.label}`;
    if(els.buildCode) els.buildCode.textContent = `AX-ONE-${state.paint.code}-${state.interior.code}-${state.package.code}`;
    if(els.price) els.price.textContent = formatPrice(total);
    if(els.paint) els.paint.textContent = state.paint.label;
    if(els.interior) els.interior.textContent = state.interior.label;
    if(els.interiorChip) els.interiorChip.textContent = state.interior.label;
    if(els.package) els.package.textContent = state.package.label;
  }

  root.querySelectorAll("[data-config-choice]").forEach(button=>{
    button.addEventListener("click",()=>{
      const category = button.dataset.category;
      state[category] = {
        label:button.dataset.label,
        price:Number(button.dataset.price || 0),
        color:button.dataset.color,
        code:button.dataset.code
      };
      root.querySelectorAll(`[data-category="${category}"]`).forEach(item=>item.classList.remove("is-active"));
      button.classList.add("is-active");
      root.dataset.view = category === "interior" ? "interior" : "exterior";
      render();
    });
  });

  render();
})();

/* ---- System detail page renderer ---- */
function renderSystemPage(){
  const root = document.getElementById("systemRoot");
  if(!root) return;
  const slug = new URLSearchParams(location.search).get("slug") || "neural-drive";
  const s = SYSTEMS.find(x=>x.slug===slug);
  if(!s){
    root.innerHTML = `<h1 class="section-title text-gradient">System not found</h1>
      <p class="section-sub">The system you're looking for doesn't exist.</p>`;
    return;
  }
  document.title = `${s.title} — Axion ONE`;
  const others = SYSTEMS.filter(x=>x.slug!==s.slug);
  root.innerHTML = `
    <div class="eyebrow">${s.tag}</div>
    <h1 class="section-title text-gradient">${s.headline}</h1>
    <p class="section-sub max-w">${s.intro}</p>

    <div class="metrics-grid">
      ${s.metrics.map(m=>`
        <div class="glass metric">
          <div class="k">${m.label}</div>
          <div class="v text-gradient">${m.value}</div>
        </div>`).join("")}
    </div>

    <div class="sys-sections">
      ${s.sections.map(sec=>`
        <div class="glass sys-section reveal">
          <h3>${sec.title}</h3>
          <p>${sec.body}</p>
        </div>`).join("")}
    </div>

    <div class="other-sys">
      <div class="eyebrow">Other systems</div>
      <div class="grid-3 systems">
        ${others.map(o=>`
          <a class="card glass sys-card" href="system.html?slug=${o.slug}">
            <div class="sys-head"><span class="sys-tag">${o.tag}</span><span class="sys-glyph">${o.glyph}</span></div>
            <h3>${o.title}</h3>
            <p>${o.desc}</p>
            <div class="sys-explore"><span class="sys-line"></span>Explore</div>
          </a>`).join("")}
      </div>
    </div>
  `;
  observeReveals(root);
}

observeReveals();
