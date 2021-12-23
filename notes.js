const fs = require('fs')
const chalk = require('chalk')

const addNote = (title,body) => {
    const notes = loadNotes()
    const duplicateNotes = notes.filter((note)=> note.title === title)

    if ( duplicateNotes.length === 0 ){
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

const getNotes = ()=>{
    return 'Your notes?'
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

module.exports = {
    addNote: addNote,
    getNotes: getNotes,
    removeNote: removeNote
}