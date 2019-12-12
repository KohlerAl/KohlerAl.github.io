var kicked: number;
var beat: string [] = ["kick.mp3", "kick.mp3", "laugh-1.mp3", "kick.mp3", "F.mp3"];
var myMP3: string [] = ["kick.mp3", "kick.mp3", "laugh-1.mp3", "kick.mp3", "F.mp3"];
var record: boolean = false;
var index: number = 0;

function playSampl(myMP3: string): void {
    var sound = new Audio(myMP3);
    sound.play();
    if (record == true) {
        beat.push(myMP3);
    }
}

/* Beat */
function myBeat(): void {
    playSampl(beat[index]);
    index += 1;
    if (index > (beat.length - 1))
        index = 0;
    console.log(beat[index]);
}

function PlayBeat(): void {
    /* Wenn der Playbutton da ist, ersetze ihn mit dem Pausebutton und starte den Beat */
    if (document.getElementById("PlayBeat").classList.contains("fa-play")) {
        document.getElementById("PlayBeat").classList.remove("fa-play");
        document.getElementById("PlayBeat").classList.add("fa-pause");
        kicked = setInterval(myBeat, 500);
        record = false;
        console.log("Hier spielt die Musik");
        /* Wenn der Pausebutton da ist, ersetze ihn mit dem Playbutton und stoppe den Beat */
    }
    else {
        document.getElementById("PlayBeat").classList.remove("fa-pause");
        document.getElementById("PlayBeat").classList.add("fa-play");
        clearInterval(kicked);
        console.log("Wie Sie hören, hören Sie nichts");
    }
    
}
/*Das Array wird auf Null gesetzt, der Beat ist damit gelöscht*/
function DeleteBeat(): void {
    beat.length = 0;
}

/*Das Boolean ist wahr und ein neuer Beat kann aufgenommen werden*/
function RecordBeat(): void {
    record = true;
}

window.addEventListener("load", function (): void {
    document.querySelector("#SoundOne").addEventListener("mousedown", function (): void { playSampl("kick.mp3"); });
    document.querySelector("#SoundFour").addEventListener("mousedown", function (): void { playSampl("snare.mp3"); });
    document.querySelector("#SoundSeven").addEventListener("mousedown", function (): void { playSampl("hihat.mp3"); });
    document.querySelector("#SoundTwo").addEventListener("mousedown", function (): void { playSampl("F.mp3"); });
    document.querySelector("#SoundFive").addEventListener("mousedown", function (): void { playSampl("G.mp3"); });
    document.querySelector("#SoundEight").addEventListener("mousedown", function (): void { playSampl("A.mp3"); });
    document.querySelector("#SoundThree").addEventListener("mousedown", function (): void { playSampl("C.mp3"); });
    document.querySelector("#SoundSix").addEventListener("mousedown", function (): void { playSampl("laugh-1.mp3"); });
    document.querySelector("#SoundNine").addEventListener("mousedown", function (): void { playSampl("laugh-2.mp3"); });
    document.querySelector("#PlayBeat").addEventListener("click", PlayBeat);
    document.querySelector("#Mic").addEventListener("click", RecordBeat);
    document.querySelector("#Trash").addEventListener("click", DeleteBeat);
});