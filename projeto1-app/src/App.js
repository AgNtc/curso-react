import React, { Component } from "react";
import ListaDeNotas from "./componentes/ListaDeNotas";
import FormularioCadastro from "./componentes/FormularioCadastro";
<<<<<<< HEAD
import ListaDeCategorias from "./componentes/ListaDeCategorias";
import "./assets/app.css"
import './assets/index.css';
import DadosDasNotas from "./dados/notas";
import Categorias from "./dados/categorias";

class App extends Component {


  constructor(){
    super();
    this.categorias = new Categorias
    this.notas = new DadosDasNotas
  }

  render() {
    return (
      <section className="conteudo">
          <FormularioCadastro 
          categorias={this.categorias}
          criarNota={this.notas.adicionarNota.bind(this.notas)} 
        />
        <main className="conteudo-principal">
          <ListaDeCategorias
          adicionarCategoria={this.categorias.adicionarCategoria.bind(this.categorias)}
          categorias={this.categorias}
          />
          <ListaDeNotas
          apagarNota={this.notas.apagarNota.bind(this.notas)} 
          notas={this.notas}/>
        </main>
      </section>
=======

class App extends Component {
  render() {
    return (
      <main>
        <FormularioCadastro />
        <ListaDeNotas />
      </main>
>>>>>>> 0efbcd5b897b89e806b63198cb6b31422bf72878
    );
  }
}

export default App;
