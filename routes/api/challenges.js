const router = require("express").Router();
const challengesController = require("../../controllers/challengesController");

// Matches with "/api/challenges"
router.route("/")
  .get(challengesController.findAll)
  .post(challengesController.createChallenge)

module.exports = router;