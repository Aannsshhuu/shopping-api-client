const express = require("express");

const app = express();

const authRoutes = require("./routes/auth");
const productRoutes = require("./routes/products");

app.use(express.json());

app.use("/auth", authRoutes);
app.use("/products", productRoutes);

app.listen(3000);
