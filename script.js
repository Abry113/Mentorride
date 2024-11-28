// Inicializace mapy
const map = L.map('map').setView([50.0755, 14.4378], 10);

// Přidání dlaždic OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Definice mentorů a jejich lokací
const mentors = [
    { coords: [50.0755, 14.4378], name: "Praha" },
    { coords: [49.1951, 16.6068], name: "Brno" },
    { coords: [50.088, 14.4208], name: "Plzeň" }
];

// Přidání markerů pro jednotlivé mentory
mentors.forEach(mentor => {
    L.marker(mentor.coords).addTo(map)
        .bindPopup(`<b>Mentor</b><br>${mentor.name}`);
});
