const router = require('express').Router();
const taskController = require("../controllers/task.controller");

router.get("/", taskController.getTasks);
router.put("/", taskController.toggleDone);
router.delete("/:id", taskController.deleteTask);
router.post("/", taskController.addTask);

module.exports = router;
