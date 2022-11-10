import React, { createContext, useState } from 'react'

export const ColorModeContext = createContext({
  mode: 'dark',
  setMode: () => {},
  toggleMode: () => {},
})

export const ColorModeProvider = ({ children, initialMode }) => {
  const [mode, setMode] = useState(initialMode)

  function toggleMode() {
    mode === 'dark' ? setMode('light') : setMode('dark')
  }

  return (
    <ColorModeContext.Provider
      value={{ mode: mode, setMode: setMode, toggleMode: toggleMode }}
    >
      {children}
    </ColorModeContext.Provider>
  )
}
