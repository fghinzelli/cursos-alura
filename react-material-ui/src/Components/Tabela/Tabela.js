import React, { Component } from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell, Button } from '@material-ui/core';

class Tabela extends Component {
    
    render() {

        const { autores, removeAutor } = this.props;

        return (
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Autores</TableCell>
                        <TableCell>Livros</TableCell>
                        <TableCell>Preços</TableCell>
                        <TableCell>Remover</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        autores.map((autor) => {
                            return (
                                <TableRow key={autor.id}>
                                    <TableCell>{autor.nome}</TableCell>
                                    <TableCell>{autor.livro}</TableCell>
                                    <TableCell>{autor.preco}</TableCell>
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
}

export default Tabela;