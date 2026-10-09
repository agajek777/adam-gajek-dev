// Theme toggle, active-section tracking for the side nav, and copy-to-clipboard.

const root = document.documentElement;
const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

function currentTheme(): "light" | "dark" {
  const set = root.dataset.theme;
  if (set === "light" || set === "dark") return set;
  return darkQuery.matches ? "dark" : "light";
}

function syncThemeButton(button: HTMLButtonElement) {
  const next = currentTheme() === "dark" ? "light" : "dark";
  button.setAttribute("aria-label", button.dataset[next === "light" ? "labelLight" : "labelDark"] ?? "");
}

const themeButton = document.querySelector<HTMLButtonElement>(".theme-toggle");
if (themeButton) {
  syncThemeButton(themeButton);
  darkQuery.addEventListener("change", () => syncThemeButton(themeButton));
  themeButton.addEventListener("click", () => {
    const next = currentTheme() === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Storage unavailable (private mode); the choice lasts for this page view.
    }
    syncThemeButton(themeButton);
  });
}

// Mark the nav link of the section currently in the reading zone.
const navLinks = new Map<string, HTMLAnchorElement>();
document.querySelectorAll<HTMLAnchorElement>("[data-nav]").forEach((a) => navLinks.set(a.dataset.nav!, a));

if (navLinks.size > 0) {
  const visible = new Set<string>();
  const order = [...navLinks.keys()];
  let endReached = false;

  const update = () => {
    // The last section is too short to reach the reading zone, so the page end activates it.
    const id = endReached ? order.at(-1) : order.find((key) => visible.has(key));
    if (!id) return; // Between sections: keep the previous marker.
    navLinks.forEach((a, key) => {
      if (key === id) a.setAttribute("aria-current", "true");
      else a.removeAttribute("aria-current");
    });
  };

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) visible.add(e.target.id);
        else visible.delete(e.target.id);
      }
      update();
    },
    { rootMargin: "-30% 0px -55% 0px" },
  );
  order.forEach((id) => {
    const section = document.getElementById(id);
    if (section) sectionObserver.observe(section);
  });

  const footer = document.querySelector(".footer");
  if (footer) {
    new IntersectionObserver(([e]) => {
      endReached = e.isIntersecting;
      update();
    }).observe(footer);
  }
}

// Copy email with visible and announced confirmation.
const copyButton = document.querySelector<HTMLButtonElement>(".copy-email");
const copyStatus = document.querySelector<HTMLElement>(".copy-status");
if (copyButton) {
  const label = copyButton.querySelector<HTMLElement>(".copy-label")!;
  const idleText = label.textContent ?? "";
  let timer: number | undefined;

  copyButton.addEventListener("click", async () => {
    window.clearTimeout(timer);
    try {
      await navigator.clipboard.writeText(copyButton.dataset.email ?? "");
      copyButton.dataset.state = "copied";
      label.textContent = copyButton.dataset.copied ?? "";
      if (copyStatus) copyStatus.textContent = "";
      timer = window.setTimeout(() => {
        delete copyButton.dataset.state;
        label.textContent = idleText;
      }, 2000);
    } catch {
      if (copyStatus) copyStatus.textContent = copyButton.dataset.failed ?? "";
    }
  });
}
