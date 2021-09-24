import React, { Component } from "react";
import CardNotas from "../CardNota";

import "./estilo.css";

class ListaDeNotas extends Component {
  // qdo no constructor só tem o super, não precisa declarar, pois por padrão o JS(JSX) já faz isso
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <ul className="lista-notas">
        {/* está sendo passado o notas no componente pai(App.js) */}
        {this.props.notas.map((nota, index) => {
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