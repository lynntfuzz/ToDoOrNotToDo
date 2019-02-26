const router = require("express").Router();
const challengesController = require("../../controllers/challengesController");

// Matches with "/api/challenges"
router.route("/")
  .get(challengesController.findAll)
  .put(challengesController.updateChallenge)
  .post(challengesController.createChallenge)

// find by challenge id  matches "api/challenges/2340893u4920"
router.route("/:id")
  .get(challengesController.findOneByID)

// Matches "api/challenges/user/102983098"
router.route("/user/:userid")
  .get(challengesController.findAllByUserID)


  
module.exports = router;