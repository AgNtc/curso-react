import {React,  useState} from 'react';
import {TextField, Button, Checkbox, FormControlLabel}  from "@material-ui/core";

  
function FormularioCadastro({aoEnviar}) {
  const [nome, setNome]= useState("");
  const [cpf, setCPF] = useState("");
  const [dataNasc, setDataNasc] = useState("");
  const [file, setFile] = useState("");
  const [confirma, setConfirma] = useState(false);

    return (
      <form
        onSubmit={(event) => {
          event.preventDefault();
          aoEnviar({nome, cpf, dataNasc, file, confirma});
        }}
      >
        <TextField
          value={nome}
          onChange={(event) => {
            setNome(event.target.value);
          }}
          id="nome"
          label="Nome Completo"
          size="small"
          variant="outlined"
          margin="normal"
          required
          fullWidth
        />
        <TextField
          value={cpf}
          onChange={(event) => {
            let tmpCPF = event.target.value;
            if (tmpCPF.length === 11) {
              tmpCPF = tmpCPF.substr(0, 3);
            }
            setCPF(tmpCPF);
          }}
          id="cpf"
          label="CPF"
          size="small"
          margin="normal"
          variant="outlined"
          required
          fullWidth
        />
        <TextField
          value={dataNasc}
          onChange={(event) => {
            setDataNasc(event.target.value);
          }}
          type="date"
          required
          fullWidth
          margin="normal"
          size="small"
          variant="outlined"
        />
        <TextField
          value={file}
          onChange={(event) => {
            setFile(event.target.value);
          }}
          type="file"
          fullWidth
          margin="normal"
          size="small"
          variant="outlined"
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
        <Button variant="contained" color="primary" type="submit">
          Cadastrar
        </Button>
      </form>
    );
}

export default FormularioCadastro;