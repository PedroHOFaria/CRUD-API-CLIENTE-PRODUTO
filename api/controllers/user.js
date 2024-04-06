import { db } from "../db.js";

export const getUsers = (_, res) => {
  const q = "SELECT * FROM cliente";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};
export const getProduto = (_, res) => {
  const q = "SELECT * FROM produto";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};


export const addUser = (req, res) => {
  const q =
    "INSERT INTO cliente(`nome`, `sobrenome`, `email`, `idade`) VALUES(?)";

  const values = [
    req.body.nome,
    req.body.sobrenome,
    req.body.email,
    req.body.idade,
  ];

  db.query(q, [values], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Usuário criado com sucesso.");
  });
};

export const updateUser = (req, res) => {
  const q =
    "UPDATE cliente SET `nome` = ?, `sobrenome` = ?, `email` = ?, `idade` = ? WHERE `id` = ?";

  const values = [
    req.body.nome,
    req.body.sobrenome,
    req.body.email,
    req.body.idade,
  ];

  db.query(q, [...values, req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Usuário atualizado com sucesso.");
  });
};

export const deleteUser = (req, res) => {
  const q = "DELETE FROM cliente WHERE `id` = ?";

  db.query(q, [req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Usuário deletado com sucesso.");
  });
};
