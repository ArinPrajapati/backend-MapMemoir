const express = require("express");
const mongoose = require("mongoose");
const connectDB = require("./dbConnection");
const pinRouter = require("./routes/pin");
const userRouter = require("./routes/user");
const app = express();
const cors = require('cors');

app.use(express.json());
connectDB();
Port = process.env.PORT || 8888;

const corsOptions = {
  origin: 'https://master--visionary-pavlova-ebf379.netlify.app/',
  
};

app.use(cors(corsOptions));


app.use("/map/pins", pinRouter);
app.use('/map/user', userRouter);


app.listen(Port, () => {
  console.log("listening on port " + Port);
});
