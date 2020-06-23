
/*function createCards(): void {
    for (index = 0; index < cardstart.length; index++)
    if (cardstart[index].color == "red") {  
        creatediv.innerHTML = "<span class='cardblue'>" + cardstart[index].number + "<p class='flip'>" + cardstart[index].number + "</p>" + "</span>";      
        document.getElementById("start").appendChild(creatediv); 
        console.log(creatediv); }
    else if (cardstart[index].color == "blue") {
        creatediv.innerHTML = "<span class='cardblue'>" + cardstart[index].number + "<p class='flip'>" + cardstart[index].number + "</p>" + "</span>";      
        document.getElementById("start").appendChild(creatediv);
        console.log(creatediv); }
    else if (cardstart[index].color == "green") {
        creatediv.innerHTML = "<span class='cardblue'>" + cardstart[index].number + "<p class='flip'>" + cardstart[index].number + "</p>" + "</span>";      
        document.getElementById("start").appendChild(creatediv);
        console.log(creatediv); }
    else {creatediv.innerHTML = "<span class='cardblue'>" + cardstart[index].number + "<p class='flip'>" + cardstart[index].number + "</p>" + "</span>";      
          document.getElementById("start").appendChild(creatediv);
          console.log(creatediv); }
}

createCards();
*/

function createCardPlayer (): void {
    for (index = 0; index < cardplayer.length; index++) {
        document.querySelector("#player");
        console.log("<div id=Spieler" + index + "</div>");
        if (cardplayer[index].color == "red") {
            document.querySelector("#Spieler" + index).innerHTML = "<span class='cardred'>" + cardplayer[index].number + "</span>"; 
        }
        else if (cardplayer[index].color == "blue") {
            document.querySelector("#Spieler" + index).innerHTML = "<span class='cardblue'>" + cardplayer[index].number + "</span>";
            console.log("blue");
        }
        else if (cardplayer[index].color == "yellow") {
            document.querySelector("#Spieler" + index).innerHTML = "<span class='cardyellow'>" + cardplayer[index].number + "</span>";
            console.log("yellow");
    }
        else {
            document.querySelector("#Spieler" + index).innerHTML = "<span class='cardgreen'>" + cardplayer[index].number + "</span>"; }
}
}

createCardPlayer();

/*

function createCard (): void {
    for (index = 0; index < cardstart.length; index++) {
        var newlabel: string = cardstart[index].number + "<p class='flip'>" + cardstart[index].number + "</p>";
        if (cardstart[index].color == "red") {
           var redcard: string = creatediv.innerHTML = "<label class='cardred'>" + newlabel;
           startdiv.innerHTML = "" + redcard; }
        else if (cardstart[index].color == "blue") {
           var bluecard: string =  creatediv.innerHTML = "<label class='cardblue'>" + newlabel; 
           startdiv.innerHTML = "" + bluecard; }
        else if (cardstart[index].color == "green") {
            var greencard: string = creatediv.innerHTML = "<label class='cardgreen'>" + newlabel;
            startdiv.innerHTML = "" + greencard; }
        else { var yellowcard: string = creatediv.innerHTML = "<label class='cardyellow'>" + newlabel; 
               startdiv.innerHTML = "" + yellowcard; }
    }
}
createCard();

function createComputerCard (): void {
    for (index = 0; index < cardcomputer.length; index++) {
        var newcard: string = cardcomputer[index].number + "<p class='flip'>" + cardcomputer[index].number + "</p>";
        if (cardcomputer[index].color == "red") {
            creatediv.innerHTML = "<label class='cardred'>" + newcard; }
         else if (cardcomputer[index].color == "blue") {
             creatediv.innerHTML = "<label class='cardblue'>" + newcard; }
         else if (cardcomputer[index].color == "green") {
             creatediv.innerHTML = "<label class='cardgreen'>" + newcard; }
         else { creatediv.innerHTML = "<label class='cardyellow'>" + newcard; }
     }
    startc.appendChild(creatediv); console.log(creatediv);
}
createComputerCard();

function createPlayerCard (): void {
    for (index = 0; index < cardplayer.length; index++) {
        var newCardd: string = cardplayer[index].number + "<p class='flip'>" + cardplayer[index].number + "</p>";
        if (cardplayer[index].color == "red") {
            var redcard: string = creatediv.innerHTML = "<label class='cardred'>" + newCardd;
            startp.innerHTML = "" + redcard; }
         else if (cardplayer[index].color == "blue") {
            var bluecard: string =  creatediv.innerHTML = "<label class='cardblue'>" + newCardd; 
            startp.innerHTML = "" + bluecard; }
         else if (cardplayer[index].color == "green") {
            var greencard: string = creatediv.innerHTML = "<label class='cardgreen'>" + newCardd;
            startp.innerHTML = "" + greencard; }
         else { var yellowcard: string = creatediv.innerHTML = "<label class='cardyellow'>" + newCardd; 
                startp.innerHTML = "" + yellowcard; }
     }
}
createPlayerCard(); */