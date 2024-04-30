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
            <div className="cardContent">
              <p>
                Nome:<span>{'Nome Sobrenome'}</span>
              </p>
              <p>
                Nascimento:<span>{'10/06/1983'}</span>
              </p>
              <p>
                CPF:<span>{'290.091.884-02'}</span>
              </p>
              <p>
                CNPJ:<span>{''}</span>
              </p>
              <p>
                Email:<span>{'exemail.gmail.com'}</span>
              </p>
              <p>
                Telefone:<span>{'888888-8888'}</span>
              </p>
              <p>
                Estado:<span>{'PE'}</span>
              </p>
              <p>
                Cidade:<span>{'Recife'}</span>
              </p>
            </div>
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
            <div className="cardContent">
              <p>
                Profissão:<span>{'Químico'}</span>
              </p>
            </div>
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
            <div className="cardContent">
              <p>
                Formação:<span>{'Química'}</span>
              </p>
            </div>
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
          sx={{ boxShadow: 2, bgcolor: '#1CB5D5' }}
          startIcon={<img src="/img/pensilIcon.svg" />}
        >
          Editar
        </Button>
      </div>
    </div>
  );
};

export default Visualizar;
