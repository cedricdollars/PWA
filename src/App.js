import React from 'react'

import GlobalStyle from './globalStyle'
import IndexRouter from './Services/routes/index'

function App() {
  return (
    <div className='app'>
      <GlobalStyle />
      <IndexRouter />
    </div>
  )
}

export default App
