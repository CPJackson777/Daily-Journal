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


const dateInput = document.querySelector('#date-id')
const conceptInput = document.querySelector('#concept-id')
const journalEntryInput = document.querySelector('#journalentry-id')
const moodInput = document.querySelector('.mood')


document.getElementById("record-entry").addEventListener("click", function(event) {
   
    console.log(dateInput.value, conceptInput.value, journalEntryInput.value, moodInput.value)
})

