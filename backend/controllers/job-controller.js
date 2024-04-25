import asyncHandler from "express-async-handler";
import { Job } from "../models/joblisting-models.js";

export const createJob = asyncHandler(async (req, res) => {
  const { title, description, location, deadline, contactPhone, contactEmail } =
    req.body;

  if (
    !title ||
    !description ||
    !location ||
    !deadline ||
    !contactPhone ||
    !contactEmail
  ) {
    res.status(400);
    throw new Error("please enter all the fields");
  }

  const newJob = await Job.create({
    title,
    description,
    location,
    deadline,
    contactPhone,
    contactEmail,
  });

  res.status(200).json(newJob);
});

export const getAllJobs = asyncHandler(async (req, res) => {
  const jobs = await Job.find();
  res.status(200).json(jobs);
});

export const archivedJob = asyncHandler(async (req, res) => {
  const { id } = req.params;
  if (!id) {
    res.status(404);
    throw new Error("No Job Id Found");
  }

  const findJob = await Job.find({ _id: id });

  if (!findJob) {
    res.status(404);
    throw new Error("Job not Found");
  }

  const archive = await Job.findByIdAndUpdate(
    id,
    { archivedJob: true },
    { new: true }
  );

  res.status(200).json(archive);
});

export const markAsInterested = asyncHandler(async (req, res) => {
  const { id } = req.params;
  if (!id) {
    res.status(404);
    throw new Error("No Job id");
  }

  const { username, email, phone } = req.body;

  const newUser = await User.create({
    username,
    email,
    phone,
  });

  const job = await Job.findById(id);
  if (!job) {
    res.status(404);
    throw new Error("Job not found");
  }

  job.markAsInterested.push(newUser._id);

  console.log("working till here");

  res.status(200).json(updateJob);
});
