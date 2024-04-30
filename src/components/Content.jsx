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
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
  Toolbar,
} from '@mui/material';

import { shadows } from '@mui/system';

import React from 'react';

const Content = () => {
  //Dados temporários Mock
  function createData(id, nome, formacao, atuacao, cat, estado) {
    return { id, nome, formacao, atuacao, cat, estado };
  }
  const rows = [
    createData(
      1,
      'Ana Maria da Silva Oliveira',
      'Biologia',
      'Animais Marinhos',
      'Sim',
      'PE',
    ),
    createData(
      2,
      'Matheus Cabral',
      'Engenharia da Computação',
      'Cloud Computing',
      'Sim',
      'AL',
    ),
    createData(3, 'Débora Carvalho', 'GTI', 'Gestão de Projetos', 'Não', 'PE'),
    createData(
      4,
      'Weynne Guimarães',
      'Ciência da Computação',
      'Back-end',
      'Não',
      'PB',
    ),
    createData(
      5,
      'Pedro Silva',
      'Engenharia de Pesca',
      'Camarões',
      'Não',
      'SP',
    ),
    createData(
      6,
      'Wendislau Victor Silva',
      'Geografia',
      'Geologia',
      'Não',
      'BA',
    ),
    createData(7, 'Diego Tavares', 'Química', 'pH da Água', 'Sim', 'PE'),
    createData(8, 'Isabel Gonçalves', 'Física', 'Energia Nuclear', 'Não', 'AM'),
    createData(
      9,
      'Ana Maria da Silva Oliveira',
      'Biologia',
      'Animais Marinhos',
      'Sim',
      'PE',
    ),
    createData(
      10,
      'Ana Maria da Silva Oliveira',
      'Biologia',
      'Animais Marinhos',
      'Sim',
      'PE',
    ),
    createData(
      11,
      'Ana Maria da Silva Oliveira',
      'Biologia',
      'Animais Marinhos',
      'Sim',
      'PE',
    ),
    createData(
      12,
      'Ana Maria da Silva Oliveira',
      'Biologia',
      'Animais Marinhos',
      'Sim',
      'PE',
    ),
    createData(
      13,
      'Ana Maria da Silva Oliveira',
      'Biologia',
      'Animais Marinhos',
      'Sim',
      'PE',
    ),
    createData(
      14,
      'Ana Maria da Silva Oliveira',
      'Biologia',
      'Animais Marinhos',
      'Sim',
      'PE',
    ),
    createData(
      15,
      'Ana Maria da Silva Oliveira',
      'Biologia',
      'Animais Marinhos',
      'Sim',
      'PE',
    ),
    createData(
      16,
      'Ana Maria da Silva Oliveira',
      'Biologia',
      'Animais Marinhos',
      'Sim',
      'PE',
    ),
    createData(
      17,
      'Ana Maria da Silva Oliveira',
      'Biologia',
      'Animais Marinhos',
      'Sim',
      'PE',
    ),
    createData(
      18,
      'Ana Maria da Silva Oliveira',
      'Biologia',
      'Animais Marinhos',
      'Sim',
      'PE',
    ),
    createData(
      19,
      'Carla Souza Amorim',
      'Biomedicina',
      'Microorganismos',
      'Não',
      'PI',
    ),
    createData(
      20,
      'Carla Souza Amorim',
      'Biomedicina',
      'Microorganismos',
      'Não',
      'PI',
    ),
    createData(
      21,
      'Carla Souza Amorim',
      'Biomedicina',
      'Microorganismos',
      'Não',
      'PI',
    ),
    createData(
      22,
      'Carla Souza Amorim',
      'Biomedicina',
      'Microorganismos',
      'Não',
      'PI',
    ),
    createData(
      23,
      'Carla Souza Amorim',
      'Biomedicina',
      'Microorganismos',
      'Não',
      'PI',
    ),
    createData(
      24,
      'Carla Souza Amorim',
      'Biomedicina',
      'Microorganismos',
      'Não',
      'PI',
    ),
    createData(
      25,
      'Carla Souza Amorim',
      'Biomedicina',
      'Microorganismos',
      'Não',
      'PI',
    ),
    createData(
      26,
      'Carla Souza Amorim',
      'Biomedicina',
      'Microorganismos',
      'Não',
      'PI',
    ),
    createData(
      27,
      'Carla Souza Amorim',
      'Biomedicina',
      'Microorganismos',
      'Não',
      'PI',
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

  //Table Pagination
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <TableContainer className="tableContainer" sx={{ boxShadow: 2 }}>
      <CardHeader
        title="Consultores"
        disableTypography={true}
        sx={{ fontFamily: 'Montserrat', fontWeight: 'bold', fontSize: 20 }}
      />
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
          size="medium"
          variant="contained"
          sx={{ boxShadow: 2, bgcolor: '#1CB5D5' }}
          startIcon={<img src="/img/plusIcon.svg" />}
        >
          Novo Consultor
        </Button>
      </Toolbar>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontFamily: 'Montserrat', fontWeight: 'bold' }}>
              Nome
            </TableCell>

            <TableCell sx={{ fontFamily: 'Montserrat', fontWeight: 'bold' }}>
              Formação
            </TableCell>
            <TableCell sx={{ fontFamily: 'Montserrat', fontWeight: 'bold' }}>
              Atuação
            </TableCell>
            <TableCell sx={{ fontFamily: 'Montserrat', fontWeight: 'bold' }}>
              Estado
            </TableCell>
            <TableCell sx={{ fontFamily: 'Montserrat', fontWeight: 'bold' }}>
              CAT
            </TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.nome}
                </TableCell>
                <TableCell>{row.formacao}</TableCell>
                <TableCell>{row.atuacao}</TableCell>
                <TableCell>{row.estado}</TableCell>
                <TableCell>{row.cat}</TableCell>
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
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TablePagination
            count={rows.length}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            rowsPerPageOptions={[10, 20, 40]}
            labelRowsPerPage="Linhas por página"
            labelDisplayedRows={function defaultLabelDisplayedRows({
              from,
              to,
              count,
            }) {
              return `${from}–${to} de ${
                count !== -1 ? count : `more than ${to}`
              }`;
            }}
          />
        </TableFooter>
      </Table>
    </TableContainer>
  );
};

export default Content;
