import React from 'react'
import config from '../../../config.json'
import { Banner } from './components/Banner'
import { StyledHeader } from './styles'

export const Header = () => {
   return (
      <StyledHeader>
         <Banner />

         <section className="user-info">
            <img
               className="user-picture"
               src={`https://github.com/${config.github}.png`}
            />

            <div>
               <h2>{config.name}</h2>
               <p>{config.job}</p>
            </div>
         </section>
      </StyledHeader>
   )
}
