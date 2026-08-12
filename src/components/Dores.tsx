import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Wrench,
  TrendingDown,
  Users,
  ClipboardList,
  DollarSign,
  AlertTriangle,
  ArrowRight,
} from 'lucide-react'

function Screw({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" aria-hidden>
      <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="4" />
      <circle cx="50" cy="50" r="38" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
      <rect x="16" y="44" width="68" height="12" rx="3" fill="currentColor" />
    </svg>
  )
}

const HEADLINE_PARTS: { text: string }[] = [
  { text: 'Se você se identificar com algum desses cenários, ' },
  { text: 'este trabalho é pra você.' },
]

function TypewriterHeadline() {
  const ref = useRef<HTMLHeadingElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.4 })
  const fullText = HEADLINE_PARTS.map((p) => p.text).join('')
  const accentStart = HEADLINE_PARTS[0].text.length
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    let i = 0
    const id = setInterval(() => {
      i++
      setCount(i)
      if (i >= fullText.length) clearInterval(id)
    }, 28)
    return () => clearInterval(id)
  }, [inView, fullText.length])

  const typed = fullText.slice(0, count)
  const before = typed.slice(0, accentStart)
  const accent = typed.slice(accentStart)
  const done = count >= fullText.length

  return (
    <h2
      ref={ref}
      className="font-display font-bold text-3xl md:text-5xl text-white uppercase leading-[1.05] min-h-[4.5rem] md:min-h-[7rem]"
    >
      <span className="text-white/90">{before}</span>
      <span className="text-white underline decoration-white/40 decoration-2 underline-offset-[6px]">{accent}</span>
      <span
        className={`inline-block w-[3px] md:w-[4px] h-[0.9em] align-[-0.1em] ml-1 bg-white ${
          done ? 'animate-pulse' : ''
        }`}
        aria-hidden
      />
    </h2>
  )
}

const dores = [
  { icon: Wrench, text: 'Você trabalha mais do que seus funcionários e ainda não consegue sair da operação.' },
  { icon: TrendingDown, text: 'Seu faturamento cresce, mas o lucro não aparece no final do mês.' },
  { icon: Users, text: 'Sua equipe não entrega resultado sem você por perto.' },
  { icon: ClipboardList, text: 'Você não tem processos definidos — cada dia é um improviso.' },
  { icon: DollarSign, text: 'Você não sabe exatamente quanto sua oficina lucra de verdade.' },
  { icon: AlertTriangle, text: 'Você perdeu a qualidade de vida e virou refém do próprio negócio.' },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Dores() {
  return (
    <section id="dores" className="section-pad relative bg-azul-medio text-white overflow-hidden">
      {/* Glow nos cantos pra dar dimensão */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-azul-royal/40 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full bg-azul-royal/30 blur-[120px] pointer-events-none" />

      {/* Parafusos girando — efeito chave de fenda */}
      <Screw className="absolute top-10 left-6 md:left-16 w-24 h-24 md:w-36 md:h-36 text-white/[0.06] animate-spin [animation-duration:14s]" />
      <Screw className="absolute bottom-12 right-6 md:right-20 w-28 h-28 md:w-44 md:h-44 text-white/[0.05] animate-spin [animation-duration:18s] [animation-direction:reverse]" />
      <Screw className="hidden md:block absolute top-1/2 right-10 w-20 h-20 text-white/[0.04] animate-spin [animation-duration:11s]" />

      <div className="container-x relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-16 text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="h-px w-12 bg-white" />
            <span className="font-sub text-[11px] uppercase tracking-[0.35em] text-white">
              A realidade da sua oficina
            </span>
            <span className="h-px w-12 bg-white" />
          </div>
          <TypewriterHeadline />
        </motion.div>

        {/* Mobile: carrossel horizontal — sm+: grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="
            -mx-6 px-6 flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth
            [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
            sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 sm:gap-5 sm:overflow-visible
            lg:grid-cols-3
          "
        >
          {dores.map(({ icon: Icon, text }, idx) => (
            <motion.div
              key={idx}
              variants={item}
              className="
                group relative px-6 py-6 bg-white rounded-xl shadow-[0_15px_40px_-15px_rgba(0,0,0,0.4)] transition-transform duration-300 hover:-translate-y-1
                shrink-0 w-[82%] snap-center
                sm:w-auto sm:shrink
              "
            >
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 flex items-center justify-center w-11 h-11 rounded-md bg-accent-vermelho text-white">
                  <Icon className="w-5 h-5" />
                </span>
                <p className="text-azul-escuro/85 text-[15px] leading-relaxed">{text}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Indicador de scroll — só mobile */}
        <div className="mt-6 flex items-center justify-center gap-2 sm:hidden">
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
          <a href="#diagnostico" className="btn-shiny !text-sm !px-7 !py-4">
            <span>
              Quero mudar esse cenário
              <ArrowRight className="w-4 h-4" />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
