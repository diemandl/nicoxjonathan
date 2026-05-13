const reasons = [
    "Weil du mich glücklich machst",
    "Weil du meine Lieblingsperson bist",
    "Weil du immer für mich da bist"
];

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
setInterval(createFallingHeart, 100);

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