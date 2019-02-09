const router = require("express").Router();
const userRoutes = require("./users");

// article routes
router.use("/users", userRoutes);

module.exports = router;