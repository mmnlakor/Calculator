// Zero-dependency static server. Railway sets PORT automatically.
const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 3000;
const FILE = path.join(__dirname, "index.html");

const server = http.createServer((req, res) => {
  if (req.url === "/health") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    return res.end("ok");
  }
  fs.readFile(FILE, (err, data) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      return res.end("Server error");
    }
    res.writeHead(200, {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "public, max-age=300",
    });
    res.end(data);
  });
});

server.listen(PORT, "0.0.0.0", () => console.log("CGPA calculator on port " + PORT));
