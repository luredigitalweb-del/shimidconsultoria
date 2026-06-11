import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Dores from './components/Dores'
import Sobre from './components/Sobre'
import Metodo from './components/Metodo'
import ParaQuem from './components/ParaQuem'
import Servicos from './components/Servicos'
import Depoimentos from './components/Depoimentos'
import Redes from './components/Redes'
import CTAFinal from './components/CTAFinal'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

export default function App() {
  return (
    <div className="min-h-screen bg-azul-escuro text-cinza-claro overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Dores />
        <Sobre />
        <Metodo />
        <ParaQuem />
        <Depoimentos />
        <Servicos />
        <Redes />
        <CTAFinal />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
