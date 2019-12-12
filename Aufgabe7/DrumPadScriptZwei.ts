//Dynamische Funktion, die für alle Sounds funktioniert, also darf nicht die "ganze" Quelle in der Funktion stehen //
function playSample(ound: string): void {
    var sound: HTMLAudioElement = new Audio("assets/" + ound);
    sound.play();
}

//Funktion für den Beat, der abgespielt wird, wenn man den Playbutton drückt, zusammengesetzt aus den Sounds kick, 
//hihat und snare. In der Console werden die einzelnen Sounds aufgezählt. 
function startMusic(): void {
    var index: number = 0;
    var beats: string[] = ["assets/kick.mp3", "assets/hihat.mp3", "assets/snare.mp3"];
    setInterval(function beat(): void {
        var ound: HTMLAudioElement = new Audio(beats[index]);
        ound.play();
        index += 1;
        if (index > 3) index = 0;
        console.log(beats[index]);
    },          200);

}

//Aufruf der einzlnen Sounds, hier ist der zweite Teil der Funktion, mit dem Verweis auf den jeweiligen Ton. 
window.addEventListener("load", function (): void {
    document.querySelector("#SoundOne").addEventListener("mousedown", function (): void { playSample("kick.mp3"); });
    document.querySelector("#SoundFour").addEventListener("mousedown", function (): void { playSample("snare.mp3"); });
    document.querySelector("#SoundSeven").addEventListener("mousedown", function (): void { playSample("hihat.mp3"); });
    document.querySelector("#SoundTwo").addEventListener("mousedown", function (): void { playSample("F.mp3"); });
    document.querySelector("#SoundFive").addEventListener("mousedown", function (): void { playSample("G.mp3"); });
    document.querySelector("#SoundEight").addEventListener("mousedown", function (): void { playSample("A.mp3"); });
    document.querySelector("#SoundThree").addEventListener("mousedown", function (): void { playSample("C.mp3"); });
    document.querySelector("#SoundSix").addEventListener("mousedown", function (): void { playSample("laugh-1.mp3"); });
    document.querySelector("#SoundNine").addEventListener("mousedown", function (): void { playSample("laugh-2.mp3"); });
    document.querySelector("#PlayBeat").addEventListener("click", startMusic);
});