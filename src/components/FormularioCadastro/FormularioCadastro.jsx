import React, { Component } from "react";

import "./estilo.css";

class FormularioCadastro extends Component {
  // props: são as propriedades que vem lá do componente App.js (componente pai)
  constructor(props) {
    super(props); // é o contrutor do componente pai, neste caso Component
    this.titulo = "";
    this.texto = "";
    this.categoria = "Sem Categoria";
    this.state = { categorias: []};

    // faz isso para ter uma única referência do bind, para poder rodar certo o inscrever e desisnscrever
    // se colocar o bind dentro da função componenteWillUnmount, ele vai referênciar uma nova referência, dando erro ao desiscrever
    this._novasCategorias = this._novasCategorias.bind(this);
  }

  // componentDidMount-> é chamado depois da criação dos objetos(depois que o componente é criado)
  // é dentro desse método que devemos iniciar chamadas para API
  componentDidMount() {
    // associar FormularioCadastro com Categorias(está dentro da pasta dados)
    // pega a fonte de dados de categorias se inscreve nela e executa o método _novasCategorias, toda vez que estiver alguma notificação
    this.props.categorias.inscrever(this._novasCategorias);
  }

  // é chamado toda vez que o componente for destruido. 
  componentWillUnmount() {
    // deve chamar o método desinscrever, qdo o componente for destruido
    this.props.categorias.inscrever(this._novasCategorias );
  }

  _novasCategorias(categorias) {
    this.setState({ ...this.state, categorias });
  }

  _handleMudancaTitulo(evento) {
    evento.stopPropagation(); // evitar(parar) a propagação no html(dom)
    this.titulo = evento.target.value;
  }

  _handleMudancaTexto(evento) {
    evento.stopPropagation(); // evitar(parar) a propagação no html(dom)
    this.texto = evento.target.value;
  }

  _handleMudancaCategoria(evento) {
    evento.stopPropagation(); // evitar(parar) a propagação no html(dom)
    this.categoria = evento.target.value;
  }

  _criarNota(evento) {
    evento.preventDefault();
    evento.stopPropagation(); // evitar(parar) a propagação no html(dom)
    // envia o titulo e o texto para a função criarNota que está no App.js
    this.props.criarNota(this.titulo, this.texto, this.categoria);
  }

  render() {
    return (
      <form className='form-cadastro' onSubmit={this._criarNota.bind(this)}>
        <select
          className='form-cadastro_input'
          onChange={this._handleMudancaCategoria.bind(this)}
        >
          <option>Sem Categoria</option>
          {this.state.categorias.map((categoria, index) => {
            return <option key={index}>{categoria}</option>;
          })}
        </select>

        <input
          type='text'
          placeholder='Título'
          className='form-cadastro_input'
          // toda vez que uma função usar o this, tem que colocar o bind
          onChange={this._handleMudancaTitulo.bind(this)} // bind: para associar o método com a estancia que está sendo criada neste caso é o this
        />

        <textarea
          rows={15}
          placeholder='Escreva sua nota...'
          className='form-cadastro_input'
          onChange={this._handleMudancaTexto.bind(this)}
        />

        <button className='form-cadastro_input form-cadastro_submit'>
          Criar Nota
        </button>
      </form>
    );
  }
}

export default FormularioCadastro;
