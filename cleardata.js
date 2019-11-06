
// Use like this:
//   arangosh USUAL_OPTIONS_INCLUDING_AUTHENTICATION --javascript.execute cleardata.js [DATABASENAME]
// where DATABASENAME is optional and defaults to "_system". The database
// in question is dropped (if it is not "_system").

let database = "_system";

if (0 < ARGUMENTS.length) {
  database = ARGUMENTS[0];
}

if (database != "_system") {
  db._useDatabase(database);
}

// Drop collections:

try {
  let c = db._drop("c");
  let chash = db._drop("chash");
  let cskip = db._drop("cskip");
  let cgeo = db._drop("cgeo");
  let cmulti = db._drop("cmulti");
} catch(e) {
}

// Drop database:

db._useDatabase("_system");

if (database != "_system") {
  db._dropDatabase(database);
}
