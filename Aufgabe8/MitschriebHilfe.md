Das Problem in Teilprobleme zerteilen und eine Struktur für den Code anfertigen!

Übungsaufgaben auf W3schools -> sinnvoll 

Was bedeutet ein bestimmter Begriff für mich in meinem konkrten Fall?
Zum Beispiel was bedeutet "aufnehmen" in meinem Fall? -> speichern von Informationen 

Herangehensweise
1. Aufgabe auf Papier bringen und die einzelnen Interaktionsschritte irgendwie greifbar machen (Kein Code)
2. Erst dann Programmieren 
3. Einzelne Aufgaben isoliert bearbeiten -> blockweise abarbeiten 

**Zum Beispiel**
Wenn ich auf einen Button klicke, dann soll ein Array gelöscht werden 
Beim Klick auf einen anderen Button soll die Funktion von bestehenden Buttons geändert werden 

Eine Funktion nur fürs löschen, eine für die Funktionsänderung 

Wenn eine Variable für mehrere Funktionen gebraucht wird, dann global
-> aber nicht jeden Blödsinn global ablegen, sondern nur wichtiges

Array mit den Tönen sollte global sein, da an mehreren Stellen darauf zugegriffen werden soll 
-> löschen
-> verändern
-> abspielen 

Reihenfolge: Am besten in der Reihenfolge, in der es auch gelesen werden soll 
**Daumenregel** was oben definiert wurde, ist unten nutzbar

**Infos**
- W3schools -> das, was für Java gilt, gilt idr. auch für Typescript
site: dann den seitennamen, auf der seite man suchen möchte bei google eingeben 

Nach JavaScript oder ECMA Script suchen 
- Mozilla development Network
- Stackoverflow

NICHT Selfhtml verwenden! 

Am besten auf englisch googeln 

$ -> jquery -> NICHT Nutzen!!!

**Events**
Einfache Events basieren auf Nutzerinteraktion
document.querySelector('button').addEventListener(parameter1, parameter2);
Paramter 1: Typ des Events 
Paramter 2: Was soll passieren, wenn das Event eintritt
document.querySelector('button').addEventListener("click", myFunction); 
window.addEventListener("scroll", function ()) {
    console.log(Math.random());
});

**Was hat eine Funktion mit einem Event zu tun?**
Funktionen sorgen dafür, dass beim Event auch was passiert, Events alleine können nicht viel 

**Funktionen und Methoden**
Funktion: Block für Anweisungen 
Methoden: Im Grunde auch eine Funktion, aber im Kontext eines Objekts 

**Paramter**
function func1 (param: string) {
 var test: string = "Peter"
 console.log(param); 
}

func1("Joe"); 
*In der Konsole wird Joe ausgegeben* 

Paramter verhalten sich wie eine Variable innerhalb einer Funktion, die aber definiert werden müssen 

**Schleifen**
Was ist eine while  Schleife? 
Bei einer while Schleife kann man auch Bedingungen einfügen, bei denen man selber noch nicht genau weiß, 
wann das Abbruch-Kriterum eintritt

var timer: number = 1;

  while (timer != 10) {
      console.log(2);
      myArray[timer];
      timer += 1;
  }

Was ist eine for-Schleife?
Vorteil der for-Schleife: Man muss alles definieren -> Es ist alles definiert und der Browser friert nicht ein 

for (let index =0; index < array.length; index++){
    const element = array[index]
}

**Boolean**
Wozu brauche Ich ein Boolean?
Die Information könnte auch in einem String oder Number abgespiechert werden, ist aber umständlicher
-> Siehe Fotos und Videos 