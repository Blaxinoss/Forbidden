
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
