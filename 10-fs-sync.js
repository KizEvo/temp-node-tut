const {readFileSync, writeFileSync, readFile} = require('fs');
console.log("start");

const first = readFileSync('./content/subfolder/first.txt', 'utf8');
const test = readFileSync('./content/subfolder/test.txt', 'utf8');
console.log(first, test);
writeFileSync('./content/subfolder/result-sync.txt',`Here is the result: ${first}, ${test}`, {flag: 'a'});
// sau cái dấu phẩy thử 2 là việc thực hiện gọi file đó và viết đè lên writeFileSync
console.log("done with this task");