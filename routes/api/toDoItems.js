const router = require("express").Router();
const toDoItemsController = require("../../controllers/toDoItemsController");

// Matches with "/api/toDoItems"
router.route("/")
  .get(toDoItemsController.findAll)
  .post(toDoItemsController.createToDoItem)

// Matches with "/api/toDoItems/checkBoxRecord"
router.route("/checkBoxRecord")
  .post(toDoItemsController.createCheckBoxRecord)
  .put(toDoItemsController.editCheckBoxRecord); 




// Matches with "/api/toDoItems/checkBoxRecord"
router.route("/checkBoxRecord/:userid/:challengeid")
.get(toDoItemsController.getCheckBoxRecords);  
  
module.exports = router;