import React, { useState } from 'react'
import { StyledSearch } from './styles'

export const Search = ({ valorDoFiltro, setValorDoFiltro }) => {
  const [valorDaBusca, setValorDaBusca] = useState('')
  // const valorDaBusca = valorDoFiltro
  // const setValorDaBusca = setValorDoFiltro

  return (
    <StyledSearch>
      <input
        type="text"
        onChange={(e) => setValorDaBusca(e.target.value)}
        value={valorDaBusca}
      />
      <button>🔎</button>
    </StyledSearch>
  )
}
