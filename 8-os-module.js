const { log } = require('console');
const os = require('os');
const user= os.uptime();
console.log(user);
console.log(`the system utime is ${os.uptime()} seconds`);
const currentOS={
    name:os.type(),
    release:os.release(),
    totalMem: os.totalmem(),
    freeMem:os.freemem()

}
console.log(currentOS);