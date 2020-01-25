// Globale Variablen werden für den späteren Gebrauch deklariert
var computer = document.querySelector("#computer");
var player = document.querySelector("#player");
var storage = document.querySelector("#storage");
var start = document.querySelector("#start");
/**
 * Ziehstapel, in dem sich am Anfang alle Karten befinden
 */
var cardstart = [
    { number: 1, color: "red", front: true },
    { number: 2, color: "red", front: true },
    { number: 3, color: "red", front: true },
    { number: 4, color: "red", front: true },
    { number: 5, color: "red", front: true },
    { number: 6, color: "red", front: true },
    { number: 7, color: "red", front: true },
    { number: 8, color: "red", front: true },
    { number: 1, color: "blue", front: true },
    { number: 2, color: "blue", front: true },
    { number: 3, color: "blue", front: true },
    { number: 4, color: "blue", front: true },
    { number: 5, color: "blue", front: true },
    { number: 6, color: "blue", front: true },
    { number: 7, color: "blue", front: true },
    { number: 8, color: "blue", front: true },
    { number: 1, color: "green", front: true },
    { number: 2, color: "green", front: true },
    { number: 3, color: "green", front: true },
    { number: 4, color: "green", front: true },
    { number: 5, color: "green", front: true },
    { number: 6, color: "green", front: true },
    { number: 7, color: "green", front: true },
    { number: 8, color: "green", front: true },
    { number: 1, color: "yellow", front: true },
    { number: 2, color: "yellow", front: true },
    { number: 3, color: "yellow", front: true },
    { number: 4, color: "yellow", front: true },
    { number: 5, color: "yellow", front: true },
    { number: 6, color: "yellow", front: true },
    { number: 7, color: "yellow", front: true },
    { number: 8, color: "yellow", front: true }
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
        var temp = cardstart[ctr];
        // Das letzte Element erhält die Position des oben zufällig ausgewählten
        cardstart[ctr] = cardstart[index];
        // Das zufällig ausgewählte Element kommt ans Ende des Arrays
        cardstart[index] = temp;
    }
}
mixCard();
function shuffleCards() {
    // Es sollen drei Elemente an den Anfabng des Arrays für den Computer gepusht werden
    for (index = 0; index < 3; index++) {
        /**
         * Die einzelnen Werte der ersten drei ELemente werden übergeben
         * Das entsprechende Element wird dann aus dem Array für den Ziehstapel gelöscht. Dazu müssen sowohl
         * die Positionen als auch die Anzahl der löschenden Elemente übergeben werden
         */
        cardcomputer.unshift({
            number: cardstart[index].number,
            color: cardstart[index].color,
            front: cardstart[index].front
        });
        cardstart.splice(index, 1);
    }
    // Selbiges wird für das Array für den Spieler und den Ablagestapel wiederholt 
    for (index = 4; index < 7; index++) {
        cardplayer.unshift({
            number: cardstart[index].number,
            color: cardstart[index].color,
            front: cardstart[index].front
        });
        cardstart.splice(index, 1);
    }
    cardstorage.unshift({
        number: cardstart[8].number,
        color: cardstart[8].color,
        front: cardstart[8].front
    });
    cardstart.splice(8, 1);
}
shuffleCards();
/**
 * Die Karten werden nach dem Mischen und Verteilen in den DOM gerendert
 */
function createCards() {
    /*
    for (index = 0; index < 1; index++) {
        start.innerHTML = "";
        start.innerHTML = "<p> Ziehstapel | " + cardstart.length + "</p>";
        var newdiv: HTMLDivElement = document.createElement("div");
        newdiv.className = "background";
        newdiv.innerHTML = "<p class='far fa-paper-plane fa-2x' </p>";
        start.appendChild(newdiv);
    } */
    /**
     * Eine for-Schleife durchläuft das erste Element des Arrays.
     * Je nach dem welche Farbe die Karte hat, wird dem div mittels einer if-else Anweisung
     * eine andere Klasse angehängt
     * * */
    for (index = 0; index < 1; index++) {
        start.innerHTML = "";
        start.innerHTML = "<p> Ziehstapel | " + cardstart.length + "</p>";
        var newdiv = document.createElement("div");
        if (cardstart[index].color == "red") {
            newdiv.className = "cardred";
        }
        else if (cardstart[index].color == "blue") {
            newdiv.className = "cardblue";
        }
        else if (cardstart[index].color == "yellow") {
            newdiv.className = "cardyellow";
        }
        else
            (newdiv.className = "cardgreen");
        // Um die Lesbarkeit zu verbessern, werden die Zahlen 6 und 9 unterstrichen 
        if (cardstart[index].number == 9 || cardstart[index].number == 6) {
            newdiv.classList.add("underline");
            newdiv.innerHTML = "" + cardstart[index].number + "<label class='flip'> <p class='underline'>" + cardstart[index].number + "</p> </label>";
        }
        // Nach der Klasse bekommt die Karte ihre Wertigkeit
        else {
            newdiv.innerHTML = "" + cardstart[index].number + "<label class='flip'> <p>" + cardstart[index].number + "</p> </label>";
        }
        //Anschließend wird die neue Div-Box in den DOM gerendert
        start.appendChild(newdiv);
    }
}
createCards();
// Nach dem selben Prinzip werden auch die Karten für den Computer erstellt, hier jedoch nur drei
function createComputerCards() {
    computer.innerHTML = "";
    computer.innerHTML = "<p>Computer</p>";
    for (index = 0; index < cardcomputer.length; index++) {
        var newdiv = document.createElement("div");
        if (cardcomputer[index].color == "red") {
            newdiv.className = "cardred";
        }
        else if (cardcomputer[index].color == "blue") {
            newdiv.className = "cardblue";
        }
        else if (cardcomputer[index].color == "yellow") {
            newdiv.className = "cardyellow";
        }
        else
            (newdiv.className = "cardgreen");
        if (cardcomputer[index].number == 9 || cardcomputer[index].number == 6) {
            newdiv.classList.add("underline");
            newdiv.innerHTML = "" + cardcomputer[index].number + "<label class='flip'> <p class='underline'>" + cardcomputer[index].number + "</p> </label>";
        }
        else {
            newdiv.innerHTML = "" + cardcomputer[index].number + "<label class='flip'> <p>" + cardcomputer[index].number + "</p> </label>";
        }
        computer.appendChild(newdiv);
    }
}
createComputerCards();
function createStorageCards() {
    storage.innerHTML = "";
    storage.innerHTML = "<p>Ablagestapel</p>";
    for (index = 0; index < 1; index++) {
        var newdiv = document.createElement("div");
        if (cardstorage[index].color == "red") {
            newdiv.className = "cardred";
        }
        else if (cardstorage[index].color == "blue") {
            newdiv.className = "cardblue";
        }
        else if (cardstorage[index].color == "yellow") {
            newdiv.className = "cardyellow";
        }
        else
            (newdiv.className = "cardgreen");
        if (cardstorage[index].number == 9 || cardstorage[index].number == 6) {
            newdiv.classList.add("underline");
            newdiv.innerHTML = "" + cardstorage[index].number + "<label class='flip'> <p class='underline'>" + cardstorage[index].number + "</p> </label>";
        }
        else {
            newdiv.innerHTML = "" + cardstorage[index].number + "<label class='flip'> <p>" + cardstorage[index].number + "</p> </label>";
        }
        storage.appendChild(newdiv);
    }
}
createStorageCards();
function moveCards() {
    if (cardplayer[this].color == cardstorage[0].color) {
        console.log(this);
    }
}
function createPlayerCards() {
    for (index = 0; index < 3; index++) {
        var newdiv = document.createElement("div");
        if (cardplayer[index].color == "red") {
            newdiv.className = "cardred";
        }
        else if (cardplayer[index].color == "blue") {
            newdiv.className = "cardblue";
        }
        else if (cardplayer[index].color == "yellow") {
            newdiv.className = "cardyellow";
        }
        else
            (newdiv.className = "cardgreen");
        if (cardplayer[index].number == 9 || cardplayer[index].number == 6) {
            newdiv.classList.add("underline");
            newdiv.innerHTML = "" + cardplayer[index].number + "<label class='flip'> <p class='underline'>" + cardplayer[index].number + "</p> </label>";
        }
        else {
            newdiv.innerHTML = "" + cardplayer[index].number + "<label class='flip'> <p>" + cardplayer[index].number + "</p> </label>";
        }
        console.log("Der Index in createPlayerCards ist " + index);
        /**
         * Da dies die Karten sind, mit denen der Nutzer später "interagiert", brauchen sie zusätzlich einen
         * Event-Listener, der die Funktion moveCards aufruft
         */
        newdiv.addEventListener("click", moveCards);
        player.appendChild(newdiv);
    }
}
createPlayerCards();
function computerCards() {
    for (index = 0; index < cardcomputer.length; index++) {
        if (cardcomputer[index].color == cardstorage[0].color) {
            moveCC();
            console.log("Hello");
        }
        else if (cardcomputer[index].number == cardstorage[0].number) {
            moveCC();
            console.log("World");
        }
    }
}
function moveCC() {
    cardstorage.unshift({
        color: cardcomputer[index].color,
        number: cardcomputer[index].number,
        front: cardcomputer[index].front
    });
    cardcomputer.splice(index, 1);
    createComputerCards();
    createStorageCards();
}
computer.addEventListener("click", computerCards);
/*Bei klick auf das Icon öffnet sich ein Alert-Fenster mit den Spielregeln*/
document.querySelector(".fa-info-circle").addEventListener("click", function () {
    alert("Spielregeln \n 1. Der Spieler beginnt \n 2. Es dürfen nur Karten gespielt werden, die dieselbe Wertigkeit oder dieselbe Farbe besitzen. \n 3. Ist keine passende Karte vorhanden, muss eine Karte gezogen werden \n 4. Das Spiel gewinnt, wer zuerst keine Karten mehr hat");
});
//# sourceMappingURL=Script.js.map