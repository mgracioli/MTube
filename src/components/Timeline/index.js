import React from 'react'
import { StyledTimeline } from './styles'

export const Timeline = ({ playlists }) => {
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
