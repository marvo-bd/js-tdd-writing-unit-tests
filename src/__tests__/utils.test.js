import { pointsForWord } from "../utils";

describe("pointsForWord", () => {
  it("calculates the total points for a word (1 point per vowel, 2 per consonant)", () => {
    const word = "test";
    const points = pointsForWord(word);
    expect(points).toBe(7);
  });

  it("handles uppercase and lowercase input", () => {
    const word = "tEsT";
    const points = pointsForWord(word);
    expect(points).toBe(7);
  });

  it("returns 0 for an empty string", () => {
    const word = "";
    const points = pointsForWord(word);
    expect(points).toBe(0);
  });

  it("returns 0 for a string with non-alphanumeric characters only", () => {
    const word = "@#$%";
    const points = pointsForWord(word);
    expect(points).toBe(0);
  });

  it("throws an error for a non-string input", () => {
    expect(() => pointsForWord(123)).toThrow("Input must be a string");
  });
});

