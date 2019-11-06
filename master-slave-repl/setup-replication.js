db._useDatabase("_system");
require("@arangodb/replication").setupReplicationGlobal({
    endpoint: "tcp://localhost:8812",
    username: "root",
    password: "",
    verbose: false,
    includeSystem: true,
    incremental: true,
    autoResync: true
    });
