<script setup>
import MenuBar from './components/MenuBar.vue';
</script>

<template>
  <div class="container">
    <header class="container_menu">
      <MenuBar/>
    </header>
    <main>
      <RouterView></RouterView>
    </main>
  </div>
</template>

<style scoped></style>
