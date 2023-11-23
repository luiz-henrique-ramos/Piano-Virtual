const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volume-slider input");
const keysCheck = document.querySelector(".keys-check input");

let mapedKeys = [];
let audio = new Audio("src/tunes/a.wav");

const playTune = (key) => {
  let powerSwitch = document.querySelector(".powerSwitch");

  if (powerSwitch.checked) {
    let audio = new Audio(`src/tunes/${key}.wav`);
    audio.play();

    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add("active");
    setTimeout(() => {
      clickedKey.classList.remove("active");
    }, 150);
  }
};


pianoKeys.forEach((key) => {
  key.addEventListener("click", () => playTune(key.dataset.key));
  mapedKeys.push(key.dataset.key);
});

document.addEventListener("keydown", (e) => {
  if (mapedKeys.includes(e.key)) {
    playTune(e.key);
  }
});

const handleVolume = (e) => {
  audio.volume = e.target.value;
};

const showHideKeys = () => {
  pianoKeys.forEach((key) => key.classList.toggle("hide"));
};

volumeSlider.addEventListener("input", handleVolume);

keysCheck.addEventListener("click", showHideKeys);

const switchLigth = () => {
  let ligth = document.querySelector(".ligth");
  let powerSwitch = document.querySelector(".powerSwitch");

  if(powerSwitch && powerSwitch.checked){
    ligth.classList.add("power-on");
  }else {
    ligth.classList.remove("power-on");
  }
}

document.querySelector(".powerSwitch").addEventListener('change', switchLigth);