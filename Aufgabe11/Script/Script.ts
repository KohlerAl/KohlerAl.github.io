// Globale Variablen werden für den späteren Gebrauch deklariert
var computer: Element = document.querySelector("#computer");
var player: Element = document.querySelector("#player");
var storage: Element = document.querySelector("#storage");
var start: Element = document.querySelector("#start");

/**
 * Erstellen eines Interfaces für die Karten, bestehend aus einer Zahl, einer Farbe und einem 
 * Boolean für die Vorder- bzw. Rückseite 
 */ 
interface Card {
    number: number;
    color: string; 
    front: boolean;
}

/**
 * Ziehstapel, in dem sich am Anfang alle Karten befinden
 */

var cardstart: Card[] = [
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
mixCard();

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
        color: cardstart[index].color,
        front: cardstart[index].front
    });
    cardstart.splice(index, 1);
    }
    // Selbiges wird für das Array für den Spieler und den Ablagestapel wiederholt 
    for (index = 4; index < 7; index ++) {
        cardplayer.unshift ({
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
function createCards(): void {
   
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
    if (cardstart.length == 0) {
        reshuffle();
    }
    for (index = 0; index < 1; index++) {
        start.innerHTML = "";
        start.innerHTML = "<p> Ziehstapel | " + cardstart.length + "</p>";
        var newdiv: HTMLDivElement = document.createElement("div");
        if (cardstart[index].color == "red") {
        newdiv.className = "cardred"; }
        else if (cardstart[index].color == "blue") {
        newdiv.className = "cardblue"; }
        else if (cardstart[index].color == "yellow") {
        newdiv.className = "cardyellow"; }
        else ( newdiv.className = "cardgreen");
        
        // Um die Lesbarkeit zu verbessern, werden die Zahlen 6 und 9 unterstrichen 
        if (cardstart[index].number == 9 || cardstart[index].number == 6) {
            newdiv.classList.add("underline");
            newdiv.innerHTML = "" + cardstart[index].number + "<label class='flip'> <p class='underline'>" + cardstart[index].number + "</p> </label>";
        }
        // Für alle anderen Wertigkeiten werden die Karten ohne die Klasse underline erstellt
        else {
        newdiv.innerHTML = "" + cardstart[index].number + "<label class='flip'> <p>" + cardstart[index].number + "</p> </label>"; }
        //Anschließend wird die neue Div-Box in den DOM gerendert
        newdiv.addEventListener("click", drawPlayerCard);
        start.appendChild(newdiv);
    } 
}
createCards();

// Nach dem selben Prinzip werden auch die Karten für den Computer erstellt
function createComputerCards(): void {
    computer.innerHTML = "";
    computer.innerHTML = "<p>Computer</p>";
    for (index = 0; index < cardcomputer.length; index++) {
        var newdiv: HTMLDivElement = document.createElement("div");
        if (cardcomputer[index].color == "red") {
        newdiv.className = "cardred"; }
        else if (cardcomputer[index].color == "blue") {
        newdiv.className = "cardblue"; }
        else if (cardcomputer[index].color == "yellow") {
        newdiv.className = "cardyellow"; }
        else ( newdiv.className = "cardgreen");

        if (cardcomputer[index].number == 9 || cardcomputer[index].number == 6) {
            newdiv.classList.add("underline");
            newdiv.innerHTML = "" + cardcomputer[index].number + "<label class='flip'> <p class='underline'>" + cardcomputer[index].number + "</p> </label>";
        }
        else {
        newdiv.innerHTML = "" + cardcomputer[index].number + "<label class='flip'> <p>" + cardcomputer[index].number + "</p> </label>"; }
        newdiv.addEventListener("click", computerCards);
        computer.appendChild(newdiv);
    }
}
createComputerCards(); 

function createStorageCards(): void {
    storage.innerHTML = "";
    storage.innerHTML = "<p>Ablagestapel  |   " + cardstorage.length + "</p>";
    for (index = 0; index < 1; index++) {
    var newdiv: HTMLDivElement = document.createElement("div");
    if (cardstorage[index].color == "red") {
    newdiv.className = "cardred"; }
    else if (cardstorage[index].color == "blue") {
    newdiv.className = "cardblue"; }
    else if (cardstorage[index].color == "yellow") {
    newdiv.className = "cardyellow"; }
    else ( newdiv.className = "cardgreen");
    
    if (cardstorage[index].number == 9 || cardstorage[index].number == 6) {
        newdiv.classList.add("underline");
        newdiv.innerHTML = "" + cardstorage[index].number + "<label class='flip'> <p class='underline'>" + cardstorage[index].number + "</p> </label>";
        }
        else {
        newdiv.innerHTML = "" + cardstorage[index].number + "<label class='flip'> <p>" + cardstorage[index].number + "</p> </label>"; }
    storage.appendChild(newdiv); }
}
createStorageCards();

function moveCards (position: number): void {
    console.log(position);
    if (cardplayer[position].color == cardstorage[0].color) {
        cardstorage.unshift ({
            color: cardplayer[position].color,
            number: cardplayer[position].number,
            front: cardplayer[position].front
        });
        cardplayer.splice(position, 1);
    } else if (cardplayer[position].number == cardstorage[0].number) {
        cardstorage.unshift ({
            color: cardplayer[position].color,
            number: cardplayer[position].number,
            front: cardplayer[position].front
        });
        cardplayer.splice(position, 1);
    }
    createPlayerCards();
    createStorageCards();
}

function createPlayerCards(): void {
    player.innerHTML = "";
    player.innerHTML = "<p> Spieler </p>";
    for (index = 0; index < cardplayer.length; index++) {
        var newdiv: HTMLDivElement = document.createElement("div");
        if (cardplayer[index].color == "red") {
        newdiv.className = "cardred"; }
        else if (cardplayer[index].color == "blue") {
        newdiv.className = "cardblue"; }
        else if (cardplayer[index].color == "yellow") {
        newdiv.className = "cardyellow"; }
        else ( newdiv.className = "cardgreen");

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
        var position: number = index;
        console.log(position);
        newdiv.addEventListener("click", function(): void {
            moveCards(position);
        });
        player.appendChild(newdiv);
    }    
}
createPlayerCards();

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
    * Sollte keine der Karten passen, hat fallback die Länge des Computer-Arrays. Die Bedingung ist erfüllt. Damit der Computer auch 
    gewinnen kann, darf die Bedingung nicht ausgelöst werden, wenn fallback 0 ist. 
    */
    if (fallback == cardcomputer.length && fallback != 0) {
        cardcomputer.unshift ({
            color: cardstart[0].color,
            number: cardstart[0].number,
            front: cardstart[0].front
        });
        cardstart.splice(0, 1);
        createCards();
        createComputerCards(); }
    }
}

function moveCC (): void {
    cardstorage.unshift ({
        color: cardcomputer[index].color,
        number: cardcomputer[index].number,
        front: cardcomputer[index].front
    }); 
    cardcomputer.splice(index, 1);
    createComputerCards();
    createStorageCards();
}


function drawPlayerCard (): void {
    if (cardstart.length == 0) {
        reshuffle();
    }
    else { cardplayer.unshift ({
        color: cardstart[0].color,
        number: cardstart[0].number,
        front: cardstart[0].front
    });
           cardstart.splice(0, 1);
           createCards();
           createPlayerCards(); }
}

function reshuffle (): void {
    for (index = 1; index < cardstorage.length; index++) {
        cardstart.unshift ({
            color: cardstorage[index].color,
            number: cardstorage[index].number,
            front: cardstorage[index].front
        });
        cardstorage.splice(index, 1);
    }
    mixCard();
}

/*Bei klick auf das Icon öffnet sich ein Alert-Fenster mit den Spielregeln*/
document.querySelector("#rules").addEventListener("click", function(): void {
    alert("Spielregeln \n 1. Der Spieler beginnt \n 2. Es dürfen nur Karten gespielt werden, die dieselbe Wertigkeit oder dieselbe Farbe besitzen. \n 3. Ist keine passende Karte vorhanden, muss eine Karte gezogen werden \n 4. Das Spiel gewinnt, wer zuerst keine Karten mehr hat");
});
