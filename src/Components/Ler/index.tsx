import React from 'react'
import { useSelector } from 'react-redux'

interface Store {
    quantidade: number
  }

const Ler = () => {

    const lerQuantidade = useSelector((state: Store) => state.quantidade)

    return (
        <p>{lerQuantidade}</p>
    );
}

export default Ler