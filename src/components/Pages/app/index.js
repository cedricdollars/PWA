import React, { useEffect } from 'react'
import GlobalStyle from '../../../globalStyle'
import IndexRouter from '../../../Services/routes/index'
import store from '../../../Services/redux/store'

function App() {
  useEffect(() => {
    store.subscribe(() => store.getState().events)
  }, [])
  return (
    <>
      <GlobalStyle />
      <IndexRouter />
    </>
  )
}

export default App
