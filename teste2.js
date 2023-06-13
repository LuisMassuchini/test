const data = require("./fakeData");

const createUser = (req, res) => {
  const { name, job } = req.body;

  if (!name || !job) {
    return res.status(400).send("Nome e trabalho devem ser fornecidos.");
  }

  const newUser = {
    name,
    job,
  };

  data.push(newUser);

  res.send(newUser);
};

module.exports = {
  createUser,
};

//em vez de exportar uma função anônima, exportei em uma função nomeada para maior clareza
