var mongoose = require("mongoose");
var Schema = mongoose.Schema;

const ModelSchema = new Schema(
  {
    description: String,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("typeInput", ModelSchema);
