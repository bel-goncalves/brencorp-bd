import {
  Button,
  CardHeader,
  Divider,
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
  Container,
} from '@mui/material';

import { Link, NavLink } from 'react-router-dom';

import ProfileContext from '../util/Profile';

import React from 'react';

const Content = () => {
  //Dados temporários Mock
  function createData(
    id,
    nome,
    nascimento,
    idade,
    cpf,
    cnpj,
    email,
    telefone,
    estado,
    cidade,
    profissao,
    atuacao,
    cat,
    observacao,
    formacao,
    tipoDeFormacao,
    anoDeFormacao,
    tempoDeFormado,
    instituicao,
  ) {
    return {
      id,
      nome,
      nascimento,
      idade,
      cpf,
      cnpj,
      email,
      telefone,
      estado,
      cidade,
      profissao,
      atuacao,
      cat,
      observacao,
      formacao,
      tipoDeFormacao,
      anoDeFormacao,
      tempoDeFormado,
      instituicao,
    };
  }
  const rows = [
    createData(
      '1',
      'Ana Maria da Silva Oliveira',
      '01/01/1980',
      '42',
      '123.456.789-00',
      '12.345.678/0001-90',
      'ana@gmail.com',
      '(11) 99999-9999',
      'PE',
      'Recife',
      'Bióloga',
      'Animais Marinhos',
      'Sim',
      'Observação sobre Ana',
      'Biologia',
      'Bacharelado',
      '2010',
      '10 anos',
      'UFPE',
    ),
    createData(
      '2',
      'Matheus Cabral',
      '15/05/1990',
      '32',
      '987.654.321-00',
      '98.765.432/0001-09',
      'matheus@gmail.com',
      '(21) 88888-8888',
      'RJ',
      'Rio de Janeiro',
      'Engenheiro',
      'Cloud Computing',
      'Sim',
      'Observação sobre Matheus',
      'Engenharia da Computação',
      'Bacharelado',
      '2014',
      '7 anos',
      'UFRJ',
    ),
    createData(
      '3',
      'Débora Carvalho',
      '20/03/1985',
      '37',
      '555.888.777-22',
      '77.777.777/0001-11',
      'debora@gmail.com',
      '(31) 77777-7777',
      'MG',
      'Belo Horizonte',
      'Analista de Sistemas',
      'Gestão de Projetos',
      'Não',
      'Sem observações',
      'Ciência da Computação',
      'Bacharelado',
      '2008',
      '13 anos',
      'UFMG',
    ),
    createData(
      '4',
      'Weynne Guimarães',
      '10/09/1992',
      '29',
      '111.222.333-44',
      '22.333.444/0001-55',
      'weynne@gmail.com',
      '(85) 33333-3333',
      'CE',
      'Fortaleza',
      'Desenvolvedor Web',
      'Back-end',
      'Não',
      'Sem observações',
      'Sistemas de Informação',
      'Bacharelado',
      '2014',
      '7 anos',
      'UFC',
    ),
    createData(
      '5',
      'Pedro Silva',
      '05/07/1988',
      '33',
      '777.888.999-11',
      '88.999.000/0001-22',
      'pedro@gmail.com',
      '(51) 66666-6666',
      'RS',
      'Porto Alegre',
      'Pescador',
      'Camarões',
      'Não',
      'Sem observações',
      'Engenharia de Pesca',
      'Bacharelado',
      '2012',
      '9 anos',
      'UFRGS',
    ),
    createData(
      '6',
      'Wendislau Victor Silva',
      '12/12/1982',
      '39',
      '444.555.666-77',
      '55.666.777/0001-33',
      'wendislau@gmail.com',
      '(71) 55555-5555',
      'BA',
      'Salvador',
      'Geólogo',
      'Geologia',
      'Não',
      'Sem observações',
      'Geologia',
      'Bacharelado',
      '2005',
      '16 anos',
      'UFBA',
    ),
    createData(
      '7',
      'Diego Tavares',
      '25/09/1987',
      '34',
      '222.333.444-55',
      '33.444.555/0001-66',
      'diego@gmail.com',
      '(81) 44444-4444',
      'PE',
      'Recife',
      'Químico',
      'pH da Água',
      'Sim',
      'Sem observações',
      'Química',
      'Bacharelado',
      '2010',
      '11 anos',
      'UFPE',
    ),
    createData(
      '8',
      'Isabel Gonçalves',
      '03/04/1995',
      '27',
      '888.999.000-33',
      '99.000.111/0001-44',
      'isabel@gmail.com',
      '(92) 33333-3333',
      'AM',
      'Manaus',
      'Física',
      'Energia Nuclear',
      'Não',
      'Sem observações',
      'Física',
      'Bacharelado',
      '2017',
      '4 anos',
      'UFAM',
    ),
    createData(
      '9',
      'Marcelo Santos',
      '10/05/1982',
      '42',
      '987.654.321-00',
      '12.345.678/0001-90',
      'marcelo@gmail.com',
      '(11) 99999-9999',
      'SP',
      'São Paulo',
      'Engenheiro Civil',
      'Construção Civil',
      'Sim',
      'Observação sobre Marcelo',
      'Engenharia Civil',
      'Bacharelado',
      '2006',
      '15 anos',
      'USP',
    ),
    createData(
      '10',
      'Juliana Oliveira',
      '15/09/1988',
      '33',
      '123.456.789-00',
      '98.765.432/0001-09',
      'juliana@gmail.com',
      '(21) 88888-8888',
      'RJ',
      'Rio de Janeiro',
      'Advogada',
      'Direito Civil',
      'Não',
      'Sem observações',
      'Direito',
      'Bacharelado',
      '2011',
      '10 anos',
      'UERJ',
    ),
    createData(
      '11',
      'Lucas Ferreira',
      '20/03/1990',
      '32',
      '555.888.777-22',
      '77.777.777/0001-11',
      'lucas@gmail.com',
      '(31) 77777-7777',
      'MG',
      'Belo Horizonte',
      'Psicólogo',
      'Psicologia Clínica',
      'Não',
      'Sem observações',
      'Psicologia',
      'Bacharelado',
      '2014',
      '7 anos',
      'UFMG',
    ),
    createData(
      '12',
      'Gabriela Souza',
      '05/07/1985',
      '36',
      '777.888.999-11',
      '88.999.000/0001-22',
      'gabriela@gmail.com',
      '(51) 66666-6666',
      'RS',
      'Porto Alegre',
      'Nutricionista',
      'Nutrição Esportiva',
      'Não',
      'Sem observações',
      'Nutrição',
      'Bacharelado',
      '2010',
      '11 anos',
      'UFRGS',
    ),
    createData(
      '13',
      'Rafaela Lima',
      '12/12/1988',
      '33',
      '444.555.666-77',
      '55.666.777/0001-33',
      'rafaela@gmail.com',
      '(71) 55555-5555',
      'BA',
      'Salvador',
      'Engenheira Ambiental',
      'Recursos Hídricos',
      'Sim',
      'Sem observações',
      'Engenharia Ambiental',
      'Bacharelado',
      '2012',
      '9 anos',
      'UFBA',
    ),
    createData(
      '14',
      'Renato Almeida',
      '25/09/1987',
      '34',
      '222.333.444-55',
      '33.444.555/0001-66',
      'renato@gmail.com',
      '(81) 44444-4444',
      'PE',
      'Recife',
      'Arquiteto',
      'Arquitetura Residencial',
      'Sim',
      'Sem observações',
      'Arquitetura',
      'Bacharelado',
      '2009',
      '12 anos',
      'UFPE',
    ),
    createData(
      '15',
      'Carolina Santos',
      '03/04/1993',
      '28',
      '888.999.000-33',
      '99.000.111/0001-44',
      'carolina@gmail.com',
      '(92) 33333-3333',
      'AM',
      'Manaus',
      'Enfermeira',
      'Enfermagem Hospitalar',
      'Não',
      'Sem observações',
      'Enfermagem',
      'Bacharelado',
      '2016',
      '5 anos',
      'UFAM',
    ),
    createData(
      '16',
      'Bruno Oliveira',
      '01/01/1980',
      '42',
      '123.456.789-00',
      '12.345.678/0001-90',
      'bruno@gmail.com',
      '(11) 99999-9999',
      'SP',
      'São Paulo',
      'Médico',
      'Clínica Geral',
      'Sim',
      'Observação sobre Bruno',
      'Medicina',
      'Bacharelado',
      '2005',
      '16 anos',
      'USP',
    ),
    createData(
      '17',
      'Fernanda Costa',
      '10/05/1982',
      '39',
      '987.654.321-00',
      '12.345.678/0001-90',
      'fernanda@gmail.com',
      '(11) 99999-9999',
      'SP',
      'São Paulo',
      'Contadora',
      'Contabilidade Tributária',
      'Não',
      'Sem observações',
      'Ciências Contábeis',
      'Bacharelado',
      '2006',
      '15 anos',
      'USP',
    ),
    createData(
      '18',
      'Rodrigo Santos',
      '15/09/1988',
      '33',
      '123.456.789-00',
      '98.765.432/0001-09',
      'rodrigo@gmail.com',
      '(21) 88888-8888',
      'RJ',
      'Rio de Janeiro',
      'Advogado',
      'Direito Tributário',
      'Não',
      'Sem observações',
      'Direito',
      'Bacharelado',
      '2011',
      '10 anos',
      'UERJ',
    ),
    createData(
      '19',
      'Camila Pereira',
      '20/03/1990',
      '32',
      '555.888.777-22',
      '77.777.777/0001-11',
      'camila@gmail.com',
      '(31) 77777-7777',
      'MG',
      'Belo Horizonte',
      'Psicóloga',
      'Psicologia Clínica',
      'Não',
      'Sem observações',
      'Psicologia',
      'Bacharelado',
      '2014',
      '7 anos',
      'UFMG',
    ),
  ];

  //Table button menu
  const [buttonMenu, setButtonMenu] = React.useState(null);
  const open = Boolean(buttonMenu);

  const [selectedRow, setSelectedRow] = React.useState(null);

  const { setProfileData } = React.useContext(ProfileContext);

  const onVisualizar = () => {
    setProfileData(selectedRow);
    handleClose();
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
    <Container>
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
                <TableRow key={row.id} hover={true}>
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
                      onClick={(event) => {
                        setButtonMenu(event.currentTarget);
                        setSelectedRow(row);
                      }}
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
                      <Link to={`visualizar`}>
                        <MenuItem onClick={onVisualizar}>Visualizar</MenuItem>
                      </Link>
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
    </Container>
  );
};

export default Content;
