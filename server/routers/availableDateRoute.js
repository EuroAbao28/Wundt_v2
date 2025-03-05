const {
  getAllAvailableDates,
  addAvailableDate,
  updateAvailableDate,
} = require("../controllers/availableDatesController");

const router = require("express").Router();

router.post("/admin/available-dates", addAvailableDate);
router.put("/admin/available-dates/:id", updateAvailableDate);
router.get("/available-dates", getAllAvailableDates);

module.exports = router;
