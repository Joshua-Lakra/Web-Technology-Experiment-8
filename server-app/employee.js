// Just a helper model-style file for CRUD ops
const { getDB } = require("./db");

async function insertEmployee(employee) {
  const db = getDB();
  await db.collection("employees").insertOne(employee);
  return { message: "Employee added successfully" };
}

async function fetchEmployees() {
  const db = getDB();
  return await db.collection("employees").find().toArray();
}

async function deleteEmployee(id) {
  const db = getDB();
  const { ObjectId } = require("mongodb");
  await db.collection("employees").deleteOne({ _id: new ObjectId(id) });
  return { message: "Employee deleted" };
}

module.exports = { insertEmployee, fetchEmployees, deleteEmployee };
