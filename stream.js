const fs = require('fs');

const readStream = fs.createReadStream('./blog1.txt', {encoding: 'utf8'});
const writeStream = fs.createWriteStream('./blog4.txt');

  // readStream.on('data', (chunk) => {
  // console.log('---New Chunk---');
  // console.log(chunk);
  // writeStream.write('\nNew Chunk\n');
  // writeStream.write(chunk);
// });
// here using basic read write stream

//PIPING --
readStream.pipe(writeStream);
//using pipe method of simultaneously reading and writing.