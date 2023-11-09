import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './pages/Home'
import Paint from './pages/Paint'


function App() {

  return (
    <>
      <div className=' w-full'>
        <BrowserRouter>
        <Header />
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/paint/:id' element={<Paint/>} />

          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
      
    </>
  )
}

export default App
