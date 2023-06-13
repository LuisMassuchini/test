const data = require("./fakeData");

module.exports = function(req, res) {
  const { name } = req.query;

  const count = data.reduce((count, item) => {
    if (item.name === name) {
      count++;
    }
    return count;
  }, 0);

  res.send(`O usuário ${name} foi lido ${count} vezes.`);
};