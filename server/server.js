const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const port = 8000;
require('./config/mongoose.config')

app.use(express.json(), express.urlencoded({extended: true}));

const ProductRoutes = require("./routes/product.routes");
ProductRoutes(app);

app.listen(port, () => console.log("Server active on port " + port));