var mongoose = require("mongoose");
var Schema = mongoose.Schema;

const ModelSchema = new Schema(
  {
    dni: {
      type: String,
      unique: true,
    },
    name: String,
    lastname: String,
    user: {
      type: String,
      unique: true,
    },
    password: String,
    email: {
      type: String,
      unique: true,
    },
    phoneNumber: Number,
    role: {
      ref: "role",
      type: Schema.Types.ObjectId,
    },
    status: {
      ref: "status",
      type: Schema.Types.ObjectId,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("person", ModelSchema);
