// Funktion, die eine zufällige Hex-Farbe generiert
const getRandomColor = () => {
    // Die Zeichen, die für die Hex-Farbcodes verwendet werden können
    let letters = "0123456789ABCDEF";
    // Initialisierung des Farbcodes mit dem Hex-Zeichen "#"
    let color = "#";

    // Schleife, um sechs zufällige Hex-Zeichen zu generieren
    for (let i = 0; i < 6; i++) {
        // Math.random() gibt eine zufällige Dezimalzahl zwischen 0 (inklusive) und 1 (exklusive) zurück.
        // Math.floor rundet diese Dezimalzahl auf die nächstkleinere ganze Zahl ab.
        // Math.random() * 16 erzeugt eine zufällige Zahl zwischen 0 und 15.
        // letters[Math.floor(Math.random() * 16)] wählt ein zufälliges Zeichen aus 'letters' basierend auf der generierten Zahl aus.
        color += letters[Math.floor(Math.random() * 16)];
    }

    // Gib die generierte Farbe zurück
    return color;
};


// Funktion, die die Hintergrundfarbe des Body-Elements ändert
const changeBackgroundColor = () => {
    // Rufe die Funktion getRandomColor auf, um eine zufällige Farbe zu erhalten
    let randomColor = getRandomColor();
    // Ändere die Hintergrundfarbe des Body-Elements auf die zufällig generierte Farbe
    document.body.style.backgroundColor = randomColor;
};

// Selektiere das HTML-Element mit der ID 'btn' und weise es der Variable 'button' zu
const button = document.body.querySelector('#btn');

// Füge einen Event Listener zum Button-Element hinzu, der die Hintergrundfarbe ändert, wenn der Button geklickt wird
button.addEventListener("click", changeBackgroundColor);
