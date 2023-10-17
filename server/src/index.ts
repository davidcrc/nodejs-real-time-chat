import app from "./app";
import logger from "morgan";

const port = process.env.PORT || 3000;

app.use(logger("dev"));

app.get("/", (req, res) => {
  res.sendFile(process.cwd() + "/client/index.html");
});

app.listen(port, () => {
  console.log("Server on port", port);
});
