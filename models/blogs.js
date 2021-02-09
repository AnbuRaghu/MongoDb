const mongoose = require("mongoose");
// initializing mongoose schema
const Schema = mongoose.Schema;

// registering the Blog schema
const BlogSchema = new Schema({
  blogmessge: {
    type: String,
    required: true, // here we say it is mandatory field
  },
  user: {
    type: String,
  },
});

module.exports = mongoose.model("blogs", BlogSchema); // exporting the model mongoose package checks if we have the collection in the name of City in our db
