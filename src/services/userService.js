const userModel = require("../models/userModel");

const getId = async (_id) => {
  try {
    return await userModel.find({ _id });
  } catch (error) {
    throw error;
  }
};

const getAll = async () => {
  try {
    return await userModel.find({}).populate("role").populate("status");
  } catch (error) {
    throw error;
  }
};

const getAllDriver = async (_id) => {
  try {
    return await userModel.find({role:_id});
  } catch (error) {
    throw error;
  }
};

const create = async (body) => {
  try {
    return await userModel.create(body);
  } catch (error) {
    throw error;
  }
};

const update = async (_id, body) => {
  try {
    return await userModel.findByIdAndUpdate(_id, body);
  } catch (error) {
    throw error;
  }
};

const deleteId = async (_id) => {
  try {
    return await userModel.findByIdAndDelete(_id);
  } catch (error) {
    throw error;
  }
};

module.exports = { getId, getAll, getAllDriver, create, update, deleteId };
