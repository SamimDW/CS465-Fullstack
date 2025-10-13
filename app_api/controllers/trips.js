const mongoose = require("mongoose");
const Trip = require("../models/travlr"); // Register the Trip model


// GET /api/trips - Retrieve all trips
// Regardless of the outcome, response must include HTML status code
// and a JSON object (not just a string)
// GET /api/trips - Retrieve all trips
const tripsList = async (req, res) => {
  try {
    // Query all trips from the database
    const trips = await Trip.find({}).lean().exec();

    // If no trips found
    if (!trips || trips.length === 0) {
      return res.status(404).json({ message: "No trips found" });
    }

    // Success - return all trips as JSON
    return res.status(200).json(trips);
  } catch (err) {
    console.error("tripsList error:", err);
    return res.status(500).json({
      message: "Server error",
      error: err.message,
    });
  }
};

// POST /api/trips - Add a new trip
// Regardless of the outcome, response must include HTML status code
// and a JSON object (not just a string)
const tripsAddTrip = async (req, res) => {
  const newTrip = new Trip({
    code: req.body.code,
    name: req.body.name,
    length: req.body.length,
    start: req.body.start,
    resort: req.body.resort,
    perPerson: req.body.perPerson,
    image: req.body.image,
    description: req.body.description,
  });

  const q = await newTrip.save();

  if (!q) {
    // Database returned no data
    return res.status(400).json(err);
  } else {
    // return all trips
    return res.status(201).json(q);
  }
};

// PUT: /trips/:tripCode - Adds a new Trip
// Regardless of outcome, response must include HTML status code
// and JSON message to the requesting client
const tripsUpdateTrip = async (req, res) => {
  // Uncomment for debugging
  console.log(req.params);
  console.log(req.body);
  const q = await Model.findOneAndUpdate(
    { code: req.params.tripCode },
    {
      code: req.body.code,
      name: req.body.name,
      length: req.body.length,
      start: req.body.start,
      resort: req.body.resort,
      perPerson: req.body.perPerson,
      image: req.body.image,
      description: req.body.description,
    }
  )
  .exec();

  if (!q) {
    // Database returned no data
    return res.status(400).json(err);
  } else {
    // Return resulting updated trip
    return res.status(201).json(q);
  }
  // Uncomment the following line to show results of
  operation;
  // on the console
  // console.log(q);
};

// GET /api/trips/:tripCode - Retrieve a specific trip by trip code
// Regardless of the outcome, response must include HTML status code
// and a JSON object (not just a string)
const tripsFindByCode = async (req, res) => {
  const q = await Model.find({ code: req.params.tripCode }) // return single record
    .exec();

  console.log("Trip code param:", req.params.tripCode);

  // Uncomment the following line to show results of query
  // on the console
  // console.log(q);

  if (!q) {
    // Database returned no data
    return res.status(404).json(err);
  } else {
    // return all trips
    return res.status(200).json(q);
  }
};

module.exports = {
  tripsList,
  tripsFindByCode,
  tripsAddTrip,
  tripsUpdateTrip,
};
