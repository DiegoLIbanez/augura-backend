const userModel = require('../models/userModel');

const userExisting = async (user) => {
    try {
        return await userModel
        .findOne({user:user})
        .populate('role')
        .populate('status'); 
    } catch (error) {
        console.log(error);        
    }
}

module.exports = { userExisting }