// Assignment 1 | COMP1073 Client-Side JavaScript

/* Global variables
-------------------------------------------------- */

// Buttons
const noun1Button = document.querySelector("#noun1")
const verbButton = document.querySelector("#verb")
const adjButton = document.querySelector("#adjective")
const noun2Button = document.querySelector("#noun2")
const settingButton = document.querySelector("#setting")
const playbackButton = document.querySelector("#playback")
const randomButton = document.querySelector("#random")
const resetButton = document.querySelector("#reset")


// Paragraphs for output
const story = document.querySelector("#story")

// Word lists
const nouns1 = document.querySelectorAll(".noun1-words p")
const verbs = document.querySelectorAll(".verb-words p")
const adjs = document.querySelectorAll(".adj-words p")
const nouns2 = document.querySelectorAll(".noun2-words p")
const settings = document.querySelectorAll(".setting-words p")



// Variables to store selected word/phrase
let selectedNoun1="";
let selectedVerb="";
let selectedAdj="";
let selectedNoun2="";
let selectedSetting="";



//Counter variables
let noun1Counter = 0
let verbCounter = 0
let adjCounter = 0
let noun2Counter = 0
let settingCounter = 0


/* Functions
-------------------------------------------------- */
//function to cycle through the words
const selector = (list, count) => {
    let variable

        //Remove the active class from the prev word when the button is clicked 'again'
        if(count > 0) {
            list[count-1].classList.remove("active")
        }

        //reset the value of the counter
        if(count === list.length) {
            count = 0
        }
        
        //Add the active class to the selected word
        list[count].classList.add("active")

        //Store the selected word in a variable
        variable = list[count].innerHTML
        count++
        return variable
}



// Set the noun
noun1Button.addEventListener("click", () => {
    selectedNoun1 = selector(nouns1, noun1Counter)

    if(noun1Counter === nouns1.length) {
        noun1Counter = 0
    }
    noun1Counter++
})



// Set the verb
verbButton.addEventListener("click", () => {

    selectedVerb = selector(verbs, verbCounter)

    if(verbCounter === verbs.length) {
        verbCounter = 0
    }
    verbCounter++
})


// Set the adjective
adjButton.addEventListener("click", () => {

    selectedAdj = selector(adjs, adjCounter)

    if(adjCounter === adjs.length) {
        adjCounter = 0
    }
    adjCounter++
})


// Set the second noun

noun2Button.addEventListener("click", () => {

    selectedNoun2 = selector(nouns2, noun2Counter)

    if(noun2Counter === nouns2.length) {
        noun2Counter = 0
    }
    noun2Counter++
})



// Set the setting for the story

settingButton.addEventListener("click", () => {

    selectedSetting = selector(settings, settingCounter)

    if(settingCounter === settings.length) {
        settingCounter = 0
    }
    settingCounter++
})








// Random number function for 'Surprise Me' button
randomButton.addEventListener("click", () => {

    const selectedWords = [selectedNoun1, selectedVerb, selectedAdj, selectedNoun2, selectedSetting]
    const words = [nouns1, verbs, adjs, nouns2, settings]

    for(let i = 0; i < words.length; i++) {
        //Generates a random number between 0 and 6
        let randomNum = Math.floor(Math.random() * 7);  
        //set the randomly chosen word to its corresponding variable
        let chosenWord = words[i][randomNum].innerHTML
        selectedWords[i] = chosenWord
    }
    
    // Output the completed random sentence to the display paragraph
    story.style.backgroundColor = ""  
    story.textContent = `${selectedWords[0]}  ${selectedWords[1]} ${selectedWords[2]} ${selectedWords[3]} ${selectedWords[4]}`
})




//Reset the selected words
resetButton.addEventListener("click", () => {
    const words = [nouns1, verbs, adjs, nouns2, settings]

    //Removing the border of the selected words
    words.forEach((wordList) => {
        for(let i=0; i<wordList.length; i++) {
            wordList[i].classList.remove("active")
        }
    })

    //reseting the counters
    noun1Counter = 0
    verbCounter = 0
    adjCounter = 0
    noun2Counter = 0
    settingCounter = 0

    //reseting the selected words
    selectedNoun1 = ""
    selectedVerb = ""
    selectedAdj = ""
    selectedNoun2 = ""
    selectedSetting = ""

    story.style.backgroundColor = ""  
    story.textContent = `Create Your Story`
})



// Show the story
playbackButton.addEventListener("click", () => {
    //Output the completed sentence to the display paragraph

        if(selectedNoun1 === "" || selectedVerb === "" || selectedAdj === "" || selectedNoun2 === "" || selectedSetting === "") {
            //If any of the words is not selected output an error
            story.style.backgroundColor = "Red"
            story.textContent = "Please select a word in each list or click the surprise me button"
        } 
        
        else {  
            story.style.backgroundColor = ""  
            story.textContent = `${selectedNoun1}  ${selectedVerb} ${selectedAdj} ${selectedNoun2} ${selectedSetting}`
        }
    
})

