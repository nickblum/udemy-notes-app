const fs = require('fs')
const chalk = require('chalk')

const addNote = function(title,body){
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function(note){
        return note.title === title
    })

    if ( duplicateNotes.length === 0 ){
        notes.push({
            title: title,
            body: body
        })
        console.log('New note')
    } else {
        console.log('Note title taken')
    }
    saveNotes(notes)
}

const getNotes = function(){
    return 'Your notes?'
}

const removeNote = function(title){
    const notes = loadNotes()
    const keptNotes = notes.filter(function(note){
        return note.title !== title
    })
    
    if ( notes.length === keptNotes.length ) {
        console.log(chalk.bgRed('No note found!'))
    } else {
        saveNotes(keptNotes)
        console.log(chalk.bgGreen('Note removed!'));
    }
}

const loadNotes = function(){
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

const saveNotes = function(notes){
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

module.exports = {
    addNote: addNote,
    getNotes: getNotes,
    removeNote: removeNote
}