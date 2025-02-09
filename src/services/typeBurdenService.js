const typeBurdenModel = require("../models/typeBurdenModel");

const getId = async (_id) => {
  try {
    return await typeBurdenModel.find({ _id });
  } catch (error) {
    throw error;
  }
};

const getAll = async () => {
  try {
    return await typeBurdenModel.find({});
  } catch (error) {
    throw error;
  }
};

const create = async (body) => {
  try {
    return await typeBurdenModel.create(body);
  } catch (error) {
    throw error;
  }
};

const update = async (_id, body) => {
  try {
    return await typeBurdenModel.findByIdAndUpdate(_id, body);
  } catch (error) {
    throw error;
  }
};

const deleteId = async (_id) => {
  try {
    return await typeBurdenModel.findByIdAndDelete(_id);
  } catch (error) {
    throw error;
  }
};

module.exports = { getId, getAll, create, update, deleteId };
