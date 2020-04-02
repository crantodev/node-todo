const router = require("express").Router();

router.get("/", (req, res) => {
  return res.json({ message: "Up and running" });
});

const private = require("../middlewares/auth");

router.use("/auth", require("./auth"));
router.use("/tasks", private, require("./tasks"));

router.use((req, res, next) => {
  return res.status(404).json({ error: "Not found" });
});

module.exports = router;
