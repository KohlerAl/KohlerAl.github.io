Für jedes neue Kästchen einen Eventlistener hinzufügen 

Eine Funktion auf den gesamten Content setzen



document.addEventlistener("load", Test)

function Test 
document.addEventListener("click", BSP)

function BSP (event:Event)
console.log(event.target);



Mit querySelector bekommt man immer nur das oberste Element

item.lastChild  -> Eventlistener draufsetzen 

In die Funktion hinzufügen 
document.querySelector("element.lastChild").addEventListener("click");
firstChild geht auch 

var element = HTMLElement;
element = document.querySelector("content")   
--> das HTML-Element von content ist in der Variable element gespeichert

var new = document.createElement("div");
new.id = "bla"
element.appendChild("new");

Events haben eine Eigenschaft, die bubbling heißt
-> Event "bubbelt" nach oben im DOM Tree

Wir haben Listen-Elemente, die einen Delete Button haben 
-> der Button hängt als Kind am Listen-Element