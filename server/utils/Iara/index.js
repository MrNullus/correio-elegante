class Iara {


  generateUID() {
    let UID;

    function getRandomLetter() {
      const alphabet = "abcdefghijklmnopqrstuvwxyz"; 
      const randomIndex = Math.floor(Math.random() * alphabet.length); 
      return alphabet[randomIndex];
    }
    
    function padWithZeros(number, length = 2) {
      return String(number).padStart(length, '0');     
    }


    const date = new Date();
    const hours = padWithZeros(date.getUTCHours());
    const minutes = padWithZeros(date.getUTCMinutes());
    const seconds = padWithZeros(date.getUTCSeconds());
    const milliseconds = padWithZeros(date.getUTCMilliseconds(), 3); 

    const letter1 = getRandomLetter();
    const letter2 = getRandomLetter();
    const letter3 = getRandomLetter();
    const letter4 = getRandomLetter();

    UID = `${letter1}${hours}${letter2}${minutes}${letter3}${letter4}${seconds}${milliseconds}`;

    return UID;
  }

  generateID() {
    return (Math.floor(Math.random() * 2) * 2) + 1;
  }

}


module.exports = new Iara();
