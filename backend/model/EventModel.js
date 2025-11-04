const mongoose = require('mongoose');
const {Schema} = mongoose;

const EventSchema = new Schema({
    status: String,
    title: String,
    description: String,
    date: String,
    location: String
});

const Event = mongoose.model('event', EventSchema);

module.exports = {
    Event: Event
}