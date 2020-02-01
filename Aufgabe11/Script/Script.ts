/** Globale Variablen werden für den späteren Gebrauch deklariert*/
var computer: Element = document.querySelector("#computer");
var player: Element = document.querySelector("#player");
var storage: Element = document.querySelector("#storage");
var start: Element = document.querySelector("#start");
var index: number;

/**
 * Wenn alle DOM-Elemente geladen wurden, werden die Funktionen zum 
 * mischen, verteilen und erstellen der Karten getriggert damit das
 * Spiel starten kann 
 */
window.addEventListener("load", function(): void {
    mixCard();
    shuffleCards();
    createCards();
    createComputerCards();
    createPlayerCards();
    createStorageCards();
});

/**
 * Erstellen eines Interfaces für die Karten, bestehend aus einer Zahl, einer Farbe und einem 
 * Boolean für die Vorder- bzw. Rückseite 
 */ 
interface Card {
    number: number;
    color: string; 
}

/**
 * Ziehstapel, in dem sich am Anfang alle Karten befinden
 */

var cardstart: Card[] = [
    { number: 1, color: "red"},
    { number: 2, color: "red"},
    { number: 3, color: "red"},
    { number: 4, color: "red"},
    { number: 5, color: "red"},
    { number: 6, color: "red"},
    { number: 7, color: "red"},
    { number: 8, color: "red"},
    { number: 1, color: "blue"},
    { number: 2, color: "blue"},
    { number: 3, color: "blue"},
    { number: 4, color: "blue"},
    { number: 5, color: "blue"},
    { number: 6, color: "blue"},
    { number: 7, color: "blue"},
    { number: 8, color: "blue"},
    { number: 1, color: "green"},
    { number: 2, color: "green"},
    { number: 3, color: "green"},
    { number: 4, color: "green"},
    { number: 5, color: "green"},
    { number: 6, color: "green"},
    { number: 7, color: "green"},
    { number: 8, color: "green"},
    { number: 1, color: "yellow"},
    { number: 2, color: "yellow"},
    { number: 3, color: "yellow"},
    { number: 4, color: "yellow"},
    { number: 5, color: "yellow"},
    { number: 6, color: "yellow"},
    { number: 7, color: "yellow"},
    { number: 8, color: "yellow"}
];

/* Erstellen von drei leeren Arrays, eins für den Spieler, eins für den Computer und eins für 
*  den Ablagestapel
*/
var cardcomputer: Card[] = [];
var cardplayer: Card[] = [];
var cardstorage: Card[] = [];

function mixCard (): void {
/* Variable mit der Länge von cardstart erstellen*/
    var ctr: number = cardstart.length;

/* Solange Elemente in dem Array sind, ist die Bedingung erfüllt und die Schleife wird ausgeführt */
    while (ctr > 0) {
    /*
    * Math.floor rundet die Zahlen ab
    * Math.random -> zufällige Zahl zwischen 0 und 1
    * wird mit der aktuellen Länge des Arrays multipliziert 
    * -> Es wird ein zufälliges Element aus dem Array ausgewählt
    */
    var index: number = Math.floor(Math.random() * ctr);
    /* Die Variable wird um eins reduziert*/
    ctr--;
    /* Es wird eine "Wegwerf-Variable" erstellt um die Position des oben zufällig ausgesuchten Elements mit 
    *  der des letzten Elements im Array zu tauschen 
    */
    // Das letzte Element im Array wird selektiert
    let temp: Card = cardstart[ctr];
    // Das letzte Element erhält die Position des oben zufällig ausgewählten
    cardstart[ctr] = cardstart[index];
    // Das zufällig ausgewählte Element kommt ans Ende des Arrays
    cardstart[index] = temp;
    }
}

function shuffleCards (): void {
    // Es sollen drei Elemente an den Anfabng des Arrays für den Computer gepusht werden
    for (index = 0; index < 3; index ++) {
    /**
     * Die einzelnen Werte der ersten drei ELemente werden übergeben 
     * Das entsprechende Element wird dann aus dem Array für den Ziehstapel gelöscht. Dazu müssen sowohl
     * die Positionen als auch die Anzahl der löschenden Elemente übergeben werden
     */
    cardcomputer.unshift ({
        number: cardstart[index].number,
        color: cardstart[index].color
    });
    cardstart.splice(index, 1);
    }
    // Selbiges wird für das Array für den Spieler und den Ablagestapel wiederholt 
    for (index = 4; index < 7; index ++) {
        cardplayer.unshift ({
            number: cardstart[index].number,
            color: cardstart[index].color });
        cardstart.splice(index, 1);
    }
    cardstorage.unshift({
        number: cardstart[8].number,
        color: cardstart[8].color });
    cardstart.splice(8, 1);
}

/**
 * Die Karten werden nach dem Mischen und Verteilen in den DOM gerendert
 */
function createCards(): void {
    if (cardstart.length == 0) {
        reshuffle();
    }
   
    for (index = 0; index < 1; index++) {
        start.innerHTML = "";
        start.innerHTML = "<p> Ziehstapel </p>";
        var newdiv: HTMLDivElement = document.createElement("div");
        newdiv.className = "background";
        newdiv.innerHTML = "<p class='far fa-paper-plane fa-2x' </p>";
        newdiv.addEventListener("click", drawPlayerCard);
        start.appendChild(newdiv);
    } 
}

function createComputerCards(): void {
    if (cardcomputer.length == 0) {
        computer.innerHTML = "";
        player.innerHTML = "";
        computer.innerHTML = "<p class='computerwins'> Der Computer hat gewonnen <p> ";
    }

    else {
    computer.innerHTML = "";
    computer.innerHTML = "<p> Computer </p>";
    for (index = 0; index < cardcomputer.length; index++) {
        var newdiv: HTMLElement = document.createElement("div");
        newdiv.className = "background";
        newdiv.innerHTML = "<p class='far fa-paper-plane fa-2x' </p>";
        computer.appendChild(newdiv);
    }
}
}

function createStorageCards(): void {
    storage.innerHTML = "";
    storage.innerHTML = "<p> Ablagestapel </p>";
    /**
     * Eine for-Schleife durchläuft das erste Element des Arrays.
     * Je nach dem welche Farbe die Karte hat, wird dem div mittels einer if-else Anweisung 
     * eine andere Klasse angehängt
    */
    for (index = 0; index < 1; index++) {
        var newdiv: HTMLDivElement = document.createElement("div");
        var newi: HTMLElement = document.createElement("i");
        if (cardstorage[index].color == "red") {
        newdiv.className = "cardred"; 
        newi.classList.add("far", "fa-heart"); }
        else if (cardstorage[index].color == "blue") {
        newdiv.className = "cardblue";
        newi.classList.add("far", "fa-star"); }
        else if (cardstorage[index].color == "yellow") {
        newdiv.className = "cardyellow"; 
        newi.classList.add("far", "fa-moon"); }
        else {newdiv.className = "cardgreen"; 
              newi.classList.add("far", "fa-snowflake"); }

        if (cardstorage[index].number == 9 || cardstorage[index].number == 6) {
        newdiv.classList.add("underline");
        newdiv.innerHTML = "" + cardstorage[index].number + "<label class='flip'> <p class='underline'>" + cardstorage[index].number + "</p> </label>";
        }
        else {
        newdiv.innerHTML = "" + cardstorage[index].number + "<label class='flip'> <p>" + cardstorage[index].number + "</p> </label>"; }
        storage.appendChild(newdiv); 
        newdiv.appendChild(newi); }
}

function moveCards (position: number): void {
    if (cardplayer[position].color == cardstorage[0].color) {
        movePC(position);
    } else if (cardplayer[position].number == cardstorage[0].number) {
        movePC(position);
    }
}

function movePC(position): void {
    cardstorage.unshift ({
        color: cardplayer[position].color,
        number: cardplayer[position].number });
    cardplayer.splice(position, 1);
    createPlayerCards();
    createStorageCards();
    computerCards();
}

function createPlayerCards(): void {
    /**
     * Sollte das Array keine Karten enthalten, wird dem Nutzer eine Nachricht angezeigt, dass das 
     * Spiel beendet ist
     */
    if (cardplayer.length == 0) {
        player.innerHTML = "";
        computer.innerHTML = "";
        player.innerHTML = "<p class='playerwins'> Herzlichen Glückwunsch, du hast gewonnen! :) <p> ";
    }
    else {
    player.innerHTML = "";
    player.innerHTML = "<p> Spieler </p>";
    for (let index: number = 0; index < cardplayer.length; index++) {
        var newdiv: HTMLDivElement = document.createElement("div");
        var newi: HTMLElement = document.createElement("i");
        if (cardplayer[index].color == "red") {
        newdiv.classList.add("cardred");
        newi.classList.add("far", "fa-heart");  }
        else if (cardplayer[index].color == "blue") {
        newdiv.className = "cardblue";
        newi.classList.add("far", "fa-star");  }
        else if (cardplayer[index].color == "yellow") {
        newdiv.className = "cardyellow"; 
        newi.classList.add("far", "fa-moon"); }
        else {newdiv.className = "cardgreen"; 
              newi.classList.add("far", "fa-snowflake"); }

        if (cardplayer[index].number == 9 || cardplayer[index].number == 6) {
            newdiv.classList.add("underline");
            newdiv.innerHTML = "" + cardplayer[index].number + "<label class='flip'> <p class='underline'>" + cardplayer[index].number + "</p> </label>";
        }
        else {
        newdiv.innerHTML = "" + cardplayer[index].number + "<label class='flip'> <p>" + cardplayer[index].number + "</p> </label>"; }
        /**
         * Da dies die Karten sind, mit denen der Nutzer später "interagiert", brauchen sie zusätzlich einen 
         * Event-Listener, der die Funktion moveCards aufruft
         */
        //var position: number = index;
        newdiv.addEventListener("click", function(): void {
            moveCards(index);
        });
        player.appendChild(newdiv);
        newdiv.appendChild(newi);
    }    
}
}

function computerCards (): void {
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
    var fallback: number = 0;
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
        else (fallback ++); 
    } 
    /*
    * Sollte keine der Karten passen, hat fallback die Länge des Computer-Arrays. Die Bedingung ist 
    * erfüllt. Damit der Computer auch gewinnen kann, darf die Bedingung nicht ausgelöst 
    * werden, wenn fallback 0 ist. 
    */
    if (fallback == cardcomputer.length && fallback != 0) {
        cardcomputer.unshift ({
            color: cardstart[0].color,
            number: cardstart[0].number });
        cardstart.splice(0, 1);
        /* Danach werden die geänderten Arrays wieder in den DOM gezeichnet um den 
        *  geänderten Spielstand anzuzeigen */
        createCards();
        createComputerCards(); }
    }
}

/**
 * Die Funktion pusht die jeweilige Karte in das Array des Ablagestapels und entfernt sie
 * anschließend aus dem Array der Computer-Karten 
 */
function moveCC (): void {
    cardstorage.unshift ({
        color: cardcomputer[index].color,
        number: cardcomputer[index].number }); 
    cardcomputer.splice(index, 1);
    /* Es werden die Funktionen aufgerufen, die die beiden geänderten Arrays in den DOM zeichnen */
    createComputerCards();
    createStorageCards();
}

function drawPlayerCard (): void {
    if (cardstart.length == 0) {
        reshuffle();
    }
    else { cardplayer.unshift ({
        color: cardstart[0].color,
        number: cardstart[0].number });
           cardstart.splice(0, 1);
           createCards();
           createPlayerCards();
           computerCards(); }
}

/**
 * Sollten sich im Ziehstapel keine Karten mehr befinden, werden alle Karten 
 * bis auf die oberste aus dem Ablagestapel in den Ziehstapel gepusht
 */
function reshuffle (): void {
    for (index = cardstorage.length - 1; 0 < index ; index--) {
        cardstart.unshift ({
            color: cardstorage[index].color,
            number: cardstorage[index].number });
        cardstorage.pop();
    }
    // Anschließend wird die Funktion zum mischen der Karten im Ziehstapel aufgerufen 
    mixCard();
}

/*Bei klick auf das Icon öffnet sich ein Alert-Fenster mit den Spielregeln*/
document.querySelector("#rules").addEventListener("click", function(): void {
    alert("Spielregeln \n 1. Der Spieler beginnt \n 2. Es dürfen nur Karten gespielt werden, die dieselbe Wertigkeit oder dieselbe Farbe besitzen. \n 3. Ist keine passende Karte vorhanden, muss eine Karte gezogen werden \n 4. Das Spiel gewinnt, wer zuerst keine Karten mehr hat");
});