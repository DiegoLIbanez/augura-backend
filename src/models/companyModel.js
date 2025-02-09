var mongoose = require("mongoose");
var Schema = mongoose.Schema;

const ModelSchema = new Schema(
  {
    name: String,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("company", ModelSchema);
