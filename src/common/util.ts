export const numericArraysEqual = (array1: number[], array2: number[]) => {
  if (array1.length !== array2.length) return false;

  array1.sort();
  array2.sort();

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) return false;
  }

  return true;
}

export const shuffleArray = (array: any[]) => {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}