// Input: "1234"
// Right to left: 4, 3, 2, 1
// Double every second: 4, (32), 2, (12) → 4, 6, 2, 2
// If the result of doubling is greater than 9, sum the digits of the result (e.g., 6 * 2 = 12 → 1 + 2 = 3).
// Sum: 14. 14 % 10 !== 0.
// Result: false.
const dbg = (element) => {
  console.log(element);
  return element;
};

const isOdd = (element) => element % 2 !== 0;

const checkOperation = (card) => {
  const reversed = [...card].filter(element => element !== " ").reverse().map(element => parseInt(element));
  
  const summation = reversed.reduce((sum, currentElement, index) => {
    let element = currentElement;
    if (isOdd(index)) {
      const doubledValue = currentElement * 2;
      element = doubledValue > 9 ? doubledValue - 9 : doubledValue;
    }
    
    return sum + element;
  })
  
  return summation % 10 === 0;
};

export const validateCard = (card) => {
  return checkOperation(card);
};
