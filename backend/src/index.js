const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");

dotenv.config();

const app = express();
const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions));
app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("connected to Mongo db server ");
  })
  .catch((err) => {
    console.log("error connected to database" + err);
  });

app.use('/api/users' , userRoutes)
app.use(notFound)
app.use(errorHandler)

app.listen(process.env.PORT, () => {
  console.log("Backend server has started at" + process.env.PORT);
});
