import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Logo from "../../assets/01.png"
import { Login } from '@mui/icons-material';

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
        
      <CardContent>
        <img src={Logo} alt="logo"/>
        <Typography gutterBottom variant="h5" component="div">
          Nome do Grupo
        </Typography>
        
      </CardContent>
      <CardActions>
        <Button>
            <Login/>
            Entrar
        </Button>
      </CardActions>
    </Card>
  );
}