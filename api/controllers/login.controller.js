const userModel = require('../../models/users');
const jwt = require('jsonwebtoken');

module.exports.index = async (req, res, next) => {
  var users = await userModel.find();
  res.json(users);
}

module.exports.login = async (req, res, next) => {
  const { username, password } = req.body;

  await userModel.findOne({ username: username})
          .then(user => {
            if (!user) {
              return res.status(404).send({message: 'No user found'});
            }
            const token = jwt.sign({ userId: user.id }, process.env.ACCESS_TOKEN_SECRET);
            res.status(200).json({
              userId: user.id,
              token: token
            })
          })
          .catch(err => res.status(400).send({message:'Invalid username or password'}));
}