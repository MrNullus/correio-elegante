const FirebaseService = require('../services/firebase/index.jsx');
const Iara = require('../utils/Iara/index.js');


class LetterEntity 
{
  entity = 'letters';

  getAll() {
    const letters = FirebaseService.db.getAllDataIn(this.entity);

    return letters;
  }

  getByUID(uid) {
    const letterFound = FirebaseService.db.getByPath(
      `${this.entity}/${uid}`
    );

    return letterFound;
  }

  create(newLetter) {
    newLetter.head.uid = Iara.generateUID();
    // console.log(newLetter);

    FirebaseService.db.writeData(
      `${this.entity}/${newLetter.head.uid}`, 
      newLetter
    );
  }

  update(changedLetter) {
    // console.log(changedLetter)

    FirebaseService.db.updateData(
      `${this.entity}/${changedLetter.head.uid}`,
      changedLetter
    );
  }

  delete(letterUID) {
    // console.log(letterUID)

    FirebaseService.db.deleteData(`${this.entity}/${letterUID}`);
  }

}

module.exports = new LetterEntity();
