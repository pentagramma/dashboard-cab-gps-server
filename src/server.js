const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const routes = require("./routes");
const connectMongo = require("./db/mongo");
const app = require("./app");

require("dotenv").config();

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*"); // Allow requests from any origin
//   res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE"); // Specify allowed HTTP methods
//   res.setHeader("Access-Control-Allow-Headers", "Content-Type"); // Specify allowed headers
//   next();
// });
// MongoDB Connection

// const mongoURI = process.env.MONGO_URI;

// /?retryWrites=true&w=majority&appName=embifidb";
// mongoose
//   .connect(mongoURI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("MongoDB connected"))
//   .catch((err) => console.log(err));

// Use routes
// app.use("/api", routes);

// if (process.env.NODE_ENV === "production") {
//   // Set static folder
//   app.use(express.static("client/build"));

//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
//   });
// }

const PORT = process.env.PORT || 8080;

connectMongo()
  .then(() => {
    app.listen(PORT, () => console.log("Server is running on Port :", PORT));
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB :", error);
  });

// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
