//      This is the HTML design/layout of each individual journal entry. 
//      It is written as a factory function.

const entryManager = {

  makeJournalEntryComponent(journalEntry) {
    return `
      <section>
        <h3>${journalEntry.concept}</h3>
        <p>${journalEntry.entry}</p>
        <p>${journalEntry.mood}</p>
        <p>${journalEntry.date}</p>
        <button id="deleteEntry--${journalEntry.id}"> Delete </button>
      </section>
    `
  }
}

export default entryManager