/* ===== footer year ===== */
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* ===== fake visitor counter (retro / brand pages) ===== */
const counterEl = document.getElementById("counter");
if (counterEl) {
  const base = 847 + (new Date().getDate() * 3);
  counterEl.textContent = String(base).padStart(7, "0");
}

/* ===== WhatsApp wiring =====
   Set the number once we have it: intl format, no +, no spaces. e.g. "34600112233" */
const WHATSAPP = ""; // TODO: Anriuska's number
const WA_MESSAGE = encodeURIComponent("¡Hola Anriuska! Me gustaría reservar una cita 💅✨");
document.querySelectorAll("[data-wa]").forEach((el) => {
  if (WHATSAPP) {
    el.href = `https://wa.me/${WHATSAPP}?text=${WA_MESSAGE}`;
    el.target = "_blank";
    el.rel = "noopener";
  } else {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      alert("✨ Número de WhatsApp pendiente de configurar.");
    });
  }
});

/* ===== scroll reveals ===== */
const io = new IntersectionObserver(
  (entries) => entries.forEach((en) => en.isIntersecting && en.target.classList.add("in")),
  { threshold: 0.12 }
);
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

/* ===== respect reduced motion for the fancy bits ===== */
const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ===== Catatumbo lightning — occasional flash (Maracaibo's famous storm) ===== */
const bolt = document.querySelector(".lightning");
if (!reduced && bolt) {
  const strike = () => {
    bolt.classList.remove("flash");
    void bolt.offsetWidth; // reflow to restart animation
    bolt.classList.add("flash");
    setTimeout(strike, 6000 + Math.random() * 9000);
  };
  setTimeout(strike, 4000);
}

/* ===== glitter sparkle canvas + cursor trail ===== */
(function sparkleField() {
  if (reduced) return;
  const cv = document.getElementById("sparkles");
  if (!cv) return;
  const ctx = cv.getContext("2d");
  let w, h, dpr;
  const COLORS = ["#ffd23f", "#ff4fd8", "#29e0d6", "#2b6fff", "#ffffff"];
  const stars = [];

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = cv.width = innerWidth * dpr;
    h = cv.height = innerHeight * dpr;
    cv.style.width = innerWidth + "px";
    cv.style.height = innerHeight + "px";
  }
  resize();
  addEventListener("resize", resize);

  // ambient drifting sparkles
  const N = Math.min(90, Math.floor(innerWidth / 12));
  for (let i = 0; i < N; i++) {
    stars.push({
      x: Math.random() * w,
      y: Math.random() * h,
      r: (Math.random() * 1.6 + 0.4) * dpr,
      a: Math.random(),
      da: (Math.random() * 0.02 + 0.005) * (Math.random() < 0.5 ? 1 : -1),
      vy: (Math.random() * 0.2 + 0.05) * dpr,
      c: COLORS[(Math.random() * COLORS.length) | 0],
    });
  }

  // sparkles spawned by the cursor / touch
  const trail = [];
  function spawn(x, y) {
    for (let i = 0; i < 2; i++) {
      trail.push({
        x: x * dpr, y: y * dpr,
        r: (Math.random() * 2 + 1) * dpr,
        vx: (Math.random() - 0.5) * 1.4 * dpr,
        vy: (Math.random() - 0.5) * 1.4 * dpr,
        life: 1,
        c: COLORS[(Math.random() * COLORS.length) | 0],
      });
    }
  }
  let lastT = 0;
  addEventListener("pointermove", (e) => {
    const now = e.timeStamp;
    if (now - lastT > 16) { spawn(e.clientX, e.clientY); lastT = now; }
  });

  function drawStar(x, y, r, color, alpha) {
    ctx.globalAlpha = alpha;
    ctx.fillStyle = color;
    ctx.shadowColor = color;
    ctx.shadowBlur = r * 4;
    // 4-point sparkle
    ctx.beginPath();
    ctx.moveTo(x, y - r * 2);
    ctx.quadraticCurveTo(x, y, x + r * 2, y);
    ctx.quadraticCurveTo(x, y, x, y + r * 2);
    ctx.quadraticCurveTo(x, y, x - r * 2, y);
    ctx.quadraticCurveTo(x, y, x, y - r * 2);
    ctx.fill();
  }

  function tick() {
    ctx.clearRect(0, 0, w, h);
    for (const s of stars) {
      s.a += s.da;
      if (s.a > 1 || s.a < 0) s.da *= -1;
      s.y += s.vy;
      if (s.y > h) { s.y = 0; s.x = Math.random() * w; }
      drawStar(s.x, s.y, s.r, s.c, Math.max(0, s.a) * 0.9);
    }
    for (let i = trail.length - 1; i >= 0; i--) {
      const p = trail[i];
      p.x += p.vx; p.y += p.vy; p.life -= 0.03;
      if (p.life <= 0) { trail.splice(i, 1); continue; }
      drawStar(p.x, p.y, p.r, p.c, p.life);
    }
    ctx.globalAlpha = 1; ctx.shadowBlur = 0;
    requestAnimationFrame(tick);
  }
  tick();
})();
