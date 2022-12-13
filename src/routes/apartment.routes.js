const { Router } = require("express");

const {
    getAllapartment,
} = require("../controllers/apartment.controllers");

const router = Router();
router.get("/apartment", getAllapartment);

module.exports = router;