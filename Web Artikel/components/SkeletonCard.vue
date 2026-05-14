<template>
  <div class="skeleton-card">
    <div class="sk-row sk-row--sm" />
    <div class="sk-block sk-block--title" />
    <div class="sk-block sk-block--title sk-block--short" />
    <div class="sk-block" />
    <div class="sk-block sk-block--short" />
    <div class="sk-footer">
      <div class="sk-circle" />
      <div class="sk-block sk-block--xs" />
    </div>
  </div>
</template>

<style scoped>
@keyframes sk-shimmer {
  0%   { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}

.skeleton-card {
  background: var(--ink-2);
  border: 1px solid var(--ink-3);
  border-radius: var(--radius-lg);
  padding: 22px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.sk-row {
  display: flex;
  gap: 8px;
  margin-bottom: 4px;
}

.sk-block,
.sk-circle,
.sk-row {
  background: linear-gradient(90deg, var(--ink-3) 25%, color-mix(in srgb, var(--ink-3) 70%, var(--ink-2)) 50%, var(--ink-3) 75%);
  background-size: 200% 100%;
  animation: sk-shimmer 1.5s infinite;
  border-radius: 4px;
}

.sk-block { height: 14px; width: 100%; }
.sk-block--title { height: 20px; }
.sk-block--short { width: 60%; }
.sk-block--xs { height: 12px; width: 80px; }
.sk-row--sm { height: 10px; width: 40%; }

.sk-circle {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  flex-shrink: 0;
}

.sk-footer {
  display: flex;
  align-items: center;
  gap: 8px;
  padding-top: 12px;
  border-top: 1px solid var(--ink-3);
  margin-top: auto;
}
</style>
