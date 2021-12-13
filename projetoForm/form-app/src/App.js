import React, { Component } from 'react';
import FormularioCadastro from './components/Forms/FormularioCadastro';
import {Container, Typography, Paper}  from '@material-ui/core';
import '@fontsource/zen-kurenaido'

import api from "./config/configApi";

class  App extends Component{
  render(){
    return(
    <Container component="article" maxWidth="md">
      < Paper elevation={5}>
        <Container component="article">
          <Typography variant="h3" component="h1" align="center" >
              Formulário de Cadastro
          </Typography>
          <FormularioCadastro aoEnviar={enviarForm} validaCpfDigitos={validarCPF}/>
        </Container>
      </Paper>
    </Container>
    );
  }
}

async function enviarForm(dados) {
  console.log(JSON.stringify(dados));
  const response = await api.post("/pessoa", {
       nome: dados.nome,
       cpf: dados.cpf,
       datanascimento: dados.datanascimento,
       caminhoFoto: dados.caminhoFoto
    });
    return response
}


function validarCPF(cpf){
  if(cpf.length !== 11){
    return {
       valido:false,
       texto:"Cpf deve ter 11 digitos digitos"
      }
  }
  else{
    return {
      valido: true,
      texto: ""
    }
  }
}

export default App;
