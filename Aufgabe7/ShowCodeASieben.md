1. HTML: div container machen, da kommt der Button rein 
1.1. CSS: den Button stylen 
2. TS: Event Listener ins ts 
window.addEventListener("load", function (){
    document.querySelector("#button1").addEventListener("click", playSample)
    }
3. HTML: Dem Button ne Klasse oder eine ID geben (IDs sind robuster, also lieber ID nehmen)
4. TS: function playSample() {
   var sound:HTMLAudioElement = new Audio("assets/kick.mp3");
sound.play();
}
5. Info: void bedeutet, dass nichts zurücgegeben wird, sie macht nur was 
    In die Klammer nach playSample kommen Übergabeparameter, dem wir den Typ string geben 
6. Info: Stackoverflow 

Eine Zentrale Funktion verwenden, die mit einem Parameter dynamisch aufgerufen wird

Aufgabenteil 2
Eine kleine Beatmachine mit arrays bauen 

setInterval function() {
    var sound:HTMLAudioElement = new Audio("assets/kick.mp3");
sound.play();
}, 1000 erster Parameter Verweis auf die Funktion, Zweiter Parameter Zeit (siehe readme.md)


var list: []string = ['Peter', 'Paul', 'Joe'];
var index: number = 0
setInterval (funcion(){
    console.log (list [index]);
    index = index + 1; ODER index++; (das ist die kurzform)
}, 1000