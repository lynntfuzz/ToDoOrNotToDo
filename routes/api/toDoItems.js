const router = require("express").Router();
const toDoItemsController = require("../../controllers/toDoItemsController");

// Matches with "/api/toDoItems"
router.route("/")
  .get(toDoItemsController.findAll)
  .post(toDoItemsController.createToDoItem)

// Matches with "/api/toDoItems/checkBoxRecord"
router.route("/checkBoxRecord")
  .post(toDoItemsController.createCheckBoxRecord);
module.exports = router;