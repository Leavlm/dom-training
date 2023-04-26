/* ------------------------------------ */
/* --- Exercice 1 --- */
function getHidden(event) {
    const text = document.querySelector("#disappearing");
    text.classList.toggle("bye-text");
}

document.querySelector("#buttonToHide").addEventListener("click", getHidden);

/* ------------------------------------ */
/* --- Exercice 2 --- */


function scroll(event){
    document.querySelector("#ex2-scroll-value").textContent = window.scrollY}

window.addEventListener("scroll", scroll)

/* ------------------------------------ */
/* --- Exercice 3 --- */

const animalList = document.querySelector("#ex3-animals");
const animalButton = document.querySelector("#changeAnimals")

function moveAnimals(event){
    animalList.appendChild(animalList.firstElementChild)
}

document.querySelector("#changeAnimals").addEventListener("click", moveAnimals)

/* ------------------------------------ */
/* --- Exercice 4 --- */

function changeColor(event) {
    let btn = document.querySelector("#buttonToChange")
    if (btn.classList.contains("blue")){
        btn.classList.remove("blue");
        btn.classList.add("red");
    }
    else if (btn.classList.contains("red")){
        btn.classList.remove("red");
        btn.classList.add("green")
    }
    else{
        btn.classList.remove("green")
        btn.classList.add("blue");
    }
}

document.querySelector("#buttonToChange").addEventListener("click", changeColor);

/* ------------------------------------ */
/* --- Exercice 5 --- */

function changeBackground(event){
    let emojiList = document.querySelector('#emojiList');
    
}

document.querySelector("#emojiList").addEventListener("hover", changeBackground)


/* ------------------------------------ */
/* --- Exercice 6 --- */



/* ------------------------------------ */
/* --- Exercice 7 --- */

const taskList = [
    "🥖 Acheter du pain",
    "🗑️ Descendre la poubelle",
    "🐶 Sortir le chien",
    "🍽️ Faire la vaisselle",
    "🧹 Passer l'aspirateur",
    "🌳 Tondre la pelouse"
];


/* ------------------------------------ */
/* --- Exercice 8 --- */
