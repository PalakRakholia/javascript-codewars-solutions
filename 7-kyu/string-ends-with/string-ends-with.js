// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// Inputs: "abc", "bc"
// Output: true

// Inputs: "abc", "d"
// Output: false

function solution(str, ending){
  const strLen = str.length;
  const endingLen = ending.length;
  const strNew = str.slice(strLen-endingLen, strLen)
  if(strNew === ending){
    return true;
  }
  return false
}

solution("abc", "bc");