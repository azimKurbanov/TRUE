import Hero from './components/Hero'
import Advantages from './components/Advantages'
import Top5 from './components/Top5'
import Products from './components/Products'
import Stats from './components/Stats'
import Faq from './components/Faq'
import Showroom from './components/Showroom'

export default function App() {
  return (
    <main className="mx-auto max-w-[1200px] overflow-hidden bg-white shadow-xl">
      <Hero />
      <Advantages />
      <Top5 />
      <Products />
      <Stats />
      <Faq />
      <Showroom />
    </main>
  )
}
