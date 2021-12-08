import React, { Component, Fragment } from 'react';
import './App.css';
import FormularioCadastro from './components/Forms/FormularioCadastro';

class  App extends Component{

  render(){
    return(
      <Fragment>
        <h2> Formulário de Cadastro</h2>
        <FormularioCadastro/>
      </Fragment>
    );
  }
}

export default App;
