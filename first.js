/*console.log("hi hello")
m=10
console.log(m)
console.log(m+1000)
console.log(2+2)
let user="srikar"
console.log(user)

console.log(s)
var s;

const side=4;
console.log(side*4);

let a=10
console.log(typeof(a))
let a1=10.7
console.log(typeof(a1))
let a2='sai'
console.log(typeof a2)
let a4=100_000_000
console.log(a4)
console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)
let n=15015015000000000150150000001n
console.log(n+3n)

l=8>9
console.log(l)
console.log(typeof(l))
l1=null
console.log(l1)
console.log(typeof(l1))
l3=0
console.log(l3)
console.log(typeof(l3))
let l2
console.log(l2)
console.log(typeof(l2))

console.log(5/"sai")
console.log(typeof(5/"sai"))
*/
const http = require('http');
const port = process.env.PORT || 3000

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Hello World</h1>');
});

server.listen(port,() => {
    console.log(`Server running at port `+port);
});
