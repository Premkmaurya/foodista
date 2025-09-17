const express = require("express");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/auth.routes");
const userRoutes = require("./routes/user.routes");
const foodRoutes = require("./routes/food.routes");
const sessionRoutes = require("./routes/session.routes");
const foodPartnerRoutes = require("./routes/food-partner.routes");
const cors = require("cors");
const path = require('path')
const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173", "https://foodista-ruby.vercel.app"],
    credentials: true,
  })
);
app.use(express.static(path.join(__dirname,'../public')))
app.use(express.json());
app.use(cookieParser());

app.use("/api/food", foodRoutes);
app.use("/api/auth", authRoutes);

app.use("/api/food-partner", foodPartnerRoutes);
app.use("/api/user", userRoutes);

app.use("/api/auth/session", sessionRoutes);

app.get("*name",(req,res)=>{
	res.sendFile(path.join(__dirname,"../public/index.html"))
})

module.exports = app;
