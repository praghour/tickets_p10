<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function openProfile() {
    router.push({name: 'main'});
};
</script>

<template>
    <div class="container">
        <h2>Страница 404</h2>
        <button @click="openProfile">Вернуться в профиль</button>
    </div>
</template>