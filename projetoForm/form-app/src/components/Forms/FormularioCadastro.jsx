import { Fragment } from 'react';
import {React,  useState} from 'react';
import DadosPessoais from './DadosPessoais';
import DadosLogin from './DadosLogin';
import DadosEntrega from './DadosEntrega';
import { useEffect } from 'react';
import { Step, Typography, StepLabel, Stepper} from '@material-ui/core';

function FormularioCadastro({ aoEnviar, validacoes }) {
  const [etapaAtual, setEtapaAtual] = useState(0);
  const [dadosColetados, setDados] = useState({});

  useEffect(()=>{
    if (etapaAtual === forms.length-1){
      aoEnviar(dadosColetados);
    }
  })

  const forms = [
    <DadosLogin aoEnviar={coletarDados} />,
    <DadosPessoais aoEnviar={coletarDados} />,
    <DadosEntrega aoEnviar={coletarDados} />,
    <Typography variant="h5">Cadastro Concluido !</Typography>,
  ];

  function coletarDados (dados){
    setDados({...dadosColetados, ...dados})
    proximo();
  }
  
  function proximo() {
      setEtapaAtual(etapaAtual +1);
    }
   
  return (
    <Fragment>
      <Stepper activeStep={etapaAtual}>
        <Step>
          <StepLabel>Login</StepLabel>
        </Step>
        <Step>
          <StepLabel>Dados Pessoais</StepLabel>
        </Step>
        <Step>
          <StepLabel>Endereco</StepLabel>
        </Step>
        <Step>
          <StepLabel>Finalização</StepLabel>
        </Step>
      </Stepper>
      {forms[etapaAtual]}
    </Fragment>
  );
}


export default FormularioCadastro;
