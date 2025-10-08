<script setup>


const frutas = [
  { id: 1, nombre: 'Manzana' },
  { id: 2, nombre: 'Pera' },
  { id: 3, nombre: 'Uva' }
]
</script>

<template>
  <div class="container">
    <main class="welcome">
      <section class="intro">
        <h1>v-bind:key</h1>
        <p>
          <strong>v-bind:key</strong> se usa junto con <strong>v-for</strong> para identificar de forma única cada elemento en una lista.
          Esto ayuda a Vue a renderizar los elementos de manera eficiente.
        </p>

        <ul>
          <li v-for="fruta in frutas" :key="fruta.id">
            🍏 {{ fruta.nombre }}
          </li>
        </ul>
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
  list-style: none;
  padding: 0;
}

li {
  background: #ecf9f4;
  margin: 8px 0;
  padding: 10px;
  border-radius: 6px;
  font-weight: bold;
}
</style>