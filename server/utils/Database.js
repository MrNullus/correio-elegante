class Database {

  static prepareQuery(listQuery = []) {
    let finalQuery = '';
  
    listQuery.forEach(( element ) => {
      finalQuery += `\n ${element}`;
    });
  
    return finalQuery;
  }

}

module.exports = Database;