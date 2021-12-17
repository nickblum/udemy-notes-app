const chalk = require('chalk')
const { demandOption, string } = require('yargs')
const yargs = require('yargs')

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
    handler: function(argv){
        console.log('Adding a new note!', argv.body)
    }
})

// remove a note
yargs.command({
    command: 'remove',
    describe: 'Removes a note',
    handler: function(){
        console.log('Note was removed.')
    }
})

// listing out all notes
yargs.command({
    command: 'list',
    describe: 'List notes',
    handler: function(){
        console.log('Notes listed')
    }
})

// reading a note
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function(){
        console.log(`Here's some note text`)
    }
})

yargs.parse();