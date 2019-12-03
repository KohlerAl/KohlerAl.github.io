window.addEventListener("load", function () {
    document.querySelector("#SoundOne").addEventListener("mousedown", function () { playSample("kick.mp3"); });
    document.querySelector("#SoundFour").addEventListener("mousedown", function () { playSample("snare.mp3"); });
    document.querySelector("#SoundSeven").addEventListener("mousedown", function () { playSample("hihat.mp3"); });
    document.querySelector("#SoundTwo").addEventListener("mousedown", function () { playSample("F.mp3"); });
    document.querySelector("#SoundFive").addEventListener("mousedown", function () { playSample("G.mp3"); });
    document.querySelector("#SoundEight").addEventListener("mousedown", function () { playSample("A.mp3"); });
    document.querySelector("#SoundThree").addEventListener("mousedown", function () { playSample("C.mp3"); });
    document.querySelector("#SoundSix").addEventListener("mousedown", function () { playSample("laugh-1.mp3"); });
    document.querySelector("#SoundNine").addEventListener("mousedown", function () { playSample("laugh-2.mp3"); });
    document.querySelector("#PlayBeat").addEventListener("click", StartMusic);
});
function playSample(Sound) {
    var sound = new Audio("assets/" + Sound);
    sound.play();
}
;
function StartMusic() {
    var index = 0;
    var Beats = ["assets/kick.mp3", "assets/hihat.mp3", "assets/snare.mp3"];
    setInterval(function Beat() {
        var Sound = new Audio(Beats[index]);
        Sound.play();
        index += 1;
        if (index > 3)
            index = 0;
        console.log(Beats[index]);
    }, 200);
}
;
//# sourceMappingURL=DrumPadScriptZwei.js.map