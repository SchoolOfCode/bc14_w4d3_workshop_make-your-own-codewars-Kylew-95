//👉 Write your tests below here:
import { test, expect } from "@jest/globals";
import { reverseString } from "./main.js";

/*test("reverseString", () => {
  const str = "hello";
  const str2 = "12345";
  const actual1 = reverseString(str);
  const actual2 = reverseString(str2);
  const expected1 = "olleh";
  const expected2 = "54321";
  expect(actual1).toBe(expected1);
  expect(actual2).toBe(expected2);
 
});*/

test("reverseString1", () => {
  const str = "hello";
  /* Define a constant variable named `str` 
  and initialize it to the string "hello"*/
  const actual = reverseString(str);
  /* Call the `reverseString()` function on the `str` 
  variable and store the result in a constant variable named `actual`*/
  const expected = "olleh";
  /* Define a constant variable named `expected` and 
  initialize it to the string "olleh"*/
  expect(actual).toBe(expected);
  /* Use the Jest `expect()` function to test whether `actual` 
  is equal to `expected`*/
});

test("reverseString2", () => {
  const str = "12345";
  const actual = reverseString(str);
  const expected = "54321";
  expect(actual).toBe(expected);
});

test("reverseString3", () => {
  const str = "bobcat";
  const actual = reverseString(str);
  const expected = "tacbob";
  expect(actual).toBe(expected);
});

test("reverseString4", () => {
  const str = "kyle";
  const actual = reverseString(str);
  const expected = "elyk";
  expect(actual).toBe(expected);
});