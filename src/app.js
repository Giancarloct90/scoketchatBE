// IMPORT LIBRARIES
import cors from "cors";
import morgan from "morgan";

// CREATE SOCKET SERVER
import express from "express";
import http from "http";
const app = express();
const server = http.Server(app);
export const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});

// CONFIG SERVER
app.use(cors());
app.use(morgan("short"));

// ROUTES
server.listen(process.env.PORT || 4000, (err) =>
  err ? console.log("Error Server") : console.log("Server ON on port 4000")
);
