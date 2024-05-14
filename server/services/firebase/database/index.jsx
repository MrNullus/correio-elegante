const { 
  getDatabase, ref, set, get, child, onValue
} = require("firebase/database");


class FirebaseDB {

  constructor( db ) 
  {
    this.db = db;
  }

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
        data[status] = 500;
      });

    console.log(data);
    return data;
  }
  
  async getByPath( path ) 
  {
    const dbRef = ref(this.db);
    let data = {};

    await get(child(dbRef, path))
      .then(( snapshot ) => {
        if (snapshot.exists())
        {
          data = snapshot.val();
          //console.log(data);
        } 
        else 
        {
          //console.log("nem existe");
          data.status = 404;
        }
      })
      .catch( (error ) => {
        //cobsole.log(error);
        data.status = 500;
      });

    return data;
  }

  writeData( path, data ) 
  {
    if (!this.getByPath(path)) 
    {
      set(
        ref( this.db, path ),
        data
      )
      return true;
    }
    else
    {
      //console.log("Existe");
      return false;
    }
  }

}



module.exports = FirebaseDB;
