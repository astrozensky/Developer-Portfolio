const express = require("express"),
  app = express(),
  flash = require("connect-flash"),
  session = require("express-session"),
  sendMail = require("./mail");

app.use(express.static(__dirname + "/public"));
app.use(flash());
app.set("view engine", "ejs");

// Configure Data parsing
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(express.json());

// Session Configuration
const secret = process.env.SECRET || "The big blue bird bathed all day";

app.use(
  session({
    secret,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(function (req, res, next) {
  res.locals.error = req.flash("error");
  res.locals.success = req.flash("success");
  next();
});

// Routes
app.get("/", (req, res) => {
  res.render("landing");
});

app.post("/email", (req, res) => {
  const { name, message, email } = req.body;
  console.log("data: ", req.body);
  console.log("name: ", name);
  console.log("email: ", email);
  console.log("message: ", message);

  sendMail(name, email, message, function (err, data) {
    if (err) {
      console.log("error: ", err);
      res.status(500).json({ message: "Internal Error" });
    } else {
      req.flash("success", "Message sent!");
      res.redirect("/");
    }
  });
});

// Server listen
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});
