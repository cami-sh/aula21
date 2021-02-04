import React from 'react';

import Ler from './Components/Ler'
import Remover from './Components/Remover'
import Adicionar from './Components/Adicionar'

import { Provider } from 'react-redux'
import { createStore } from 'redux'

interface Store {
  quantidade: number
}

const initialState: Store = {
  quantidade: 0
}

function reducer(state = initialState, action: any) {
  switch(action.type) {
    case 'REMOVER_UNIDADE':
      return {
        quantidade: state.quantidade > 0 ? state.quantidade - 1 : state.quantidade,
      };
    case 'ADICIONAR_UNIDADE':
      return {
        quantidade: state.quantidade + 1,
      };
    default:
      return state
  }
}

const store = createStore(reducer)

function App() {
  return (
    <Provider store={store}>
      <Ler />
      <Remover />
      <Adicionar />
    </Provider>
  );
}

export default App;
