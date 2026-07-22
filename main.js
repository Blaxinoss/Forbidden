
import fs, { readFile, readFileSync } from 'fs'
import v8 from 'v8';

function WhyMyReadmeIs365KB_SYNC(filename) {
    const counter = {
        nums: 0,
        letters: 0,
        whiteSpaces: 0
    }

    const data = readFileSync("readme.txt", 'utf-8');
    for (const letter of data) {
        const NumberswithNoNaN = /^\d{1}/.test(letter);

        if (letter == ' ' || letter == '\n' || letter == '\t' || letter == '\r') {

            counter.whiteSpaces++;
        } else if (NumberswithNoNaN) {
            counter.nums++;
        } else {
            counter.letters++;
        }
    }
    //TIP => JS encodes all letters with UTF-16 so that anything in the ram will be doubled the size of the hard
    const calculation = counter.letters * 1 + counter.nums * 1 + counter.whiteSpaces * 1
    return `because your file has ${counter["nums"]} numbers and ${counter.letters} letters and ${counter.whiteSpaces} whitespaces with KB ${calculation}`;
}

console.log(WhyMyReadmeIs365KB_SYNC("readme.txt"));
console.log("字".length);
console.log("🚀".length);


import Http from 'http2'
import { exec, spawn } from 'child_process';
const server = Http.createServer()
server.listen(3000);


function WhyCanIExecuteShellCommands(command) {
    if (!command) return `couldn't find a command to call the function with`;
    exec(command, (error, stout, stderr) => {
        if (error) {
            console.log("something went wrong", stderr)
        } else if (stout) {
            console.log(stout)
        }
    })
}

WhyCanIExecuteShellCommands('start cmd.exe /c "echo we are here >> me.txt"');
WhyCanIExecuteShellCommands('start cmd.exe /c "dir"');


function WhyCanIExecuteShellCommands_ASYNC() {
    const dirRecursive = spawn("cmd.exe", ['/c', 'dir', '/S']);

    dirRecursive.on("error", (err) => {
        console.log("couldn't spawn the spawner cuz of error:", err);
    })

    dirRecursive.on("message", (message) => {
        console.log("idk what is this message but", message)
    })
    const decoder = new TextDecoder("UTF-8");

    dirRecursive.stdout.on("data", (data) => {
        console.log("stream chunk came : ", data)
        const realData = decoder.decode(data);
        console.log("decoded string is ", realData);
    })


    dirRecursive.stderr.on("error", (err) => {
        console.log("streamed error : ", err)
    })

}
WhyCanIExecuteShellCommands_ASYNC();