import React, { Component } from 'react';
import './App.css';
import FormularioCadastro from './components/Forms/FormularioCadastro';
import {Container, Typography }  from '@material-ui/core';
import '@fontsource/zen-kurenaido'

class  App extends Component{
  render(){
    return(
      <Container component="article" maxWidth="md">
        <Typography variant="h3" component="h1" align="center" >
          Formulário de Cadastro
        </Typography>
        <FormularioCadastro aoEnviar={enviarForm}/>
      </Container>
    );
  }
}

function enviarForm(dados){
  console.log(dados);
}
export default App;
