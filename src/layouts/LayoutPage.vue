<template>
    <div>
      <HeaderPage />
      <main>
        <slot></slot>
      </main>
      <FooterPage />
    </div>
  </template>
  
  <script>
  import HeaderPage from '@/components/HeaderPage.vue'
  import FooterPage from '@/components/FooterPage.vue'
  
  export default {
    name: 'LayoutPage',
    components: {
      HeaderPage,
      FooterPage,
    },
  }
  </script>
  
  <style scoped>
  main {
    padding: 20px;
  }
  </style>