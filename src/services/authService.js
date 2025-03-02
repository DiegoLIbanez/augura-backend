const personModel = require("../models/personModel");

const getUserName = async (userName) => {
  try {
    return await personModel.find({user:userName}).populate("role", "description -_id").populate("status", "description -_id")
    .select("-_id user email");
  } catch (error) {
    throw error;
  }
};

module.exports = { getUserName };
