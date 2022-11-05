import { Route, Routes } from 'react-router-dom'

import Footer from "./components/Footer/Footer"
import Contact from './pages/Contact'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

function App() {

  return (
    <>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
