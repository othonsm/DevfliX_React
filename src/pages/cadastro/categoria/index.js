import React from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';


function CadastroCategoria() {
    return (
        <PageDefault>
            <h2>Cadastro de Categoria</h2>



            <Link to="/">
            Ir para home
            </Link>
            
        </PageDefault>
    )
}

export default CadastroCategoria;