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

const openPlaces = [];
const closedPlaces = [];

for (let name in places) {
    if (places[name] === true) {
        openPlaces.push(name);
    } else {
        closedPlaces.push(name);
    };
};

const allPlaces = [...openPlaces, ...closedPlaces];
</script>

<template>
    <div class="container">
        <h2>Статус площадок</h2>

        <div v-for="name in allPlaces" class="places">
            <div :class="{ open_places: places[name] === true }">{{ name }}</div>
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