<script setup>
import { reactive } from 'vue';

const places = reactive({
    'Ресепшн' : true,
    'Navicula Artis' : true,
    'Самиздат' : false,
    'Музей Звука' : false,
    'Арт-Лига' : false,
    'Музей Рока' : false,
    'Малый зал МНИ' : false,
    'Музей Битлз' : false,
    'Большой зал МНИ' : false,
    'Мост через Стикс' : false,
    'Арт-Буфет' : false
});
</script>

<template>
    <div class="container">
        <h2>Статус площадок</h2>

        <div v-for="place in places" class="places">
            <div v-if="place === true" class="open_places">{{ place }}</div>
            <div v-if="place === true">{{ place }}</div>
        </div>
    </div>
</template>

<style scoped>
.places {
    display: flex;
    flex-direction: column;
}

.open_places {
    background-color: lightgreen;
}
</style>