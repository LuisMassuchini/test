
const data = require("./fakeData");

const getUser = (req, res,next) => {
  const name = req.query.name;

  const user = data.find((user) => user.name === name);
  if (user) {
    res.status(200).send(user);
  } else {
    res.status(404).send("Usuário não encontrado");
  }
};

const getUsers = (req, res, next ) => {
  res.status(200).send(data);
};

module.exports = {
  getUser,
  getUsers,
};
