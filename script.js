/* ============================================================
   Jack Matuszewski — Personal Brand
   Motion · Cursor · Marquee · Clock · Reveals
   ============================================================ */

(() => {
  "use strict";

  const root = document.documentElement;
  const body = document.body;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  /* ---------- Smooth anchor focus (a11y) ---------- */
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const id = a.getAttribute("href");
      if (id.length < 2) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      target.setAttribute("tabindex", "-1");
      target.focus({ preventScroll: true });
    });
  });

  /* ============================================================
     1. LOADER
     ============================================================ */
  (function initLoader() {
    body.classList.add("is-loading");

    const nameEl = document.querySelector(".loader__name");
    if (nameEl) {
      const text = nameEl.textContent;
      nameEl.textContent = "";
      [...text].forEach((char, i) => {
        const span = document.createElement("span");
        span.textContent = char === " " ? " " : char;
        span.style.setProperty("--d", `${i * 28}ms`);
        nameEl.appendChild(span);
      });
    }

    const countEl = document.querySelector("[data-loader-count]");
    if (countEl && !reduceMotion) {
      const start = performance.now();
      const dur = 1200;
      const tick = (now) => {
        const t = Math.min(1, (now - start) / dur);
        const v = Math.floor(t * 100);
        countEl.textContent = v.toString().padStart(2, "0");
        if (t < 1) requestAnimationFrame(tick);
        else countEl.textContent = "100";
      };
      requestAnimationFrame(tick);
    }

    const dismiss = () => {
      const loader = document.getElementById("loader");
      if (!loader) return;
      const wait = reduceMotion ? 200 : 1500;
      setTimeout(() => {
        loader.classList.add("is-done");
        body.classList.remove("is-loading");
        body.classList.add("is-ready");
      }, wait);
      setTimeout(() => loader.remove(), wait + 1300);
    };

    if (document.readyState === "complete") dismiss();
    else window.addEventListener("load", dismiss, { once: true });
  })();

  /* ============================================================
     2. SPLIT TEXT (preserves <em>, <br>)
     ============================================================ */
  function splitWords(el, baseDelay = 60) {
    if (!el || el.dataset.splitDone) return;
    el.dataset.splitDone = "true";
    let i = 0;
    const walk = (node) => {
      Array.from(node.childNodes).forEach((child) => {
        if (child.nodeType === 3) {
          const txt = child.textContent;
          if (!txt.trim()) return;
          const frag = document.createDocumentFragment();
          const parts = txt.split(/(\s+)/);
          parts.forEach((p) => {
            if (p === "") return;
            if (/^\s+$/.test(p)) {
              frag.appendChild(document.createTextNode(" "));
            } else {
              const w = document.createElement("span");
              w.className = "word";
              const inner = document.createElement("span");
              inner.className = "word__inner";
              inner.textContent = p;
              inner.style.setProperty("--word-delay", `${i * baseDelay}ms`);
              w.appendChild(inner);
              frag.appendChild(w);
              i++;
            }
          });
          child.parentNode.replaceChild(frag, child);
        } else if (child.nodeType === 1 && child.tagName !== "BR") {
          walk(child);
        }
      });
    };
    walk(el);
  }

  document.querySelectorAll("[data-split='words']").forEach((el) => {
    const delay = el.classList.contains("hero__title") ? 80 : 55;
    splitWords(el, delay);
  });

  /* ============================================================
     3. STAGGER CHILDREN INDEX
     ============================================================ */
  document.querySelectorAll("[data-reveal-stagger]").forEach((parent) => {
    Array.from(parent.children).forEach((child, idx) => {
      child.style.setProperty("--child-i", idx);
    });
  });

  /* ============================================================
     4. SCROLL REVEAL
     ============================================================ */
  const reveals = document.querySelectorAll("[data-reveal], [data-reveal-stagger]");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add("is-visible"));
  }

  /* ============================================================
     5. CUSTOM CURSOR
     ============================================================ */
  (function initCursor() {
    if (!isFinePointer || reduceMotion) return;
    const dot = document.querySelector(".cursor--dot");
    const ring = document.querySelector(".cursor--ring");
    const labelEl = document.querySelector("[data-cursor-label]");
    if (!dot || !ring) return;

    let mx = window.innerWidth / 2, my = window.innerHeight / 2;
    let dx = mx, dy = my, rx = mx, ry = my;
    let active = false;

    window.addEventListener("mousemove", (e) => {
      mx = e.clientX;
      my = e.clientY;
      if (!active) {
        active = true;
        dx = mx; dy = my; rx = mx; ry = my;
        body.classList.add("cursor-ready");
      }
    }, { passive: true });

    document.addEventListener("mouseleave", () => body.classList.add("cursor-hidden"));
    document.addEventListener("mouseenter", () => body.classList.remove("cursor-hidden"));

    const tick = () => {
      dx = mx; dy = my;
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      dot.style.transform = `translate(${dx}px, ${dy}px) translate(-50%, -50%)`;
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      requestAnimationFrame(tick);
    };
    tick();

    const states = ["cursor-link", "cursor-view", "cursor-case", "cursor-send", "cursor-open"];
    const clearStates = () => states.forEach((s) => body.classList.remove(s));

    const targets = [
      ["[data-cursor='view']", "cursor-view", "Hi"],
      ["[data-cursor='case']", "cursor-case", "Read"],
      ["[data-cursor='send']", "cursor-send", "Email"],
      ["[data-cursor='open']", "cursor-open", "Open"],
    ];
    targets.forEach(([sel, state, lbl]) => {
      document.querySelectorAll(sel).forEach((el) => {
        el.addEventListener("mouseenter", () => {
          clearStates();
          body.classList.add(state);
          if (labelEl) labelEl.textContent = lbl;
        });
        el.addEventListener("mouseleave", () => {
          clearStates();
          if (labelEl) labelEl.textContent = "";
        });
      });
    });

    document.querySelectorAll("a:not([data-cursor]), button:not([data-cursor])").forEach((el) => {
      el.addEventListener("mouseenter", () => {
        if (!states.slice(1).some((s) => body.classList.contains(s))) {
          body.classList.add("cursor-link");
        }
      });
      el.addEventListener("mouseleave", () => body.classList.remove("cursor-link"));
    });
  })();

  /* ============================================================
     6. SCROLL PROGRESS
     ============================================================ */
  (function initScrollProgress() {
    const bar = document.querySelector(".scroll-progress");
    if (!bar) return;
    let ticking = false;
    const update = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      const p = max > 0 ? h.scrollTop / max : 0;
      bar.style.transform = `scaleX(${p})`;
      ticking = false;
    };
    window.addEventListener("scroll", () => {
      if (!ticking) { requestAnimationFrame(update); ticking = true; }
    }, { passive: true });
    update();
  })();

  /* ============================================================
     7. AURORA — drifts toward cursor
     ============================================================ */
  (function initAurora() {
    if (reduceMotion) return;
    const blobs = document.querySelectorAll(".aurora__blob");
    if (!blobs.length) return;

    let mx = 0, my = 0, cx = 0, cy = 0;
    if (isFinePointer) {
      window.addEventListener("mousemove", (e) => {
        mx = (e.clientX / window.innerWidth - 0.5) * 2;
        my = (e.clientY / window.innerHeight - 0.5) * 2;
      }, { passive: true });
    } else {
      let phase = 0;
      const drift = () => {
        phase += 0.005;
        mx = Math.sin(phase) * 0.6;
        my = Math.cos(phase * 0.7) * 0.6;
        requestAnimationFrame(drift);
      };
      drift();
    }

    const tick = () => {
      cx += (mx - cx) * 0.04;
      cy += (my - cy) * 0.04;
      blobs.forEach((blob, i) => {
        const f = (i + 1) * 50;
        const dir = i % 2 === 0 ? 1 : -1;
        blob.style.transform = `translate3d(${cx * f * dir}px, ${cy * f * dir}px, 0)`;
      });
      requestAnimationFrame(tick);
    };
    tick();
  })();

  /* ============================================================
     8. MAGNETIC ELEMENTS
     ============================================================ */
  (function initMagnetic() {
    if (!isFinePointer || reduceMotion) return;
    document.querySelectorAll(".magnetic").forEach((el) => {
      const strength = parseFloat(el.dataset.magnetic) || 0.32;
      el.addEventListener("mousemove", (e) => {
        const rect = el.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = (e.clientX - cx) * strength;
        const dy = (e.clientY - cy) * strength;
        el.style.transform = `translate3d(${dx}px, ${dy}px, 0)`;
      });
      el.addEventListener("mouseleave", () => { el.style.transform = ""; });
    });
  })();

  /* ============================================================
     9. CARD 3D TILT
     ============================================================ */
  (function initTilt() {
    if (!isFinePointer || reduceMotion) return;
    document.querySelectorAll(".card").forEach((card) => {
      let raf = 0;
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width;
        const py = (e.clientY - rect.top) / rect.height;
        const rx = (0.5 - py) * 5;
        const ry = (px - 0.5) * 5;
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => {
          card.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg)`;
          card.style.setProperty("--mx", `${px * 100}%`);
          card.style.setProperty("--my", `${py * 100}%`);
        });
      });
      card.addEventListener("mouseleave", () => {
        cancelAnimationFrame(raf);
        card.style.transform = "";
      });
    });
  })();

  /* ============================================================
     10. NUMBER COUNT-UP
     ============================================================ */
  (function initCounters() {
    const easeOut = (t) => 1 - Math.pow(1 - t, 3);
    const animate = (el) => {
      const target = parseFloat(el.dataset.counter);
      if (Number.isNaN(target)) return;
      const decimals = parseInt(el.dataset.decimals || "0", 10);
      const prefix = el.dataset.prefix || "";
      const suffix = el.dataset.suffix || "";
      if (reduceMotion) {
        el.textContent = `${prefix}${target.toFixed(decimals)}${suffix}`;
        return;
      }
      const dur = 1700;
      const start = performance.now();
      const tick = (now) => {
        const t = Math.min(1, (now - start) / dur);
        const v = (target * easeOut(t)).toFixed(decimals);
        el.textContent = `${prefix}${v}${suffix}`;
        if (t < 1) requestAnimationFrame(tick);
      };
      el.textContent = `${prefix}${(0).toFixed(decimals)}${suffix}`;
      requestAnimationFrame(tick);
    };

    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll("[data-counter]").forEach(animate);
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        animate(entry.target);
        io.unobserve(entry.target);
      });
    }, { threshold: 0.5 });
    document.querySelectorAll("[data-counter]").forEach((el) => io.observe(el));
  })();

  /* ============================================================
     11. SCRAMBLE INDEX NUMBERS
     ============================================================ */
  (function initScramble() {
    if (reduceMotion) return;
    const chars = "0123456789·*°+";
    const animate = (el) => {
      const original = el.textContent;
      const len = original.length;
      const dur = 700;
      const start = performance.now();
      const tick = (now) => {
        const t = Math.min(1, (now - start) / dur);
        let result = "";
        for (let i = 0; i < len; i++) {
          if (t * (len + 1) > i + 1) result += original[i];
          else result += chars[Math.floor(Math.random() * chars.length)];
        }
        el.textContent = result;
        if (t < 1) requestAnimationFrame(tick);
        else el.textContent = original;
      };
      requestAnimationFrame(tick);
    };

    if (!("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        animate(entry.target);
        io.unobserve(entry.target);
      });
    }, { threshold: 0.6 });
    document.querySelectorAll("[data-scramble]").forEach((el) => io.observe(el));
  })();

  /* ============================================================
     12. ACTIVE NAV LINK
     ============================================================ */
  (function initActiveNav() {
    const sections = document.querySelectorAll("section[id]");
    const links = document.querySelectorAll("[data-nav-link]");
    if (!sections.length || !links.length) return;

    const linkMap = new Map();
    links.forEach((a) => {
      const id = a.getAttribute("href");
      if (id && id.startsWith("#")) linkMap.set(id.slice(1), a);
    });

    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const id = entry.target.id;
        const link = linkMap.get(id);
        if (!link) return;
        if (entry.isIntersecting) {
          links.forEach((l) => l.classList.remove("is-active"));
          link.classList.add("is-active");
        }
      });
    }, { rootMargin: "-45% 0% -50% 0%", threshold: 0 });
    sections.forEach((s) => io.observe(s));
  })();

  /* ============================================================
     13. PARALLAX
     ============================================================ */
  (function initParallax() {
    if (reduceMotion) return;
    const els = document.querySelectorAll("[data-parallax]");
    if (!els.length) return;

    let ticking = false;
    const update = () => {
      const sy = window.scrollY;
      els.forEach((el) => {
        const speed = parseFloat(el.dataset.parallax) || 0.2;
        el.style.transform = `translate3d(0, ${sy * speed}px, 0)`;
      });
      ticking = false;
    };
    window.addEventListener("scroll", () => {
      if (!ticking) { requestAnimationFrame(update); ticking = true; }
    }, { passive: true });
    update();
  })();

  /* ============================================================
     14. MARQUEE — duplicate tracks for seamless loop
     ============================================================ */
  (function initMarquee() {
    document.querySelectorAll("[data-marquee-track]").forEach((track) => {
      const original = track.innerHTML;
      track.innerHTML = original + original;
    });
  })();

  /* ============================================================
     15. WARSAW LOCAL CLOCK
     ============================================================ */
  (function initClock() {
    const el = document.querySelector("[data-clock]");
    if (!el) return;
    const fmt = new Intl.DateTimeFormat("en-GB", {
      hour: "2-digit", minute: "2-digit", second: "2-digit",
      hour12: false, timeZone: "Europe/Warsaw",
    });
    const tick = () => { el.textContent = fmt.format(new Date()); };
    tick();
    setInterval(tick, 1000);
  })();

  /* ============================================================
     16. ROTATING ASTERISK
     ============================================================ */
  (function initAsterisk() {
    if (reduceMotion) return;
    const el = document.querySelector("[data-asterisk]");
    if (!el) return;
    let r = 0;
    const tick = () => {
      r += 0.4;
      el.style.transform = `rotate(${r}deg)`;
      requestAnimationFrame(tick);
    };
    tick();
  })();

  /* ============================================================
     17. STICKER WIGGLE on hover
     ============================================================ */
  document.querySelectorAll("[data-sticker]").forEach((el) => {
    el.addEventListener("mouseenter", () => {
      el.classList.remove("is-wiggling");
      void el.offsetWidth;
      el.classList.add("is-wiggling");
    });
  });

})();
