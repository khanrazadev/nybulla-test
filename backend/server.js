import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/user-routes.js";
import jobRoutes from "./routes/job-routes.js";
import connectDb from "./config/connect-db.js";
import errorHandler from "./middleware/error-handler.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3010;
connectDb();

app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/jobs", jobRoutes);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log("App is running on port", PORT);
});
