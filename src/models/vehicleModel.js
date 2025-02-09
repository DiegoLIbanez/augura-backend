var mongoose = require("mongoose");
var Schema = mongoose.Schema;

const ModelSchema = new Schema(
  {
    plate: String,
    photoVehicle: String,
    typeVehicle: [
      {
        ref: "typeVehicle",
        type: Schema.Types.ObjectId,
      },
    ],
    company: [
      {
        ref: "company",
        type: Schema.Types.ObjectId,
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("vehicle", ModelSchema);
