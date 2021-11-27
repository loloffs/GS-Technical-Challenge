export function addLetters(input) {
  const str = input.toLowerCase();
  let sum = 0;

  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  for(let i = 0; i < str.length; i++) {
    sum += alphabet.indexOf(str[i]) + 1;
  }
  return sum;
}

export function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i < num; i++){
    if(num % i === 0){
      return false;
    }
  }
  return true;
}