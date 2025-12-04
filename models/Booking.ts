import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema(
  {
    bookingId: {
      type: String,
      required: [true, 'Booking ID is required'],
      unique: true,
      trim: true,
    },
    customerName: {
      type: String,
      required: [true, 'Customer name is required'],
      trim: true,
      maxLength: [100, "Customer name can't be more than 100 characters"],
    },
    numberOfGuests: {
      type: Number,
      required: [true, 'Number of guests is required'],
      min: [1, 'At least 1 guest is required'],
      max: [50, 'Maximum 50 guests allowed'],
    },
    bookingDate: {
      type: Date,
      required: [true, 'Booking date is required'],
    },
    bookingTime: {
      type: String,
      required: [true, 'Booking time is required'],
      trim: true,
    },
    cuisinePreference: {
      type: String,
      trim: true,
      default: '',
    },
    specialRequests: {
      type: String,
      trim: true,
      default: '',
    },
    weatherInfo: {
      type: Object,
      default: {},
    },
    seatingPreference: {
      type: String,
      enum: ['indoor', 'outdoor'],
      default: 'indoor',
    },
    status: {
      type: String,
      enum: ['confirmed', 'pending', 'cancelled'],
      default: 'confirmed',
    },
  },
  { timestamps: true } // adds createdAt Date
);

export default mongoose.model('Booking', bookingSchema);
