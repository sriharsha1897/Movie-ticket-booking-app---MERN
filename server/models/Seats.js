const mongoose = require('mongoose');
const {Schema} = mongoose;

const SeatSchema = new Schema(
  {
    seatNumber: { type: Number, required: true },
    isReserved: { type: Boolean, default: false },
    price: { type: Number, required: true },
    catagory: { type: String, required: true },
    name: { type: String, default: '' },
  },
  { timestamps: true }
);

const Seats = mongoose.model('seats',SeatSchema);
module.exports = Seats;
