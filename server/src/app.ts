import dotenv from "dotenv";
import express from "express";
import { Server } from "socket.io";
import { createServer } from "node:http";

dotenv.config();

const app = express();
const server = createServer(app);
const io = new Server(server, {
  connectionStateRecovery: {
    maxDisconnectionDuration: 10 * 60 * 1000, // 10 minutes
  },
});

export default { app, server, io };
