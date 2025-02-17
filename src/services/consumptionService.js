const consumptionModel = require("../models/consumptionModel");

const getId = async (_id) => {
  try {
    return await consumptionModel.find({ _id });
  } catch (error) {
    throw error;
  }
};

const getAll = async () => {
  try {
    return await consumptionModel.find({}).populate("typeCommunal");
  } catch (error) {
    throw error;
  }
};

const create = async (body) => {
  try {
    return await consumptionModel.create(body);
  } catch (error) {
    throw error;
  }
};

const update = async (_id, body) => {
  try {
    return await consumptionModel.findByIdAndUpdate(_id, body);
  } catch (error) {
    throw error;
  }
};

const deleteId = async (_id) => {
  try {
    return await consumptionModel.findByIdAndDelete(_id);
  } catch (error) {
    throw error;
  }
};

module.exports = { getId, getAll, create, update, deleteId };
