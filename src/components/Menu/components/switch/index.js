import { useContext } from 'react'
import { ColorModeContext } from '../../../../contexts/color-mode-context'
import { StyledSwitch } from './styles'

export const DarkModeSwitch = () => {
  const colorModeContext = useContext(ColorModeContext)

  return (
    <StyledSwitch>
      <input
        id="darkmode"
        type="checkbox"
        onChange={() => {
          colorModeContext.toggleMode()
        }}
      />
      <label htmlFor="darkmode" className="darkmode-switch">
        <span>🌙</span>
        <span>☀️</span>
      </label>
    </StyledSwitch>
  )
}
