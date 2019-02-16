const router = require("express").Router();
const usersController = require("../../controllers/usersController");

router.route("/")
.post(usersController.signOutUser);
module.exports = router;
