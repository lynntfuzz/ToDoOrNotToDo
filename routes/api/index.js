const router = require("express").Router();
const userRoutes = require("./users");
const challengeRoutes = require("./challenges");
const toDoItemRoutes = require("./toDoItems");
const loginRoutes = require("./login");
const logoutRoutes = require("./logout");

// article routes
router.use("/users", userRoutes);
router.use("/challenges", challengeRoutes);
router.use("/toDoItems", toDoItemRoutes);
router.use("/login", loginRoutes);
router.use("/logout", logoutRoutes);

module.exports = router;