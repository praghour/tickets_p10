<script setup>
import { useRouter } from 'vue-router';

function openProfile() {
    router.push({name: 'main'});
};
</script>

<template>
    <h1>Страница 404</h1>
    <button @click="openProfile">Вернуться в профиль</button>
</template>