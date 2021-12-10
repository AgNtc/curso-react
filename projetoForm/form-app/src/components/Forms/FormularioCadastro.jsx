import {React,  useState} from 'react';
import {TextField, Button, Checkbox, FormControlLabel}  from "@material-ui/core";

function FormularioCadastro({ aoEnviar, validaCpfDigitos }) {
  const [nome, setNome] = useState("");
  const [cpf, setCPF] = useState("");
  const [datanascimento, setDataNasc] = useState("");
  const [confirma, setConfirma] = useState(false);
  const [erros, setErros] = useState({ cpf: { valido: true, texto: "" }});
  const [imagem, setImagem] = useState('')
  const [endImagem] = useState('./user-avatar.png')
  //isso aqui é o mesmo que passar só o objeto aoEnviar como estou fazendo lá em cima
  // const aoEnviar= props.aoEnviar
  //ao passar o aoEnviar como objeto desconstruido eu nao preciso ficar fazendo isso que eu fiz no codigo para cada propriedade recebida
  //posso fazer desconstrução do objeto para ficar mais facil de receber as propriedades

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        aoEnviar({ nome, cpf, datanascimento});
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
          setCPF(event.target.value);
        }}
        onBlur={(event) => {
          const totalDigitosValidados = validaCpfDigitos(cpf);
          setErros({ cpf: totalDigitosValidados });
        }}
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        id="cpf"
        label="CPF"
        size="small"
        margin="normal"
        variant="outlined"
        required
        fullWidth
      />
      <TextField
        value={datanascimento}
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
        onChange={(event) => {
          event.preventDefault();
          setImagem(event.target.files[0]);
        }}
        name="imagem"
        type="file"
        fullWidth
        margin="normal"
        size="small"
        variant="outlined"
      />
      <br />
      <br />
      {imagem ? (
        <img
          src={URL.createObjectURL(imagem)}
          alt="Imagem"
          width="150"
          height="150"
        />
      ) : (
        <img src={endImagem} alt="Imagem" width="150" height="150" />
      )}
      <br />
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
        variant="contained"
        color="primary"
        type="submit"
        size="large"
        className="btnCadastrar"
        >
        Cadastrar
      </Button>
    </form>
  );
}

export default FormularioCadastro;