const typeCommunalModel = require("../models/typeCommunalModel");

const getId = async (_id) => {
  try {
    return await typeCommunalModel.find({ _id });
  } catch (error) {
    throw error;
  }
};

const getAll = async () => {
  try {
    return await typeCommunalModel.find({});
  } catch (error) {
    throw error;
  }
};

const create = async (body) => {
  try {
    return await typeCommunalModel.create(body);
  } catch (error) {
    throw error;
  }
};

const update = async (_id, body) => {
  try {
    return await typeCommunalModel.findByIdAndUpdate(_id, body);
  } catch (error) {
    throw error;
  }
};

const deleteId = async (_id) => {
  try {
    return await typeCommunalModel.findByIdAndDelete(_id);
  } catch (error) {
    throw error;
  }
};

module.exports = { getId, getAll, create, update, deleteId };
