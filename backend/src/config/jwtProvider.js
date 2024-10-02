const jwt = require("jsonwebtoken");

const SECERT_KEY = "slkdfjlsjoweirofjwoiero3423iojoioidfsnriwerulskdjowejfoisrfweor"

const generateToken = (userId) => {
    const token = jwt.sign({userId}, SECERT_KEY, {expiresIn: "48h"})
    return token
}

const getUserIdFromToken = (token) => {
    const decodedToken = jwt.verify(token, SECERT_KEY)
    return decodedToken.userId;
}

module.exports = {generateToken, getUserIdFromToken};