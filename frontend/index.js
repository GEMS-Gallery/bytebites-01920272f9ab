const restaurantData = {
    name: "Josh's Cafe",
    description: "Your go-to spot for healthy and delicious meals in a cozy atmosphere.",
    address: "123 Pine St Test CA",
    hours: [
        { day: "Monday", time: "8:00 AM - 5:00 PM" },
        { day: "Tuesday", time: "8:00 AM - 5:00 PM" },
        { day: "Wednesday", time: "8:00 AM - 5:00 PM" },
        { day: "Thursday", time: "8:00 AM - 5:00 PM" },
        { day: "Friday", time: "8:00 AM - 5:00 PM" },
        { day: "Saturday", time: "Closed" },
        { day: "Sunday", time: "Closed" }
    ],
    menu: [
        { name: "Quinoa Bowl", description: "Nutrient-rich quinoa with mixed vegetables and grilled chicken", price: 12.99 },
        { name: "Avocado Toast", description: "Whole grain toast topped with smashed avocado and seeds", price: 8.99 },
        { name: "Green Smoothie", description: "Blend of spinach, banana, and almond milk", price: 6.99 },
        { name: "Grilled Salmon Salad", description: "Fresh greens with grilled salmon and light vinaigrette", price: 14.99 }
    ]
};

function loadRestaurantInfo() {
    document.querySelector('#hero h1').textContent = restaurantData.name;
    document.querySelector('#hero p').textContent = restaurantData.description;
}

function loadHours() {
    const hoursList = document.getElementById('hours-list');
    restaurantData.hours.forEach(({ day, time }) => {
        const li = document.createElement('li');
        li.innerHTML = `<span class="day">${day}:</span> <span class="time">${time}</span>`;
        hoursList.appendChild(li);
    });
}

function loadMenu() {
    const menuItems = document.getElementById('menu-items');
    restaurantData.menu.forEach(({ name, description, price }) => {
        const item = document.createElement('div');
        item.className = 'menu-item';
        item.innerHTML = `
            <h3>${name}</h3>
            <p>${description}</p>
            <span class="price">$${price.toFixed(2)}</span>
        `;
        menuItems.appendChild(item);
    });
}

function initMap() {
    // This function would typically initialize a map using a service like Google Maps
    // For this example, we'll just add a placeholder
    const mapDiv = document.getElementById('map');
    mapDiv.innerHTML = '<img src="https://via.placeholder.com/400x200?text=Map+Placeholder" alt="Map Placeholder">';
}

window.addEventListener('load', () => {
    loadRestaurantInfo();
    loadHours();
    loadMenu();
    initMap();
});
