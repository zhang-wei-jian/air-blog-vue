<template>
  <button class="theme-toggle" @click="toggleTheme" :title="isDark ? '切换到浅色模式' : '切换到深色模式'">
    <svg v-if="isDark" class="theme-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1" x2="12" y2="3"/>
      <line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/>
      <line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
    <svg v-else class="theme-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  </button>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'

const isDark = ref(false)

const getSystemTheme = () => {
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

const getStoredTheme = () => {
  const stored = localStorage.getItem('theme')
  if (stored) {
    return stored === 'dark'
  }
  return null
}

const applyTheme = (dark) => {
  const theme = dark ? 'dark' : 'light'
  document.documentElement.setAttribute('data-theme', theme)
  localStorage.setItem('theme', theme)
}

const toggleTheme = () => {
  isDark.value = !isDark.value
  applyTheme(isDark.value)
}

onMounted(() => {
  const storedTheme = getStoredTheme()
  if (storedTheme !== null) {
    isDark.value = storedTheme
  } else {
    isDark.value = getSystemTheme()
  }
  applyTheme(isDark.value)

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (getStoredTheme() === null) {
      isDark.value = e.matches
      applyTheme(isDark.value)
    }
  })
})
</script>

<style scoped>
.theme-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: none;
  background: transparent;
  cursor: pointer;
  transition: background-color 0.2s ease;
  color: var(--color-nav-item);
  padding: 0;
}

.theme-toggle:hover {
  background-color: var(--color-bg-secondary);
  color: var(--color-nav-item-hover);
}

.theme-icon {
  width: 20px;
  height: 20px;
}
</style>
