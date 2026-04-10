const express = require("express");
const connectDB = require("./config/db");
const cors=require("cors");
require("dotenv").config();

const authRoutes=require("./routes/authRoutes");

const app = express();

app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

app.use('/auth', authRoutes);

app.use((err, req, res, next) => {
    console.log(err);
    const statusCode=err.statusCode || 500;
    const message=err.message || "Server Error";

    res.status(statusCode).json({
        success: false,
        message: message
    })
});

app.listen(process.env.PORT, () => {
    connectDB();
    console.log("server Started at Port: ", process.env.PORT);
})