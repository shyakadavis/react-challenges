export const generateRandomColor = () => {
  // hexadecimal-code colors are in the integer range [0-9] and alphabet range [A - F]
  const letters = '0123456789ABCDEF';
  let colorCode = '#'; // colors start with the pound
  // since hex-codes have a length of 6, (the pound sign not included)
  // let us run a loop 6 times to generate one random value from the letters array
  // and append it to the colorCode variable.
  for (let i = 0; i < 6; i++)
    colorCode += letters[Math.floor(Math.random() * 16)];
  return colorCode;
};
