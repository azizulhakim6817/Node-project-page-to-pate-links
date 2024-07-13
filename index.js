let http = require("http");
let fs = require("fs");

let server = http.createServer(function (req, res) {
  if (req.url == "/") {
    let data = fs.readFileSync("index.html", "utf8");
    res.end(data);
  } else if (req.url == "/skill") {
    let data = fs.readFileSync("skill.html", "utf8");
    res.end(data);
  } else if (req.url == "/support") {
    let data = fs.readFileSync("support.html", "utf8");
    res.end(data);
  } else if (req.url == "/testimonial") {
    let data = fs.readFileSync("testimonial.html", "utf8");
    res.end(data);
  } else if (req.url == "/about") {
    let data = fs.readFileSync("about.html", "utf8");
    res.end(data);
  } else if (req.url == "/contact") {
    let data = fs.readFileSync("contact.html", "utf8");
    res.end(data);
  }
});

server.listen(5050);
console.log("successful");

/* const fs = require("fs");
const http = require("http");
const server = http.createServer(function (req, res) {
  if (req.url === "/") {
    let data = fs.readFileSync("index.html", "utf8");
    res.end(data);
  } else if (req.url === "/about") {
    console.log(req.url);

    let data = fs.readFileSync("about.html", "utf8");
    res.end(data);
  } else if (req.url === "/skills") {
    let data = fs.readFileSync("skills.html", "utf8");
    res.end(data);
  } else if (req.url === "/service") {
    let data = fs.readFileSync("service.html", "utf8");
    res.end(data);
  } else if (req.url === "/testimonials") {
    let data = fs.readFileSync("testimonials.html", "utf8");
    res.end(data);
  } else if (req.url === "/contact") {
    let data = fs.readFileSync("contact.html", "utf8");
    res.end(data);
  }
});

server.listen(5050);
console.log("server started");
 */
