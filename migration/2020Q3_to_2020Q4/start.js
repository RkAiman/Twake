"use strict";
const config = require("config");

const configuration = {
  db: config.get("db"),
  encryption: config.get("encryption"),
};

console.log(configuration);

const migration = require("./migration/migrate.js");
migration(configuration);
