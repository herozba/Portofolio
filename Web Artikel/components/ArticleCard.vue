<script setup lang="ts">
import type { Article } from '~/composables/useArticles'

const props = defineProps<{ article: Article; index: number }>()

const excerpt = computed(() =>
  props.article.description || props.article.body?.slice(0, 120).trim() + '…'
)

const formattedDate = computed(() => {
  if (!props.article.date) return '—'
  return new Date(props.article.date).toLocaleDateString('id-ID', {
    day: 'numeric', month: 'short', year: 'numeric'
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

const avatarInitials = computed(() => {
  const parts = (props.article.author ?? 'XX').split(' ')
  return (parts[0]?.[0] ?? '') + (parts[1]?.[0] ?? '')
})
</script>

<template>
  <article
    class="card"
    :style="{ '--delay': `${index * 60}ms` }"
  >
    <header class="card__header">
      <span class="card__cat" :style="{ color: catColor }">
        <span class="cat-dot" :style="{ background: catColor }" />
        {{ article.category }}
      </span>
      <time class="card__date">{{ formattedDate }}</time>
    </header>

    <h2 class="card__title">{{ article.title }}</h2>

    <p class="card__excerpt">{{ excerpt }}</p>

    <footer class="card__footer">
      <div class="card__author">
        <div class="author-avatar" :style="{ '--cat-color': catColor }">
          {{ avatarInitials.toUpperCase() }}
        </div>
        <span class="author-name">{{ article.author }}</span>
      </div>
      <div class="card__meta">
        <span class="read-time">
          <svg viewBox="0 0 16 16" fill="none" width="12" height="12" style="margin-right:4px;opacity:0.5">
            <circle cx="8" cy="8" r="6.5" stroke="currentColor" stroke-width="1.2"/>
            <path d="M8 4.5V8l2.5 1.5" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>
          </svg>
          {{ article.readTime }} mnt
        </span>
      </div>
    </footer>

    <div class="card__glow" :style="{ '--glow-color': catColor }" />
  </article>
</template>

<style scoped>
.card {
  position: relative;
  background: var(--ink-2);
  border: 1px solid var(--ink-3);
  border-radius: var(--radius-lg);
  padding: 22px 22px 18px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  cursor: default;
  overflow: hidden;
  animation: fadeUp 0.4s calc(var(--delay)) both;
  transition: border-color var(--transition), transform var(--transition), box-shadow var(--transition);
}

.card:hover {
  border-color: rgba(200, 57, 43, 0.4);
  transform: translateY(-3px);
  box-shadow: 0 12px 36px rgba(0,0,0,0.35);
}

.card:hover .card__glow {
  opacity: 1;
}

.card__glow {
  position: absolute;
  inset: 0;
  border-radius: var(--radius-lg);
  background: radial-gradient(ellipse at 0% 0%, color-mix(in srgb, var(--glow-color) 8%, transparent) 0%, transparent 60%);
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.4s ease;
}

/* ── Header ── */
.card__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.card__cat {
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-weight: 500;
}

.cat-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  flex-shrink: 0;
}

.card__date {
  font-family: var(--font-mono);
  font-size: 10px;
  color: var(--muted);
  letter-spacing: 0.04em;
}

/* ── Title ── */
.card__title {
  font-family: var(--font-display);
  font-size: 18px;
  font-weight: 700;
  line-height: 1.3;
  color: var(--paper);
  flex: 1;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* ── Excerpt ── */
.card__excerpt {
  font-size: 13px;
  line-height: 1.65;
  color: var(--muted-2);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* ── Footer ── */
.card__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 12px;
  border-top: 1px solid var(--ink-3);
  margin-top: auto;
}

.card__author {
  display: flex;
  align-items: center;
  gap: 8px;
}

.author-avatar {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: color-mix(in srgb, var(--cat-color) 20%, var(--ink-3));
  color: var(--cat-color);
  font-size: 10px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.04em;
  flex-shrink: 0;
  border: 1px solid color-mix(in srgb, var(--cat-color) 30%, transparent);
}

.author-name {
  font-size: 12px;
  color: var(--muted-2);
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 120px;
}

.card__meta {
  display: flex;
  align-items: center;
  gap: 8px;
}

.read-time {
  display: flex;
  align-items: center;
  font-family: var(--font-mono);
  font-size: 10px;
  color: var(--muted);
  letter-spacing: 0.04em;
}
</style>
