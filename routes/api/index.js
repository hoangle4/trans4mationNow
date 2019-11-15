const router = require("express").Router();

const eventRoutes = require("./events.js");

router.use("/events", eventRoutes);
module.exports = router;
