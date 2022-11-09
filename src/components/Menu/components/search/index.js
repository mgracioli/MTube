import React, { useState } from 'react'
import { StyledSearch } from './styles'

export const Search = ({ valorDoFiltro, setValorDoFiltro }) => {
  return (
    <StyledSearch>
      <input
        type="text"
        onChange={(e) => setValorDoFiltro(e.target.value)}
        value={valorDoFiltro}
      />
      <button>🔎</button>
    </StyledSearch>
  )
}
