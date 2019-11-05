//      Set up API object. Fetch all entries

const API = {
  getJournalEntries: function () {
    return fetch("http://localhost:3000/entries")
      .then(response => response.json())
  },

//      Post a new entry when the form is filled out

  saveJournalEntry: function (newJournalEntry) {
    return fetch("http://localhost:3000/entries", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newJournalEntry)
    })
  }
}

//      Exports API object so I can access it in another js by importing it
export default API

