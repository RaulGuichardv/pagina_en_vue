<script>

</script>

<template>
    <menu class="menu">
        <RouterLink class="views active" to="/">Home</RouterLink>
        <RouterLink class="views" to="/ifelse">If-else</RouterLink>
        <RouterLink class="views" to="/show">Show</RouterLink>
        <RouterLink class="views" to="/for">For</RouterLink>
        <RouterLink class="views" to="/bind">Bind</RouterLink>
    </menu>
</template>

<style>
    .menu{
        width: 100%;
        height: 100px;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .views{
        text-decoration: none;
        color:#000;
        border-bottom: 1px solid transparent;
        transition: all 0.5s ease;
    }
    .views:hover{
        border-bottom: 1px solid #000;
    }
    .active{
        border-bottom: 1px solid #000;
    }
</style>