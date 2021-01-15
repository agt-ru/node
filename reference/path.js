// working with paths
const path = require("path");

// base file name
console.log(path.basename(__filename));

// dir name
console.log(path.dirname(__filename));

// file extension
console.log(path.extname(__filename));

// create path object
console.log(path.parse(__filename));
const pathObj = path.parse(__filename);

// concatenate paths
console.log(path.join(__dirname, "test", "hello.html"));

// path delimiter
console.log(path.delimiter);

// path string from path object
const pathFormat = path.format(pathObj);
console.log(pathFormat);

// parent dir
const parentDir = path.dirname(__dirname);
console.log(parentDir);
