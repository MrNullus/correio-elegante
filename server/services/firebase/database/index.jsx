const { getDatabase, ref, set } = require("firebase/database");


class FirebaseDB {

  constructor(db) {
    this.db = db;
  }

  writeData(path, data) {
    set(
      ref(this.db, path),
      data
    );
  }

}



module.exports = FirebaseDB;
