const chalk = require('chalk')
const { demandOption, string } = require('yargs')
const yargs = require('yargs')
const notes = require('./notes')

//console.log(chalk.white.bgGreen('OK!'));

//console.log(process.argv);

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
        console.log('Notes listed')
    }
})

// reading a note
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler(){
        console.log(`Here's some note text`)
    }
})

yargs.parse();