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
    // event.preventDefault() //or make sure button is outside of the form in index.html
    console.log(dateInput.value, conceptInput.value, journalEntryInput.value, moodInput.value)
})
// Regarding line 16...any time you are adding an event listener to a button that is part of a form within index.html, you must add event.preventDefault() to the event listener because otherwise, the page will refresh and delete your console.log or whatever else you have in the event listener.

