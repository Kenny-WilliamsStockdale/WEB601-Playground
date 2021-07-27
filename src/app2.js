const test = require('./test')
//name the const same with the module from node
const fs = require('fs');// require => is a funtion which use to load module from node
 
fs.writeFileSync('mynotes.text', "Hello world!");// this line create new file with 2 augemnts("file name.file extension", "the content")
 
fs.appendFileSync('mynotes.text', '\nHello world again')//this line append the details into file

test();