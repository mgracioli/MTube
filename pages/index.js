import config from '../config.json'
import { CSSReset } from '../src/components/CSSReset'
import { StyledTimeline } from '../src/components/Timeline'
import { StyledHeader } from '../src/components/Header'
import Menu from '../src/components/Menu'

function Home() {
  return (
    <div>
      <CSSReset />
      <Menu></Menu>
      <Header></Header>
      <Timeline playlists={config.playlists} />
    </div>
  )
}

export default Home

const Header = () => {
  return (
    <StyledHeader>
      {/* <img src='banner'></img> */}

      <section className="user-info">
        <img src={`https://github.com/${config.github}.png`}></img>

        <div>
          <h2>{config.name}</h2>
          <p>{config.job}</p>
        </div>
      </section>
    </StyledHeader>
  )
}

const Timeline = ({ playlists }) => {
  const playListsName = Object.keys(playlists)

  return (
    <StyledTimeline>
      {playListsName.map((playListName, index) => {
        const videos = playlists[playListName]

        return (
          <section key={index}>
            <h2>{playListName}</h2>

            <div>
              {videos.map((video) => {
                return (
                  <a href={video.url} key={video.id}>
                    <img src={video.thumb} />
                    <span>{video.title}</span>
                  </a>
                )
              })}
            </div>
          </section>
        )
      })}
    </StyledTimeline>
  )
}
