const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";
const dbName = "corporateHR";
let db;

async function connectDB() {
  const client = new MongoClient(url);
  await client.connect();
  console.log("✅ MongoDB connected");
  db = client.db(dbName);
}

function getDB() {
  return db;
}

module.exports = { connectDB, getDB };
