const express = require("express");
const Unblocker = require("unblocker");

const app = express();
const unblocker = new Unblocker({ prefix: "/proxy/" });

app.use(unblocker);

app.listen(process.env.PORT || 8080, () => {
  console.log("Proxy running");
}).on("upgrade", unblocker.onUpgrade);