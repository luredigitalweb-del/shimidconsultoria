import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Formulario from './components/Formulario'
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
import Obrigado from './pages/Obrigado'
import { usePathname } from './lib/router'

export default function App() {
  const path = usePathname()

  if (path === '/obrigado') {
    return (
      <>
        <Obrigado />
        <WhatsAppButton />
      </>
    )
  }

  return (
    <div className="min-h-screen bg-azul-escuro text-cinza-claro overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Formulario />
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
