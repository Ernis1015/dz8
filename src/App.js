import React from 'react'

import Main from './components/main/Main'
import About from './components/about/About'
import ModalProvider from './pages/context/ModalProvider'
import Ref from './pages/ref/Ref'

const App = () => {

  return (
      <div>
        <ModalProvider>
          <About/>

          <Main/>
        </ModalProvider>
        <Ref/>
      </div>
  )
}

export default App