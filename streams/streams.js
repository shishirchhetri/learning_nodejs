//using data before the file being fully read
const fs = require('fs');

const readStream = fs.createReadStream('./data.txt',{encoding:'utf8'});  //encode in utf8 leads to readable form so .toString can be removed
const writeStream = fs.createWriteStream('./blog1.txt'); //create writestream into a new file called 
/*
//pipe methods create direct connection 
readStream.on('data',(chunk)=>{
    console.log('-----------New Chunk-----------')
    // console.log(chunk)  //chunk.toSting is removed as utf8 encoding is used
    writeStream.write('\n ------new chunk-----------\n')
    writeStream.write(chunk); //writes the chunk in the new file blog.txt

})
*/
readStream.pipe(writeStream); //replaces the above code with pipe method shortcut method
