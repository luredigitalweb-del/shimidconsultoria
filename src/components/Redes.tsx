import { motion } from 'framer-motion'
import { Instagram, ArrowRight, Play, Users2 } from 'lucide-react'
import Iphone16Pro from './Iphone16Pro'
import instagramPrint from '../assets/instagram-print.png'
import { INSTAGRAM_URL, INSTAGRAM_HANDLE } from '../lib/constants'

const stats = [
  { icon: Play, value: '90+', label: 'Conteúdos' },
  { icon: Users2, value: '8 anos', label: 'De operação real' },
]

export default function Redes() {
  return (
    <section id="redes" className="section-pad relative bg-white text-azul-escuro overflow-hidden">
      {/* Glows suaves */}
      <div className="absolute -top-32 -left-32 w-[520px] h-[520px] rounded-full bg-azul-royal/10 blur-[130px] pointer-events-none" />
      <div className="absolute -bottom-40 -right-24 w-[480px] h-[480px] rounded-full bg-accent-vermelho/10 blur-[140px] pointer-events-none" />

      <div className="container-x relative grid lg:grid-cols-2 gap-14 lg:gap-10 items-center">
        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="order-2 lg:order-1 text-center lg:text-left"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-accent-vermelho" />
            <span className="font-sub text-[11px] uppercase tracking-[0.35em] text-accent-vermelho">
              Redes sociais
            </span>
          </div>

          <h2 className="font-display font-bold text-3xl md:text-5xl uppercase leading-[1.05] text-azul-escuro">
            Acompanhe a Schimid{' '}
            <span className="shimmer-text-red">todos os dias.</span>
          </h2>

          <p className="mt-6 text-base md:text-lg text-azul-escuro/70 max-w-lg mx-auto lg:mx-0 leading-relaxed">
            Bastidores da operação, conteúdo de gestão e os resultados de quem
            aplica o método. É só seguir <span className="text-azul-escuro font-bold">{INSTAGRAM_HANDLE}</span> e ficar por dentro.
          </p>

          {/* Stats */}
          <div className="mt-8 flex items-center justify-center lg:justify-start gap-8">
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex items-center gap-3">
                <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-accent-vermelho/10 border border-accent-vermelho/20 text-accent-vermelho">
                  <Icon className="w-5 h-5" />
                </span>
                <div className="text-left">
                  <p className="font-display font-bold text-xl text-azul-escuro leading-none">{value}</p>
                  <p className="font-sub text-[10px] uppercase tracking-[0.2em] text-azul-escuro/50 mt-1">{label}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Instagram */}
          <div className="mt-9 flex justify-center lg:justify-start">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full font-sub font-bold uppercase tracking-[0.15em] text-sm text-white whitespace-nowrap shadow-[0_15px_40px_-8px_rgba(214,41,118,0.6)] transition-transform duration-300 hover:scale-[1.04]"
              style={{
                backgroundImage:
                  'linear-gradient(95deg, #FEDA75 0%, #FA7E1E 25%, #D62976 55%, #962FBF 80%, #4F5BD5 100%)',
              }}
            >
              <Instagram className="w-5 h-5" />
              Seguir no Instagram
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </motion.div>

        {/* Telefone */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="order-1 lg:order-2 flex justify-center"
        >
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="relative"
          >
            {/* Halo atrás do telefone */}
            <div className="absolute inset-0 -z-10 scale-110 rounded-[40px] bg-gradient-to-tr from-accent-vermelho/30 via-azul-royal/30 to-transparent blur-2xl" />
            <Iphone16Pro src={instagramPrint} className="w-[260px] md:w-[300px] h-auto" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
