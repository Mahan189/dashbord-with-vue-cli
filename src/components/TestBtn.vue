<template>
  <div :class="theme" class="theme-container">
    <div class="toggle-container">
      <button class="toggle-button" @click="toggleTheme">
        <span class="icon">{{ theme === 'light' ? '🌙' : '☀️' }}</span>
        <span class="button-text">{{ theme === 'light' ? 'Dark Mode' : 'Light Mode' }}</span>
      </button>
    </div>
   
  </div>
</template>

<script>
import { ref, onMounted, watch } from 'vue';

export default {
  name: 'DarkModeToggle',
  setup() {
    const theme = ref('light');

    const toggleTheme = () => {
      theme.value = theme.value === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', theme.value);
    };

    watch(theme, (newTheme) => {
      document.body.className = newTheme;
    });

    onMounted(() => {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        theme.value = savedTheme;
      }
      document.body.className = theme.value;
    });

    return {
      theme,
      toggleTheme,
    };
  },
};
</script>

<style scoped>
.theme-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; /* تمام ارتفاع صفحه */
  transition: background-color 0.5s, color 0.5s;
}

.toggle-container {
  margin-bottom: 20px;
}

.toggle-button {
  background-color: transparent;
  border: 2px solid currentColor;
  border-radius: 30px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: all 0.3s ease;
}

.toggle-button:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.icon {
  margin-right: 10px;
  font-size: 20px;
}

.light {
  background-color: #ffffff;
  color: #000000;
}

.dark {
  background-color: #2c2c2c;
  color: #ffffff;
}

/* Smooth transition for the theme change */
body {
  transition: background-color 0.5s, color 0.5s;
}
</style>