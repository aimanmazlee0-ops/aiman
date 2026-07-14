// ============================================================
// PKPJ — suis Mod Gelap / Mod Terang (dikongsi semua halaman)
// ============================================================
(function () {
  function safeGet(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function safeSet(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }

  function applyTheme(mode) {
    document.body.setAttribute("data-theme", mode);
    const label = document.getElementById("themeToggleLabel");
    if (label) label.textContent = mode === "dark" ? "Mod Gelap" : "Mod Terang";
    safeSet("pkpj_theme", mode);
  }

  window.toggleTheme = function () {
    const cur = document.body.getAttribute("data-theme") === "dark" ? "light" : "dark";
    applyTheme(cur);
  };

  document.addEventListener("DOMContentLoaded", function () {
    applyTheme(safeGet("pkpj_theme") || "dark");
  });
})();