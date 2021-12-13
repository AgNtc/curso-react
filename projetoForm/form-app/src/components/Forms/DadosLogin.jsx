import { TextField, Button } from '@material-ui/core';
import React from 'react';

function dadosLogin({aoEnviar}) {
    return (
      <form onSubmit={(event)=>{
          event.preventDefault();
          aoEnviar();
      }}>
        <TextField
          id="email"
          label="Email"
          type="email"
          variant="outlined"
          margin="normal"
          fullWidth
          required
        />
        <TextField
          id="senha"
          label="senha"
          type="password"
          variant="outlined"
          margin="normal"
          fullWidth
          required
        />
      
        <Button type="submit" variant="contained" color="primary" size="large">
                Cadastrar
        </Button>
      </form>
    );
}

export default dadosLogin;