import A from "./sounds/sound_A.mp3";
import S from "./sounds/sound_S.mp3";
import D from "./sounds/sound_D.mp3";
import F from "./sounds/sound_F.mp3";
import G from "./sounds/sound_G.mp3";
import H from "./sounds/sound_H.mp3";
import J from "./sounds/sound_J.mp3";
import K from "./sounds/sound_K.mp3";
import L from "./sounds/sound_L.mp3";

export function creatAudio() {
    audio.innerHTML = `
    <audio data-key="65" src=${A}></audio>
    <audio data-key="83" src=${S}></audio>
    <audio data-key="68" src=${D}></audio>
    <audio data-key="70" src=${F}></audio>
    <audio data-key="71" src=${G}></audio>
    <audio data-key="72" src=${H}></audio>
    <audio data-key="74" src=${J}></audio>
    <audio data-key="75" src=${K}></audio>
    <audio data-key="76" src=${L}></audio>
    `
}

export function playSound(e) {
    const code = e.keyCode ? e.keyCode : this.getAttribute("data-key");
    const audio = document.querySelector(`audio[data-key="${code}"]`);
    const key = document.querySelector(`.key[data-key="${code}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add(`playing`);
}

export function removeTransition(e) {
    if (e.propertyName !== "transform") return;
    e.target.classList.remove(`playing`)
}