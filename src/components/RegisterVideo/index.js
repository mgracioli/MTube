import React, { useState } from 'react'
import { StyledRegisterVideo } from './styles'

// Whiteboarding
// Custom Hook
function useForm({ initialValues }) {
  const [values, setValues] = useState(initialValues)

  return {
    values,

    handleChange: (evento) => {
      const value = evento.target.value
      const name = evento.target.name
      setValues({ ...values, [name]: value })
    },

    clearForm() {
      setValues({})
    },
  }
}

export default function RegisterVideo() {
  const formCadastro = useForm({
    initialValues: { titulo: 'Título', url: 'https://youtube..' },
  })
  const [formVisivel, setFormVisivel] = useState(true)

  return (
    <StyledRegisterVideo>
      <button className="add-video" onClick={() => setFormVisivel(true)}>
        +
      </button>

      {formVisivel && (
        <form
          onSubmit={(evento) => {
            evento.preventDefault()
            setFormVisivel(false)
            formCadastro.clearForm()
          }}
        >
          <div>
            <button
              type="button"
              className="close-modal"
              onClick={() => setFormVisivel(false)}
            >
              X
            </button>

            <input
              placeholder="Titulo do vídeo"
              name="titulo"
              value={formCadastro.values.titulo}
              onChange={formCadastro.handleChange}
            />

            <input
              placeholder="URL"
              name="url"
              value={formCadastro.values.url}
              onChange={formCadastro.handleChange}
            />

            <button type="submit">Cadastrar</button>
          </div>
        </form>
      )}
    </StyledRegisterVideo>
  )
}
