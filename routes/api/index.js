const router = require("express").Router();
const userRoutes = require("./users");
const challengeRoutes = require("./challenges");
const toDoItemRoutes = require("./toDoItems");

// article routes
router.use("/users", userRoutes);
router.use("/challenges", challengeRoutes);
router.use("/toDoItems", toDoItemRoutes);
router.use("/login", userRoutes);

module.exports = router;