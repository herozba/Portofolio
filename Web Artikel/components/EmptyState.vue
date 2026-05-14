<script setup lang="ts">
defineProps<{ message?: string }>()
</script>

<template>
  <div class="empty">
    <div class="empty__icon">
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="16" width="48" height="36" rx="4" stroke="currentColor" stroke-width="2"/>
        <path d="M8 24h48" stroke="currentColor" stroke-width="2"/>
        <rect x="16" y="32" width="20" height="2" rx="1" fill="currentColor" opacity="0.4"/>
        <rect x="16" y="38" width="14" height="2" rx="1" fill="currentColor" opacity="0.25"/>
        <circle cx="46" cy="46" r="12" fill="var(--ink-2)" stroke="currentColor" stroke-width="2"/>
        <path d="M42 46h8M46 42v8" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity="0.4"/>
        <path d="M43 43l6 6M49 43l-6 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
      </svg>
    </div>
    <p class="empty__title">Tidak ada artikel ditemukan</p>
    <p class="empty__sub">{{ message ?? 'Coba ubah kata kunci atau filter pencarian Anda.' }}</p>
  </div>
</template>

<style scoped>
.empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 24px;
  text-align: center;
  gap: 12px;
}

.empty__icon {
  color: var(--ink-3);
  margin-bottom: 8px;
}

.empty__icon svg { width: 64px; height: 64px; }

.empty__title {
  font-family: var(--font-display);
  font-size: 20px;
  font-weight: 700;
  color: var(--muted);
}

.empty__sub {
  font-size: 14px;
  color: var(--muted);
  max-width: 300px;
  line-height: 1.6;
}
</style>
