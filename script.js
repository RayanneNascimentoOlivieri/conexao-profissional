/* =========================================================
   Conexão Profissional · Interações
   ========================================================= */

(() => {
  const root = document.documentElement;
  const body = document.body;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------------- Tema (dark/light) ---------------- */

  const themeToggle = document.querySelector(".theme-toggle");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  let savedTheme = null;
  try {
    savedTheme = localStorage.getItem("theme");
  } catch {
    savedTheme = null;
  }
  const initialTheme = savedTheme || (prefersDark ? "dark" : "light");

  function applyTheme(theme) {
    root.dataset.theme = theme;
    body.dataset.theme = theme;
    root.style.colorScheme = theme;
    if (themeToggle) {
      const isDark = theme === "dark";
      themeToggle.setAttribute("aria-pressed", String(isDark));
      themeToggle.setAttribute(
        "aria-label",
        isDark ? "Alternar para tema claro" : "Alternar para tema escuro"
      );
    }
  }

  applyTheme(initialTheme);

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const next = body.dataset.theme === "dark" ? "light" : "dark";
      try {
        localStorage.setItem("theme", next);
      } catch {
        // Preferencia temporaria se o navegador bloquear armazenamento.
      }
      applyTheme(next);
    });
  }

  /* ---------------- Menu mobile ---------------- */

  const menuToggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector("#menu");

  if (menuToggle && menu) {
    const closeMenu = () => {
      menu.classList.remove("is-open");
      body.classList.remove("menu-open");
      menuToggle.setAttribute("aria-expanded", "false");
    };

    menuToggle.addEventListener("click", () => {
      const isOpen = menu.classList.toggle("is-open");
      body.classList.toggle("menu-open", isOpen);
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    menu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeMenu();
    });
  }

  /* ---------------- Voltar ao topo ---------------- */

  const scrollTopLinks = document.querySelectorAll("[data-scroll-top]");
  const backToTop = document.querySelector(".back-to-top");

  scrollTopLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
      history.replaceState(null, "", "#topo");
    });
  });

  /* ---------------- Scroll: progresso + back-to-top ---------------- */

  const progress = document.querySelector(".scroll-progress span");
  const sections = document.querySelectorAll("main section[id]");
  const navLinks = document.querySelectorAll(".nav-links a");

  function onScroll() {
    const doc = document.documentElement;
    const max = doc.scrollHeight - window.innerHeight;
    const ratio = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
    if (progress) progress.style.width = `${ratio * 100}%`;
    if (backToTop) backToTop.classList.toggle("is-visible", window.scrollY > 600);
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if ("IntersectionObserver" in window) {
    const navObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          navLinks.forEach((link) => {
            const isActive = link.getAttribute("href") === `#${entry.target.id}`;
            link.classList.toggle("is-active", isActive);
            if (isActive) link.setAttribute("aria-current", "page");
            else link.removeAttribute("aria-current");
          });
        });
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0.01 }
    );

    sections.forEach((section) => navObserver.observe(section));
  }

  /* ---------------- Reveal on scroll ---------------- */

  const revealElements = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !reduceMotion) {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 }
    );
    revealElements.forEach((element) => revealObserver.observe(element));
  } else {
    revealElements.forEach((element) => element.classList.add("is-visible"));
  }

  /* ---------------- Countdown timer ---------------- */

  const countdownEls = {
    days: document.querySelector('[data-countdown="days"]'),
    hours: document.querySelector('[data-countdown="hours"]'),
    minutes: document.querySelector('[data-countdown="minutes"]'),
    seconds: document.querySelector('[data-countdown="seconds"]'),
  };

  const eventDate = new Date("2026-06-08T19:00:00-03:00");

  function pad(n) {
    return String(Math.max(0, Math.floor(n))).padStart(2, "0");
  }

  function tick() {
    const diff = eventDate.getTime() - Date.now();
    if (diff <= 0) {
      Object.values(countdownEls).forEach((el) => {
        if (el) el.textContent = "00";
      });
      return;
    }
    const totalSeconds = Math.floor(diff / 1000);
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    if (countdownEls.days) countdownEls.days.textContent = pad(days);
    if (countdownEls.hours) countdownEls.hours.textContent = pad(hours);
    if (countdownEls.minutes) countdownEls.minutes.textContent = pad(minutes);
    if (countdownEls.seconds) countdownEls.seconds.textContent = pad(seconds);
  }

  if (countdownEls.days) {
    tick();
    setInterval(tick, 1000);
  }

  /* ---------------- FAQ: apenas uma pergunta aberta ---------------- */

  const faqItems = document.querySelectorAll(".faq details");
  faqItems.forEach((item) => {
    item.addEventListener("toggle", () => {
      if (!item.open) return;
      faqItems.forEach((other) => {
        if (other !== item) other.removeAttribute("open");
      });
    });
  });

  /* ---------------- WhatsApp placeholder ---------------- */

  const whatsappLink = document.querySelector("#whatsappLink");
  if (whatsappLink && whatsappLink.href.includes("SEU-LINK-AQUI")) {
    whatsappLink.addEventListener("click", (event) => {
      event.preventDefault();
      alert("Substitua o link do WhatsApp no index.html antes de divulgar o site.");
    });
  }

  /* ---------------- Magnetic buttons ---------------- */

  const magnets = document.querySelectorAll(".magnetic");
  if (!reduceMotion && window.matchMedia("(hover: hover)").matches) {
    magnets.forEach((el) => {
      el.addEventListener("mousemove", (event) => {
        const rect = el.getBoundingClientRect();
        const x = event.clientX - rect.left - rect.width / 2;
        const y = event.clientY - rect.top - rect.height / 2;
        el.style.transform = `translate(${x * 0.08}px, ${y * 0.18}px) translateY(-3px)`;
      });
      el.addEventListener("mouseleave", () => {
        el.style.transform = "";
      });
    });
  }

  /* ---------------- Card hover spotlight ---------------- */

  const spotCards = document.querySelectorAll(".speaker-card");
  if (!reduceMotion && window.matchMedia("(hover: hover)").matches) {
    spotCards.forEach((card) => {
      card.addEventListener("mousemove", (event) => {
        const rect = card.getBoundingClientRect();
        const mx = ((event.clientX - rect.left) / rect.width) * 100;
        const my = ((event.clientY - rect.top) / rect.height) * 100;
        card.style.setProperty("--mx", `${mx}%`);
        card.style.setProperty("--my", `${my}%`);
      });
    });
  }

  /* ---------------- Year ---------------- */

  const yearEl = document.querySelector("#year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
})();
