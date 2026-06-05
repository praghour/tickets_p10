<script setup>
import { reactive } from 'vue';

const profile = reactive({
    name: 'Имя',
    surname: 'Фамилия'
});
</script>

<template>
    <div class="container">
        <h2>Добро пожаловать, {{ profile.name }} {{ profile.surname }}</h2>

        <button>
            Открыть смену
        </button>

        <button>
            Статус площадок
        </button>

        <button>
            Пропуски
        </button>

        <button>
            Админка
        </button>
    </div>
</template>

<style scoped>

</style>