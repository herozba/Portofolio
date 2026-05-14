<script setup lang="ts">
import type { Article } from '~/composables/useArticles'

const props = defineProps<{ article: Article; index: number }>()

const excerpt = computed(() =>
  props.article.description || props.article.body?.slice(0, 160).trim() + '…'
)

const formattedDate = computed(() => {
  if (!props.article.date) return '—'
  return new Date(props.article.date).toLocaleDateString('id-ID', {
    day: 'numeric', month: 'long', year: 'numeric'
  })
})

const categoryColors: Record<string, string> = {
  'Teknologi': '#3b82f6',
  'Sains':     '#10b981',
  'Politik':   '#f59e0b',
  'Bisnis':    '#8b5cf6',
  'Olahraga':  '#ef4444',
  'Kesehatan': '#06b6d4',
  'Budaya':    '#ec4899',
  'Dunia':     '#f97316',
}

const catColor = computed(() =>
  categoryColors[props.article.category ?? ''] ?? '#7a7468'
)
</script>

<template>
  <article
    class="list-item"
    :style="{ '--delay': `${index * 40}ms`, '--cat-color': catColor }"
  >
    <div class="list-item__num">
      <span>{{ String(index + 1).padStart(2, '0') }}</span>
    </div>

    <div class="list-item__body">
      <div class="list-item__meta">
        <span class="li-cat" :style="{ color: catColor }">{{ article.category }}</span>
        <span class="li-sep">·</span>
        <time class="li-date">{{ formattedDate }}</time>
        <span class="li-sep">·</span>
        <span class="li-read">{{ article.readTime }} menit baca</span>
      </div>

      <h2 class="list-item__title">{{ article.title }}</h2>
      <p class="list-item__excerpt">{{ excerpt }}</p>

      <div class="list-item__author">
        <svg viewBox="0 0 14 14" fill="none" width="12" height="12" style="opacity:0.5">
          <circle cx="7" cy="4" r="3" stroke="currentColor" stroke-width="1.2"/>
          <path d="M1 13c0-3.314 2.686-5 6-5s6 1.686 6 5" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>
        </svg>
        <span>{{ article.author }}</span>
      </div>
    </div>
  </article>
</template>

<style scoped>
.list-item {
  display: flex;
  gap: 20px;
  padding: 20px 0;
  border-bottom: 1px solid var(--ink-3);
  animation: slideIn 0.3s calc(var(--delay)) both;
  cursor: default;
  transition: background var(--transition);
  border-left: 3px solid transparent;
  padding-left: 16px;
  transition: border-color var(--transition), padding-left var(--transition);
}

.list-item:hover {
  border-left-color: var(--cat-color);
}

.list-item:first-child { border-top: 1px solid var(--ink-3); }

.list-item__num {
  font-family: var(--font-display);
  font-size: 36px;
  font-weight: 900;
  color: var(--ink-3);
  line-height: 1;
  min-width: 44px;
  padding-top: 2px;
  user-select: none;
}

.list-item__body {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.list-item__meta {
  display: flex;
  align-items: center;
  gap: 6px;
  flex-wrap: wrap;
}

.li-cat {
  font-family: var(--font-mono);
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 500;
}

.li-sep { color: var(--ink-3); font-size: 10px; }

.li-date, .li-read {
  font-family: var(--font-mono);
  font-size: 10px;
  color: var(--muted);
  letter-spacing: 0.04em;
}

.list-item__title {
  font-family: var(--font-display);
  font-size: 20px;
  font-weight: 700;
  line-height: 1.3;
  color: var(--paper);
}

.list-item__excerpt {
  font-size: 13px;
  line-height: 1.7;
  color: var(--muted-2);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.list-item__author {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: var(--muted);
  margin-top: 4px;
}

@media (max-width: 480px) {
  .list-item__num { display: none; }
  .list-item { padding-left: 0; }
}
</style>
