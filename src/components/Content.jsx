import {
  Button,
  CardHeader,
  Container,
  Divider,
  IconButton,
  Table,
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
          <IconButton
            id="searchButton"
            aria-label="pesquisar"
            size="medium"
            sx={{ boxShadow: 2 }}
          >
            <img src="/img/searchIcon.svg" alt="" />
          </IconButton>
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
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
      </Table>
    </TableContainer>
  );
};

export default Content;
