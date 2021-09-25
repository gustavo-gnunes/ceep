// salva informações(dados)
export default class Categorias {
  constructor() {
    this.categorias = [];
    this._inscritos = []; // serve para observar qdo ocorrer alguma mudança, para se comunicar com o Formulario
  }

  // vai ser chamado qdo o componente ListaDeCategorias quiser se inscrever(ter acesso a esses dados)
  // a função inscrever executa uma outra função chamada func(seria como um onChange chamar uma função para fazer algo)
  inscrever(func) {
    // é passado uma função dentro de cada _inscritos
    this._inscritos.push(func);
  }

  // para desinscrever uma determinada função que está dentro do inscrever. Serve para qdo apagar algo
  desinscrever(func) {
    // filtra todos, devolve todos menos a que vai ser desinscrito, que é a função que está sendo passada por parametro
    this._inscritos = this._inscritos.filter(f => f!== func);
  }

  // executa qdo acontecer alguma mudança
  notificar() {
    // para cada inscrito executa essa função(func(this.categorias))
    this._inscritos.forEach(func => {func(this.categorias)});
  }

  adicionarCategoria(novaCategoria) {
    this.categorias.push(novaCategoria);
    this.notificar();
  }
}