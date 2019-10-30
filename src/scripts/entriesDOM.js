import entryManager from './entryComponent.js'

/*
    Purpose: To render all journal entries to the DOM

    Arguments: entries (array of objects)
*/
const renderDom = {
  renderJournalEntries(entries) {
    let HtmlForAllEntries = ""
    entries.forEach(entry => {
      const entryHtml = entryManager.makeJournalEntryComponent(entry)
      HtmlForAllEntries += entryHtml
    })
    const logArticle = document.querySelector(".entryLog")
    logArticle.innerHTML = HtmlForAllEntries
  }
}

const dateInput = document.querySelector('#date-id')
const conceptInput = document.querySelector('#concept-id')
const journalEntryInput = document.querySelector('#journalentry-id')
const moodInput = document.querySelector('.mood')



export default renderDom

