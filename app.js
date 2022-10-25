const express = require("express");
const app = express();


const connection = require("./db.js");
connection.once("open", () => console.log("DB Connected"));
connection.on("error", () => console.log("Error"));

app.use(
  express.json({
    extended: false,
  })
); 
app.use("/", require("./routes/urlDirectRoute"));
app.use("/api/url", require("./routes/urlRoute"));


const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`server started, listening PORT ${PORT}`));
