import React, { Component } from "react";

import "./estilo.css";

import { ReactComponent as DeleteSVG} from '../../assets/img/delete.svg';

class CardNotas extends Component {
  /* passa a função(apagarNota) pela propriedade, para ser pega no componente ListaDeNotas
  no ListaDeNotas passa por propriedade está função apagarNota, para ser pega no App.js
  no App.js existe está função apagarNota */
  apagar() {
    const indice = this.props.indice;
    this.props.apagarNota(indice);
  }

  render() {
    return (
      <section className="card-nota">
        <header className="card-nota_cabecalho">
          {/* o titulo e o texto está sendo passado por propriedade no componente ListaDeNotas, qdo chama este componente */}
          <h3 className="card-nota_titulo">{this.props.titulo}</h3>
          <DeleteSVG onClick={this.apagar.bind(this)} />
          <h4>{this.props.categoria}</h4>
        </header>

        <p className="card-nota_texto">{this.props.texto}</p>
      </section>
    );
  }
}

export default CardNotas;
