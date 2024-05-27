// Functionize Minecraft Fishing Start Code

//Html variable
let resulting = document.getElementById("result-img");
let numcodspan = document.getElementById("num-cod");
let numsalmonspan = document.getElementById("num-salmon");
let numtropicalspan = document.getElementById("num-tropical");
let numpufferspan = document.getElementById("num-puffer");
let steve = document.getElementById("steve");

//Fish count variable
let numcod = 0;
let numsalmon = 0;
let numtropical = 0;
let numpuffer = 0;
// Fish Button Event Listener
document.getElementById("fish-btn").addEventListener("click", fishBtnClicked);

function fishBtnClicked() {
  console.log("Fish");
  if (character === "steve") {
    let randnum = Math.random();
    console.log(randnum);
  }
  if (randnum < 0.7) {
    document.getElementById("result-img").src = "img/Raw-cod.png";
    console.log("cod");
    numcod++;
    numcodspan.innerHTML = numcod;
  } else if (randnum >= 0.9) {
    document.getElementById("result-img").src = "img/Raw-salmon.png";
    console.log("salmon");
    numsalmon++;
    numsalmon.innerHTML = numsalmon;
  } else if (randnum < 0.95) {
    document.getElementById("result-img").src = "img/Tropical-fish.png";
    console.log("tropical");
    numtropical++;
    numtropicalspan.innerHTML = numtropical;
  } else {
    document.getElementById("result-img").src = "img/Pufferfish.png";
    console.log("puffer");
    numpuffer++;
    numpufferspan.innerHTML = numpuffer;
  }

  
  if (character === village) {
    let randnum1 = Math.random();
    console.log("randnum1");
  ` `}
  if (randnum1 >= 0.25) {
    document.getElementById("result-img").src = "img/Raw-salmon.png";
    console.log("salmon");
    numsalmon++;
    numsalmon.innerHTML = numsalmon;
  } else if (randnum1 >= 0.5) {
    document.getElementById("result-img").src = "img/Raw-cod.png";
    console.log("cod");
    numcod++;
    numcodspan.innerHTML = numcod;
  } else if (randnum1 >= 0.75) {
    document.getElementById("result-img").src = "img/Tropical-fish.png";
    console.log("tropical");
    numtropical++;
    numtropicalspan.innerHTML = numtropical;
  } else {
    document.getElementById("result-img").src = "img/Pufferfish.png";
    console.log("puffer");
    numpuffer++;
    numpufferspan.innerHTML = numpuffer;
  }
}
