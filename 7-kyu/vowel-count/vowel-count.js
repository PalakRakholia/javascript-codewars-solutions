// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  let vowel = ["a", "e", "i", "o", "u"];
  let count = 0;
  if (str === "") return 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < vowel.length; j++) {
      if (vowel[j] === str[i]) {
        count++;
      }
    }
  }
  return count;
}

getCount('pear tree')