/*

Reading / Writing files using streams.
Streams can be used to read files that can't fit into memory.
Also the data receiver can start using information without having to wait for the entire thing.

*/

const fs = require('fs');
const path =  require('path');

// create a readable stream
const readStream = fs.createReadStream(path.join(__dirname, './read_file.txt'));

// create a writable stream
const writeStream = fs.createWriteStream(path.join(__dirname, './write_file.txt'));

// reading files using streamsreceiver
readStream.on('data', chunk => {
  console.log('New chunk of data received');

  // write the data chunk into write_file.txt
  writeStream.write(chunk);
});
