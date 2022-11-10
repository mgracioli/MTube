import React, { useState } from 'react'
import config from '../../config.json'
import StyledHome from './styles'
import { Menu } from '../../src/components/Menu'
import { Header } from '../../src/components/Header'
import { Timeline } from '../../src/components/Timeline'

const Home = () => {
  const [valorDoFiltro, setValorDoFiltro] = useState('')

  return (
    <StyledHome>
      <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro} />
      <Header />
      <Timeline searchValue={valorDoFiltro} playlists={config.playlists} />
    </StyledHome>
  )
}

export default Home
