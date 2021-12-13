import { Fragment } from 'react';
import {React,  useState} from 'react';
import DadosPessoais from './DadosPessoais';
import DadosLogin from './DadosLogin';
import DadosEntrega from './DadosEntrega';
import { Typography } from '@material-ui/core';

function FormularioCadastro({ aoEnviar, validaCpfDigitos }) {
  const [etapaAtual, setEtapaAtual] = useState(0);

  const forms = [<DadosLogin aoEnviar={proximo} />, <DadosPessoais
               aoEnviar={proximo}
               validaCpfDigitos={validaCpfDigitos}/>,
             <DadosEntrega aoEnviar={aoEnviar}/>
    ];

  function proximo() {
      setEtapaAtual(etapaAtual +1);
    }
   
  return (
    <Fragment>
      {forms[etapaAtual]}
    </Fragment>
  );
}


export default FormularioCadastro;
