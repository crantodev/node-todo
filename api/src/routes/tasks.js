const router = require("express").Router();

const {
  index,
  detail,
  create,
  update,
  remove
} = require("../controllers/TasksController");

router.get("/", index);
router.get("/:id(\\d+)", detail);
router.post("/", create);
router.put("/:id(\\d+)", update);
router.delete("/:id(\\d+)", remove);

module.exports = router;
