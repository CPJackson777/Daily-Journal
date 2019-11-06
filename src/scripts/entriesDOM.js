//      Purpose: this JS is for making entries display on the DOM


import entryManager from './entryComponent.js'


const renderDom = {
  renderJournalEntries(entries) {
    let HtmlForAllEntries = ""
    entries.forEach(entry => {
      const entryHtml = entryManager.makeJournalEntryComponent(entry)
      HtmlForAllEntries += entryHtml
    })
    const logArticle = document.querySelector("#entryLog")
    logArticle.innerHTML = HtmlForAllEntries
  }
}


export default renderDom

