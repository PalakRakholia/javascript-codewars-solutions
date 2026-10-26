// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)
// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)
// You can find some examples in the test fixtures.

function humanReadable (seconds) {
   let hrs = 0;
  let min = 0;
  let sec = 0;
  hrs = Math.floor(seconds / 3600);
  let remainingSec = seconds % 3600;
  min = Math.floor(remainingSec / 60);
  sec = Math.floor(remainingSec % 60);
  let time = `${String(hrs).padStart(2, "0")}:${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
  return time;
}

humanReadable(86399);