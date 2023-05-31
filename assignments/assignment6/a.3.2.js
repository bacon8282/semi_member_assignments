/**
 * @param {number} n
 * @returns {number[]}
 */
const getDivisors = (n) => {
  const root = Math.sqrt(n);
  const array = [];
  for (let i = 0; i <= root; i++) {
    if (n % i === 0) {
      array.push(i);
      array.push(n / i);
    }
  }
  array.sort((a, b) => a - b);
  return array;
};

console.log(getDivisors(5));
console.log(getDivisors(24));
console.log(getDivisors(196));
