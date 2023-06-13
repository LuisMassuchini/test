const data = require("./fakeData");
const checkPermissions = require("./permissionsMiddleware");

const updateData = (req, res) => {
  const { id } = req.query;

  const reg = data.find((item) => item.id === id);

  if (reg) {
    reg.name = req.body.name;
    reg.job = req.body.job;
    return res.send(reg);
  } else {
    return res.status(404).send("Registro não encontrado");
  }
};

module.exports = {
  updateData: [checkPermissions, updateData],
};

