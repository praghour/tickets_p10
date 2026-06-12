import { ref, computed } from 'vue';

const API_URL = 'https://no-tickets.p-10.ru';

const errorMessageValue = ref('');

const errorMessage = computed(() => errorMessageValue.value);

// получение куки
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

// выход из системы
async function logout() {
    try {
        const csrfToken = getCookie('csrftoken');

        await fetch(`${API_URL}/api/auth/logout/`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'X-CSRFToken': csrfToken,
            },
        });

    } catch (error) {
        console.log(error);
        errorMessageValue.value = 'Ошибка выхода';
    };
};

// получение профиля
async function getProfile() {
    try {
        const response = await fetch(`${API_URL}/api/profile/`, {
            credentials: 'include',
        });

        if (!response.ok) {
            return null;
        };

        return await response.json();

    } catch (error) {
        console.log(error);
        return null;
    };
};

// получение списка площадок
async function getSites() {
    try {
        const response = await fetch(`${API_URL}/api/sites/`, {
            credentials: 'include',
        });

        if (!response.ok) {
            return [];
        };

        return await response.json();

    } catch (error) {
        console.log(error);
        return [];
    };
};

// открытие смены
async function openShift(siteId) {
    try {
        const csrfToken = getCookie('csrftoken');

        const response = await fetch(`${API_URL}/api/shift/open/`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrfToken,
            },
            body: JSON.stringify({
                site_id: siteId,
            }),
        });
        return response;

    } catch (error) {
        console.log(error);
        return null;
    };
};

// экспорт всего и вся
export default function useAuth() {
    return {
        API_URL, errorMessage,
        getCookie, logout, getProfile, getSites, openShift,
    };
};