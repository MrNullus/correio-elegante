const FirebaseService = require('../services/firebase/index.jsx');
const Iara = require('../utils/Iara/index.js');


class LetterEntity 
{

  create(newLetter) {
    newLetter.head.uid = Iara.generateUID();
    newLetter.head.id  = Iara.generateID();
    console.log(newLetter);

    FirebaseService.db.writeData(
      `letters/${newLetter.head.uid}`, 
      newLetter
    );
  }

  update(changedLetter) {
    console.log(changedLetter)

    FirebaseService.db.updateData(
      `letters/${changedLetter.head.uid}`,
      changedLetter
    );
  }

  delete(letterUID) {
    console.log(letterUID)

    FirebaseService.db.deleteData(`letters/${letterUID}`);
  }

}

module.exports = new LetterEntity();
