import http from "http";

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello from Dockerized Node.js App!");
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${process.env.PORT}/`);
});
