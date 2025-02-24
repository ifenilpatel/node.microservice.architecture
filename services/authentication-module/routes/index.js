const express = require("express");
const router = express.Router();

// controllers
const indexCtrl = require("../controllers/index");

// routers
router.get("/", (req, res, next) => {
  indexCtrl.fun_Index(req, res, next);
});

module.exports = router;
