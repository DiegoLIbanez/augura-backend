const personModel = require("../models/personModel");

const getId = async (_id) => {
  try {
    return await personModel.find({ _id });
  } catch (error) {
    throw error;
  }
};

const getAll = async () => {
  try {
    return await personModel.find({}).populate("role").populate("status");
  } catch (error) {
    throw error;
  }
};

const create = async (body) => {
  try {
    return await personModel.create(body);
  } catch (error) {
    throw error;
  }
};

const update = async (_id, body) => {
  try {
    return await personModel.findByIdAndUpdate(_id, body);
  } catch (error) {
    throw error;
  }
};

const deleteId = async (_id) => {
  try {
    return await personModel.findByIdAndDelete(_id);
  } catch (error) {
    throw error;
  }
};

module.exports = { getId, getAll, create, update, deleteId };
