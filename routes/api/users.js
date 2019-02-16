const router = require("express").Router();
const usersController = require("../../controllers/usersController");
const passport = require("../../client/src/config/passport");

// Matches with "/api/users"
router.route("/")
  .get(usersController.findAll)
  .post(usersController.signUpUser)

module.exports = router;