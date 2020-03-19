import React, { Component } from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell, Button } from '@material-ui/core';

const CellDeleta = props => {

    if (!props.removeDados) {
        return null;
    } 
    
    if (props.tipo === 'titulo') {
        return <TableCell>Remover</TableCell >;
    }         
    return (
        <TableCell>
            <Button
                variant="contained"
                color="primary"
                onClick={() => props.removeDados(props.id)}>Remover</Button>
        </TableCell>
    )
}

const Tabela = props => {
    const { campos, dados, removeDados } = props;

    return (
        <Table>
            <TableHead>
                <TableRow>
                    { campos.map(campo => <TableCell>{ campo.titulo }</TableCell>) }
                    <CellDeleta removeDados={removeDados} tipo="titulo"/>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    dados.map((autor) => {
                        return (
                            <TableRow key={autor.id}>
                                { campos.map(campo => <TableCell>{ autor[campo.dado] }</TableCell>)}
                                { <CellDeleta id={autor.id} removeDados={removeDados} /> }
                            </TableRow>
                        );
                    })
                }
            </TableBody> 
        </Table>
    );
}

export default Tabela;