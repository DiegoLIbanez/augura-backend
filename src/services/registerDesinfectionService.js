const registerDesinfectionModel = require("../models/registerDesinfectionModel");

const getId = async (_id) => {
  try {
    return await registerDesinfectionModel
      .find({ _id })
      .populate({
        path: "user",
        populate: [{ path: "role" }, { path: "status" }],
      })
      .populate({
        path: "vehicle",
        populate: [{ path: "typeVehicle" }, { path: "company" }],
      })
      .populate("statusDesinfection")
      .populate("typeBurden")
      .populate("typeCommunal")
      .populate("typeInput");
  } catch (error) {
    throw error;
  }
};

const getAll = async () => {
  try {
    return await registerDesinfectionModel
      .find({})
      .populate({
        path: "user",
        populate: [{ path: "role" }, { path: "status" }],
      })
      .populate({
        path: "driver",
        populate: [{ path: "role" }, { path: "status" }],
      })
      .populate({
        path: "vehicle",
        populate: [{ path: "typeVehicle" }, { path: "company" }],
      })
      .populate("statusDesinfection")
      .populate("typeBurden")
      .populate("typeCommunal")
      .populate("typeInput");
  } catch (error) {
    throw error;
  }
};

const create = async (body) => {
  try {
    return await registerDesinfectionModel.create(body);
  } catch (error) {
    throw error;
  }
};

const update = async (_id, body) => {
  try {
    return await registerDesinfectionModel.findByIdAndUpdate(_id, body);
  } catch (error) {
    throw error;
  }
};

const deleteId = async (_id) => {
  try {
    return await registerDesinfectionModel.findByIdAndDelete(_id);
  } catch (error) {
    throw error;
  }
};

module.exports = { getId, getAll, create, update, deleteId };
