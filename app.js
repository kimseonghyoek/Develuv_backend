const express = require("express");
const app = express();
const PORT = 8081;
const con = require("./DB/mysql");
const cors = require("cors")
const loginRouter = require("./routes/loginRouter");
const indexRouter = require("./routes/indexRouter");
const exploreRouter = require("./routes/exploreRouter");
const eventsRouter = require("./routes/eventsRouter");
const searchRouter = require("./routes/searchRouter");
const createRouter = require("./routes/createRouter");
const eventInfoRouter = require("./routes/eventInfoRouter");
const passportConfig = require('./passport/config/index');
const passport = require('passport');
const session = require('express-session');

app.set("view engine", "html");
app.use(express.json({
  limit:'1000mb'   //body-parser 용량늘리기
}));
app.use(express.urlencoded({
  limit: '1000mb', //body-parser 용량늘리기
  extended: false
}))

//app.use(express.static("../Develuv_frontend/develuv-f/build"));
// app.use(express.static("../../project/Develuv_frontend/develuv-f/build"));
app.use(express.static("../../project_front/Develuv_frontend/develuv-f/build"));
// app.use(cors());

passportConfig();
app.use(passport.initialize());
app.use(session({ secret:"test"}));
app.use(passport.session())
app.get("/", (req, res) => {
  res.sendFile("index.html");
});

app.use("/login", loginRouter);
app.use("/Explore", exploreRouter);
app.use("/events", eventsRouter);
app.use("/search", searchRouter); //쿼리스트링값??
app.use("/EventCreate",createRouter)
app.use("/EventInfo",eventInfoRouter)

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
