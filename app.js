const express = require("express");
const app = express();
const PORT = 8081;
const con = require("./DB/mysql");
const loginRouter = require("./routes/loginRouter");
const indexRouter = require("./routes/indexRouter");
const exploreRouter = require("./routes/exploreRouter");
const eventsRouter = require("./routes/eventsRouter");
const searchRouter = require("./routes/searchRouter");


app.set("view engine", "html");
app.use(express.json());

app.use(express.static("../../project_front/Develuv_frontend/develuv-f/build"));

app.get("/", (req, res) => {
  res.sendFile("index.html");
});

// app.use('/', indexRouter);

app.use("/login", loginRouter);
app.use("/Explore", exploreRouter);
app.use("/events", eventsRouter);
app.use("/search", searchRouter); //쿼리스트링값??



app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
