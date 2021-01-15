// write to file using pipes

const fs = require('fs');
const path = require('path');

// create a readable stream
const readStream = fs.createReadStream(path.join(__dirname, './read_file.txt'));

// create a writable stream
const writeStream = fs.createWriteStream(path.join(__dirname, './write_file.txt'));

// read / write
readStream.pipe(writeStream);

// pipes can also be used for responding to GET requests
