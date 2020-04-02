const express = require("express");

const app = express();
const routes = require("./routes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", routes);

const PORT = process.env.PORT || 5000;

const httpServer = app.listen(PORT, () => {
  console.log(`API is running in PORT ${PORT}`);
});

httpServer.on("error", error => {
  console.log(error);
  return process.exit(0);
});
