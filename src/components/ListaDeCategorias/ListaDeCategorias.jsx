import React, { Component } from "react";

import "./estilo.css";

class ListaDeCategorias extends Component {
  _handleEventoInput(e) {
    // Key: para ver se a tecla apertada foi o enter
    if (e.key == "Enter") {
      let valorCategoria = e.target.value;
      this.props.adicionarCategoria(valorCategoria);
    }
  }

  render() {
    return (
      <section className='lista-categorias'>
        <ul className='lista-categorias_lista'>
          {this.props.categorias.map((categoria, index) => {
            return (
              <li key={index} className='lista-categorias_item'>
                {categoria}
              </li>
            );
          })}
        </ul>
        <input
          type='text'
          className='lista-categorias_input'
          placeholder='Adicionar Categoria'
          onKeyUp={this._handleEventoInput.bind(this)} // onKeyUp: evento qdo a tecla for apertada.
        />
      </section>
    );
  }
}

export default ListaDeCategorias;
