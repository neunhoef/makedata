
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
let cfull = db._create("cfull");
let cgeo = db._create("cgeo");
let cunique = db._create("cunique");
let cmulti = db._create("cmulti");

// Create some indexes:

chash.ensureIndex({type: "hash", fields: ["a"], unique: false});
cskip.ensureIndex({type: "skiplist", fields: ["a"], unique: false});
cfull.ensureIndex({type: "fulltext", fields: ["text"], minLength: 4});
cgeo.ensureIndex({type: "geo", fields: ["position"], geoJson: true});
cunique.ensureIndex({type: "hash", fields: ["a"], unique: true});
cmulti.ensureIndex({type: "hash", fields: ["a"], unique: false});
cmulti.ensureIndex({type: "skiplist", fields: ["b", "c"]});
cmulti.ensureIndex({type: "geo", fields: ["position"], geoJson: true});
cmulti.ensureIndex({type: "fulltext", fields: ["text"], minLength: 6});


