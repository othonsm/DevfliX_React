import React from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';


function CadastroVideo() {
    return (
        <PageDefault>
            <h2>Cadastro de Vídeo</h2>
            <Link to="/cadastro/categoria">
            Cadastro Categoria
            </Link>
        </PageDefault>
    )
}

export default CadastroVideo;