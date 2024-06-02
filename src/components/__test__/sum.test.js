import { sum } from "../sum";

test("Sum function should calculate the sum of two numbers", () => {
    const result = sum(3,4);
    //assertion
    expect(result).toBe(7);
});

test("Concatenation of two strings", () => {
    const result = sum("a","b");
    
    //Assertion
    expect(result).toBe("ab");
});