const router = require("express").Router();
const challengesController = require("../../controllers/challengesController");

// Matches with "/api/challenges"
router.route("/")
  .get(challengesController.findAll)
  .put(challengesController.updateChallenge)
  .post(challengesController.createChallenge)

module.exports = router;