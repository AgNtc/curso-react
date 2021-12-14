import React, { Component } from 'react';
import FormularioCadastro from './components/Forms/FormularioCadastro';
import {Container, Typography, Paper}  from '@material-ui/core';
import '@fontsource/zen-kurenaido'
import { validarCPF, validarSenha } from './models/cadastro';
import api from "./config/configApi";
import ValidacoesCadastro from './context/ValidacoesCadastro';

class  App extends Component{
  render(){
    return(
    <Container component="article" maxWidth="md">
      < Paper elevation={5}>
        <Container component="article">
          <Typography variant="h3" component="h1" align="center" >
              Formulário de Cadastro
          </Typography>
          < ValidacoesCadastro.Provider value={
            {
              cpf: validarCPF,
              senha: validarSenha,
              nome: validarSenha
            }
          } >
            <FormularioCadastro aoEnviar={enviarForm}/>
          </ValidacoesCadastro.Provider>
        </Container>
      </Paper>
    </Container>
    );
  }
}

async function enviarForm(dados) {
  console.log(dados);
  const response = await api.post("/pessoa", {
       nome: dados.nome,
       cpf: dados.cpf,
       datanascimento: dados.datanascimento,
       caminhoFoto: dados.caminhoFoto
    });
    return response
}

export default App;
