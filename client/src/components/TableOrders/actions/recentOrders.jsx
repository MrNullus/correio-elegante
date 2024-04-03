// Function to generate a random letter from the alphabet
function getRandomLetter() {
  const alphabet = "abcdefghijklmnopqrstuvwxyz"; // Ensure lowercase letters only
  const randomIndex = Math.floor(Math.random() * alphabet.length); // Generate random index within alphabet range
  return alphabet[randomIndex];
}

// Function to generate a random 2-digit string from a number
function padWithZeros(number, length = 2) {
  return String(number).padStart(length, '0'); // Ensure consistent 2-digit format
}

function generateUniqueUid() {
  const date = new Date();
  const hours = padWithZeros(date.getUTCHours());
  const minutes = padWithZeros(date.getUTCMinutes());
  const seconds = padWithZeros(date.getUTCSeconds());
  const milliseconds = padWithZeros(date.getUTCMilliseconds(), 3); // 3 digits for milliseconds

  // Use getRandomLetter multiple times to avoid pattern dependence
  const letter1 = getRandomLetter();
  const letter2 = getRandomLetter();
  const letter3 = getRandomLetter();
  const letter4 = getRandomLetter();

  return `${letter1}${hours}${letter2}${minutes}${letter3}${letter4}${seconds}${milliseconds}`;
}


function actionRecentOrders(orders, setOrders) {
  const newOrders = [
    {
      uid    : generateUniqueUid(),
      type   : "Cartinha Comun"
    },
    {
      uid    : generateUniqueUid(),
      type   : "Cartinha com Biz"
    },
    {
      uid    : generateUniqueUid(),
      type   : "Cartinha com Anuncio"
    }
  ];
  
  setOrders([...orders, ...newOrders]);
}

export { actionRecentOrders };