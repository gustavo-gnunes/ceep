// salva informações(dados)
export default class Categorias {
  constructor() {
    this.categorias = [];
  }

  adicionarCategoria(novaCategoria) {
    this.Categorias.push(novaCategoria);
  }
}