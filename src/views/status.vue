<script setup>
import { ref } from 'vue';

const places = ref([
    'Ресепшн',
    'Navicula Artis',
    'Самиздат',
    'Музей Звука',
    'Арт-Лига',
    'Музей Рока',
    'Малый зал МНИ',
    'Музей Битлз',
    'Большой зал МНИ',
    'Мост через Стикс',
    'Арт-Буфет'
]);
</script>

<template>
    <div class="container">
        <h2>Статус площадок</h2>

        <div v-for="place in places" class="places">
            {{ place }}
        </div>
    </div>
</template>

<style scoped>
</style>