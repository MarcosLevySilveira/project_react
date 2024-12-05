import React, { useEffect, useState } from 'react';
import './App.css';  // Importing the styles

function App() {
  const [despesas, setDespesas] = useState([]);

  // Function to load and display the saved data from local storage into the table
  const loadData = () => {
    const savedDespesas = JSON.parse(localStorage.getItem('despesas')) || [];
    setDespesas(savedDespesas);
  };

  useEffect(() => {
    loadData();
  }, []);

  // Add event handler to save data to localStorage
  const saveData = (event) => {
    event.preventDefault();

    const data = document.getElementById('data').value;
    const categoria = document.getElementById('categoria').value;
    const descricao = document.getElementById('descricao').value;
    const valor = parseFloat(document.getElementById('valor').value);
    const tipo = document.getElementById('tipo').value;

    const novaDespesa = { data, categoria, descricao, valor, tipo };

    let despesas = JSON.parse(localStorage.getItem('despesas')) || [];
    despesas.push(novaDespesa);
    localStorage.setItem('despesas', JSON.stringify(despesas));

    alert('Cadastro realizado com sucesso!');
    loadData();
  };

  return (
    <div>
      <header>
        <h1>Gerenciar Despesas/Entradas</h1>
      </header>

      <nav>
        <a href="index.html">Tabela de Gastos</a>
        <a href="orcamento.html">Orçamento</a>
        <a href="cadastro.html">Cadastrar Despesa/Entrada</a>
        <a href="grafico.html">Gráfico de Saldo</a>
        <a href="categorias.html">Categorias e Subcategorias</a>
        <a href="linha_do_tempo.html">Linha do tempo</a>
        <a href="poupanca.html">Poupança</a>
        <a href="viagem.html">Viagem</a>
        <a href="serasa.html">Serasa</a>
      </nav>

      <main>
        <h1>Cadastrar Nova Despesa/Entrada</h1>
        <form id="formCadastro" onSubmit={saveData}>
          <label htmlFor="data">Data</label>
          <input type="date" id="data" required />

          <label htmlFor="categoria">Categoria</label>
          <select id="categoria" required>
            <option value="Academia">Academia</option>
            <option value="Alimentação">Alimentação</option>
            <option value="Aluguel">Aluguel</option>
            {/* Add other options here */}
          </select>

          <label htmlFor="descricao">Descrição</label>
          <input type="text" id="descricao" required />

          <label htmlFor="valor">Valor (R$)</label>
          <input type="number" id="valor" required />

          <label htmlFor="tipo">Tipo</label>
          <select id="tipo" required>
            <option value="Entrada">Entrada</option>
            <option value="Saída">Saída</option>
          </select>

          <button type="submit">Salvar</button>
        </form>

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
                  <button onClick={() => alert('Edit functionality')}>Editar</button>
                  <button onClick={() => alert('Delete functionality')}>Deletar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}

export default App;
