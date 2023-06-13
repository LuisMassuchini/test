const checkPermissions = (requiredPermissions) => {
    return (req, res, next) => {
      const name = req.query.name;
      
      const user = data.find((user) => user.name === name);
      if (!user) {
        return res.status(404).send("Usuário não encontrado");
      }
      
      const userPermissions = user.permissions;
      const hasPermissions = requiredPermissions.every((permission) =>
        userPermissions.includes(permission)
      );
      
      if (!hasPermissions) {
        return res.status(403).send("Permissões insuficientes");
      }
      
      next();
    };
  };

  module.exports = checkPermissions;