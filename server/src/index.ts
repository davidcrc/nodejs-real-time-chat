import app from "./app";
import logger from "morgan";

const port = process.env.PORT || 3000;

app.use(logger("dev"));

app.get("/", (req, res) => {
  res.send("This is the server");
});

app.listen(port, () => {
  console.log("Server on port", port);
});
