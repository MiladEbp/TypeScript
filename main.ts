//import {writeFileSync, readFileSync}  from  "fs";


const fs = require('fs');
import {Cls} from "./cl/class";

fs.writeFileSync("app", "this is typescript demo");
const  content = fs.readFileSync("app").toString();
console.log(content);

const cl = new Cls();

console.log(cl.add(5,5));

