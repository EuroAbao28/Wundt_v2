const availableDate = require("../models/availableDate");

const addAvailableDate = async (req, res) => {
  const { date, slots } = req.body;

  try {
    const existingDate = await availableDate.findOne({ date });
    if (existingDate) {
      existingDate.slots = slots; // Update slots if date exists
      await existingDate.save();
      return res.status(200).json({ message: "Date updated successfully" });
    } else {
      const newDate = new availableDate({ date, slots });
      await newDate.save();
      return res.status(201).json({ message: "Date added successfully" });
    }
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

const updateAvailableDate = async (req, res) => {
  const { id } = req.params;
  const { date, slots } = req.body;

  try {
    const updatedDate = await availableDate.findByIdAndUpdate(
      id,
      { date, slots }, // Update these fields
      { new: true } // Return the updated document
    );

    if (!updatedDate) {
      return res.status(404).json({ error: "Date not found" });
    }

    res.status(200).json({ message: "Date updated successfully", updatedDate });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

const getAllAvailableDates = async (req, res) => {
  try {
    const availableDates = await availableDate.find({ isAvailable: true });
    res.status(200).json(availableDates);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = {
  addAvailableDate,
  updateAvailableDate,
  getAllAvailableDates,
};
