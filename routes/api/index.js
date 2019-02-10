const router = require("express").Router();
const userRoutes = require("./users");
const challengeRoutes = require("./challenges");

// article routes
router.use("/users", userRoutes);
router.use("/challenges", challengeRoutes);

module.exports = router;