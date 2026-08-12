import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  Instagram,
  MessageCircle,
  PhoneCall,
} from 'lucide-react'
import logoSchimid from '../assets/logo-schimid.png'
import { INSTAGRAM_HANDLE, INSTAGRAM_URL, WHATSAPP_URL } from '../lib/constants'
import { readLead, type Lead } from '../lib/lead'
import { navigate } from '../lib/router'

const PROXIMOS_PASSOS = [
  {
    icon: ClipboardCheck,
    titulo: 'Análise do seu cenário',
    texto:
      'Nossa equipe revisa as informações que você enviou e cruza com os gargalos mais comuns em oficinas do seu porte.',
  },
  {
    icon: MessageCircle,
    titulo: 'Contato pelo WhatsApp',
    texto:
      'Chamamos você no número informado para entender melhor a operação antes de qualquer proposta.',
  },
  {
    icon: PhoneCall,
    titulo: 'Conversa de diagnóstico',
    texto:
      'Uma conversa direta sobre o que trava o lucro da sua oficina — sem discurso pronto e sem compromisso.',
  },
]

export default function Obrigado() {
  const [lead, setLead] = useState<Lead | null>(null)

  useEffect(() => {
    setLead(readLead())
    document.title = 'Obrigado — Schimid Consultoria'
    return () => {
      document.title = 'Schimid Consultoria — Gestão para Oficinas Mecânicas'
    }
  }, [])

  const primeiroNome = lead?.nome.trim().split(/\s+/)[0]
  const whatsappUrl = lead?.whatsappUrl || WHATSAPP_URL

  return (
    <div className="min-h-screen flex flex-col bg-azul-escuro text-cinza-claro overflow-x-hidden">
      {/* Header enxuto */}
      <header className="relative z-20 px-6 md:px-10 py-6">
        <div className="container-x flex items-center justify-between">
          <button
            type="button"
            onClick={() => navigate('/')}
            aria-label="Voltar para a página inicial"
          >
            <img
              src={logoSchimid}
              alt="Schimid"
              className="h-9 md:h-10 w-auto brightness-0 invert"
            />
          </button>
          <button
            type="button"
            onClick={() => navigate('/')}
            className="hidden sm:inline-flex items-center gap-2 font-sub text-[11px] uppercase tracking-[0.22em] text-cinza-texto hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar ao site
          </button>
        </div>
      </header>

      <main className="relative flex-1 px-6 md:px-10 py-12 md:py-20 overflow-hidden">
        {/* Glows de fundo */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[720px] h-[520px] rounded-full bg-azul-royal/35 blur-[140px] pointer-events-none" />
        <div className="absolute -bottom-40 -right-32 w-[460px] h-[460px] rounded-full bg-accent-vermelho/15 blur-[140px] pointer-events-none" />

        {/* Grade técnica sutil */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.07] pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
            backgroundSize: '56px 56px',
            maskImage: 'radial-gradient(ellipse at center, black 35%, transparent 75%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black 35%, transparent 75%)',
          }}
        />

        <div className="container-x relative">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.span
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent-vermelho/15 border border-accent-vermelho/30 text-accent-vermelho"
            >
              <CheckCircle2 className="w-10 h-10" />
            </motion.span>

            <div className="mt-8 flex items-center justify-center gap-4">
              <span className="h-px w-12 bg-accent-vermelho" />
              <span className="font-sub text-[11px] uppercase tracking-[0.35em] text-accent-vermelho">
                Solicitação recebida
              </span>
              <span className="h-px w-12 bg-accent-vermelho" />
            </div>

            <h1 className="mt-6 font-display font-bold text-4xl md:text-6xl text-white uppercase leading-[0.98]">
              {primeiroNome ? `Obrigado, ${primeiroNome}!` : 'Obrigado pelo contato!'}
              <br />
              <span className="shimmer-text">Recebemos seus dados.</span>
            </h1>

            <p className="mt-6 text-[15px] md:text-lg text-cinza-claro/80 leading-relaxed max-w-xl mx-auto">
              {lead?.empresa ? (
                <>
                  As informações da <strong className="text-white">{lead.empresa}</strong> já
                  estão com a nossa equipe. Agora é com a gente.
                </>
              ) : (
                <>Suas informações já estão com a nossa equipe. Agora é com a gente.</>
              )}
            </p>

            <div className="mt-9 flex flex-col sm:flex-row gap-3 items-center justify-center">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shiny !text-sm !px-7 !py-4"
              >
                <span>
                  Adiantar conversa no WhatsApp
                  <ArrowRight className="w-4 h-4" />
                </span>
              </a>
              <button type="button" onClick={() => navigate('/')} className="btn-outline">
                <ArrowLeft className="w-4 h-4" />
                Voltar ao site
              </button>
            </div>
          </motion.div>

          {/* Próximos passos */}
          <div className="mt-16 md:mt-20 grid gap-5 md:grid-cols-3 max-w-5xl mx-auto">
            {PROXIMOS_PASSOS.map(({ icon: Icon, titulo, texto }, i) => (
              <motion.div
                key={titulo}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.12 }}
                className="relative rounded-xl bg-white/[0.04] border border-white/10 p-6 text-center md:text-left"
              >
                <span className="absolute top-5 right-5 font-display font-bold text-3xl text-white/[0.07] leading-none">
                  0{i + 1}
                </span>
                <span className="inline-flex items-center justify-center w-11 h-11 rounded-md bg-accent-vermelho text-white">
                  <Icon className="w-5 h-5" />
                </span>
                <p className="mt-4 font-sub font-semibold uppercase tracking-wide text-sm text-white">
                  {titulo}
                </p>
                <p className="mt-2 text-[14px] leading-relaxed text-cinza-claro/65">{texto}</p>
              </motion.div>
            ))}
          </div>

          {/* Resumo do que foi enviado */}
          {lead && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="mt-12 max-w-3xl mx-auto rounded-xl border border-white/10 bg-azul-medio/40 p-6 md:p-8"
            >
              <p className="font-sub text-[11px] uppercase tracking-[0.3em] text-azul-brilho">
                Resumo do que você enviou
              </p>
              <dl className="mt-5 grid gap-x-8 gap-y-4 sm:grid-cols-2 text-[14px]">
                {[
                  ['Nome', lead.nome],
                  ['Empresa', lead.empresa],
                  ['Telefone', lead.telefone],
                  ['Equipe', lead.equipe],
                ].map(([rotulo, valor]) => (
                  <div key={rotulo}>
                    <dt className="font-sub text-[10px] uppercase tracking-[0.22em] text-cinza-texto">
                      {rotulo}
                    </dt>
                    <dd className="mt-1 text-white break-words">{valor}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-5 pt-5 border-t border-white/10">
                <dt className="font-sub text-[10px] uppercase tracking-[0.22em] text-cinza-texto">
                  Maior dificuldade hoje
                </dt>
                <dd className="mt-1.5 text-cinza-claro/85 leading-relaxed">{lead.dificuldade}</dd>
              </div>
            </motion.div>
          )}

          {/* Enquanto isso */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.85 }}
            className="mt-14 text-center"
          >
            <p className="text-cinza-texto text-sm">
              Enquanto isso, acompanhe os bastidores das oficinas que atendemos:
            </p>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2.5 px-5 py-3 rounded-full border border-white/15 text-white hover:border-white/40 hover:bg-white/5 transition-colors"
            >
              <Instagram className="w-4 h-4 text-accent-vermelho" />
              <span className="font-sub text-sm">{INSTAGRAM_HANDLE}</span>
            </a>
          </motion.div>
        </div>
      </main>

      <footer className="relative bg-azul-escuro border-t border-white/5 px-6 md:px-10 py-10">
        <div className="container-x flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <img
            src={logoSchimid}
            alt="Schimid"
            className="h-10 md:h-11 w-auto brightness-0 invert"
          />
          <p className="text-xs text-cinza-texto">
            © 2025 Schimid Consultoria. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}
