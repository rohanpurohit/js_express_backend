const http = require("node:http");

const server = http.createServer(handler);
console.log("server listening on port 10000");
server.listen(10000);

function handler(req, res) {
  console.log("req", req.method);

  res.write("Hello Rest");
  res.end();
}
