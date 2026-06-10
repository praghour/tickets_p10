<script setup>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const profile = reactive({
    name: 'Имя',
    surname: 'Фамилия'
});

function openAuth() {
    router.push({name: 'auth'});
};

function openStatus() {
    router.push({name: 'status'})
};
</script>

<template>
    <div class="container">
        <h2>Добро пожаловать, {{ profile.name }} {{ profile.surname }}</h2>

        <button @click="openAuth">
            Открыть смену
        </button>

        <button @click="openStatus">
            Статус площадок
        </button>

        <button>
            Пропуски
        </button>

        <button>
            Закрыть смену и выйти
        </button>
    </div>
</template>

<style scoped>

</style>