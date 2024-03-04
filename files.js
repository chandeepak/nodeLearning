const fs = require('fs');

//1 --
//reading files:
// fs.readFile('./blog.txt', (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(data.toString());
// });

// console.log('last line'); this is executed first as it is not asynchronized and hence takes v less time to be  executed

//2 --
//writing files:
// fs.writeFile('./blog.txt', 'hello again world', () => {
//   console.log('file was written');
// });
//if we type the file name wrong then node will create a file of that name in the same folder and write what is to be written 

//3 --
//directories:
// if(!fs.existsSync('./assets')){
// fs.mkdir('./assets', (err) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log('folder created');
// });
// } this statement creates a file if it does not exist in the folder
// else {
//   fs.rmdir('./assets', (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log('folder deleted');
//   });
// } this statement deletes the file if it already exists in the folder

//4 --
//deleting files:
if(fs.existsSync('./delete.txt')) {
  fs.unlink('./delete.txt', (err) => {
    if (err) {
      console.log('err');
  }
  console.log('file deleted');
})
}

