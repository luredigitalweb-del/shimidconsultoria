import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import heroDesktop from '../assets/hero-desktop.png'
import heroMobile from '../assets/hero-mobile.png'
import { WHATSAPP_URL } from '../lib/constants'

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] flex items-start overflow-hidden">
      {/* Banner */}
      <picture className="absolute inset-0">
        <source media="(min-width: 768px)" srcSet={heroDesktop} />
        <img
          src={heroMobile}
          alt="Sócios da Schimid em frente à oficina"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      </picture>

      {/* Overlays — no mobile sombra no topo; no desktop à esquerda */}
      <div className="absolute inset-0 bg-gradient-to-b from-azul-escuro/85 via-azul-escuro/30 to-transparent md:bg-gradient-to-r md:from-azul-escuro/90 md:via-azul-escuro/20 md:to-transparent" />

      {/* Conteúdo */}
      <div className="relative w-full max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 pt-20 md:pt-48 lg:pt-56 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mx-auto text-center md:mx-0 md:text-left"
        >
          <div className="inline-flex items-center gap-3 mb-6 md:mb-8">
            <span className="rule" />
            <span className="eyebrow">Consultoria para oficinas</span>
          </div>

          <h1 className="font-display font-bold text-[2rem] sm:text-6xl md:text-7xl leading-[0.95] text-white uppercase">
            Você fatura R$80 mil e não vê{' '}
            <span className="shimmer-text">lucro de verdade?</span>
          </h1>

          <p className="mt-5 md:mt-8 text-[14px] md:text-lg text-cinza-claro/85 max-w-xl mx-auto md:mx-0 leading-relaxed">
            A Schimid reestrutura a gestão de oficinas mecânicas com métodos
            testados dentro da nossa própria operação.
          </p>

          <div className="mt-5 md:mt-10 flex flex-col sm:flex-row gap-2 items-center md:items-start sm:items-center">
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="btn-shiny !text-sm !px-7 !py-4">
              <span>
                Quero estruturar minha oficina
                <ArrowRight className="w-4 h-4" />
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
