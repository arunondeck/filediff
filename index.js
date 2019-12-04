const lineByLine = require('n-readlines');

let args = process.argv.slice(2);
let file1, file2, line;
let obj1, obj2 = {};
file1 = args[0];
file2 = args[1];
obj1 = readFileToObj(file1);
obj2 = readFileToObj(file2);
compare(obj1, obj2);

function readFileToObj(filename){
    let liner = new lineByLine(filename);
    let obj = {};
    while (line = liner.next()) {
        line = line.toString('ascii').replace(/^\s+|\s+$/g, '');
        obj[line] = line;
    }
    return obj;
}

function compare(obj1, obj2){
    let start = Date.now();
    let obj1Keys = Object.keys(obj1);
    let obj2Keys = Object.keys(obj2);
    let common = []; 
    let ab = [];
    let ba = [];
    for (let key in obj1Keys) {
        if (typeof obj2[obj1Keys[key]] != 'undefined') {
            common.push(obj1Keys[key]);
        }
        else
            ab.push(obj1Keys[key]);
    }
    //obj2Keys = obj2Keys.filter( item => obj1Keys.indexOf(item) < 0);
    for (let key in obj2Keys) {
        if (typeof obj1[obj2Keys[key]] == 'undefined') {
            ba.push(obj2Keys[key]);
        }
    }
    console.log(`Common : ${common}`);
    console.log(`File1 - File2 : ${ab}`);
    console.log(`File2 - File1 : ${ba}`);
}