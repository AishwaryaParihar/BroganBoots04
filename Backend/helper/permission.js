const userModel = require("../model/userModel")

const uploadProductPermission = async(userId)=>{
    const user = await userModel.findById(userId)
    if(user.role !== 'ADMIN'){
        return false
    }
    return false
}
module.exports = uploadProductPermission