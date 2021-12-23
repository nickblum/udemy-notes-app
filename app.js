const { demandOption, string } = require('yargs')
const yargs = require('yargs')
const notes = require('./notes')

// customize yargs version
yargs.version('1.1.0')

// add a new command
yargs.command({
    command: 'add',
    describe: 'Adds a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title,argv.body)
    }
})

// remove a note
yargs.command({
    command: 'remove',
    describe: 'Removes a note',
    builder: {
        title: {
            describe: 'Title of note to be removed',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title);
    }
})

// listing out all notes
yargs.command({
    command: 'list',
    describe: 'List notes',
    handler(){
        notes.listNotes()
    }
})

// reading a note
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Title of a note to read',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.getNotes(argv.title)
    }
})

yargs.parse();