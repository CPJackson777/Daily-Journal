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

    const journalObject = inputFactory(dateInput, conceptInput, journalEntryInput, moodInput)
    // console.log(journalObject)

    // POST.then(get).then(render)
    API.saveJournalEntry(journalObject) //POST
        .then(API.getJournalEntries) //GET
        .then(response => renderDom.renderJournalEntries(response)) //RENDER




