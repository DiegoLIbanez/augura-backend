var mongoose = require("mongoose");
var Schema = mongoose.Schema;

const ModelSchema = new Schema(
  {
    person: [
      {
        ref: "person",
        type: Schema.Types.ObjectId,
      },
    ],
    vehicle: [
      {
        ref: "vehicle",
        type: Schema.Types.ObjectId,
      },
    ],
    statusDesinfection: [
      {
        ref: "statusDesinfection",
        type: Schema.Types.ObjectId,
      },
    ],
    typeBurden: [
      {
        ref: "typeBurden",
        type: Schema.Types.ObjectId,
      },
    ],
    typeCommunal: [
      {
        ref: "typeCommunal",
        type: Schema.Types.ObjectId,
      },
    ],
    typeInput: [
      {
        ref: "typeInput",
        type: Schema.Types.ObjectId,
      },
    ],
    initialDestination: String,
    endDestination: String,
  },

  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("registerVeiculo", ModelSchema);
