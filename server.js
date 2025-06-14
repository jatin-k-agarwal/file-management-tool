const http = require("http");
const fs = require("fs");
const path = require("path");
const url = require("url");

const PORT = 3000;

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;
  const query = parsedUrl.query;

  const filename = query.filename;
  const content = query.content || "";

  const needsFile = ["/create", "/read", "/delete"];

  // ✅ Check for required parameter first
  if (needsFile.includes(pathname) && !filename) {
    res.writeHead(400);
    return res.end("❌ Missing 'filename' in query (e.g., ?filename=test.txt)");
  }

  const filePath = filename
    ? path.join(__dirname, "files", filename)
    : null;

  const filesDir = path.join(__dirname, "files");
  if (!fs.existsSync(filesDir)) {
    fs.mkdirSync(filesDir);
  }

  if (req.method === "POST" && pathname === "/create") {
    fs.writeFile(filePath, content, (err) => {
      if (err) {
        res.writeHead(500);
        return res.end("❌ Failed to create file");
      }
      res.writeHead(200);
      res.end(`✅ File "${filename}" created`);
    });
  } else if (req.method === "GET" && pathname === "/read") {
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        res.writeHead(404);
        return res.end("❌ File not found");
      }
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end(`📄 Content of "${filename}":\n\n${data}`);
    });
  } else if (req.method === "DELETE" && pathname === "/delete") {
    fs.unlink(filePath, (err) => {
      if (err) {
        res.writeHead(404);
        return res.end("❌ File not found");
      }
      res.writeHead(200);
      res.end(`🗑️ File "${filename}" deleted`);
    });
  } else {
    res.writeHead(404);
    res.end("❓ Invalid route or method");
  }
});

server.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
