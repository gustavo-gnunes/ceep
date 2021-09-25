import React, { Component } from "react";
import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeNotas from "./components/ListaDeNotas";
import ListaDeCategorias from "./components/ListaDeCategorias";

import Categorias from "./dados/Categorias";
import ArrayDeNotas from "./dados/Notas";

import "./assets/App.css";
import "./assets/index.css";

class App extends Component {
  constructor() {
    super();
    // this.state = {
    //   //notas: [],
    //   //categorias: [],
    // };

    this.categorias = new Categorias();
    this.notas = new ArrayDeNotas();
  }

  // Está comentado, pois foi criado dentro da pasta dados
  // criarNota(titulo, texto, categoria) {
  //   const novaNota = { titulo, texto, categoria };
  //   const novoArrayNotas = [...this.state.notas, novaNota];
  //   const novoEstado = {
  //     notas: novoArrayNotas,
  //   };
  //   this.setState(novoEstado);
  // }

  // adicionarCategoria(nomeCategoria) {
  //   const novoArrayCategorias = [...this.state.categorias, nomeCategoria];
  //   const novoEstado = { ...this.state, categorias: novoArrayCategorias };
  //   this.setState(novoEstado);
  // }

  // deletarNota(index) {
  //   let arrayNotas = this.state.notas;
  //   // deletar uma nota
  //   arrayNotas.splice(index, 1);
  //   this.setState({ notas: arrayNotas });
  // }

  render() {
    return (
      <section className='conteudo'>
        {/* passa propriedade(criarNota) para o componente FormularioCadastro, que recebe um atributo(this.criarNota) */}
        {/* toda vez que uma função usar o this, tem que colocar o bind */}
        <FormularioCadastro
          categorias={this.categorias} // para ter acesso a todos métodos do componente Categorias
          criarNota={this.notas.adicionarNota.bind(this.notas)}
          // criarNota={this.criarNota.bind(this)}
          // categorias={this.state.categorias}
        />
        <main className='conteudo-principal'>
          <ListaDeCategorias
            adicionarCategoria={this.categorias.adicionarCategoria.bind(this.categorias)}
            categorias={this.categorias} // para ter acesso a todos métodos do componente Categorias
            // adicionarCategoria={this.adicionarCategoria.bind(this)}
            // categorias={this.state.categorias}
          />

          {/* envia o array de notas para a ListaDeNotas */}
          <ListaDeNotas
            notas={this.notas} // para ter acesso a todos métodos do componente Notas
            apagarNota={this.notas.apagarNota.bind(this.notas)}
            // notas={this.state.notas}
            // apagarNota={this.deletarNota.bind(this)}
          />
        </main>
      </section>
    );
  }
}

export default App;
