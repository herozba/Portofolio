<template>
  <footer class="footer">
    <div class="footer__inner">
      <div class="footer__brand">
        <span class="footer__logo">D<em>N</em></span>
        <span class="footer__copy">© {{ new Date().getFullYear() }} Dudung News. Seluruh hak cipta dilindungi.</span>
      </div>
      <p class="footer__tagline">Dibangun dengan <span style="color:var(--accent)">♥</span> menggunakan Nuxt 4</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--ink-3);
  background: var(--ink-2);
  padding: 24px 32px;
}

.footer__inner {
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
}

.footer__brand {
  display: flex;
  align-items: center;
  gap: 12px;
}

.footer__logo {
  font-family: var(--font-display);
  font-weight: 900;
  font-size: 20px;
  color: var(--paper);
  letter-spacing: -1px;
}

.footer__logo em {
  font-style: italic;
  color: var(--gold);
}

.footer__copy {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--muted);
  letter-spacing: 0.04em;
}

.footer__tagline {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--muted);
  letter-spacing: 0.04em;
}
</style>
