import mongoose from "mongoose";

const jobListingSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please write title"],
    },
    description: {
      type: String,
    },
    location: {
      type: String,
    },
    deadline: {
      type: Date,
      required: [true, "please write date of deadline"],
    },
    contactPhone: {
      type: String,
    },
    contactEmail: {
      type: String,
      required: [true, "please write email"],
    },
    archivedJob: {
      type: Boolean,
      default: false,
    },
    markAsInterested: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  { timestamps: true }
);

export const Job = mongoose.model("Job", jobListingSchema);
