// script.js
const touristSpotsData = {
    "Rajasthan": [
        {
            name: "Jaipur - Pink City",
            image: "jaipur.jpg", // Update with the actual path to the image
            description: "Known as the Pink City, Jaipur is Rajasthan's capital and largest city. The city was founded in 1727 by Maharaja Sawai Jai Singh II.",
            bestTime: "October to March",
            attractions: [
                "Hawa Mahal - Palace of Winds",
                "City Palace - Royal Residence",
                "Amber Fort - Hill Fort",
                "Jantar Mantar - Observatory"
            ],
            timings: "Most monuments open from 9:00 AM to 5:00 PM",
            entryFee: "Composite ticket: ₹1000 for foreigners, ₹300 for Indians"
        },
        { name: "Udaipur - City of Lakes", image: "udaipur.jpg" },
        { name: "Jaisalmer - Golden City", image: "jaisalmer.jpg" },
        { name: "Jodhpur - Blue City", image: "jodhpur.jpg" },
        { name: "Bikaner - Junagarh Fort", image: "biskar.jpeg" },
        { name: "Mount Abu - Hill Station", image: "mount abu.jpg" },
        { name: "Chittorgarh - Chittorgarh Fort", image: "chittorgarh fort.jpg" },
        { name: "Ajmer - Dargah Sharif", image: "ajmer.jpg" },
        { name: "Ranthambore - National Park", image: "ranthambore.jpg" }
    ],
    "Himachal Pradesh": [
        { name: "Shimla - Summer Capital", image: "shimla.jpg" },
        { name: "Manali - Adventure Sports", image: "manali.jpg" },
        { name: "Dharamshala - Dalai Lama Temple", image: "Dharamshala.jpg" },
        { name: "Kasol - Mini Israel", image: "kasol.jpg" },
        { name: "Kullu - Valley of Gods", image: "kullu.jpg" },
        { name: "Spiti Valley - Cold Desert", image: "spiti valley.jpg" },
        { name: "Dalhousie - Hill Station", image: "dalhousie.jpg" },
        { name: "Khajjiar - Mini Switzerland", image: "khajjiar.jpg" },
        { name: "Bir Billing - Paragliding", image: "bir billing.jpg" },
        { name: "Chamba - Ancient Temples", image: "chamba.jpg" }
    ],
    "Uttarakhand": [
        { name: "Rishikesh - Yoga Capital", image: "rishikesh.jpg" },
        { name: "Haridwar - Holy City", image: "haridwar.jpg" },
        { name: "Mussoorie - Queen of Hills", image: "mussoorie.jpg" },
        { name: "Nainital - Lake City", image: "nainital.jpg" },
        { name: "Auli - Skiing Destination", image: "auli.jpg" },
        { name: "Kedarnath - Sacred Temple", image: "kedarnath.jpg" },
        { name: "Jim Corbett - National Park", image: "jim_corbett.jpg" },
        { name: "Valley of Flowers - UNESCO Site", image: "valley of flowers.jpg" },
        { name: "Badrinath - Pilgrimage Site", image: "Badrinath.jpg" },
        { name: "Ranikhet - Army Cantonment", image: "Ranikhet.jpg" }
    ],
    "Goa": [
        { name: "Calangute - Beach Paradise", image: "calangute.jpg" },
        { name: "Panjim - Capital City", image: "panjim.jpg" },
        { name: "Baga Beach - Nightlife", image: "Baga-Beach.jpg" },
        { name: "Basilica of Bom Jesus - Church", image: "basilica.jpg" },
        { name: "Dudhsagar Falls - Waterfall", image: "dudhsagar_falls.jpg" },
        { name: "Fort Aguada - Portuguese Fort", image: "fort aguada.jpg" },
        { name: "Anjuna Flea Market - Shopping", image: "anjuna_market.jpg" },
        { name: "Chapora Fort - Heritage Site", image: "chapora.jpeg" },
        { name: "Palolem Beach - Scenic Beauty", image: "palolem-sea-beach.jpg" },
        { name: "Spice Plantations - Agriculture", image: "spice plantation.jpg" }
    ],
    "Odisha": [
        { name: "Puri - Jagannath Temple", image: "puri.jpeg" },
        { name: "Konark - Sun Temple", image: "konark.jpg" },
        { name: "Bhubaneswar - Temple City", image: "bhubaneswar.jpg" },
        { name: "Chilika Lake - Bird Sanctuary", image: "chilika_lake.jpg" },
        { name: "Chandipur Beach - Hide & Seek Beach", image: "chandipur.jpeg" },
        { name: "Simlipal National Park - Wildlife", image: "simlipal national park.jpg" },
        { name: "Udayagiri Caves - Ancient Caves", image: "udayagiri caves.jpg" },
        { name: "Bhitarkanika - Mangrove Forest", image: "bhitarkanika.jpeg" },
        { name: "Gopalpur - Beach Town", image: "gopalpur.jpeg" },
        { name: "Raghurajpur - Heritage Village", image: "raghurajpur.jpeg" }
    ],
    "Maharashtra": [
        { name: "Mumbai - Gateway of India", image: "mumbai.jpeg" },
        { name: "Pune - Shaniwar Wada", image: "pune.jpeg" },
        { name: "Aurangabad - Ajanta & Ellora Caves", image: "aurangabad.jpeg" },
        { name: "Nashik - Vineyards", image: "nashik.jpg" },
        { name: "Shirdi - Sai Baba Temple", image: "Shiridi.jpg" },
        { name: "Lonavala - Hill Station", image: "lonawala.jpg" },
        { name: "Mahabaleshwar - Hill Station", image: "mahabaleshwar.jpg" },
        { name: "Kolhapur - Mahalaxmi Temple", image: "kolhapur.jpeg" },
        { name: "Alibaug - Beach Town", image: "alibaug.jpg" },
        { name: "Nagpur - Orange City", image: "nagpur.jpg" }
    ],

    "Telangana": [
        { name: "Hyderabad - City of Pearls", image: "charminar.jpg" },
        { name: "Warangal - Thousand Pillar Temple", image: "warangal.jpg" },
        { name: "Khammam - Kinnerasani Wildlife Sanctuary", image: "khammam.jpeg" },
        { name: "Nizamabad - Pochampally", image: "nizamabad.jpg" },
        { name: "Srisailam - Jyotirlinga Temple", image: "srisailam.jpg" },
        { name: "Ramagundam - Singareni Collieries", image: "ramagundam.jpg" },
        { name: "Medak - Medak Church", image: "medak.jpg" },
        { name: "Bhadrachalam - Temple Town", image: "bhadrachalam.jpeg" },
        { name: "Pochampally - Handloom Village", image: "pochampally.jpg" },
        { name: "Adilabad - Kuntala Waterfall", image: "adilabad.jpg" }
    ],
    "Andhra Pradesh": [
        { name: "Visakhapatnam - Beach City", image: "visakhapatnam-.jpg" },
        { name: "Tirupati - Sri Venkateswara Temple", image: "tirupati.jpg" },
        { name: "Vijayawada - Kanaka Durga Temple", image: "vijayawada.jpg" },
        { name: "Amaravati - Buddhist Site", image: "Amaravati.jpg" },
        { name: "Kurnool - Belum Caves", image: "kurnool.jpg" },
        { name: "Rajahmundry - Godavari River", image: "rajahmundry.jpg" },
        { name: "Chittoor - Horsley Hills", image: "Chitoor.png" },
        { name: "Nellore - Pulicat Lake", image: "Nellore.jpg" },
        { name: "Guntur - Buddhist Sites", image: "guntur.jpg" },
        { name: "Srikakulam - Baruva Beach", image: "srikakulam.jpg" }
    ],
    "Kerala": [
        { name: "Kochi - Queen of the Arabian Sea", image: "kochi fort.png" },
        { name: "Thiruvananthapuram - Sree Padmanabhaswamy Temple", image: "trivandrum padmanabhaswamy temple.png" },
        { name: "Alappuzha - Backwaters", image: "Alappuzha.jpeg" },
        { name: "Munnar - Tea Gardens", image: "munnar.jpg" },
        { name: "Kumarakom - Vembanad Lake", image: "kumarakom.jpg" },
        { name: "Wayanad - Edakkal Caves", image: "wayanad.jpg" },
        { name: "Thekkady - Periyar Wildlife Sanctuary", image: "thekkady.jpg" },
        { name: "Kozhikode - Malabar Coast", image: "kozhikode.jpg" },
        { name: "Varkala - Papanasam Beach", image: "varakala.jpg" },
        { name: "Idukki - Idukki Dam", image: "idukki.jpeg" }
    ],
    "Tamil Nadu": [
        { name: "Chennai - Marina Beach", image: "Marina-Beach.jpg" },
        { name: "Madurai - Meenakshi Temple", image: "warangal.jpg" },
        { name: "Kanyakumari - Vivekananda Rock", image: "kodaikanal.jpg" },
        { name: "Ooty - Hill Station", image: "ooty.jpg" },
        { name: "Coimbatore - Isha Yoga Center", image: "Coimbatore.jpg" },
        { name: "Thanjavur - Brihadeeswarar Temple", image: "thanjavur.jpg" },
        { name: "Rameswaram - Ramanathaswamy Temple", image: "warangal.jpg" },
        { name: "Mahabalipuram - Shore Temple", image: "mahabalipum.jpg" },
        { name: "Kodaikanal - Hill Station", image: "kumarakom.jpg" },
        { name: "Tiruchirapalli - Rock Fort Temple", image: "thekkady.jpg" }
    ]


};
function generateAttractionsList(attractions) {
    return attractions.map(attraction => `<li>${attraction}</li>`).join('');
}

function generateSpotCard(spot) {
    return `
        <div class="spot-card">
            <img src="${spot.image}" alt="${spot.name}" class="spot-image">
            <div class="spot-content">
                <h3 class="spot-name">${spot.name}</h3>
                <p class="spot-description">${spot.description}</p>
                <div class="spot-details">
                    <div class="detail-item">
                        <strong>Best Time to Visit:</strong>
                        <p>${spot.bestTime}</p>
                    </div>
                    <div class="detail-item">
                        <strong>Key Attractions:</strong>
                        <ul>${generateAttractionsList(spot.attractions)}</ul>
                    </div>
                    <div class="detail-item">
                        <strong>Timings:</strong>
                        <p>${spot.timings}</p>
                    </div>
                    <div class="detail-item">
                        <strong>Entry Fee:</strong>
                        <p>${spot.entryFee}</p>
                    </div>
                </div>
            </div>
        </div>`;
}

// Add search functionality
function searchTouristSpots() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const spotsSection = document.getElementById("touristSpots");
    spotsSection.innerHTML = "";
    
    let foundSpots = [];
    
    // Search through all states and spots
    for (let state in touristSpotsData) {
        touristSpotsData[state].forEach(spot => {
            if (spot.name.toLowerCase().includes(searchInput)) {
                foundSpots.push({ ...spot, state: state });
            }
        });
    }
    
    if (foundSpots.length > 0) {
        spotsSection.innerHTML = `<h2>Search Results</h2>
        <div class="tourist-spots-grid">`;
        foundSpots.forEach(spot => {
            spotsSection.innerHTML += `
                <div class="spot-card">
                    <div class="state-tag">${spot.state}</div>
                    <img src="${spot.image}" alt="${spot.name}" class="spot-image">
                    <p class="spot-name">${spot.name}</p>
                </div>`;
        });
        spotsSection.innerHTML += `</div>`;
    } else {
        spotsSection.innerHTML = "<p>No tourist spots found matching your search.</p>";
    }
}

function displayTouristSpots() {
    const state = document.getElementById("stateSelect").value;
    const spotsSection = document.getElementById("touristSpots");
    spotsSection.innerHTML = "";

    if (state && touristSpotsData[state]) {
        spotsSection.innerHTML = `
            <h2>Tourist Spots in ${state}</h2>
            <div class="tourist-spots-grid">`;
        touristSpotsData[state].forEach(spot => {
            spotsSection.innerHTML += `
                <div class="spot-card">
                    <img src="${spot.image}" alt="${spot.name}" class="spot-image">
                    <p class="spot-name">${spot.name}</p>
                </div>`;
        });
        spotsSection.innerHTML += `</div>`;
    } else {
        spotsSection.innerHTML = "<p>Please select a state to view tourist spots.</p>";
    }
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    // Add event listener for search input
    const searchInput = document.getElementById("searchInput");
    if (searchInput) {
        searchInput.addEventListener('input', debounce(searchTouristSpots, 300));
    }
});

// Debounce function to limit search frequency
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}