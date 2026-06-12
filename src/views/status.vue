<script setup>
import { ref, onMounted } from 'vue';
import useAuth from '../composables/useAuth';

const { getSites } = useAuth();

const places = ref([]);

async function loadSites() {
    const sites = await getSites();

    places.value = sites.sort((a, b) => {
        if (a.shift && !b.shift) {
            return -1;
        };
        if (!a.shift && b.shift) {
            return 1;
        };

        return 0;
    });
};

onMounted(() => {
    loadSites();
});
</script>

<template>
    <div class="container">
        <h2>Статус площадок</h2>

        <div v-for="site in places" :key="site.id" class="places">
            <div :class="{ open_places: site.shift }">
                {{ site.name }}
            </div>
        </div>

        <button @click="loadSites">Обновить</button>
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