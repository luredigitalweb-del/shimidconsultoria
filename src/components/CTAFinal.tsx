import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import oficinaFachada from '../assets/oficina-fachada.png'
import { WHATSAPP_URL } from '../lib/constants'

export default function CTAFinal() {
  return (
    <section className="relative py-24 md:py-32 px-6 md:px-10 overflow-hidden bg-azul-medio text-white">
      {/* Foto da fachada da oficina ao fundo */}
      <img
        src={oficinaFachada}
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover opacity-35"
      />
      {/* Overlay azul pra manter legibilidade e identidade */}
      <div className="absolute inset-0 bg-gradient-to-b from-azul-medio/90 via-azul-medio/80 to-azul-escuro/92 mix-blend-multiply" />

      {/* Glow nos cantos */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-azul-royal/50 blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full bg-azul-royal/50 blur-[140px] pointer-events-none" />

      <div className="relative container-x">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="h-px w-12 bg-white" />
            <span className="font-sub text-[11px] uppercase tracking-[0.35em] text-white">
              Próximo passo
            </span>
            <span className="h-px w-12 bg-white" />
          </div>
          <h2 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl text-white uppercase leading-[0.95]">
            Pronto para transformar sua oficina?
          </h2>
          <p className="mt-6 text-base md:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
            Fale com nosso time e descubra como a Schimid pode estruturar a
            gestão, os processos e a liderança do seu negócio.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center justify-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-sub font-bold uppercase tracking-[0.15em] text-sm md:text-base bg-white text-accent-vermelho hover:bg-azul-escuro hover:text-white transition-all shadow-[0_15px_40px_rgba(0,0,0,0.25)]"
            >
              Falar com a Schimid
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
            <span className="text-xs md:text-sm text-white/70">
              Atendimento de segunda a sexta, horário comercial
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
