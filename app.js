import express from "express";
const app = express();
import facadeMethod from "./routes/routeFacade.js";


import connection from "./db.js";



connection.once("open", () => console.log("DB Connected"));
connection.on("error", () => console.log("Error"));

app.use(
  express.json({
    extended: false,
  })
); 
app.use("/", facadeMethod.urlDirectRoute);
app.use("/api/url",facadeMethod.urlRoute);


const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`server started, listening PORT ${PORT}`));
