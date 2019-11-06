//*** JS Purpose: API Requests/Fetch Calls ***


//      Fetch all entries

const API = {   
  getJournalEntries: function () {
    return fetch("http://localhost:3000/entries")     // <-- Tells API to fetch all entries
      .then(response => response.json())      // <-- response is taco. Tells API to parse response into JS so I can use it.
  },

  //      Post a new entry when the form is filled out
  

  saveJournalEntry: function (newJournalEntry) {    //  <-- newJournalEntry is a taco parameter
    return fetch("http://localhost:3000/entries", {   
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newJournalEntry)
    })
    .then(response => response.JSON())
  },

  //      Delete journal entry

  deleteEntry: function (entryID) {
    return fetch(`"http://localhost:3000/entries/${entryID}`, {
      method: "DELETE",
      })
      .then(response => response.JSON())
    }
  }


//      Declare a variable to be able to access each input field by ID

const dateInput = document.querySelector('#date-id')
const conceptInput = document.querySelector('#concept-id')
const journalEntryInput = document.querySelector('#journalentry-id')
const moodInput = document.querySelector('.mood')


//      Exports API object so I can access it in another js by importing it
export default API

