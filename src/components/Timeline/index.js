import React from 'react'
import { StyledTimeline } from './styles'

export const Timeline = ({ searchValue, playlists }) => {
  const playListsName = Object.keys(playlists)

  return (
    <StyledTimeline>
      {playListsName.map((playListName, index) => {
        const videos = playlists[playListName]

        return (
          <section key={index}>
            <h2>{playListName}</h2>

            <div>
              {videos
                .filter((video) => {
                  const titleNormalized = video.title.toLowerCase()
                  const searchValueNormalized = searchValue.toLowerCase()

                  return titleNormalized.includes(searchValueNormalized)
                })
                .map((video) => (
                  <a href={video.url} key={video.id}>
                    <img src={video.thumb} />
                    <span>{video.title}</span>
                  </a>
                ))}
            </div>
          </section>
        )
      })}
    </StyledTimeline>
  )
}
