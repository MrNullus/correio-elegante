const { initializeApp } = require("firebase/app");
const { getAnalytics } = require("firebase/analytics");
const { getDatabase, ref, set } = require("firebase/database");



const firebaseConfig = require('./config.jsx');
// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const db = getDatabase(app);


const FirebaseDB = require('./database/index.jsx');


const FirebaseService = {
  db : new FirebaseDB(db)
}


module.exports = FirebaseService;
