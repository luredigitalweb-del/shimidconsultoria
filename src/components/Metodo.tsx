import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { WHATSAPP_URL } from '../lib/constants'
import { PointerHighlight, ShimmerText } from './PointerHighlight'

type Pilar = {
  n: string
  title: string
  text: string
  outcome: string
}

const pilares: Pilar[] = [
  {
    n: '01',
    title: 'Gestão Financeira',
    text: 'Saiba quanto sua oficina realmente lucra e onde o dinheiro está vazando.',
    outcome: 'Margem real por serviço + previsibilidade de caixa',
  },
  {
    n: '02',
    title: 'Processos Operacionais',
    text: 'Padronize cada etapa da operação para que tudo funcione sem depender de você.',
    outcome: 'Oficina rodando mesmo quando você não está',
  },
  {
    n: '03',
    title: 'Liderança e Equipe',
    text: 'Forme um time que entrega resultado e assume responsabilidade pela operação.',
    outcome: 'Mecânicos e atendentes que tomam decisão',
  },
  {
    n: '04',
    title: 'Posicionamento e Atendimento',
    text: 'Atraia os clientes certos e cobre o preço justo pelo serviço que entrega.',
    outcome: 'Cliente que valoriza serviço técnico',
  },
]

export default function Metodo() {
  return (
    <section id="metodo" className="section-pad relative bg-azul-medio text-white overflow-hidden">
      {/* Glow escuro nos cantos */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-azul-royal/40 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full bg-azul-royal/30 blur-[120px] pointer-events-none" />

      <div className="container-x relative">
        {/* Header centralizado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="flex items-center justify-center gap-3 md:gap-4 mb-5 md:mb-6">
            <span className="h-px w-8 md:w-12 bg-white" />
            <span className="font-sub text-[10px] md:text-[11px] uppercase tracking-[0.3em] md:tracking-[0.35em] text-white">
              O Método Schimid
            </span>
            <span className="h-px w-8 md:w-12 bg-white" />
          </div>
          <h2 className="font-display font-bold text-[1.6rem] sm:text-4xl md:text-5xl lg:text-6xl text-white uppercase leading-[1.05]">
            Quatro pilares que sustentam{' '}
            <PointerHighlight rectangleClassName="border-white/60" pointerClassName="text-white">
              <ShimmerText className="px-1 md:px-2" gradientClassName="from-white via-white/50 to-white">uma oficina lucrativa.</ShimmerText>
            </PointerHighlight>
          </h2>
          <p className="mt-6 md:mt-8 text-[15px] md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            Os mesmos fundamentos que estruturamos dentro da Schimid Mecânica e
            aplicamos hoje nas oficinas que atendemos.
          </p>
        </motion.div>

        {/* Pilares — cards lado a lado */}
        <div className="mt-12 md:mt-20 grid sm:grid-cols-2 gap-5 md:gap-6">
          {pilares.map((p, i) => (
            <motion.article
              key={p.n}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative overflow-hidden bg-white rounded-2xl p-7 md:p-8 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.45)] transition-transform duration-300 hover:-translate-y-1.5"
            >
              {/* Número marca d'água */}
              <span className="pointer-events-none select-none absolute -top-4 right-2 font-display font-bold text-[6rem] leading-none text-accent-vermelho/[0.07]">
                {p.n}
              </span>

              <div className="relative">
                {/* Badge número */}
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent-vermelho text-white font-display font-bold text-xl tabular-nums shadow-[0_8px_20px_rgba(225,25,25,0.35)]">
                  {p.n}
                </span>

                <h3 className="mt-5 font-display font-bold text-2xl md:text-[1.7rem] text-azul-escuro uppercase leading-tight">
                  {p.title}
                </h3>
                <p className="mt-3 text-azul-escuro/65 text-[14.5px] md:text-[15px] leading-relaxed">
                  {p.text}
                </p>

                <div className="mt-6 pt-5 border-t border-azul-escuro/10">
                  <span className="block font-sub text-[10px] uppercase tracking-[0.3em] text-accent-vermelho mb-2">
                    O que muda
                  </span>
                  <p className="font-display font-bold text-lg md:text-xl text-azul-escuro leading-snug">
                    {p.outcome}
                  </p>
                </div>
              </div>

              {/* Seta — anima no hover */}
              <ArrowUpRight
                className="absolute top-7 right-7 w-5 h-5 text-azul-escuro/20 group-hover:text-accent-vermelho group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
                strokeWidth={1.8}
              />
            </motion.article>
          ))}
        </div>

        {/* Fechamento */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="mt-14 md:mt-24 flex flex-col md:flex-row md:items-end md:justify-between gap-6 md:gap-8"
        >
          <p className="font-display font-bold text-[1.5rem] sm:text-3xl md:text-4xl text-white uppercase leading-tight max-w-xl">
            Não é teoria.{' '}
            <span className="underline decoration-white/40 decoration-2 underline-offset-[6px]">É o que funciona no dia a dia real.</span>
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="group relative inline-flex items-center justify-center gap-2.5 px-9 py-5 rounded-full font-sub font-bold uppercase tracking-[0.15em] text-sm md:text-base bg-accent-vermelho text-white hover:bg-vermelho-escuro transition-all duration-300 self-start md:self-auto whitespace-nowrap shadow-[0_15px_45px_rgba(225,25,25,0.5)] hover:scale-[1.04]"
          >
            <span className="absolute inset-0 rounded-full ring-2 ring-accent-vermelho/40 animate-ping opacity-30 [animation-duration:2.5s]" />
            Aplicar na minha oficina
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
