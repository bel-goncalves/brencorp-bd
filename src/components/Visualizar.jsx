import { Card, CardContent, CardHeader, Divider, Button } from '@mui/material';
import { blue } from '@mui/material/colors';
import React from 'react';

const Visualizar = () => {
  return (
    <div className="cardsContainer">
      <CardHeader
        title="Dados do Consultor"
        disableTypography={true}
        sx={{ fontFamily: 'Montserrat', fontWeight: 'bold', fontSize: 20 }}
      />
      <Divider />
      <div className="cardsArea">
        <Card sx={{ bgcolor: '#EBF6FF' }}>
          <div className="cardTitles">
            <img id="icon1" src="/img/BlPersonFilled.svg" alt="" />
            <CardHeader
              disableTypography={true}
              sx={{ paddingLeft: 0.5 }}
              title="Informações Pessoais"
            />
          </div>
          <Divider />
          <CardContent>
            <p>conteúdo</p>
          </CardContent>
        </Card>
        <Card sx={{ bgcolor: '#EBF6FF' }}>
          <div className="cardTitles">
            <img id="icon1" src="/img/malaIcon.svg" alt="" />
            <CardHeader
              disableTypography={true}
              sx={{ paddingLeft: 0.5 }}
              title="Informações Profissionais"
            />
          </div>
          <Divider />
          <CardContent>
            <p>conteúdo</p>
          </CardContent>
        </Card>
        <Card sx={{ bgcolor: '#EBF6FF' }}>
          <div className="cardTitles">
            <img id="icon1" src="/img/paperIcon.svg" alt="" />
            <CardHeader
              disableTypography={true}
              sx={{ paddingLeft: 0.5 }}
              title="Informações Acadêmicas"
            />
          </div>
          <Divider />
          <CardContent>
            <p>conteúdo</p>
          </CardContent>
        </Card>
      </div>
      <div className="visuButtons">
        <Button
          size="medium"
          variant="outlined"
          sx={{ boxShadow: 2, color: '#1CB5D5', borderColor: '#1CB5D5' }}
          startIcon={<img src="/img/pointerLeftIcon.svg" />}
        >
          Página Anterior
        </Button>
        <Button
          size="medium"
          variant="contained"
          sx={{ boxShadow: 2, color: '#ffff', bgcolor: '#1CB5D5' }}
          startIcon={<img src="/img/pensilIcon.svg" />}
        >
          Editar
        </Button>
      </div>
    </div>
  );
};

export default Visualizar;
