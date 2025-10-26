const http = require("http");
const { connectDB } = require("./db");
const { insertEmployee, fetchEmployees, deleteEmployee } = require("./employee");

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

connectDB().then(() => {
  const server = http.createServer(async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    if (req.method === "OPTIONS") {
      res.writeHead(204);
      res.end();
      return;
    }

    if (req.url === "/employees" && req.method === "GET") {
      const data = await fetchEmployees();
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(data));
    }

    else if (req.url === "/employees" && req.method === "POST") {
      let body = "";
      req.on("data", chunk => (body += chunk));
      req.on("end", async () => {
        const emp = JSON.parse(body);
        const result = await insertEmployee(emp);
        res.writeHead(201, { "Content-Type": "application/json" });
        res.end(JSON.stringify(result));
      });
    }

    else if (req.url.startsWith("/employees/") && req.method === "DELETE") {
      const id = req.url.split("/")[2];
      const result = await deleteEmployee(id);
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(result));
    }

    else {
      res.writeHead(404);
      res.end("Not Found");
    }
  });

  server.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
});
