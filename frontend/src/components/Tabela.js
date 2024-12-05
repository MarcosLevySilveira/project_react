// src/components/Tabela.js

import React, { useEffect, useState } from 'react';

const Tabela = () => {
  const [despesas, setDespesas] = useState([]);

  useEffect(() => {
    const storedDespesas = JSON.parse(localStorage.getItem("despesas")) || [];
    setDespesas(storedDespesas);
  }, []);

  const deleteData = (index) => {
    const newDespesas = [...despesas];
    newDespesas.splice(index, 1);
    localStorage.setItem("despesas", JSON.stringify(newDespesas));
    setDespesas(newDespesas);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Data</th>
          <th>Categoria</th>
          <th>Descrição</th>
          <th>Valor</th>
          <th>Tipo</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {despesas.map((despesa, index) => (
          <tr key={index}>
            <td>{despesa.data}</td>
            <td>{despesa.categoria}</td>
            <td>{despesa.descricao}</td>
            <td>{despesa.valor.toFixed(2)}</td>
            <td>{despesa.tipo}</td>
            <td>
              <button onClick={() => deleteData(index)}>Deletar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Tabela;
