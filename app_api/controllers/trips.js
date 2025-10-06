const mongoose = require('mongoose');
const Trip = require('../models/travlr'); // Register the Trip model
const Model = mongoose.model('trips');

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
      return res.status(404).json({ message: 'No trips found' });
    }

    // Success - return all trips as JSON
    return res.status(200).json(trips);
  } catch (err) {
    console.error('tripsList error:', err);
    return res.status(500).json({
      message: 'Server error',
      error: err.message
    });
  }
};

const tripsFindByCode = async (req, res) => {
    const q = await Model
    
        .find({'code' : req.params.tripCode }) // return single record
        .exec()

        console.log('Trip code param:', req.params.tripCode);

        

        // Uncomment the following line to show results of query
        // on the console
        // console.log(q);

    if (!q) 
    { // Database returned no data
        return res
            .status(404)
            .json(err);
    } else { // return all trips
        return res
            .status(200)
            .json(q);
    }
};

module.exports = {
    tripsList,
    tripsFindByCode
};