<script setup>
import MenuBar from '../components/MenuBar.vue'
</script>

<template>
  <div class="container">
    <main class="welcome">
      <section class="intro">
        <h1>Bienvenido a la guía interactiva de Estructuras de Control en Vue 3 🎯</h1>
        <p>
          Esta aplicación es una <strong>Single Page Application (SPA)</strong> creada con <strong>Vue 3</strong> y <strong>Vue Router</strong>.
          Su objetivo es mostrarte de forma sencilla cómo funcionan las principales
          <strong>estructuras de control</strong> en Vue:
        </p>

        <ul>
          <li><strong>v-if / v-else-if / v-else:</strong> Para mostrar contenido condicionalmente.</li>
          <li><strong>v-show:</strong> Para ocultar o mostrar elementos sin eliminarlos del DOM.</li>
          <li><strong>v-for:</strong> Para iterar sobre listas o colecciones.</li>
          <li><strong>v-bind:key:</strong> Para identificar de forma única los elementos dentro de bucles.</li>
        </ul>

        <p>
          Usa el menú superior para navegar entre los ejemplos y entender cómo se aplica cada una de estas estructuras.
        </p>
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

ul {
  text-align: left;
  margin: 1.5rem 0;
  padding-left: 1.5rem;
}

li {
  margin-bottom: 0.5rem;
}

p {
  line-height: 1.6;
}
</style>
