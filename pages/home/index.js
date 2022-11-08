import config from '../../config.json'
import { CSSReset } from '../../src/components/CSSReset'
import { StyledHome } from './styles'
import { Menu } from '../../src/components/Menu'
import { Header } from '../../src/components/Header'
import { Timeline } from '../../src/components/Timeline'

const Home = () => {
  return (
    <StyledHome>
      <CSSReset />
      <Menu></Menu>
      <Header></Header>
      <Timeline playlists={config.playlists} />
    </StyledHome>
  )
}

export default Home
