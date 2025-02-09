const roleModel = require("../models/statusDesinfectionModel");

const getId = async (_id) => {
  try {
    return await roleModel.find({ _id });
  } catch (error) {
    throw error;
  }
};

const getAll = async () => {
  try {
    return await roleModel.find({});
  } catch (error) {
    throw error;
  }
};

const create = async (body) => {
  try {
    return await roleModel.create(body);
  } catch (error) {
    throw error;
  }
};

const update = async (_id, body) => {
  try {
    return await roleModel.findByIdAndUpdate(_id, body);
  } catch (error) {
    throw error;
  }
};

const deleteId = async (_id) => {
  try {
    return await roleModel.findByIdAndDelete(_id);
  } catch (error) {
    throw error;
  }
};

module.exports = { getId, getAll, create, update, deleteId };
