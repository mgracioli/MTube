import React from 'react'
import { StyledBanner } from './styles'
import config from '../../../../../config.json'

export const Banner = () => {
   return <StyledBanner bg={config.background} />
}
