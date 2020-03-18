import React, { Component } from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell, Button } from '@material-ui/core';

const Tabela = props => {
    const { campos, autores, removeAutor } = props;

    return (
        <Table>
            <TableHead>
                <TableRow>
                    { campos.map(campo => <TableCell>{ campo.titulo }</TableCell>) }
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    autores.map((autor) => {
                        return (
                            <TableRow key={autor.id}>
                                { campos.map(campo => <TableCell>{ autor[campo.dado] }</TableCell>)}
                                <TableCell>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={() => removeAutor(autor.id)}>Remover</Button>
                                </TableCell>
                            </TableRow>
                        );
                    })
                }
            </TableBody> 
        </Table>
    );
}

export default Tabela;