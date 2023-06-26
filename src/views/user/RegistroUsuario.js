import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FacebookIcon from '@material-ui/icons/Facebook';
import AppleIcon from '@material-ui/icons/Apple';
import GTranslateIcon from '@material-ui/icons/GTranslate';
import Icon from '@material-ui/core/Icon';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        '& .MuiTextField-root': {
          margin: theme.spacing(1),
          width: '100%',
        },
        '& .MuiButton-root': {
          margin: theme.spacing(2, 0),
        },
        justifyContent: 'center',
        height: '100vh',
      },
      container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '30%',
        padding: theme.spacing(2),
        height: '70%'
      },
      formRegistro: {
        outline: '5px'        
      },
      iniciarSesion: {
        background: 'linear-gradient(45deg, #30D686, #30D686, #089DF0)',
        
      },
      tituloForm: {
        color: 'white',
        fontFamily:'Poppins'
      },
      button: {
        width: '280px',
        margin: theme.spacing(1, 0),
      },
      buttonRegistro: {
        width: '280px',
        margin: theme.spacing(3, 0),
        background: 'linear-gradient(45deg, #30D686, #30D686, #089DF0)',
      },
}));

function Registro (){
    const classes = useStyles();
    return(
        <div className={classes.root}>
        <div className={`${classes.container} ${classes.formRegistro}`}>
          <h1 style={{fontFamily:'Poppins'}}>Regístrate</h1>
          <form noValidate autoComplete="off">
            <div>
              <TextField id="standard-basic" label="Nombre" />
            </div>
            <div>
              <TextField id="standard-basic" label="Correo" />
            </div>
            <div>
              <TextField id="standard-basic" label="Contraseña" />
            </div>
            <div>
              <TextField id="standard-basic" label="Confirmar contraseña" />
            </div>
            <Button type="submit" variant="contained" color="primary" className={classes.buttonRegistro}>
                Registrarse
            </Button>
          </form>
        </div>

        <div className={`${classes.container} ${classes.iniciarSesion}`}>
          <h1 className={classes.tituloForm}>Iniciar Sesión</h1>
          <div>
            <Button
              variant="contained"
              size="large"
              color="primary"
              className={classes.button}
              startIcon={<FacebookIcon />}
            >
              Acceder con Facebook
            </Button>
          </div>
          <div>
            <Button
              style={{background:'#8CCDF1', color:'black'}}
              variant="contained"
              size="large"
              color="primary"
              className={classes.button}
              startIcon={<GTranslateIcon />}
            >
              Acceder con Google
            </Button>
          </div>
          <div>
            <Button
              style={{background:'white', color:'black'}}
              variant="contained"
              size="large"
              color="primary"
              className={classes.button}
              startIcon={<AppleIcon />}
            >
              Acceder con Apple
            </Button>
          </div>
        </div>
      </div>
    )
}

export default Registro;