const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config({ path: "../.env" });
require("./database/database");
const mongoose = require("mongoose");

//Configuration
const app = express();
const PORT = process.env.PORT || 5001;
mongoose.set("strictQuery", false);

//Middleware
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

//Routes
//const v1UsersRoutes = require("./routes/usersRoutes");
//const v1LoginRoutes = require("./routes/loginRoutes");
const v1companyRoutes = require("./routes/companyRoutes");
const v1roleRoutes = require("./routes/roleRoutes");
const v1statusDesinfectionRoutes = require("./routes/statusDesinfectionRoutes");
const v1statusRoutes = require("./routes/statusRoutes");
const v1typeBurdenRoutes = require("./routes/typeBurdenRoutes");
const v1typeCommunalRoutes = require("./routes/typeCommunalRoutes");
const v1typeVehicleRoutes = require("./routes/typeVehicleRoutes");
const v1consumptionRoutes = require("./routes/consumptionRoutes");
const v1personRoutes = require("./routes/personRoutes");
const v1registerVeiculoServiceRoutes = require("./routes/registerVeiculoServiceRoutes");
const v1vehicleRoutes = require("./routes/vehicleRoutes");
const v1typeInputRoutes = require("./routes/typeInputRoutes");
const v1LoginRoutes = require('./routes/loginRoutes');

//Version routes
//app.use("/api/v1/user/", v1UsersRoutes);
app.use("/api/v1/login/", v1LoginRoutes);
app.use("/api/v1/company/", v1companyRoutes);
app.use("/api/v1/role/", v1roleRoutes);
app.use("/api/v1/status-desinfection/", v1statusDesinfectionRoutes);
app.use("/api/v1/status/", v1statusRoutes);
app.use("/api/v1/type-communal/", v1typeCommunalRoutes);
app.use("/api/v1/type-burden/", v1typeBurdenRoutes);
app.use("/api/v1/type-vehicle/", v1typeVehicleRoutes);
app.use("/api/v1/consumption/", v1consumptionRoutes);
app.use("/api/v1/person/", v1personRoutes);
app.use("/api/v1/register-vehicle/", v1registerVeiculoServiceRoutes);
app.use("/api/v1/vehicle/", v1vehicleRoutes);
app.use("/api/v1/type-input/", v1typeInputRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT} 🚀`);
});
