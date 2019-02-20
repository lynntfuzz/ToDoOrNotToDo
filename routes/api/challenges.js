const router = require("express").Router();
const challengesController = require("../../controllers/challengesController");

// Matches with "/api/challenges"
router.route("/")
  .get(challengesController.findAll)
  .put(challengesController.updateChallenge)
  .post(challengesController.createChallenge)

router.route("/:id")
  .get(challengesController.findOneByID)
  
module.exports = router;