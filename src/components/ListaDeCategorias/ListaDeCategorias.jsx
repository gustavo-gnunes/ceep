import React, { Component } from "react";

import "./estilo.css";

class ListaDeCategorias extends Component {
  constructor() {
    super();
    this.state = { categorias: [] }

    // faz isso para ter uma única referência do bind, para poder rodar certo o inscrever e desisnscrever
    // se colocar o bind dentro da função componenteWillUnmount, ele vai referênciar uma nova referência, dando erro ao desiscrever
    this._novasCategorias = this._novasCategorias.bind(this);
  }

  // componentDidMount-> é chamado depois da criação dos objetos(depois que o componente é criado)
  // é dentro desse método que devemos iniciar chamadas para API
  componentDidMount() {
    // associar ListaDeCategorias com Categorias(está dentro da pasta dados)
    // pega a fonte de dados de categorias se inscreve nela e executa o método _novasCategorias, toda vez que estiver alguma notificação
    this.props.categorias.inscrever(this._novasCategorias);
  }

  // é chamado toda vez que o componente for destruido. 
  componentWillUnmount() {
    // deve chamar o método desinscrever, qdo o componente for destruido
    this.props.categorias.desinscrever(this._novasCategorias);
  }


  _novasCategorias(categorias) {
    this.setState({ ...this.state, categorias });
  }

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
          {this.state.categorias.map((categoria, index) => {
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
