import React from 'react';
import { TextField, Button, FormControlLabel, Checkbox } from '@material-ui/core';
import { useState } from 'react';

function DadosEntrega({aoEnviar}) {
  const [cep, setCep]= useState("");
  const [endereco, setEndereco]= useState("");
  const [numero, setNumero]= useState("");
  const [estado, setEstado]= useState("");
  const [cidade, setCidade]= useState("");
  const [confirma, setConfirma] = useState(false);


    return (
      <form
        onSubmit={(event) => {
          event.preventDefault();
          aoEnviar({ cep, endereco, numero, estado, cidade });
        }}
      >
        <TextField
          value={cep}
          onChange={(event) => {
            setCep(event.target.value);
          }}
          id="cep"
          nome="cep"
          label="cep"
          type="number"
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <TextField
          value={endereco}
          onChange={(event) => {
            setEndereco(event.target.value);
          }}
          id="endereco"
          nome="endereco"
          label="Endereco"
          type="text"
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <TextField
          value={numero}
          onChange={(event) => {
            setNumero(event.target.value);
          }}
          id="numero"
          name="numero"
          label="Numero"
          type="number"
          variant="outlined"
          margin="normal"
        />
        <TextField
          value={estado}
          onChange={(event) => {
            setEstado(event.target.value);
          }}
          id="estado"
          name="estado"
          label="Estado"
          type="text"
          variant="outlined"
          margin="normal"
        />
        <TextField
          value={cidade}
          onChange={(event) => {
            setCidade(event.target.value);
          }}
          id="cidade"
          name="cidade"
          label="Cidade"
          type="text"
          variant="outlined"
          margin="normal"
        />
        <FormControlLabel
          label="Concordo em gravar meus dados nesse Site"
          control={
            <Checkbox
              checked={confirma}
              onChange={(event) => {
                setConfirma(event.target.checked);
              }}
              name="Aceito"
              color="primary"
              required
            />
          }
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          size="large"
          fullWidth
        >
          Finalizar Cadastro
        </Button>
      </form>
    );
}

<form>
    
</form>
export default DadosEntrega;