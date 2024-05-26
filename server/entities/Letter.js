const FirebaseService = require('../services/firebase/index.jsx');
const Iara = require('../utils/Iara/index.js');


class LetterEntity 
{


  create(newLetter) {
    newLetter.head.uid = Iara.generateUID();
    newLetter.head.id  = Iara.generateID();
    console.log(newLetter);

    FirebaseService.db.writeData(
      `letters/${newLetter.head.uid}`, newLetter
    );
  }

  update(updatedLetter) {
    console.log(updatedLetter)
    FirebaseService.db.updateData(
      
    );
  }

}

module.exports = new LetterEntity();
