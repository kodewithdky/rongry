import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connetDb from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import cors from "cors";

//configure env
dotenv.config();

//database config
connetDb();
//rest object
const app = express();

//middeleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);

const PORT = process.env.PORT || 7000;

//rest api
app.get("/", (req, res) => {
  res.send("<h1>welcome to RONGRY </h1>");
});

//run listen
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`.bgCyan.white);
});
