"use strict";
/** Globale Variablen werden für den späteren Gebrauch deklariert*/
var computer = document.querySelector("#computer");
var player = document.querySelector("#player");
var storage = document.querySelector("#storage");
var start = document.querySelector("#start");
var index;
/**
 * Wenn alle DOM-Elemente geladen wurden, werden die Funktionen zum
 * mischen, verteilen und erstellen der Karten getriggert damit das
 * Spiel starten kann
 */
window.addEventListener("load", function () {
    mixCard();
    shuffleCards();
    createCards();
    createComputerCards();
    createPlayerCards();
    createStorageCards();
});
/**
 * Ziehstapel, in dem sich am Anfang alle Karten befinden
 */
var cardstart = [
    { number: 1, color: "red" },
    { number: 2, color: "red" },
    { number: 3, color: "red" },
    { number: 4, color: "red" },
    { number: 5, color: "red" },
    { number: 6, color: "red" },
    { number: 7, color: "red" },
    { number: 8, color: "red" },
    { number: 1, color: "blue" },
    { number: 2, color: "blue" },
    { number: 3, color: "blue" },
    { number: 4, color: "blue" },
    { number: 5, color: "blue" },
    { number: 6, color: "blue" },
    { number: 7, color: "blue" },
    { number: 8, color: "blue" },
    { number: 1, color: "green" },
    { number: 2, color: "green" },
    { number: 3, color: "green" },
    { number: 4, color: "green" },
    { number: 5, color: "green" },
    { number: 6, color: "green" },
    { number: 7, color: "green" },
    { number: 8, color: "green" },
    { number: 1, color: "yellow" },
    { number: 2, color: "yellow" },
    { number: 3, color: "yellow" },
    { number: 4, color: "yellow" },
    { number: 5, color: "yellow" },
    { number: 6, color: "yellow" },
    { number: 7, color: "yellow" },
    { number: 8, color: "yellow" }
];
/* Erstellen von drei leeren Arrays, eins für den Spieler, eins für den Computer und eins für
*  den Ablagestapel
*/
var cardcomputer = [];
var cardplayer = [];
var cardstorage = [];
function mixCard() {
    /* Variable mit der Länge von cardstart erstellen*/
    var ctr = cardstart.length;
    /* Solange Elemente in dem Array sind, ist die Bedingung erfüllt und die Schleife wird ausgeführt */
    while (ctr > 0) {
        /*
        * Math.floor rundet die Zahlen ab
        * Math.random -> zufällige Zahl zwischen 0 und 1
        * wird mit der aktuellen Länge des Arrays multipliziert
        * -> Es wird ein zufälliges Element aus dem Array ausgewählt
        */
        var index = Math.floor(Math.random() * ctr);
        /* Die Variable wird um eins reduziert*/
        ctr--;
        /* Es wird eine "Wegwerf-Variable" erstellt um die Position des oben zufällig ausgesuchten Elements mit
        *  der des letzten Elements im Array zu tauschen
        */
        // Das letzte Element im Array wird selektiert
        let temp = cardstart[ctr];
        // Das letzte Element erhält die Position des oben zufällig ausgewählten
        cardstart[ctr] = cardstart[index];
        // Das zufällig ausgewählte Element kommt ans Ende des Arrays
        cardstart[index] = temp;
    }
}
function shuffleCards() {
    // Es sollen drei Elemente an den Anfang des Arrays für den Computer gepusht werden
    for (index = 0; index < 3; index++) {
        /**
         * Die einzelnen Werte der ersten drei ELemente werden übergeben.
         * Das entsprechende Element wird dann aus dem Array für den Ziehstapel gelöscht. Dazu müssen sowohl
         * die Positionen als auch die Anzahl der zu löschenden Elemente übergeben werden
         */
        cardcomputer.unshift({
            number: cardstart[index].number,
            color: cardstart[index].color
        });
        cardstart.splice(index, 1);
    }
    // Selbiges wird für das Array für den Spieler und den Ablagestapel wiederholt 
    for (index = 4; index < 7; index++) {
        cardplayer.unshift({
            number: cardstart[index].number,
            color: cardstart[index].color
        });
        cardstart.splice(index, 1);
    }
    cardstorage.unshift({
        number: cardstart[8].number,
        color: cardstart[8].color
    });
    cardstart.splice(8, 1);
}
/**
 * Die Karten werden nach dem Mischen und Verteilen in den DOM gerendert
 */
function createCards() {
    // Sollte das Array leer sein, wird die Funktion zum mischen aufgerufen
    if (cardstart.length == 0) {
        reshuffle();
    }
    for (index = 0; index < 1; index++) {
        /**
         * Erstmal werden alle Karten aus dem DOM gelöscht. Anschließend wird
         * die Bezeichnung hinzugefügt, dass es sich um den Ziehstapel handelt.
         */
        start.innerHTML = "";
        start.innerHTML = "<p> Ziehstapel </p>";
        /**
         * Es wird ein neues div-Element für die Karte erstellt, welches die
         * Klasse background erhält. Zudem wird ein Papierflieger-Icon hinzugefügt,
         * damit der Spieler erkennt, dass es sich um die Rückseite handelt.
         */
        var newdiv = document.createElement("div");
        newdiv.className = "background";
        newdiv.innerHTML = "<p class='far fa-paper-plane fa-2x' </p>";
        /**
         * Ein Event-Listener wird hinzugfügt, damit der Spieler eine Karte ziehen kann
         */
        newdiv.addEventListener("click", drawPlayerCard);
        // Die div-Box des Ziehstapels nimmt die neue Karte auf 
        start.appendChild(newdiv);
    }
}
function createComputerCards() {
    /**
     * Sollte die Länge des Computer-Arrays 0 sein, werden alle Karten des Computers
     * und des Spielers aus dem DOM gelöscht und eine Benachrichtigung angezeigt, dass
     * der Computer gewonnen hat
     */
    if (cardcomputer.length == 0) {
        computer.innerHTML = "";
        player.innerHTML = "";
        computer.innerHTML = "<p class='computerwins'> Der Computer hat gewonnen <p> ";
    }
    /**
     * Es werden die Karten für den Computer erstellt, nach dem selben Prinzip wie beim
     * Ziehstapel
     */
    else {
        computer.innerHTML = "";
        computer.innerHTML = "<p> Computer </p>";
        for (index = 0; index < cardcomputer.length; index++) {
            var newdiv = document.createElement("div");
            newdiv.className = "background";
            newdiv.innerHTML = "<p class='far fa-paper-plane fa-2x' </p>";
            computer.appendChild(newdiv);
        }
    }
}
function createStorageCards() {
    // Alle Karten werden aus dem DOM gelöscht und die Beschriftung hinzugefügt
    storage.innerHTML = "";
    storage.innerHTML = "<p> Ablagestapel </p>";
    for (index = 0; index < 1; index++) {
        /**
         * Eine for-Schleife durchläuft das erste Element des Arrays.
         * Je nach dem welche Farbe die Karte hat, wird dem div mittels einer if-else Anweisung
         * eine Klasse für die Farbe und eine Klasse für ein Icon angehängt
        */
        var newdiv = document.createElement("div");
        var newi = document.createElement("i");
        if (cardstorage[index].color == "red") {
            newdiv.className = "cardred";
            newi.classList.add("fas", "fa-heart");
        }
        else if (cardstorage[index].color == "blue") {
            newdiv.className = "cardblue";
            newi.classList.add("fas", "fa-star");
        }
        else if (cardstorage[index].color == "yellow") {
            newdiv.className = "cardyellow";
            newi.classList.add("fas", "fa-moon");
        }
        else {
            newdiv.className = "cardgreen";
            newi.classList.add("fas", "fa-crown");
        }
        /**
         *  Sollte die Karte den Zahlenwert 6 oder 9 haben, wird die zusätzliche Klasse underline
         * angehängt, die die Zahlen unterstreicht, um die Lesbarkeit zu verbessern. Unabhängig vom
         * Zahlenwert wird die Zahl zweimal angezeigt, einmal normal und einmal auf dem Kopf damit die Karte
         * mehr nach Spielkarte aussieht
         */
        if (cardstorage[index].number == 9 || cardstorage[index].number == 6) {
            newdiv.classList.add("underline");
            newdiv.innerHTML = "" + cardstorage[index].number + "<label class='flip'> <p class='underline'>" + cardstorage[index].number + "</p> </label>";
        }
        else {
            newdiv.innerHTML = "" + cardstorage[index].number + "<label class='flip'> <p>" + cardstorage[index].number + "</p> </label>";
        }
        // Die div-Box des Ablagestapels nimmt die neue Karte auf
        storage.appendChild(newdiv);
        // Die Karte nimmt das neue i-Element für das Icon auf
        newdiv.appendChild(newi);
    }
}
function moveCards(position) {
    /**
     * Wenn der Spieler auf eine seiner Handkarten klickt, wird mit Hilfe einer if-else Anweisung
     * überprüft, ob diese Karte auf den Ablagestapel gelegt werden kann oder nicht. Sollte die
     * Zahl oder die Farbe passen, wird die Funktion movePC aufgerufen. Beim Funktionsaufruf
     * wird die jeweilige Position der Karte im Array übergeben.
     */
    if (cardplayer[position].color == cardstorage[0].color) {
        movePC(position);
    }
    else if (cardplayer[position].number == cardstorage[0].number) {
        movePC(position);
    }
}
function movePC(position) {
    /**
     * Die Werte der zu verschiebenden Karte werden an das Array des Ziehstapels
     * übergeben und die Karte anschließend aus dem Array des Spielers gelöscht. Danach
     * werden die Funktionen aufgerufen, die die Karten des Spielers und des Ziehstapels
     * in den DOM zeichnen, damit der neue Spielstand angezeigt wird. Zudem wird die Funktion
     * Computer-Cards aufgerufen, da der Spieler seinen Zug beendet hat und damit der
     * Computer am Zug ist.
     */
    cardstorage.unshift({
        color: cardplayer[position].color,
        number: cardplayer[position].number
    });
    cardplayer.splice(position, 1);
    createPlayerCards();
    createStorageCards();
    computerCards();
}
function createPlayerCards() {
    /**
     * Sollte das Array keine Karten enthalten, werden die Karten des Computers und des
     * Spielers aus dem DOM gelöscht. Es wird eine Nachricht angezeigt, dass der Spieler
     * gewonnen hat.
     */
    if (cardplayer.length == 0) {
        player.innerHTML = "";
        computer.innerHTML = "";
        player.innerHTML = "<p class='playerwins'> Herzlichen Glückwunsch, du hast gewonnen! :) <p> ";
    }
    else {
        /**
         * Nach dem selben Prinzip wie beim Ablagestapel wird einer neuen div-Box je nach Farbe der Karte
         * unterschiedliche Klassen hinzugefügt.
         */
        player.innerHTML = "";
        player.innerHTML = "<p> Spieler </p>";
        for (let index = 0; index < cardplayer.length; index++) {
            var newdiv = document.createElement("div");
            var newi = document.createElement("i");
            if (cardplayer[index].color == "red") {
                newdiv.classList.add("cardred");
                newi.classList.add("fas", "fa-heart");
            }
            else if (cardplayer[index].color == "blue") {
                newdiv.className = "cardblue";
                newi.classList.add("fas", "fa-star");
            }
            else if (cardplayer[index].color == "yellow") {
                newdiv.className = "cardyellow";
                newi.classList.add("fas", "fa-moon");
            }
            else {
                newdiv.className = "cardgreen";
                newi.classList.add("fas", "fa-crown");
            }
            if (cardplayer[index].number == 9 || cardplayer[index].number == 6) {
                newdiv.classList.add("underline");
                newdiv.innerHTML = "" + cardplayer[index].number + "<label class='flip'> <p class='underline'>" + cardplayer[index].number + "</p> </label>";
            }
            else {
                newdiv.innerHTML = "" + cardplayer[index].number + "<label class='flip'> <p>" + cardplayer[index].number + "</p> </label>";
            }
            /**
             * Da dies die Karten sind, mit denen der Nutzer später "interagiert", brauchen sie zusätzlich einen
             * Event-Listener, der die Funktion moveCards aufruft
             */
            newdiv.addEventListener("click", function () {
                moveCards(index);
            });
            player.appendChild(newdiv);
            newdiv.appendChild(newi);
        }
    }
}
function computerCards() {
    /**
     * Sollte der Ziehstapel leer sein, wird die Funktion reshuffle aufegrufen, damit im Ziehstapel
     * wieder Karten sind
     */
    if (cardstart.length == 0) {
        reshuffle();
    }
    /**
     * Ist der Ziehstapel nicht leer, wird die Funktion ausgeführt
     */
    else {
        var fallback = 0;
        for (index = 0; index < cardcomputer.length; index++) {
            /**
             * Wenn die Farbe der Karten übereinstimmt, wird die Funktion moveCC aufgerufen, die die
             * jeweilige Karte in das Array des Ablagestapels schiebt. Damit die Funktion danach nicht
             * weiter durchläuft, wird index auf denselben Wert wie die Länge des Computer-Arrays gesetzt.
             * Damit ist die Abbruchbedingung erfüllt. Fallback wird wieder auf Null gesetzt.
             */
            if (cardcomputer[index].color == cardstorage[0].color) {
                moveCC();
                index = cardcomputer.length;
                fallback = 0;
            }
            else if (cardcomputer[index].number == cardstorage[0].number) {
                moveCC();
                index = cardcomputer.length;
                fallback = 0;
            }
            else
                (fallback++);
        }
        /*
        * Sollte keine der Karten passen, hat fallback die Länge des Computer-Arrays. Die Bedingung ist
        * erfüllt. Damit der Computer auch gewinnen kann, darf die Bedingung nicht ausgelöst
        * werden, wenn fallback 0 ist.
        */
        if (fallback == cardcomputer.length && fallback != 0) {
            cardcomputer.unshift({
                color: cardstart[0].color,
                number: cardstart[0].number
            });
            cardstart.splice(0, 1);
            /* Danach werden die geänderten Arrays wieder in den DOM gezeichnet um den
            *  geänderten Spielstand anzuzeigen */
            createCards();
            createComputerCards();
        }
    }
}
/**
 * Die Funktion pusht die jeweilige Karte in das Array des Ablagestapels und entfernt sie
 * anschließend aus dem Array der Computer-Karten
 */
function moveCC() {
    cardstorage.unshift({
        color: cardcomputer[index].color,
        number: cardcomputer[index].number
    });
    cardcomputer.splice(index, 1);
    /* Es werden die Funktionen aufgerufen, die die beiden geänderten Arrays in den DOM zeichnen */
    createComputerCards();
    createStorageCards();
}
/**
 * Diese Funktion wird getriggert, wenn der Spieler auf die angezeigte Karte im Ziehstapel klickt.
 * Wieder wird erst überprüft, ob der Ziehstapel leer ist, sollte dies der Fall sein, wird die
 * Funktion reshuffle aufgerufen.
 * Ansonsten wird die die erste Karte aus dem Ziehstapel-Array an das Array des Spielers
 * übergeben und anschließend aus dem Ziehstapel gelöscht. Danach wird die Funktion Computer-Cards
 * aufegrufen, da der Computer am Zug ist.
 */
function drawPlayerCard() {
    if (cardstart.length == 0) {
        reshuffle();
    }
    else {
        cardplayer.unshift({
            color: cardstart[0].color,
            number: cardstart[0].number
        });
        cardstart.splice(0, 1);
        createCards();
        createPlayerCards();
        computerCards();
    }
}
/**
 * Sollten sich im Ziehstapel keine Karten mehr befinden, werden alle Karten
 * bis auf die oberste aus dem Ablagestapel in den Ziehstapel gepusht
 */
function reshuffle() {
    /**
     * Die Variable index bekommt den Wert der Länge des Ablagestapel-Arrays minus 1,
     * da ein Array ja bei Null anfängt und die Länge eines Arrays somit immer um eins
     * höher ist als die letzte Position im Array.
     * Die oberste Karte (an der Stelle 0 im Array) wird nicht entfernt, da die angezeigte
     * Karte im Array bleiben soll. Für jede entfernte Karte wird der index um eins reduziert.
     */
    for (index = cardstorage.length - 1; 0 < index; index--) {
        cardstart.unshift({
            color: cardstorage[index].color,
            number: cardstorage[index].number
        });
        // Nachdem die Eigenschaften übergeben wurden, wird das letzte Element des Arrays entfernt
        cardstorage.pop();
    }
    // Anschließend wird die Funktion zum mischen der Karten im Ziehstapel aufgerufen 
    mixCard();
}
/*Bei klick auf das Icon öffnet sich ein Alert-Fenster mit den Spielregeln*/
document.querySelector("#rules").addEventListener("click", function () {
    alert("Spielregeln \n 1. Der Spieler beginnt \n 2. Es dürfen nur Karten gespielt werden, die dieselbe Wertigkeit oder dieselbe Farbe/ dasselbe Icon besitzen. \n 3. Ist keine passende Karte vorhanden, muss eine Karte gezogen werden \n 4. Das Spiel gewinnt, wer zuerst keine Karten mehr hat");
});
//# sourceMappingURL=Script.js.map