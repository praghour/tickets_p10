<script setup>
import { RouterView } from 'vue-router';
</script>

<template>
    <div class="app">
        <h1>Билетный контроль</h1>
        <div class="links">
            <p>Для отладки:</p>
            <nav class="nav">
                <RouterLink :to="{ name: 'auth' }">Авторизация</RouterLink>
                <RouterLink :to="{ name: 'notFound' }">Страница 404</RouterLink>
            </nav>
        </div>
        <RouterView />
    </div>
</template>