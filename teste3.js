const data = require("./fakeData");
const checkPermissions = require("./permissionsMiddleware");

const deleteUser = (req, res) => {
  const name = req.query.name;

  const userIndex = data.findIndex((user) => user.name === name);

  if (userIndex !== -1) {
    data[userIndex] = null;
    return res.status(200).send("success");
  } else {
    return res.status(404).send("Usuário não encontrado");
  }
};

module.exports = {
    deleteUser: [checkPermissions, deleteUser],
};

//Utilizei o método findIndex() para localizar o índice do usuário que corresponde ao nome fornecido.
//Isso permitirá encontrar o usuário de forma mais eficiente, sem percorrer todo o array.