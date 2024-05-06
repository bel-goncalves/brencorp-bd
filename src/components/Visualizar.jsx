import { Card, CardContent, CardHeader, Divider, Button } from '@mui/material';
import Content from './Content';
import React from 'react';
import ProfileContext from '../util/Profile';

const Visualizar = () => {
  const { profileData } = React.useContext(ProfileContext);
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
                Nome:<span>{profileData.nome}</span>
              </p>
              <p>
                Nascimento:<span>{profileData.nascimento}</span>
              </p>
              <p>
                Idade:<span>{profileData.idade}</span>
              </p>
              <p>
                CPF:<span>{profileData.cpf}</span>
              </p>
              <p>
                CNPJ:<span>{profileData.cnpj}</span>
              </p>
              <p>
                Email:<span>{profileData.email}</span>
              </p>
              <p>
                Telefone:<span>{profileData.telefone}</span>
              </p>
              <p>
                Estado:<span>{profileData.estado}</span>
              </p>
              <p>
                Cidade:<span>{profileData.cidade}</span>
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
                Profissão:<span>{profileData.profissao}</span>
              </p>
              <p>
                Atuação:<span>{profileData.atuacao}</span>
              </p>
              <p>
                CAT:<span>{profileData.cat}</span>
              </p>
              <p>
                Observação:
                <span>{profileData.observacao}</span>
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
                Formação:<span>{profileData.formacao}</span>
              </p>
              <p>
                Tipo de Fomação:<span>{profileData.tipoDeFomacao}</span>
              </p>
              <p>
                Ano de Fomação:<span>{profileData.anoDeFomacao}</span>
              </p>
              <p>
                Tempo de formado:<span>{profileData.tempoDeFormado}</span>
              </p>
              <p>
                Instituição:<span>{profileData.instituicao}</span>
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
