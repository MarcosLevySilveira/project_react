// src/components/Cadastro.js

import React, { useState } from 'react';

const Cadastro = () => {
  const [formData, setFormData] = useState({
    data: '',
    categoria: '',
    descricao: '',
    valor: '',
    tipo: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const novaDespesa = { ...formData };

    let despesas = JSON.parse(localStorage.getItem("despesas")) || [];
    despesas.push(novaDespesa);

    localStorage.setItem("despesas", JSON.stringify(despesas));
    alert("Cadastro realizado com sucesso!");
    window.location.reload();
  };

  return (
    <main>
      <h1>Cadastrar Nova Despesa/Entrada</h1>
      <form id="formCadastro" onSubmit={handleSubmit}>
        <label htmlFor="data">Data</label>
        <input
          type="date"
          id="data"
          value={formData.data}
          onChange={handleChange}
          required
        />

        <label htmlFor="categoria">Categoria</label>
        <select
          id="categoria"
          value={formData.categoria}
          onChange={handleChange}
          required
        >
          <option value="Academia">Academia</option>
          <option value="Alimentação">Alimentação</option>
          <option value="Aluguel">Aluguel</option>
          <option value="Água">Água</option>
          <option value="Cartão de Crédito">Cartão de Crédito</option>
          {/* Add more categories as needed */}
        </select>

        <label htmlFor="descricao">Descrição</label>
        <input
          type="text"
          id="descricao"
          value={formData.descricao}
          onChange={handleChange}
          required
        />

        <label htmlFor="valor">Valor (R$)</label>
        <input
          type="number"
          id="valor"
          value={formData.valor}
          onChange={handleChange}
          required
        />

        <label htmlFor="tipo">Tipo</label>
        <select
          id="tipo"
          value={formData.tipo}
          onChange={handleChange}
          required
        >
          <option value="Entrada">Entrada</option>
          <option value="Saída">Saída</option>
        </select>

        <button type="submit">Salvar</button>
      </form>
    </main>
  );
};

export default Cadastro;
