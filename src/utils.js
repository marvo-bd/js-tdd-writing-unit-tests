export function pointsForWord(word) {
    if (typeof word !== "string") {
      throw new Error("Input must be a string");
    }
  
    let points = 0;
    for (const char of word.toLowerCase()) {
      if (/[aeiou]/.test(char)) {
        points += 1;
      } else if (/[bcdfghjklmnpqrstvwxyz]/.test(char)) {
        points += 2;
      }
    }
    return points;
  }
  
