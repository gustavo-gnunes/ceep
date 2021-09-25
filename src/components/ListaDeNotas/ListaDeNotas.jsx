import React, { Component } from "react";
import CardNotas from "../CardNota";

import "./estilo.css";

class ListaDeNotas extends Component {
  // qdo no constructor só tem o super, não precisa declarar, pois por padrão o JS(JSX) já faz isso
  constructor() {
    super();
    this.state = { notas: [] };

    // faz isso para ter uma única referência do bind, para poder rodar certo o inscrever e desisnscrever
    // se colocar o bind dentro da função componenteWillUnmount, ele vai referênciar uma nova referência, dando erro ao desiscrever
    this._novasNotas = this._novasNotas.bind(this);
  }

  // componentDidMount-> é chamado depois da criação dos objetos(depois que o componente é criado)
  // é dentro desse método que devemos iniciar chamadas para API
  componentDidMount() {
    // associar ListaDeNotas com Notas(está dentro da pasta dados)
    // pega a fonte de dados de notas se inscreve nela e executa o método _novasNotas, toda vez que estiver alguma notificação
    this.props.notas.inscrever(this._novasNotas);
  }

  // é chamado toda vez que o componente for destruido. 
  componentWillUnmount() {
    // deve chamar o método desinscrever, qdo o componente for destruido
    this.props.notas.desinscrever(this._novasNotas);
  }

  _novasNotas(notas) {
    this.setState({ ...this.state, notas });
  }

  render() {
    return (
      <ul className="lista-notas">
        {/* está sendo passado o notas no componente pai(App.js) */}
        {this.state.notas.map((nota, index) => {
          return (
            <li key={index} className="lista-notas_item">
              {/* passa para o CardNotas o título e o texto que está vindo no array
              passa a função apagarNota que está dentro do componete App.js 
              passa tbm o indice para saber qual é a nota que vai ser excluida */}
              <CardNotas 
                indice={index}
                apagarNota={this.props.apagarNota}
                titulo={nota.titulo} 
                texto={nota.texto} 
                categoria={nota.categoria}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaDeNotas;