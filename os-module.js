//module
const os = require(`os`)
//info about current user
const user = os.userInfo()

console.log(user)


//methos return the system uptime in seconds
console.log(`My System uptime is : ${os.uptime()} seconds`)
const currentos = {
    name: os.type(),
    release: os.release(),
    total_memeory: os.totalmem(),
    free_memory: os.freemem()
}
console.log(currentos)

const myos ={
    type:os.type(),
    free_memory:os.freemem(),
    total_memory:os.totalmem(),
    release_date:os.release(),
}
console.log(myos)

