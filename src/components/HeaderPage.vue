<template>
    <header>
      <nav>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About</router-link></li>
        </ul>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: 'HeaderPage',
  }
  </script>
  
  <style scoped>
  header {
    background-color: #42b983;
    padding: 20px;
    color: white;
  }
  nav ul {
    list-style-type: none;
    display: flex;
    gap: 15px;
  }
  </style>