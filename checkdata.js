
// Use like this:
//   arangosh USUAL_OPTIONS_INCLUDING_AUTHENTICATION --javascript.execute checkdata.js [DATABASENAME]
// where DATABASENAME is optional and defaults to "_system".

let database = "_system";

if (0 < ARGUMENTS.length) {
  database = ARGUMENTS[0];
}

if (database != "_system") {
  db._useDatabase(database);
}

// Create a few collections:

let c = db._collection("c");
let chash = db._collection("chash");
let cskip = db._collection("cskip");
let cgeo = db._collection("cgeo");
let cmulti = db._collection("cmulti");

