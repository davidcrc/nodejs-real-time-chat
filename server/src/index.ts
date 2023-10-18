import App from "./app";
import logger from "morgan";
import path from "path";
import { prisma } from "./db";

const port = process.env.PORT || 3000;

App.app.use(logger("dev"));

App.io.on("connection", async (socket) => {
  console.log("New connection", socket.id);

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });

  socket.on("chat message", async (msg) => {
    console.log("message: " + msg);

    const username = (await socket.handshake.auth.username) ?? "anonymous";

    console.log("user", username);

    try {
      const results = await prisma.message.create({
        data: {
          content: msg,
          username,
        },
      });

      App.io.emit("chat message", msg, results.id.toString(), username);
    } catch (error) {
      console.log("err", error);
    }
  });

  if (!socket.recovered) {
    try {
      const results = await prisma.message.findMany({
        where: {
          id: {
            gt: socket.handshake.auth.serverOffset ?? 0,
          },
        },
      });

      results.forEach((row) => {
        socket.emit(
          "chat message",
          row.content,
          row.id.toString(),
          row.username
        );
      });
    } catch (error) {}
  }
});

App.app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../../client/index.html"));
});

App.server.listen(port, () => {
  console.log("Server on port", port);
});
