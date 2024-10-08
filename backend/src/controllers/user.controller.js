const User = require("../models/user.model");
const userService = require("../services/user.service");

const getUserProfile = async (req, res) => {
    try {
        const jwt = req.headers.authorization?.split(" ")[1];

        console.log('jwt', jwt)

        if(!jwt) {
            return res.status(404).send({message: "Token not found"});
        }

        const user = await userService.getUserProfileByToken(jwt);

        return res.status(200).send(user);
    } catch (error) {
        return res.status(500).send({error: error.message, message: "server error"});
    }
}

const getAllUsers = async(req, res) => {
    try {
        const users = await userService.getAllUsers();
        return res.status(200).send(users);
    } catch (error) {
        return res.staus(500).send({error: error.message})
    }
}

module.exports = {getUserProfile, getAllUsers}