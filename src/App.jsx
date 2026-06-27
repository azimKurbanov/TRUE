import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Muhammad from './components/Muhammad'
import Sardor from './components/Sardor'
import Sherzod from './components/Sherzod'
import Diyor from './Diyor'
import Contacts from './components/Contacts'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* Главная — Muhammad */}
        <Route path="/" element={<Muhammad />} />

        {/* О Бренде — Sardor */}
        <Route path="/about" element={<Sardor />} />

        {/* Преимущества — Sherzod */}
        <Route path="/advantages" element={<Sherzod />} />

        {/* Открыть клуб — Diyor */}
        <Route path="/open-club" element={<Diyor />} />

        {/* Контакты */}
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
