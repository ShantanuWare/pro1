// ******INBUILT PACKEGE 



const os=require("os");

// 1KB= 1024 bytes
// 1MB =1024 KB 
// 1GB = 1024 MB
console.log("Free memory in Gb", os.freemem()/1024/1024/1024);
console.log("Total memory in Gb", os.totalmem()/1024/1024/1024);
console.log("OS version", os.version());
console.log("Os CPU", os.cpus());