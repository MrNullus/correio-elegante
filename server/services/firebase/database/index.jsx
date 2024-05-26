  const { 
    getDatabase, ref, set, get, child, onValue, remove
  } = require("firebase/database");


  class FirebaseDB {

    constructor( db ) 
    {
      this.db = db;
    }
   
    /**
    * Retrieves all data from the specified path in Firebase Realtime Database.
    *
    * @param {string} path The path to the data location in Firebase Realtime Database.
    * @returns {Promise<object[]>} A promise that resolves to an array of objects representing the retrieved data. If an error occurs during retrieval, the array will be empty and a status property set to `500` within the promise object.
    * @example
    * ```javascript
    * const firebaseDB = new FirebaseDB(); // Replace with your FirebaseDB class instance
    *
    * (async () => {
    *   const allUserData = await firebaseDB.getAllDataIn('users');
    *   console.log(allUserData); // Array of user data objects
    * })();
    * ```
   */
    async getAllDataIn( path ) 
    {
      const dbRef = ref(this.db);
      let data = [];

      await get(child(dbRef, path))
        .then(( items ) => {
          items.forEach(( item ) => {
            data = [ ...data, item.val()];
            //console.log(item.val());
          }); 

          //console.log(items);
        })
        .catch( (error ) => {
          //console.log(error);
          data.status = 500;
        });

      console.log(data);
      return data;
    }
    
  /**
   * Retrieves data from a specific path in Firebase Realtime Database.
   *
   * @param {string} path The path to the data location in Firebase Realtime Database.
   * @returns {Promise<object|undefined>} A promise that resolves to an object containing the retrieved data, or `undefined` if the data at the specified path doesn't exist. If an error occurs during retrieval, the promise will be rejected with an error object.
   * @example
   * ```javascript
   * const firebaseDB = new FirebaseDB(); // Replace with your FirebaseDB class instance
   *
   * (async () => {
   *   const userData = await firebaseDB.getByPath('users/123');
   *   if (userData) {
   *     console.log(userData); // Data object for user with ID 123
   *   } else {
   *     console.log("Data not found at the specified path");
   *   }
   * })();
   * ```
   */
    async getByPath( path ) 
    {
      const dbRef = ref(this.db);
      let data = {};

      await get(child(dbRef, path))
        .then(( snapshot ) => {
          if (snapshot.exists())
          {
            data = snapshot.val();
            console.log(data);
          } 
          else 
          {
            console.log((snapshot.val()));
            data.status = 404;
          }
        })
        .catch( (error ) => {
          console.log(error);
          data.status = 500;
        });

      return data;
    }


    /**
   * Writes data to a specified path in Firebase Realtime Database.
   *
   * @param {string} path The path where to write the data.
   * @param {object} data The data to write.
   * @returns {Promise<boolean>} A promise that resolves to `true` if data is written successfully, `false` if data already exists at the specified path, or an error occurs during the write operation.
   * @example
   * ```javascript
   * const firebaseDB = new FirebaseDB(); // Replace with your FirebaseDB class instance
   * const data = { name: "John Doe", email: "[endereço de email removido]" };
   *
   * (async () => {
   *   const writeSuccess = await firebaseDB.writeData('users/123', data);
   *   if (writeSuccess) {
   *     console.log("Data written successfully");
   *   } else {
   *     console.log("Data already exists or an error occurred");
   *   }
   * })();
   * ```
   */
    async writeData(path, data) 
    {
      await set(ref(this.db, path), data)
      .then(() => {
        console.log(`Data write to path: ${path}`);
      })
      .catch((error) => {
        console.log(`Error: ${error}`)
      })
    }

    async updateData(path, data) {
      await set(ref(this.db, path), data)
      .then(() => {
        console.log(`Data update to path: ${path}`);
      })
      .catch((error) => {
        console.log(`Error: ${error}`)
      })
    }

    async deleteData(path) {
      await remove(ref(this.db, path))
      .then(() => {
        console.log(`Letter ${path} deleted with successfully`)
      })
      .catch((error) => {
        console.log(`ERROR : ${error}`)
      })
  }

}



module.exports = FirebaseDB;
