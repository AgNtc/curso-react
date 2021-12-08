import React, { Component } from "react";

class FormularioCadastro extends Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Titulo" />
        <textarea placeholder="escreva sua nota.." />
        <button type="">Criar Nota</button>
      </form>
    );
  };
};

export default FormularioCadastro;