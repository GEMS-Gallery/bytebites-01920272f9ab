import { backend } from 'declarations/backend';

async function loadRestaurantInfo() {
    try {
        const [name, description] = await backend.getRestaurantInfo();
        document.getElementById('restaurant-name').textContent = name;
        document.getElementById('restaurant-description').textContent = description;
    } catch (error) {
        console.error("Error loading restaurant info:", error);
    }
}

async function loadHours() {
    try {
        const hours = await backend.getHours();
        const hoursList = document.getElementById('hours-list');
        hours.forEach(([day, time]) => {
            const li = document.createElement('li');
            li.textContent = `${day}: ${time}`;
            hoursList.appendChild(li);
        });
    } catch (error) {
        console.error("Error loading hours:", error);
    }
}

async function loadAddress() {
    try {
        const address = await backend.getAddress();
        document.getElementById('address-info').textContent = address;
    } catch (error) {
        console.error("Error loading address:", error);
    }
}

async function loadMenu() {
    try {
        const menu = await backend.getMenu();
        const menuItems = document.getElementById('menu-items');
        menu.forEach(([name, description, price]) => {
            const item = document.createElement('div');
            item.className = 'menu-item';
            item.innerHTML = `
                <h3>${name}</h3>
                <p>${description}</p>
                <span class="price">$${(price / 100).toFixed(2)}</span>
            `;
            menuItems.appendChild(item);
        });
    } catch (error) {
        console.error("Error loading menu:", error);
    }
}

window.addEventListener('load', () => {
    loadRestaurantInfo();
    loadHours();
    loadAddress();
    loadMenu();
});
