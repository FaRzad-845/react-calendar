const numbers = {
  "1": "1",
  "2": "2"
};
const persianNumbers = input => {
  return String(input)
    .split("")
    .map(char => (char in numbers ? numbers[char] : char))
    .join("");
};
export { persianNumbers };
