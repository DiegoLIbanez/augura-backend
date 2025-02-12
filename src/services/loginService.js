const personModel = require('../models/personModel');

const userExisting = async (user) => {
    try {
        return await personModel.findOne({user:user}).populate('role').populate('status'); 
    } catch (error) {
        console.log(error);        
    }
}

module.exports = { userExisting }