const fs = require("fs"); //file system (fs) inbuilt module

//reading files
/*
fs.readFile("./blog.txt", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data); //logs buffer use data.toString(); for using data
  console.log(data.toString());
});
*/

//write file using fs
// creates a new file if the file in the path is not found and overwrites it if file exists
/*
fs.writeFile('./blog1.txt','Hello world!',()=>{
    console.log('Wrote hello world to the file called blog1.txt')
})
*/

//directories

//make a new directory simply folder in the dir
/*
if(!fs.existsSync('./assets')){     //checks if the folder asstes already exists if not it will make new dir in the current dir
    fs.mkdir('./assets',(err)=>{
        if(err){
            console.log(err);
        }
        console.log('folder created')
    })
}else{
    fs.rmdir('./assets',(err)=>{    //rmdir removes dir
        if(err){
            console.log(err);
        }
        console.log("folder deleted!")
    })
}
*/


//deleting files

if(fs.existsSync('./deleteme.txt')){
    fs.unlink('./deleteme.txt',(err)=>{
        if(err){
            console.log(err);
        }
        console.log("Deleted file called deleteme.txt");
    })
}