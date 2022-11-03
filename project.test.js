import { analyzeArray, caesarCipher, calculator, capitalize, reverseString } from "./project"

// 1 
test("Capitalises one word strings.", () => {
    expect(capitalize("test")).toBe("Test");
});

test("Capitalises mutliple word strings.", () => {
    expect(capitalize("this is a test")).toBe("This is a test");
});

// 2
test("Reverses single word strings", () => {
    expect(reverseString("spider")).toBe("redips");
})

test("Reverses multiple word strings", () => {
    expect(reverseString("oh no, a spider")).toBe("redips a ,on ho");
})

test("Reverses strings including numbers", () => {
    expect(reverseString("te5t1ng")).toBe("gn1t5et");
})
// 3 // a
test("Adds two numbers together", () => {
    expect(calculator.add(73, 13)).toEqual(86);
})

test("Adds two decimal numbers together", () => {
    expect(calculator.add(1.32, 2.27)).toBeCloseTo(3.59);
})
    // b
test("Subtracts two numbers together", () => {
    expect(calculator.subtract(73, 13)).toEqual(60);
})

test("Subtracts two decimal numbers together", () => {
    expect(calculator.subtract(1.55, 0.32)).toBeCloseTo(1.23);
})
    // c
test("Divides two numbers together", () => {
    expect(calculator.divide(60, 12)).toEqual(5);
})

test("Divides decimal numbers together", () => {
    expect(calculator.divide(60, 0.5)).toBeCloseTo(120);
})
    // d
test("Multiplies two numbers together", () => {
    expect(calculator.multiply(12, 11)).toEqual(132);
})

test("Multiplies two decimal numbers together", () => {
    expect(calculator.multiply(1.2, 9.6)).toBeCloseTo(11.52);
})

// 4 Note: Shift = 3.
test("Caesar cipher with single word string", () => {
    expect(caesarCipher("spider")).toBe("vslghu");
});

test("Caesar cipher with single word string ranging from a - z", () => {
    expect(caesarCipher("spiderzat")).toBe("vslghucdw");
});

test("Caesar cipher with different case letters", () => {
    expect(caesarCipher("SpiderZat")).toBe("VslghuCdw");
});

test("Caesar cipher with punctation", () => {
    expect(caesarCipher("Spider, and Zat")).toBe("Vslghu, dqg Cdw");
});

// 5
test("Returns the average/mean of the numbers in the array, rounded", () => {
    expect(analyzeArray([6, 12, 4, 13, 56, 12])).toEqual({ average: 17, min: 4, max:56, length: 6});
});

test("Returns the lowest possible value in the array", () => {
    expect(analyzeArray([6, 12, 4, 13, 56, 12])).toStrictEqual({ average: 17, min: 4, max:56, length: 6});
});

test("Returns the highest possible value in the array", () => {
    expect(analyzeArray([6, 12, 4, 13, 56, 12])).toStrictEqual({ average: 17, min: 4, max:56, length: 6});
});

test("Returns the length of the array", () => {
    expect(analyzeArray([6, 12, 4, 13, 56, 12])).toStrictEqual({ average: 17, min: 4, max:56, length: 6});
});