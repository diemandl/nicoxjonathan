const reasons = [
    "Ich liebe deine Augen.",
    "Ich liebe deine Locken.",
    "Ich liebe es, wie du beim Reden deine Nase so süß bewegst.",
    "Ich liebe dich, weil du mich immer zum Lachen bringst.",
    "Ich liebe dich, weil du immer für mich da bist, wenn ich dich brauche.",
    "Ich liebe dich, weil du so emotional intelligent bist.",
    "Ich liebe dich, weil ich mit dir so gut lästern kann.",
    "Ich liebe dich, weil du immer versuchst dich mit allen gut zu verstehen.",
    "Ich liebe wie fürsorglich du bist.",
    "Ich liebe wie gut du kochen kannst.",
    "Ich liebe dich, weil du es geschafft hast dich so stark zu verändern.",
    "Ich liebe dich, weil ich weiß, dass du immer ehrlich zu mir bist.",
    "Ich liebe, dass du immer romantische Pläne für uns beide hast.",
    "Ich liebe dich, weil du mir so gut zeigst, dass du mich liebst.",
    "Ich liebe, wie gut ich mit dir kuscheln kann.",
    "Ich liebe dich, weil ich mich bei dir zu 100% wohl fühle.",
    "Ich liebe dich, weil ich mit dir über tiefe Themen sprechen kann.",
    "Ich liebe dich, weil du immer auf meine Meinung Rücksicht nimmst.",
    "Ich liebe dich, weil ich mit dir immer etwas spannendes erlebe.",
    "Ich liebe dich, weil du mir die positiven Seiten von Dingen zeigst.",
    "Ich liebe dich, weil du mir Selbstbewusstsein verleihst.",
    "Ich liebe dich, weil du mir immer Rat gibst, wenn ich ein Problem habe.",
    "Ich liebe, wie du mich küsst.",
    "Ich liebe deinen Geruch.",
    "Ich liebe dich, weil du mir vergeben kannst.",
    "Ich liebe dich, weil ich mich bei dir zuhause fühle.",
    "Ich liebe dich, weil du mich glücklich machst.",
    "Ich liebe dich, weil du mir meinen Stress abnimmst.",
    "Ich liebe dich, weil wir die gleichen Dinge lustig finden."
];

// ===== DOODLES INITIALIZER =====
function createDoodles() {
    const doodleImages = [
        'doodle1.png', 'doodle2.png', 'doodle3.png', 'doodle4.png',
        'doodle5.png', 'doodle6.png', 'doodle7.png', 'doodle8.png',
        'doodle9.png', 'doodle10.png', 'doodle11.png', 'doodle12.png',
        'doodle13.png', 'doodle14.png'
    ];
    
    const positions = [
        { top: '8%', left: '5%', size: '50px' },
        { top: '12%', right: '8%', size: '40px' },
        { top: '18%', left: '88%', size: '45px' },
        { bottom: '18%', left: '6%', size: '55px' },
        { bottom: '10%', right: '8%', size: '48px' },
        { top: '55%', left: '2%', size: '42px' },
        { top: '65%', right: '3%', size: '50px' },
        { top: '35%', right: '5%', size: '44px' },
        { bottom: '35%', left: '4%', size: '46px' },
        { top: '75%', left: '85%', size: '52px' }
    ];

    positions.forEach((pos, idx) => {
        const randomImage = doodleImages[Math.floor(Math.random() * doodleImages.length)];
        
        const doodle = document.createElement('img');
        doodle.classList.add('doodle', 'floating');
        doodle.src = 'images/' + randomImage;
        doodle.alt = 'doodle';
        doodle.style.top = pos.top || 'auto';
        doodle.style.bottom = pos.bottom || 'auto';
        doodle.style.left = pos.left || 'auto';
        doodle.style.right = pos.right || 'auto';
        doodle.style.width = pos.size;
        doodle.style.height = pos.size;
        doodle.style.animationDelay = (idx * 0.5) + 's';
        document.body.appendChild(doodle);
    });
}

// Starte Doodles beim Laden
document.addEventListener('DOMContentLoaded', createDoodles);

function startGenerator() {

    let generatorElement =
        document.getElementById("generator");
    let knobElement = 
        document.getElementById("knob");

    knobElement.classList.add("rotate")
    setTimeout(() => {
        knobElement.classList.remove("rotate");
        
    }, 400);

    // Shake-Klasse hinzufügen
    generatorElement.classList.add("shake");

    // Zufälligen Text nach kurzer Zeit anzeigen
    setTimeout(() => {
        // Shake wieder entfernen
        generatorElement.classList.remove("shake");

        //explodeHearts()
        showBall()

    }, 1000);
}

function generateReason(event){
    //explodeHearts(event)
    let randomIndex =
        Math.floor(Math.random() * reasons.length);

    document.getElementById("note-text").innerText =
        reasons[randomIndex];

    document.getElementById("note").style.opacity = "1";

    document.getElementById("blur").style.pointerEvents = "all";

    hideBall();
}

function showScreen(screenId) {
    // 1. Alle Screens verstecken
    document.querySelectorAll('.screen').forEach(screen => {
    screen.classList.remove('active');
    });

    // 2. Den gewünschten Screen zeigen
    document.getElementById(screenId).classList.add('active');

    // 3. Karte initialisieren, wenn Bucket List Screen geöffnet wird
    if (screenId === 'bucket-list-screen') {
        setTimeout(() => {
            initMap();
        }, 100);
    }
}


function closeNote(){
    document.getElementById("note").style.opacity = "0";
    document.getElementById("blur").style.pointerEvents = "none";
}

function explodeHearts(event) {

    const heartImage = "images/heart.png"; 
    // <- hier dein eigenes Bild rein

    const count = 25;

    for (let i = 0; i < count; i++) {

        const heart = document.createElement("img");

        heart.src = heartImage;
        heart.classList.add("heart");

        // Startposition (Klickpunkt)
        heart.style.left = event.clientX + "px";
        heart.style.top = event.clientY + "px";

        // zufällige Größe
        const size = Math.random() * 40 + 20; // 20–60px
        heart.style.setProperty("--size", size + "px");

        // zufällige Richtung
        const x = (Math.random() - 0.5) * 500 + "px";
        const y = (Math.random() - 0.5) * 500 + "px";

        heart.style.setProperty("--x", x);
        heart.style.setProperty("--y", y);

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 1200);
    }
}


function createFallingHeart() {
    const heart = document.createElement("img");
    heart.src = "images/heart.png"; 
    heart.classList.add("falling-heart");

    // Zufällige horizontale Position (0 bis 100% der Breite)
    heart.style.left = Math.random() * 100 + "vw";

    // Zufällige Größe zwischen 15px und 40px
    const size = Math.random() * 25 + 15;
    heart.style.width = size + "px";

    // Zufällige Dauer des Fallens (3 bis 7 Sekunden)
    const duration = Math.random() * 4 + 3;
    heart.style.animationDuration = duration + "s";

    // Zufällige Deckkraft, damit es natürlicher wirkt
    heart.style.opacity = Math.random() * 0.5 + 0.5;

    document.body.appendChild(heart);

    // Nach Ablauf der Animation löschen, um den Browser nicht zu verlangsamen
    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}

// Alle 300 Millisekunden ein neues Herz erstellen
//setInterval(createFallingHeart, 100);

const ballImg =
    document.getElementById("ball");

function showBall() {
    ballImg.style.opacity = 1;
    ballImg.style.pointerEvents ="all";
}

function hideBall() {
    ballImg.style.opacity = 0;
    ballImg.style.pointerEvents ="none";
}

// ===== BUCKET LIST MAP =====
let map = null;

function initMap() {
    // Wenn Karte bereits existiert, nicht erneut initialisieren
    if (map !== null) {
        map.invalidateSize();
        return;
    }

    // Karte erstellen (Zentrum: Europa)
    map = L.map('map').setView([50, 10], 3);

    // OpenStreetMap Layer hinzufügen
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors',
        maxZoom: 19
    }).addTo(map);

    // Bucket List Orte
    const bucketListPlaces = [
        { name: 'Olympiapark', lat: 48.175641, lng: 11.552256, emoji: '🎤', text: 'Wir zwei und Ikkimel 😍' },

        { name: 'Therme Erding', lat: 48.290452, lng: 11.889017, emoji: '♨️', text: 'Noch tausend mal Therme Erding ♨️' },

        { name: 'Primrose Hill', lat: 51.539341, lng: -0.160731, emoji: '🧺', text: 'Auf dem Primrose Hill ein Picknick mit Ausblick auf London.' },

        { name: 'Highlands', lat: 57.493850, lng: -4.222918, emoji: '🏔️', text: 'In Schottland die Highlands erkunden' },

        { name: 'Bali', lat: -8.613442, lng: 115.082845, emoji: '🌴', text: 'In Bali am Strand chillen' },

        { name: 'Nara', lat: 34.685051, lng: 135.804849, emoji: '🦌', text: 'Traditionelles Japan.' },

        { name: 'Lissabon', lat: 38.722252, lng: -9.139337, emoji: '🚋', text: 'Zusammen Lissabon erkunden!' },

        { name: 'Buenos Aires', lat: -34.603722, lng: -58.381592, emoji: '💃', text: 'Südamerika und meine Spanisch-Skills.' },

        { name: 'Tower Bridge', lat: 51.505456, lng: -0.075356, emoji: '🌉', text: "" },

        { name: 'The Shard', lat: 51.504501, lng: -0.086500, emoji: '🏙️', text: 'London aus dem 80. Stockwerk sehen' },

        { name: 'Buckingham Palace', lat: 51.501364, lng: -0.141890, emoji: '👑', text: ""  },

        { name: 'QYU Restaurant', lat: 48.137154, lng: 11.576124, emoji: '🍣', text: 'Sushi für Zwei fetzen' },

        { name: 'Luffy Pancake Café', lat: 48.137400, lng: 11.575500, emoji: '🥞', text: ""  },

        { name: 'NY.Club', lat: 48.139770, lng: 11.565230, emoji: '🪩', text: "Doppelslay im Gay-Club ✨✨✨" },

        { name: 'Englischer Garten', lat: 48.164229, lng: 11.603639, emoji: '🌳', text: 'Ein Sommerpicknick im Park' },

        { name: 'Weideninsel', lat: 48.111716, lng: 11.588235, emoji: '🌊', text: 'Im Sommer in der Isar schwimmen' },

        { name: 'Wiesn', lat: 48.131950, lng: 11.549558, emoji: '🍻', text: 'Zusammen auf der Wiesn dicht sein' },

        { name: 'Elba', lat: 42.778250, lng: 10.192738, emoji: '⛵', text: ""  },

        { name: 'Lucca', lat: 43.842919, lng: 10.502697, emoji: '🍝', text: ""  },

        { name: 'Irland', lat: 53.412910, lng: -8.243890, emoji: '☘️', text: ""  },

        { name: 'Prag', lat: 50.075539, lng: 14.437800, emoji: '🎶', text: 'Clubbing in Prag' }
    ];

    // Alle Marker hinzufügen
    bucketListPlaces.forEach(place => {
        L.marker([place.lat, place.lng], {
            icon: L.divIcon({
                className: 'custom-marker',
                html: `<div style="font-size: 28px; cursor: pointer;">${place.emoji}</div>`,
                iconSize: [35, 35]
            })
        }).addTo(map)
          .bindPopup(`<strong>${place.name}</strong><br>${place.text}`, { maxWidth: 200 })
          .openPopup();
    });
}

// Karte initial laden, wenn sich die Seite öffnet
document.addEventListener('DOMContentLoaded', function() {
    // Falls jemand direkt zur Bucket List navigiert
    if (document.getElementById('bucket-list-screen').classList.contains('active')) {
        setTimeout(() => {
            initMap();
        }, 100);
    }
});