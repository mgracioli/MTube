import React from 'react'
import config from '../../../config.json'
import { StyledHeader } from './styles'

export const Header = () => {
  return (
    <StyledHeader>
      <section className="user-info">
        <img
          className="user-picture"
          src={`https://github.com/${config.github}.png`}
        ></img>

        <div>
          <h2>{config.name}</h2>
          <p>{config.job}</p>
        </div>
      </section>
    </StyledHeader>
  )
}
