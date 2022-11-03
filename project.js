// 1
const capitalize = (string) => {
    let input = string;
    let firstLetter = input.charAt(0);
    let UppercaseFirstLetter = firstLetter.toUpperCase();
    let removedString = input.slice(1);
    return UppercaseFirstLetter + removedString;
}

// 2
const reverseString = (string) => {
    let splitString = string.split("");
    let reverseArray = splitString.reverse();
    let reversedString = reverseArray.join("");
    return reversedString;
}

// 3
const calculator = {
    // a
    add: (a, b) => {
        return a + b;
    },
    // b
    subtract: (a, b) => {
        return a - b;
    },
    // c
    multiply: (a, b) => {
        return a * b;
    },
    // d
    divide: (a, b) => {
        return a / b;
    }
}

// 4
const caesarCipher = (string) => {
    let decoded = {
        a: "d",
        b: "e",
        c: "f",
        d: "g",
        e: "h",
        f: "i",
        g: "j",
        h: "k",
        i: "l",
        j: "m",
        k: "n",
        l: "o",
        m: "p",
        n: "q",
        o: "r",
        p: "s",
        q: "t",
        r: "u",
        s: "v",
        t: "w",
        u: "x",
        v: "y",
        w: "z",
        x: "a",
        y: "b",
        z: "c"
    }

    let decipher = "";
    for (let i = 0; i < string.length; i++) {
        if (string[i].match(/[., :!?]/)) {
            decipher += string[i];
        } else if (string[i].toUpperCase() == string[i]) {
            let lowercaseString = string.toLowerCase();
            let tempchar = decoded[lowercaseString[i]];
            let capitalizedtempchar = tempchar.toUpperCase();
            decipher += capitalizedtempchar;
        }
        else {
            decipher += decoded[string[i]];
        }
    }
    return decipher;
}

// 5
const analyzeArray = (array) => {

    const object = {
        // average: 0,
        // min: 0,
        // max: 0,
        // length: 0
    };

    const getAverage = () => {
        let total = 0;
        for (let i = 0; i < array.length; i++) {
            total += array[i]
        }
        let average = total / array.length
        object.average = Math.round(average);
        return average;
    }

    const getMin = () => {
        let smallestNumber = array[0];
        for (let i = 1; i < array.length; i++) {
            if (array[i] < smallestNumber) {
                smallestNumber = array[i];
            } 
        }
        
        return object.min = smallestNumber;
    }

    const getMax = () => {
        let largestNumber = array[0];
        for (let i = 1; i < array.length; i++) {
            if (array[i] > largestNumber) {
                largestNumber = array[i];
            } 
        }
        
        return object.max = largestNumber;
    }

    const getLength = () => {
        object.length = array.length;
    }

    getAverage(array);
    getMin(array);
    getMax(array);
    getLength(array);

    return object;
}


export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };