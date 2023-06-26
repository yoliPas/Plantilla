import React from "react";
import { AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core';
import { AccountCircle, Home, ShoppingCart, Mail } from '@material-ui/icons';


function PagPrincipal() {

    return(
      <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="home">
            <Home />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            PLANTILLA
          </Typography>
          <Button color="inherit" startIcon={<ShoppingCart />}>
            Productos
          </Button>
          <Button color="inherit" startIcon={<Mail />}>
            Contactos
          </Button>
          <Button color="inherit" startIcon={<AccountCircle />}>
            Iniciar Sesión
          </Button>
        </Toolbar>
      </AppBar>
      <div style={{ marginTop: '20px' }}>
        <Typography variant="body1">
        </Typography>
      </div>
    </div>
    )
}

export default PagPrincipal;