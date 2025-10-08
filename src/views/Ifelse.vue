<script setup>
import { ref } from 'vue'

const edad = ref(null)
</script>

<template>
  <div class="container">
    <main class="welcome">
      <section class="intro">
        <h1>v-if / v-else-if / v-else</h1>
        <p>
          Esta estructura se utiliza para mostrar u ocultar elementos condicionalmente según una expresión.
        </p>

        <input v-model="edad" type="number" placeholder="Ingresa tu edad" />

        <p v-if="edad >= 18">Eres mayor de edad.</p>
        <p v-else-if="edad >= 0">Eres menor de edad.</p>
        <p v-else>Por favor, ingresa una edad válida.</p>
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

input {
  margin: 1rem 0;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 6px;
}

p {
  line-height: 1.6;
}
</style>
