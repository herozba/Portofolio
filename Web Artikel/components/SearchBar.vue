<script setup lang="ts">
const { search, authorFilter, sortOrder, viewMode, authors, filtered } = useArticles()
</script>

<template>
  <div class="controls">
    <div class="controls__top">
      <div class="search-wrap">
        <svg class="search-icon" viewBox="0 0 20 20" fill="none">
          <circle cx="8.5" cy="8.5" r="5.5" stroke="currentColor" stroke-width="1.5"/>
          <path d="M13 13l4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
        <input
          v-model="search"
          type="text"
          class="search-input"
          placeholder="Cari artikel, penulis, topik…"
          autocomplete="off"
          spellcheck="false"
        />
        <button v-if="search" class="search-clear" @click="search = ''">
          <svg viewBox="0 0 16 16" fill="none" width="14" height="14">
            <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
        </button>
      </div>
    </div>

    <div class="controls__bottom">
      <div class="controls__filters">
        <!-- Author filter -->
        <div class="filter-group">
          <label class="filter-label">Penulis</label>
          <select v-model="authorFilter" class="filter-select">
            <option value="">Semua Penulis</option>
            <option v-for="a in authors" :key="a" :value="a">{{ a }}</option>
          </select>
        </div>

        <!-- Sort -->
        <div class="filter-group">
          <label class="filter-label">Urutan</label>
          <div class="sort-toggle">
            <button
              :class="['sort-btn', { active: sortOrder === 'newest' }]"
              @click="sortOrder = 'newest'"
            >
              Terbaru
            </button>
            <button
              :class="['sort-btn', { active: sortOrder === 'oldest' }]"
              @click="sortOrder = 'oldest'"
            >
              Terlama
            </button>
          </div>
        </div>
      </div>

      <div class="controls__right">
        <div class="results-count">
          <span class="count-num">{{ filtered.length }}</span>
          <span class="count-label">artikel</span>
        </div>

        <!-- View toggle -->
        <div class="view-toggle">
          <button
            :class="['view-btn', { active: viewMode === 'card' }]"
            @click="viewMode = 'card'"
            title="Tampilan Kartu"
          >
            <svg viewBox="0 0 16 16" fill="currentColor" width="15" height="15">
              <rect x="0" y="0" width="7" height="7" rx="1.5"/>
              <rect x="9" y="0" width="7" height="7" rx="1.5"/>
              <rect x="0" y="9" width="7" height="7" rx="1.5"/>
              <rect x="9" y="9" width="7" height="7" rx="1.5"/>
            </svg>
          </button>
          <button
            :class="['view-btn', { active: viewMode === 'list' }]"
            @click="viewMode = 'list'"
            title="Tampilan Daftar"
          >
            <svg viewBox="0 0 16 16" fill="currentColor" width="15" height="15">
              <rect x="0" y="1" width="16" height="2.5" rx="1.2"/>
              <rect x="0" y="6.75" width="16" height="2.5" rx="1.2"/>
              <rect x="0" y="12.5" width="16" height="2.5" rx="1.2"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.controls {
  background: var(--ink-2);
  border-bottom: 1px solid var(--ink-3);
  padding: 16px 32px;
  position: sticky;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(12px);
}

.controls__top { margin-bottom: 12px; }

.search-wrap {
  position: relative;
  display: flex;
  align-items: center;
}

.search-icon {
  position: absolute;
  left: 14px;
  width: 17px;
  height: 17px;
  color: var(--muted);
  pointer-events: none;
  flex-shrink: 0;
}

.search-input {
  width: 100%;
  background: var(--ink-3);
  border: 1px solid var(--ink-3);
  border-radius: var(--radius-md);
  color: var(--paper);
  font-family: var(--font-body);
  font-size: 14px;
  padding: 10px 40px 10px 42px;
  outline: none;
  transition: border-color var(--transition), box-shadow var(--transition);
}

.search-input::placeholder { color: var(--muted); }

.search-input:focus {
  border-color: var(--accent);
  box-shadow: 0 0 0 3px rgba(200, 57, 43, 0.15);
}

.search-clear {
  position: absolute;
  right: 12px;
  background: none;
  border: none;
  color: var(--muted);
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  border-radius: var(--radius-sm);
  transition: color var(--transition);
}

.search-clear:hover { color: var(--paper); }

.controls__bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
}

.controls__filters {
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
}

.filter-group {
  display: flex;
  align-items: center;
  gap: 8px;
}

.filter-label {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.1em;
  color: var(--muted);
  text-transform: uppercase;
  white-space: nowrap;
}

.filter-select {
  background: var(--ink-3);
  border: 1px solid var(--ink-3);
  border-radius: var(--radius-sm);
  color: var(--paper);
  font-family: var(--font-body);
  font-size: 13px;
  padding: 6px 28px 6px 10px;
  cursor: pointer;
  outline: none;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' fill='none'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%237a7468' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 8px center;
  transition: border-color var(--transition);
}

.filter-select:focus { border-color: var(--accent); }
.filter-select option { background: var(--ink-2); }

.sort-toggle {
  display: flex;
  background: var(--ink-3);
  border-radius: var(--radius-sm);
  padding: 2px;
  gap: 2px;
}

.sort-btn {
  background: none;
  border: none;
  border-radius: calc(var(--radius-sm) - 2px);
  color: var(--muted);
  cursor: pointer;
  font-family: var(--font-body);
  font-size: 12px;
  padding: 5px 12px;
  transition: all var(--transition);
  white-space: nowrap;
}

.sort-btn.active {
  background: var(--accent);
  color: var(--paper);
  font-weight: 500;
}

.controls__right {
  display: flex;
  align-items: center;
  gap: 14px;
}

.results-count {
  display: flex;
  align-items: baseline;
  gap: 4px;
}

.count-num {
  font-family: var(--font-display);
  font-size: 22px;
  font-weight: 700;
  color: var(--gold);
}

.count-label {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.view-toggle {
  display: flex;
  background: var(--ink-3);
  border-radius: var(--radius-sm);
  padding: 2px;
  gap: 2px;
}

.view-btn {
  background: none;
  border: none;
  border-radius: calc(var(--radius-sm) - 2px);
  color: var(--muted);
  cursor: pointer;
  padding: 6px 8px;
  display: flex;
  align-items: center;
  transition: all var(--transition);
}

.view-btn.active {
  background: var(--ink);
  color: var(--paper);
}

@media (max-width: 600px) {
  .controls { padding: 12px 16px; }
  .controls__bottom { gap: 10px; }
}
</style>
