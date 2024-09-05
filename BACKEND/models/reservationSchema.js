import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
  firstName: {
    type: "string",
    required: true,
    minLength: [3, "First name must contain at least 3 characters"],
    maxLength: [12, "First name must not be greater than 12 characters"],
  },
  lastName: {
    type: "string",
    required: true,
    minLength: [3, "Last name must contain at least 3 characters"],
    maxLength: [12, "Last name must not be greater than 12 characters"],
  },
  email: {
    type: "string",
    required: true,
    validate: [validator.isEmail, "Please provide a valid email"],
  },
  phone: {
    type: "string",
    required: true,
    minLength: [11, "Phone number must contain exactly 11 digits"],
    maxLength: [11, "Phone number must contain exactly 11 digits"],
  },
  time: {
    type: "string",
    required: true,
  },
  date: {
    type: "string",
    required: true,
  },
});

export const Reservation = mongoose.model("Reservation", reservationSchema);
