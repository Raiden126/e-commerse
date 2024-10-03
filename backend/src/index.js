const express = require('express');
const cors = require('cors');
const authRouters = require('./routes/auth.route');
const userRouters = require('./routes/user.route');

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    return res.status(200).send({message: "welcome to ecommerce api", status: true})
})

app.use('/auth', authRouters);
app.use('/api/users', userRouters);

module.exports = app;