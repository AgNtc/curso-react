import React, { Component } from "react";
import ListaDeNotas from "./componentes/ListaDeNotas";
import FormularioCadastro from "./componentes/FormularioCadastro";

class App extends Component {
  render(){
    return (
      <main>
        <FormularioCadastro />
        <ListaDeNotas/>
      </main>
    );
  };
};

export default App;
