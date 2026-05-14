<script setup lang="ts">
const today = computed(() => {
  return new Date().toLocaleDateString('id-ID', {
    weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
  })
})
</script>

<template>
  <header class="header">
    <div class="header__ticker">
      <span class="ticker__live">
        <span class="dot" />
        LANGSUNG
      </span>
      <div class="ticker__scroll">
        <span>Portal Berita Resmi Dudung &mdash; Berita Terpercaya, Setiap Saat &mdash; Baca, Telusuri, Temukan &mdash;</span>
        <span>Portal Berita Resmi Dudung &mdash; Berita Terpercaya, Setiap Saat &mdash; Baca, Telusuri, Temukan &mdash;</span>
      </div>
    </div>

    <div class="header__main">
      <div class="header__eyebrow">
        <time class="header__date">{{ today }}</time>
        <span class="header__edition">Edisi Digital</span>
      </div>

      <div class="header__brand">
        <div class="brand__rule" />
        <div class="brand__wordmark">
          <span class="brand__d">D</span>
          <span class="brand__name">UDUNG<br><em>NEWS</em></span>
        </div>
        <div class="brand__rule" />
      </div>

      <p class="header__tagline">Karena Berita Tak Pernah Tidur</p>
    </div>
  </header>
</template>

<style scoped>
.header {
  background: var(--ink-2);
  border-bottom: 1px solid var(--ink-3);
}

/* ── Ticker ── */
.header__ticker {
  display: flex;
  align-items: center;
  gap: 0;
  overflow: hidden;
  height: 32px;
  background: var(--accent);
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.05em;
  color: var(--paper);
}

.ticker__live {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 0 16px;
  white-space: nowrap;
  font-weight: 700;
  letter-spacing: 0.12em;
  background: rgba(0,0,0,0.25);
  height: 100%;
}

.dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--paper);
  animation: pulse-dot 1.2s ease-in-out infinite;
  flex-shrink: 0;
}

.ticker__scroll {
  display: flex;
  animation: ticker 20s linear infinite;
  white-space: nowrap;
  padding-left: 24px;
}

.ticker__scroll span { padding-right: 40px; }

@keyframes ticker {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}

/* ── Main header ── */
.header__main {
  padding: 28px 32px 24px;
  text-align: center;
}

.header__eyebrow {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.header__date,
.header__edition {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.1em;
  color: var(--muted-2);
  text-transform: uppercase;
}

.header__brand {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 8px;
}

.brand__rule {
  flex: 1;
  height: 2px;
  background: linear-gradient(to right, transparent, var(--gold), transparent);
}

.brand__wordmark {
  display: flex;
  align-items: center;
  gap: 4px;
}

.brand__d {
  font-family: var(--font-display);
  font-size: 92px;
  font-weight: 900;
  line-height: 0.85;
  color: var(--accent);
  letter-spacing: -4px;
  text-shadow: 4px 4px 0 rgba(200, 57, 43, 0.2);
}

.brand__name {
  font-family: var(--font-display);
  font-size: 38px;
  font-weight: 700;
  line-height: 1.05;
  color: var(--paper);
  letter-spacing: 8px;
}

.brand__name em {
  font-style: italic;
  color: var(--gold);
  font-size: 30px;
  letter-spacing: 12px;
}

.header__tagline {
  font-family: var(--font-display);
  font-style: italic;
  font-size: 14px;
  color: var(--muted-2);
  letter-spacing: 0.05em;
}

@media (max-width: 600px) {
  .brand__d { font-size: 60px; }
  .brand__name { font-size: 26px; letter-spacing: 4px; }
  .header__main { padding: 20px 16px 16px; }
}
</style>
