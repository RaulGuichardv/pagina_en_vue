<script setup>
import { ref } from 'vue'

const mostrar = ref(true)
</script>

<template>
  <div class="container">
    <main class="welcome">
      <section class="intro">
        <h1>v-show</h1>
        <p>
          Usa <strong>v-show</strong> para mostrar u ocultar elementos sin eliminarlos del DOM.
        </p>

        <button @click="mostrar = !mostrar">
          {{ mostrar ? 'Ocultar' : 'Mostrar' }} mensaje
        </button>

        <p v-show="mostrar" class="mensaje">¡Este texto aparece y desaparece!</p>
      </section>
    </main>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f6f8fa;
  color: #2c3e50;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.container_menu {
  width: 100%;
  background-color: #42b883;
  padding: 1rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.welcome {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  text-align: center;
}

.intro {
  max-width: 700px;
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

h1 {
  color: #42b883;
  margin-bottom: 1rem;
}

button {
  background-color: #42b883;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 10px;
}
button:hover {
  background-color: #2c9e70;
}

.mensaje {
  margin-top: 1rem;
  font-weight: bold;
}
</style>
