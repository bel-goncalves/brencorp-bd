import {
  Button,
  CardHeader,
  Container,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Toolbar,
} from '@mui/material';

import { shadows } from '@mui/system';

import React from 'react';

const Content = () => {
  //Dados temporários p simular
  function createData(id, nome, formacao, atuacao, email, estado) {
    return { id, nome, formacao, atuacao, email, estado };
  }
  const rows = [
    createData(
      1,
      'Ana Maria da Silva Oliveira',
      'Biologia',
      'Animais Marinhos',
      'ana.marias@gmail.com',
      'PE',
    ),
    createData(
      2,
      'Matheus Cabral',
      'Engenharia da Computação',
      'Cloud Computing',
      'matheusmhpc@gmail.com',
      'AL',
    ),
    createData(
      3,
      'Débora Carvalho',
      'GTI',
      'Gestão de Projetos',
      'dbc@gmail.com',
      'PE',
    ),
    createData(
      4,
      'Weynne Guimarães',
      'Ciência da Computação',
      'Back-end',
      'wgl@gmail.com',
      'PB',
    ),
    createData(
      5,
      'Pedro Silva',
      'Engenharia de Pesca',
      'Camarões',
      'pcs@gmail.com',
      'SP',
    ),
    createData(
      6,
      'Wendislau Victor Silva',
      'Geografia',
      'Geologia',
      'wvs@gmail.com',
      'BA',
    ),
    createData(
      7,
      'Diego Tavares',
      'Química',
      'pH da Água',
      'dt@gmail.com',
      'PE',
    ),
  ];

  //Table button menu
  const [buttonMenu, setButtonMenu] = React.useState(null);
  const open = Boolean(buttonMenu);
  const handleClick = (event) => {
    setButtonMenu(event.currentTarget);
  };
  const handleClose = () => {
    setButtonMenu(null);
  };

  return (
    <TableContainer className="tableContainer" sx={{ boxShadow: 2 }}>
      <CardHeader title="Consultores" />
      <Divider />
      <Toolbar className="toolbar">
        <div className="search">
          <TextField
            id="outlined-input"
            label="Pesquisar"
            placeholder="Nome, formação, atuação..."
            size="small"
            aria-label="Pesquisar"
          />
          <Button
            id="searchButton"
            aria-label="Pesquisar"
            size="medium"
            variant="contained"
          >
            <img src="/img/searchIcon.svg" alt="" />
          </Button>
        </div>
        <Button
          id="addButton"
          size="medium"
          variant="contained"
          sx={{ boxShadow: 2 }}
          startIcon={<img src="/img/plusIcon.svg" />}
        >
          Novo Consultor
        </Button>
      </Toolbar>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: 'bold' }}>Nome</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>Formação</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>Atuação</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>Email</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>Estado</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.nome}
              </TableCell>
              <TableCell>{row.formacao}</TableCell>
              <TableCell>{row.atuacao}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.estado}</TableCell>
              <TableCell>
                <Button
                  id="menuButton"
                  variant="contained"
                  aria-controls={open ? 'basic-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}
                >
                  <img src="/img/arrowIcon.svg" alt="" />
                </Button>
                <Menu
                  elevation={1}
                  id="basic-menu"
                  anchorEl={buttonMenu}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    'aria-labelledby': 'menuButton',
                  }}
                >
                  <MenuItem onClick={handleClose}>Visualizar</MenuItem>
                  <MenuItem onClick={handleClose}>Editar</MenuItem>
                  <MenuItem onClick={handleClose}>Excluir</MenuItem>
                </Menu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Content;
