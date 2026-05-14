<script setup lang="ts">
const { loading, error, filtered, viewMode, fetchArticles } = useArticles()

await fetchArticles()
</script>

<template>
  <div class="page">
    <AppHeader />
    <SearchBar />

    <main class="main">
      <div class="main__inner">

        <!-- Error state -->
        <div v-if="error" class="error-state">
          <svg viewBox="0 0 24 24" fill="none" width="32" height="32">
            <circle cx="12" cy="12" r="10" stroke="var(--accent)" stroke-width="1.5"/>
            <path d="M12 7v6M12 16.5v.5" stroke="var(--accent)" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
          <p>{{ error }}</p>
          <button class="retry-btn" @click="fetchArticles()">Coba Lagi</button>
        </div>

        <!-- Loading skeleton — card view -->
        <div v-else-if="loading && viewMode === 'card'" class="grid">
          <SkeletonCard v-for="i in 9" :key="i" />
        </div>

        <!-- Loading skeleton — list view -->
        <div v-else-if="loading && viewMode === 'list'" class="list-skeleton">
          <div v-for="i in 7" :key="i" class="list-skel-item">
            <div class="sk-num" />
            <div class="sk-content">
              <div class="sk-line sk-line--sm" />
              <div class="sk-line sk-line--lg" />
              <div class="sk-line sk-line--md" />
            </div>
          </div>
        </div>

        <!-- Empty state -->
        <EmptyState v-else-if="!loading && filtered.length === 0" />

        <!-- Card Grid -->
        <div v-else-if="viewMode === 'card'" class="grid">
          <ArticleCard
            v-for="(article, i) in filtered"
            :key="article.id"
            :article="article"
            :index="i"
          />
        </div>

        <!-- List view -->
        <div v-else class="list">
          <ArticleListItem
            v-for="(article, i) in filtered"
            :key="article.id"
            :article="article"
            :index="i"
          />
        </div>

      </div>
    </main>

    <AppFooter />
  </div>
</template>

<style scoped>
.page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main {
  flex: 1;
  padding: 32px;
}

.main__inner {
  max-width: 1280px;
  margin: 0 auto;
}

/* ── Grid ── */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

/* ── List ── */
.list {
  max-width: 800px;
}

/* ── Error ── */
.error-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 80px 24px;
  text-align: center;
  color: var(--muted);
}

.retry-btn {
  background: var(--accent);
  border: none;
  border-radius: var(--radius-md);
  color: var(--paper);
  cursor: pointer;
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 500;
  padding: 10px 24px;
  margin-top: 8px;
  transition: opacity var(--transition);
}

.retry-btn:hover { opacity: 0.85; }

/* ── Skeleton list ── */
.list-skeleton {
  max-width: 800px;
  display: flex;
  flex-direction: column;
}

.list-skel-item {
  display: flex;
  gap: 20px;
  padding: 20px 0;
  border-bottom: 1px solid var(--ink-3);
}

.sk-num {
  width: 44px;
  height: 40px;
  background: var(--ink-3);
  border-radius: 4px;
  flex-shrink: 0;
  animation: shimmer 1.5s infinite;
}

.sk-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.sk-line {
  height: 14px;
  background: linear-gradient(90deg, var(--ink-3) 25%, color-mix(in srgb, var(--ink-3) 70%, var(--ink-2)) 50%, var(--ink-3) 75%);
  background-size: 200% 100%;
  animation: sk-shimmer 1.5s infinite;
  border-radius: 4px;
}

.sk-line--sm { height: 10px; width: 30%; }
.sk-line--lg { height: 20px; }
.sk-line--md { height: 13px; width: 75%; }

@keyframes sk-shimmer {
  0%   { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}

@media (max-width: 600px) {
  .main { padding: 20px 16px; }
  .grid { grid-template-columns: 1fr; }
}
</style>
