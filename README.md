Tic Tac Toe – Interaktives Spiel mit HTML, CSS & JavaScript

<!-- Optional: Screenshot einfügen -->

Ein modernes Tic-Tac-Toe-Spiel im Browser mit animierten Kreisen und Kreuzen, Gewinnlinien und Spiel-Neustart-Funktion.

Das Projekt ist ideal zum Lernen von DOM-Manipulation, SVG-Animationen und Event-Handling in JavaScript.

🎮 Features

Dynamische 3x3 Tabelle, die das Spielbrett darstellt

Spielerwechsel zwischen Kreis (O) und Kreuz (X)

Animierte SVGs für Kreise und Kreuze

Gewinnüberprüfung bei jedem Zug

Visuelle weiße Linie für die Gewinnkombination

„Spiel neu starten“-Button, um das Spiel zurückzusetzen

Responsive und ansprechendes Design

🖥️ Live Demo

Du kannst das Spiel lokal in deinem Browser starten:

Projekt herunterladen oder klonen:

git clone https://github.com/dein-benutzername/tic-tac-toe.git


Öffne die index.html in deinem Browser.

📂 Projektstruktur
tic-tac-toe/
│
├── index.html        # Haupt-HTML-Datei
├── style.css         # Styling (Farben, Button, Tabelle)
├── script.js         # Spiel-Logik und SVG-Animationen
└── README.md         # Projektbeschreibung

⚙️ Verwendung
Starten des Spiels

Öffne index.html im Browser.

Klicke auf ein Feld, um ein O oder X zu setzen.

Nach jedem Zug wird überprüft, ob ein Spieler gewonnen hat.

Wenn jemand gewinnt, erscheint eine weiße Linie über der Gewinnkombination.

Klicke auf „Spiel neu starten“, um das Spielfeld zurückzusetzen.

Neustart-Funktion (JavaScript)
function restartGame() {
    fields = [null, null, null, null, null, null, null, null, null];
    render();
}


Setzt das fields Array zurück

Rendert die Tabelle erneut

Entfernt eventuell vorhandene Gewinnlinien

🎨 Styling

Hintergrundfarbe: #323232

Schriftart: Open Sans

Animierte SVGs für Kreise (#00B0EF) und Kreuze (#FFC000)

„Spiel neu starten“-Button mit Farbverlauf und Hover-Effekt

Tabelle zentriert mit weißen Rahmenlinien

🛠️ Technologien

HTML5 – Struktur

CSS3 – Design, Flexbox, Animationen

JavaScript – Spiellogik, DOM-Manipulation, SVG-Animationen

📈 Nächste Schritte / ToDo

Unentschieden-Erkennung

Spieler vs Computer Modus

Punktestand speichern

Verbesserte Animation der Gewinnlinie
