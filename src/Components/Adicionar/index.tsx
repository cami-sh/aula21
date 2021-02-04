import React from 'react'
import { useDispatch } from 'react-redux'

const Adicionar = () => {

    const dispatch = useDispatch()

    return (
        <button onClick={() => dispatch({type: 'ADICIONAR_UNIDADE'})}>Adicionar Produto</button>
    );
}

export default Adicionar