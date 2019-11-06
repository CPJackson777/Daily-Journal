const postThis = document.getElementById("record-entry").addEventListener("click", function (event) {
    event.preventDefault()
    const dateInput = document.querySelector('#date-id').value
    const conceptInput = document.querySelector('#concept-id').value
    const journalEntryInput = document.querySelector('#journalentry-id').value
    const moodInput = document.querySelector('.mood').value

    

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


    registerDeleteListener () {
        const entryLog = document.querySelector("#entryLog")
        entryLog.addEventListener("click", event => {
                if (event.target.id.startsWith("deleteEntry--")) {
                    // Extract recipe id from the button's id attribute
                   
                    const entryToDelete = event.target.id.split("--")[1]
                    console.log(entryToDelete)
    
                    // Invoke the delete method, then get all recipes and render them
                    API.deleteEntry(entryToDelete)
                        .then(API.getJournalEntries)
                        .then(render)
                }
            })
        }
    }