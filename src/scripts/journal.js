/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.

    Change the fake variable names below to what they should be
    to get the data and display it.
*/

import API from "./data.js"
import renderDom from "./entriesDOM.js"


API.getJournalEntries()
    .then(response => renderDom.renderJournalEntries(response))


const inputFactory = (date, concept, journalinput, mood) => {
    return {
        "date": date,
        "concept": concept,
        "entry": journalinput,
        "mood": mood
    }
}


const postThis = document.getElementById("record-entry").addEventListener("click", function (event) {
    event.preventDefault()
    const dateInput = document.querySelector('#date-id').value
    const conceptInput = document.querySelector('#concept-id').value
    const journalEntryInput = document.querySelector('#journalentry-id').value
    const moodInput = document.querySelector('.mood').value

    const journalObject = inputFactory(dateInput, conceptInput, journalEntryInput, moodInput)
    // console.log(journalObject)


    // POST.then(get).then(render)
    API.saveJournalEntry(journalObject) //POST
        .then(API.getJournalEntries) //GET
        .then(response => renderDom.renderJournalEntries(response)) //RENDER

})

let moodOptions = document.getElementsByName('radio-mood');
// console.log(moodOptions)
moodOptions.forEach(radioButton => {
    radioButton.addEventListener('click', event => {
        const updateMoodOptions = event.target.value
        // console.log(updateMoodOptions)

        API.getJournalEntries()
            .then(entries => {
                let newFilteredArray = entries.filter(entry => entry.mood === updateMoodOptions)
                console.log(newFilteredArray)
                API.getJournalEntries()
                    .then(response => renderDom.renderJournalEntries(newFilteredArray))
            })
    })
})


