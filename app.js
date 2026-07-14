// ============================================================
// PKPJ — Suis Mod Gelap / Mod Terang & Pemeriksaan Login
// ============================================================
(function () {
  function safeGet(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function safeSet(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }

  // ---- Tema Gelap / Terang (kod asal awak, tidak berubah) ----
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

  // ---- Pemeriksaan Login (baru) ----
  document.addEventListener("DOMContentLoaded", function () {
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    const isHomePage = currentPage === "home.html" || currentPage === "";
    const isLoggedIn = safeGet("pkpj_user");

    if (!isHomePage && !isLoggedIn) {
      window.location.href = "home.html";
    }
  });

  // ---- Logout (panggil logout() dari mana-mana halaman) ----
  window.logout = function () {
    try {
      localStorage.removeItem("pkpj_user");
      localStorage.removeItem("pkpj_login_time");
      window.location.href = "home.html";
    } catch (e) {}
  };

  // ---- Ambil nama user yang login ----
  window.getLoggedInUser = function () {
    return safeGet("pkpj_user") || null;
  };
})();
