import { useEffect } from 'react'
import { Routes, Route, Outlet, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Heder from './components/heder'
import { Header as KamronHeader, Main as KamronMain, Footer as KamronFooter } from './components/kamron.jsx'
import Contacts from './components/Contacts'

// Sahifa almashganda tepaga qaytaradi
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function Layout() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Outlet />
    </>
  )
}

// Kamronning sahifasi — uning App.jsx idagidek
function OpenClub() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#18313c]">
      <KamronHeader />
      <KamronMain />
      <KamronFooter />
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Heder />} />
        <Route path="/open-club" element={<OpenClub />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<Heder />} />
      </Route>
    </Routes>
  )
}
