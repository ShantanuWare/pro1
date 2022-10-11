// task 1
// const fs= require('fs');

// const quote ="No beauty shines brighterr than that of good heart :)!!!."

// for (let i=1; i<=10; i++) {
//  fs.writeFile(`./back/text-${i}.html`, quote, (err)=>{
//     console.log("completed writing");
//  });}


// task 2

const fs= require('fs');

// const quote ="No beauty shines brighterr than that of good heart :)!!!."

// for (let i=1; i<=process.argv[2
// ]; i++) {
//  fs.writeFile(`./back/text-${i}.html`, quote, (err)=>{
//     console.log("completed writing");
//  });}

 // Reading files
//  fs.readFile("./hii.txt","utf-8",(err, data)=>{
//     if (err){
//         console.log("error happened:", err)
//     }else{
//         console.log(data)
//     }
//  });

 // add to existing file
 let ss= "good morning"

// this is use for overwriting purpose
//  fs.writeFile("./fun.html", ss, (err)=>{
//     console.log("complete")
//  });

// this is used for appending purpose
// \n used for enter to start new line
// fs.appendFile("./fun.html", "\n"+ ss, (err)=>{
//     console.log("complete")
//  })

//  delete file
fs.unlink("./delete1.css", (err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("delete success")
    }
});
