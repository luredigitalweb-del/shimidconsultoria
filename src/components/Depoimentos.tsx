import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, X, Volume2, VolumeX, Quote, ArrowRight } from 'lucide-react'
import { WHATSAPP_URL } from '../lib/constants'
import dep1 from '../assets/depoimento-1.mp4'
import dep2 from '../assets/depoimento-2.mp4'
import dep3 from '../assets/depoimento-3.mp4'

type Depoimento = {
  src: string
  name: string
  role: string
}

const depoimentos: Depoimento[] = [
  { src: dep1, name: 'Willian', role: 'Dono de oficina' },
  { src: dep2, name: 'Rodrigo', role: 'Dono de oficina' },
  { src: dep3, name: 'Cliente Schimid', role: 'Dono de oficina' },
]

function VideoCard({
  d,
  index,
  onOpen,
}: {
  d: Depoimento
  index: number
  onOpen: () => void
}) {
  const videoRef = useRef<HTMLVideoElement>(null)

  return (
    <motion.button
      type="button"
      onClick={onOpen}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative block text-left shrink-0 w-[78%] snap-center sm:w-auto sm:shrink focus:outline-none"
      aria-label={`Assistir depoimento de ${d.name}`}
      onMouseEnter={() => videoRef.current?.play().catch(() => {})}
      onMouseLeave={() => {
        const v = videoRef.current
        if (v) {
          v.pause()
          v.currentTime = 0
        }
      }}
    >
      <div className="bg-white rounded-2xl p-3 shadow-[0_25px_60px_-20px_rgba(0,0,0,0.55)] transition-all duration-300 group-hover:-translate-y-1.5 group-hover:shadow-[0_35px_70px_-20px_rgba(0,0,0,0.6)] group-focus-visible:ring-2 group-focus-visible:ring-white">
        <div className="relative aspect-[9/16] overflow-hidden rounded-xl bg-azul-medio">
          <video
            ref={videoRef}
            src={d.src}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            playsInline
            muted
            loop
            preload="metadata"
          />

          {/* Overlay gradient embaixo */}
          <div className="absolute inset-0 bg-gradient-to-t from-azul-escuro/70 via-transparent to-transparent pointer-events-none" />

          {/* Numeração editorial */}
          <span className="absolute top-3 left-4 font-display font-bold text-2xl text-white/85 leading-none tabular-nums drop-shadow">
            {String(index + 1).padStart(2, '0')}
          </span>

          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="relative flex items-center justify-center w-16 h-16 md:w-[68px] md:h-[68px] rounded-full bg-accent-vermelho shadow-[0_10px_30px_rgba(225,25,25,0.5)] ring-2 ring-white/40 transition-transform duration-300 group-hover:scale-110">
              <span className="absolute inset-0 rounded-full ring-2 ring-white/30 animate-ping opacity-40 [animation-duration:2.5s]" />
              <Play className="w-6 h-6 md:w-7 md:h-7 text-white fill-white ml-1" strokeWidth={0} />
            </span>
          </div>
        </div>

        {/* Rodapé branco: nome + cargo + aspas */}
        <div className="flex items-center justify-between px-1.5 pt-4 pb-1.5">
          <div>
            <p className="font-display font-bold text-lg md:text-xl text-azul-escuro uppercase leading-tight">
              {d.name}
            </p>
            <p className="mt-0.5 font-sub text-[10px] uppercase tracking-[0.25em] text-accent-vermelho">
              {d.role}
            </p>
          </div>
          <Quote className="w-7 h-7 shrink-0 text-accent-vermelho/20" fill="currentColor" strokeWidth={0} />
        </div>
      </div>
    </motion.button>
  )
}

function Lightbox({ d, onClose }: { d: Depoimento; onClose: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [muted, setMuted] = useState(false)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    videoRef.current?.play().catch(() => {})
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const toggleMute = () => {
    const v = videoRef.current
    if (!v) return
    v.muted = !v.muted
    setMuted(v.muted)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-azul-escuro/90 backdrop-blur-md p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Depoimento de ${d.name}`}
    >
      <button
        onClick={onClose}
        className="absolute top-5 right-5 flex items-center justify-center w-11 h-11 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors"
        aria-label="Fechar"
      >
        <X className="w-5 h-5" />
      </button>

      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-[400px] aspect-[9/16] rounded-2xl overflow-hidden bg-black shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <video
          ref={videoRef}
          src={d.src}
          className="absolute inset-0 w-full h-full object-cover"
          playsInline
          autoPlay
          controls
          muted={muted}
        />
        <button
          onClick={toggleMute}
          className="absolute bottom-4 right-4 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-azul-escuro/70 backdrop-blur-sm border border-white/15 text-white hover:bg-azul-eletrico transition-colors"
          aria-label={muted ? 'Ativar som' : 'Mutar'}
        >
          {muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </button>
      </motion.div>
    </motion.div>
  )
}

export default function Depoimentos() {
  const [active, setActive] = useState<number | null>(null)

  return (
    <section id="depoimentos" className="section-pad relative bg-azul-medio text-white overflow-hidden">
      {/* Glow escuro nos cantos */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-azul-royal/40 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] rounded-full bg-azul-royal/30 blur-[120px] pointer-events-none" />

      <div className="container-x relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-12 md:mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="h-px w-12 bg-white" />
            <span className="font-sub text-[11px] uppercase tracking-[0.35em] text-white">
              Quem já passou pela Schimid
            </span>
            <span className="h-px w-12 bg-white" />
          </div>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-white uppercase leading-[1.05]">
            O resultado vem de quem{' '}
            <span className="underline decoration-white/40 decoration-2 underline-offset-[6px]">aplica o método.</span>
          </h2>
          <p className="mt-6 text-base md:text-lg text-white/80 leading-relaxed">
            Donos de oficina que estruturaram a gestão e mudaram a relação com o
            próprio negócio.
          </p>
        </motion.div>

        {/* Mobile: carrossel — Desktop: grid 3 colunas */}
        <div
          className="
            -mx-6 px-6 flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth
            [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
            md:mx-0 md:px-0 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible
          "
        >
          {depoimentos.map((d, i) => (
            <VideoCard key={i} d={d} index={i} onOpen={() => setActive(i)} />
          ))}
        </div>

        <div className="mt-6 flex items-center justify-center gap-2 md:hidden">
          <span className="font-sub text-[10px] uppercase tracking-[0.3em] text-white/60">
            Arraste
          </span>
          <span className="text-white/60">→</span>
        </div>

        {/* Botão */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="mt-12 md:mt-16 flex justify-center"
        >
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="btn-shiny !text-sm !px-7 !py-4">
            <span>
              Quero esse resultado
              <ArrowRight className="w-4 h-4" />
            </span>
          </a>
        </motion.div>
      </div>

      <AnimatePresence>
        {active !== null && (
          <Lightbox d={depoimentos[active]} onClose={() => setActive(null)} />
        )}
      </AnimatePresence>
    </section>
  )
}
