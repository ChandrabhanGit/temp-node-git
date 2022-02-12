const {readFileSync , writeFileSync} =require(`fs`)
console.log(`start`);
const first = readFileSync(`./content/first.txt`,`utf8`)
const second = readFileSync(`./content/second.txt`,`utf8`)
console.log(first,second)
writeFileSync(`./content/result-file.txt`,`here is the reuslt : ${first},${second}`,{flag : `a`}) //appending 
const third = readFileSync(`./content/result-file.txt`,`utf8`)
console.log(third)
console.log(`done with the next task`)