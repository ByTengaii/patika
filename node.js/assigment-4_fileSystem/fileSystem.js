//* Create Directory
const { makeDirectory,writeFile, readFile, appendFile, deleteFile } = require('./modules.js');

const directoryPath = './project/source';
const filePath = directoryPath + '/employees.json';
const data = '{"name": "Employee 1 Name", "salary": 2000}';
const appendData = '\n ahahaha';

makeDirectory(directoryPath);
writeFile(filePath,data);
readFile(filePath);
appendFile(filePath,appendData);
deleteFile(filePath);