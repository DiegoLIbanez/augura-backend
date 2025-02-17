var mongoose = require("mongoose");
var Schema = mongoose.Schema;

const ModelSchema = new Schema(
  {
    waterConsumption: String,
    disinfectantConsumption: String,
    dateNow: { type: Date, default: Date.now },
    typeCommunal: [
      {
        type: Schema.Types.ObjectId,
        ref: "typeCommunal",
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("consumption", ModelSchema);
