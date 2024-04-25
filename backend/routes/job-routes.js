import express from "express";
import {
  archivedJob,
  createJob,
  getAllJobs,
  markAsInterested,
} from "../controllers/job-controller.js";

const router = express.Router();

router.route("/").post(createJob).get(getAllJobs);
router.route("/archive/:id").post(archivedJob);
router.route("/interested").post(markAsInterested);

export default router;
