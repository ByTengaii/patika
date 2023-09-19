const { mkdirSync, writeFileSync, appendFileSync, readFileSync, unlink, unwatchFile } = require('node:fs');

function makeDirectory(directoryPath) {
    const dirCreation =  mkdirSync(directoryPath, { recursive: true });
    console.log(`\nDirectory is created to ${directoryPath}\n`);
    return dirCreation;
}

function writeFile(filePath,data){
    const writeToFile = writeFileSync(filePath, data);
    console.log(`Wrote data to ${filePath} \n`);
    return writeToFile;
}


function readFile(filePath){
    const content = readFileSync(filePath, {encoding: 'utf8'});
    console.log(`READED FROM ${filePath}:\n${content}\n`);
}

function appendFile(filePath,data){
    const appendToFile = appendFileSync(filePath, data);
    console.log(`APPENDED : ${data}\n`);
    return appendToFile;
}


function deleteFile(filePath){
    unlink(filePath, (err) => {
        if (err)
            throw err;
        console.log(`${filePath} is deleted\n`);
    })
}

module.exports = {
    makeDirectory,
    writeFile,
    readFile,
    appendFile,
    deleteFile
}