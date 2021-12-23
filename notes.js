const fs = require('fs')
const chalk = require('chalk')

const addNote = (title,body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note)=> note.title === title)

    if ( !duplicateNote ){
        notes.push({
            title: title,
            body: body
        })
        console.log(chalk.bgGreen('New note'))
    } else {
        console.log(chalk.bgRed('Note title taken'))
    }
    saveNotes(notes)
}

const getNotes = (title)=>{
    const notes = loadNotes()
    const note = notes.find( (item) => item.title === title )
    
    if ( note ){
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    } else {
        console.log(chalk.bgRed('Note not found!'))
    }
}

const removeNote = (title)=>{
    const notes = loadNotes()
    const keptNotes = notes.filter((note)=> note.title !== title )
    
    if ( notes.length === keptNotes.length ) {
        console.log(chalk.bgRed('No note found!'))
    } else {
        saveNotes(keptNotes)
        console.log(chalk.bgGreen('Note removed!'));
    }
}

const loadNotes = ()=>{
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

const saveNotes = (notes)=>{
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

const listNotes = () => {
    console.log(chalk.bgGreen('Your notes:'))
    loadNotes().forEach( (note) => {
        console.log(note)
    } )
}

module.exports = {
    addNote: addNote,
    getNotes: getNotes,
    removeNote: removeNote,
    listNotes: listNotes
}