import { React, useState, useContext } from "react";
import {TextField, Button} from "@material-ui/core";
import ValidacoesCadastro from "../../context/ValidacoesCadastro";
import useErros from "../../hooks/useErros";

function FormularioCadastro({ aoEnviar }) {
  const [nome, setNome] = useState("");
  const [cpf, setCPF] = useState("");
  const [datanascimento, setDataNasc] = useState("");
  const [imagem, setImagem] = useState("");
  const [caminhoFoto] = useState("./user-avatar.png");
  //isso aqui é o mesmo que passar só o objeto aoEnviar como estou fazendo lá em cima
  // const aoEnviar= props.aoEnviar
  //ao passar o aoEnviar como objeto desconstruido eu nao preciso ficar fazendo isso que eu fiz no codigo para cada propriedade recebida
  //posso fazer desconstrução do objeto para ficar mais facil de receber as propriedades

  const validacoes= useContext(ValidacoesCadastro)
  const [erros, validarCampos, enviaReq]= useErros(validacoes);
    
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (enviaReq()) {
          aoEnviar({ nome, cpf, datanascimento, caminhoFoto });
        }
      }}
    >
      <TextField
        value={nome}
        onChange={(event) => {
          setNome(event.target.value);
        }}
        onBlur={validarCampos}
        error={!erros.nome.valido}
        helperText={erros.nome.texto}
        id="nome"
        name="nome"
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
        onBlur={validarCampos}
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        id="cpf"
        name="cpf"
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
        name="data"
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
        <img src={caminhoFoto} alt="Imagem" width="150" height="150" />
      )}
      <br />
      <Button
        variant="contained"
        color="primary"
        type="submit"
        size="large"
        className="btnCadastrar"
      >
        Próximo
      </Button>
    </form>
  );
}

export default FormularioCadastro;
