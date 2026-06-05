<script setup>
import { ref } from 'vue';

const SERVER_DOMAIN = "http://no-tickets.p-10.ru"; 

const username = ref('');
const password = ref('');
const errorMessage = ref('');

// получение куки
function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let cookie of cookies) {
            cookie = cookie.trim();
            if (cookie.startsWith(name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            };
        };
    };
    return cookieValue;
};

// вход
const handleLogin = async () => {
  try {
    errorMessage.value = '';

    await fetch(`${SERVER_DOMAIN}/api/auth/csrf/`, {
      credentials: "include",
    });

    const csrfToken = getCookie("csrftoken");

    const response = await fetch(`${SERVER_DOMAIN}/api/auth/login/`, {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
            "X-CSRFToken": csrfToken,
        },
        body: JSON.stringify({
            username: username.value, 
            password: password.value
        }),
    });

    if (response.ok) {
        alert('Вы успешно вошли!');
    } else {
        const data = await response.json();
        errorMessage.value = data.detail || 'Неверный логин или пароль';
    }

  } catch (error) {
    console.error("Ошибка сети:", error);
    errorMessage.value = 'Не удалось связаться с сервером';
  }
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
.container { 
    max-width: 300px; 
    margin: 40px auto; 
    font-family: sans-serif; 
}

input { 
    display: block; 
    width: 100%; 
    margin-bottom: 12px; 
    padding: 6px; 
}

button { 
    width: 100%; 
    padding: 8px; 
    background: #6f496c; 
    color: white; 
    border: none; 
    cursor: pointer; 
}
</style>
