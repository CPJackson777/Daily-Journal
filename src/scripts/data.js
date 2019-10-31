const API = {
  getJournalEntries: function () {
    return fetch("http://localhost:3000/entries")
      .then(response => response.json())

  },
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


export default API