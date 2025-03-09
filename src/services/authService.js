const userModel = require("../models/userModel");

const getUserName = async (userName) => {
  try {
    return await userModel
    .find({ user:userName })
    .populate("role", "description -_id")
    .populate("status", "description -_id")
    .select("user email");
  } catch (error) {
    throw error;
  }
};

module.exports = { getUserName };
