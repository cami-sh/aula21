import React from 'react'
import { useDispatch } from 'react-redux'

const Remover = () => {

    const dispatch = useDispatch()

    return (
        <button onClick={() => dispatch({type: 'REMOVER_UNIDADE'})}>Remover Produto</button>
    );
}

export default Remover