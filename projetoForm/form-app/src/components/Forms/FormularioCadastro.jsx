import Button from "@material-ui/core/Button"
import TextField  from "@material-ui/core/TextField";

function FormularioCadastro() {
    return (
      <form>
        <TextField
          id="outlined-basic"
          placeholder="Informe seu Nome"
          label="Nome Completo"
          size="small"
          variant="outlined"
        />

        <label>CPF</label>
        <TextField
          id="outlined-basic"
          placeholder="Informe seu CPF"
          label="CPF"
          size="small"
          variant="outlined"
        />

        <label>Data de Nascimento</label>
        <input type="date" />

        <label>Faça upload da sua foto</label>
        <input type="file" />

        <label>Aceita exibir seus dados nesse Site</label>
        <input type="checkbox" />

        <Button variant="contained" color="primary" type="submit">
          Cadastrar
        </Button>
      </form>
    );
}

export default FormularioCadastro;