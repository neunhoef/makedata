
// Use like this:
//   arangosh USUAL_OPTIONS_INCLUDING_AUTHENTICATION --javascript.execute makedata.js [DATABASENAME]
// where DATABASENAME is optional and defaults to "_system". The database
// in question is created (if it is not "_system").

let database = "_system";

if (0 < ARGUMENTS.length) {
  database = ARGUMENTS[0];
}

if (database != "_system") {
  db._createDatabase(database);
  db._useDatabase(database);
}

// Create a few collections:

let c = db._create("c");
let chash = db._create("chash");
let cskip = db._create("cskip");
let cgeo = db._create("cgeo");
let cmulti = db._create("cmulti");

