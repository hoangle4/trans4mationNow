const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  title: { type: String, required: true },
  eventDesc: { type: String, required: true },
  eventDate: String,
  eventId:String,
  eventType: String,
  imgLink: String,
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
