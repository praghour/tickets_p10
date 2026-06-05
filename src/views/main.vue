<script setup>
import { reactive } from 'vue';

const profile = reactive({
    name: 'Имя',
    surname: 'Фамилия'
});
</script>

<template>
    <div class="profile_container">
        <h2>Добро пожаловать, {{ profile.name }} {{ profile.surname }}</h2>

        <button>

        </button>

        <button>

        </button>

        <button>

        </button>
        
        <button>

        </button>
    </div>
</template>

<style scoped>
</style>