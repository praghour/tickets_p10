<script setup>
import { ref } from 'vue';

const username = ref('');
const password = ref('');
const errorMessage = ref('');

function getCookie(name) {
    let cookieValue = null;

    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let cookie of cookies) {
            cookie = cookie.trim();
            if (cookie.startsWith(name + '=')) {
                cookieValue = decodeURIComponent(
                    cookie.substring(name.length + 1)
                );
                break;
            };
        };
    };
    return cookieValue;
};

const handleLogin = async () => {
  try {
    errorMessage.value = '';

    await fetch("https://p-10.ru", {
      credentials: "include",
    });

    const csrfToken = getCookie("csrftoken");

    const response = await fetch("https://p-10.ru", {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
            "X-CSRFToken": csrfToken,
        },
        body: JSON.stringify({
            username: username.value,
            password: password.value, 
        }),
    });

    if (response.ok) {
        alert('Вы успешно вошли!');
    } else {
        errorMessage.value = `Сервер вернул статус ${response.status}`;
    };

  } catch (error) {
    console.error("Ошибка сети:", error);
    errorMessage.value = 'Произошла ошибка при отправке запроса';
  };
};
</script>

<template>
  <div class="container">
    <h2>Авторизация</h2>
    
    <form @submit.prevent="handleLogin">
      <div>
        <label>Имя пользователя:</label>
        <input v-model="username" type="text" placeholder="Имя пользователя" required/>
      </div>
      <div>
        <label>Пароль:</label>
        <input v-model="password" type="password" placeholder="Пароль" required/>
      </div>
      <p v-if="errorMessage" style="color: red;">{{ errorMessage }}</p>
      <button type="submit">Войти</button>
    </form>
  </div>
</template>

<style scoped>
</style>