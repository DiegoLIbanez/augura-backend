const typeInputModel = require("../models/typeInputModel");

const getId = async (_id) => {
  try {
    return await typeInputModel.find({ _id });
  } catch (error) {
    throw error;
  }
};

const getAll = async () => {
  try {
    return await typeInputModel.find({});
  } catch (error) {
    throw error;
  }
};

const create = async (body) => {
  try {
    return await typeInputModel.create(body);
  } catch (error) {
    throw error;
  }
};

const update = async (_id, body) => {
  try {
    return await typeInputModel.findByIdAndUpdate(_id, body);
  } catch (error) {
    throw error;
  }
};

const deleteId = async (_id) => {
  try {
    return await typeInputModel.findByIdAndDelete(_id);
  } catch (error) {
    throw error;
  }
};

module.exports = { getId, getAll, create, update, deleteId };
