import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import {
  AlertTriangle,
  ArrowRight,
  Building2,
  ChevronDown,
  Loader2,
  Lock,
  MessageSquare,
  Phone,
  User,
  Users,
} from 'lucide-react'
import PhoneInput from './PhoneInput'
import { DEFAULT_COUNTRY, applyMask, minDigits, type Country } from '../lib/countries'
import { WHATSAPP_URL } from '../lib/constants'
import { capturarUtms, enviarLeadParaCrm } from '../lib/crm'
import { saveLead } from '../lib/lead'
import { navigate } from '../lib/router'

const COLABORADORES = [
  'Somente eu',
  '2 a 5 colaboradores',
  '6 a 10 colaboradores',
  '11 a 20 colaboradores',
  '21 a 50 colaboradores',
  'Mais de 50 colaboradores',
]

const PASSOS = [
  {
    n: '01',
    titulo: 'Você preenche',
    texto: 'Leva menos de 1 minuto. Só o essencial pra entendermos seu cenário.',
  },
  {
    n: '02',
    titulo: 'Analisamos sua oficina',
    texto: 'Cruzamos suas respostas com os gargalos que já vimos em dezenas de operações.',
  },
  {
    n: '03',
    titulo: 'Conversamos no WhatsApp',
    texto: 'Uma conversa direta, sem enrolação, sobre o que trava o lucro do seu negócio.',
  },
]

type Errors = Partial<Record<'nome' | 'empresa' | 'telefone' | 'equipe' | 'dificuldade', string>>

function Label({ htmlFor, icon: Icon, children }: { htmlFor: string; icon: any; children: string }) {
  return (
    <label
      htmlFor={htmlFor}
      className="flex items-center gap-2 mb-2 font-sub text-[11px] uppercase tracking-[0.22em] text-white/55"
    >
      <Icon className="w-3.5 h-3.5 text-azul-brilho" />
      {children}
    </label>
  )
}

const fieldBase =
  'w-full rounded-lg bg-white/[0.06] border px-4 py-3.5 text-[15px] text-white placeholder:text-white/30 outline-none transition-colors duration-200 focus:bg-white/[0.09]'

function fieldClass(invalid?: boolean) {
  return `${fieldBase} ${
    invalid ? 'border-accent-vermelho' : 'border-white/10 focus:border-azul-brilho'
  }`
}

export default function Formulario() {
  const [nome, setNome] = useState('')
  const [empresa, setEmpresa] = useState('')
  const [country, setCountry] = useState<Country>(DEFAULT_COUNTRY)
  const [telefone, setTelefone] = useState('')
  const [equipe, setEquipe] = useState('')
  const [dificuldade, setDificuldade] = useState('')
  const [errors, setErrors] = useState<Errors>({})
  const [enviando, setEnviando] = useState(false)
  const [falhaEnvio, setFalhaEnvio] = useState(false)

  const telefoneFormatado = `+${country.dial} ${applyMask(country, telefone)}`

  const mensagemUrl = (() => {
    const texto = [
      `Olá! Vim pelo site e quero um diagnóstico da minha oficina.`,
      ``,
      `Nome: ${nome}`,
      `Empresa: ${empresa}`,
      `Telefone: ${telefoneFormatado}`,
      `Equipe: ${equipe}`,
      `Maior dificuldade hoje: ${dificuldade}`,
    ].join('\n')
    return `${WHATSAPP_URL.split('?')[0]}?text=${encodeURIComponent(texto)}`
  })()

  function validar(): Errors {
    const next: Errors = {}
    if (nome.trim().length < 2) next.nome = 'Informe seu nome.'
    if (empresa.trim().length < 2) next.empresa = 'Informe o nome da empresa.'
    if (telefone.length < minDigits(country)) next.telefone = 'Informe um telefone válido.'
    if (!equipe) next.equipe = 'Selecione o tamanho da equipe.'
    if (dificuldade.trim().length < 10) next.dificuldade = 'Conte um pouco mais (mín. 10 caracteres).'
    return next
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()
    if (enviando) return

    const next = validar()
    setErrors(next)
    if (Object.keys(next).length > 0) return

    setFalhaEnvio(false)
    setEnviando(true)

    const enviado = await enviarLeadParaCrm({
      nome: nome.trim(),
      empresa: empresa.trim(),
      telefone: telefoneFormatado,
      telefone_e164: `${country.dial}${telefone}`,
      ddi: country.dial,
      pais: country.name,
      colaboradores: equipe,
      dificuldade: dificuldade.trim(),
      origem: 'site-schimid-lp',
      pagina: window.location.href,
      enviado_em: new Date().toISOString(),
      ...capturarUtms(),
    })

    if (!enviado) {
      setEnviando(false)
      setFalhaEnvio(true)
      return
    }

    const fbq = (window as any).fbq
    if (typeof fbq === 'function') fbq('track', 'Lead')

    saveLead({
      nome: nome.trim(),
      empresa: empresa.trim(),
      telefone: telefoneFormatado,
      equipe,
      dificuldade: dificuldade.trim(),
      whatsappUrl: mensagemUrl,
    })

    navigate('/obrigado')
  }

  return (
    <section
      id="diagnostico"
      className="section-pad relative bg-white text-azul-escuro overflow-hidden"
    >
      {/* Glows suaves de fundo */}
      <div className="absolute -top-40 -left-32 w-[520px] h-[520px] rounded-full bg-azul-royal/10 blur-[130px] pointer-events-none" />
      <div className="absolute -bottom-40 -right-32 w-[460px] h-[460px] rounded-full bg-accent-vermelho/10 blur-[130px] pointer-events-none" />

      {/* Grade técnica sutil */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.045] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, #0A0E1A 1px, transparent 1px), linear-gradient(to bottom, #0A0E1A 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 78%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 78%)',
        }}
      />

      <div className="container-x relative grid lg:grid-cols-[1fr_1.05fr] gap-12 lg:gap-16 items-center">
        {/* COLUNA ESQUERDA — contexto */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="text-center lg:text-left"
        >
          <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
            <span className="h-px w-12 bg-accent-vermelho" />
            <span className="font-sub text-[11px] uppercase tracking-[0.35em] text-accent-vermelho">
              Diagnóstico gratuito
            </span>
          </div>

          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl uppercase leading-[1.03]">
            <span className="text-azul-escuro">Descubra onde sua oficina </span>
            <span className="shimmer-text-red">está perdendo dinheiro.</span>
          </h2>

          <p className="mt-6 text-azul-escuro/70 text-[15px] md:text-base leading-relaxed max-w-lg mx-auto lg:mx-0">
            Preencha o formulário ao lado e nossa equipe analisa o cenário da sua
            operação antes mesmo da primeira conversa. Sem custo, sem compromisso
            e sem discurso pronto.
          </p>

          {/* Passos */}
          <ol className="mt-10 space-y-6 text-left max-w-md mx-auto lg:mx-0">
            {PASSOS.map((passo, i) => (
              <motion.li
                key={passo.n}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative flex gap-5 pl-0"
              >
                <span className="font-display font-bold text-2xl md:text-3xl leading-none text-accent-vermelho/90 w-10 shrink-0 pt-0.5">
                  {passo.n}
                </span>
                <div className="border-l-2 border-azul-escuro/10 pl-5">
                  <p className="font-sub font-semibold text-azul-escuro uppercase tracking-wide text-sm">
                    {passo.titulo}
                  </p>
                  <p className="mt-1.5 text-azul-escuro/65 text-[14px] leading-relaxed">
                    {passo.texto}
                  </p>
                </div>
              </motion.li>
            ))}
          </ol>

          <div className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-3 text-azul-escuro/60">
            <span className="flex items-center gap-2 text-[13px]">
              <Lock className="w-4 h-4 text-accent-vermelho" />
              Seus dados não são compartilhados
            </span>
          </div>
        </motion.div>

        {/* COLUNA DIREITA — formulário */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative"
        >
          {/* Moldura decorativa */}
          <div className="absolute -inset-3 rounded-[26px] border border-azul-escuro/10 pointer-events-none hidden md:block" />

          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-azul-medio to-azul-escuro shadow-[0_35px_80px_-30px_rgba(10,14,26,0.75)]">
            {/* Faixa vermelha no topo */}
            <div className="h-1.5 w-full bg-accent-vermelho" />

            <div className="p-6 md:p-9">
                  <h3 className="font-display font-bold text-2xl md:text-3xl text-white uppercase leading-tight text-center lg:text-left">
                    Solicite seu diagnóstico
                  </h3>
                  <p className="mt-2 text-white/55 text-sm text-center lg:text-left">
                    Leva menos de 1 minuto para preencher.
                  </p>

                  <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-5">
                    {/* Nome */}
                    <div>
                      <Label htmlFor="form-nome" icon={User}>
                        Seu nome
                      </Label>
                      <input
                        id="form-nome"
                        type="text"
                        autoComplete="name"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        placeholder="Como podemos te chamar?"
                        className={fieldClass(!!errors.nome)}
                      />
                      {errors.nome && (
                        <p className="mt-1.5 text-[12px] text-accent-vermelho">{errors.nome}</p>
                      )}
                    </div>

                    {/* Empresa */}
                    <div>
                      <Label htmlFor="form-empresa" icon={Building2}>
                        Nome da empresa
                      </Label>
                      <input
                        id="form-empresa"
                        type="text"
                        autoComplete="organization"
                        value={empresa}
                        onChange={(e) => setEmpresa(e.target.value)}
                        placeholder="Ex.: Schimid Mecânica"
                        className={fieldClass(!!errors.empresa)}
                      />
                      {errors.empresa && (
                        <p className="mt-1.5 text-[12px] text-accent-vermelho">{errors.empresa}</p>
                      )}
                    </div>

                    {/* Telefone */}
                    <div>
                      <Label htmlFor="form-telefone" icon={Phone}>
                        Seu telefone
                      </Label>
                      <PhoneInput
                        id="form-telefone"
                        country={country}
                        onCountryChange={setCountry}
                        value={telefone}
                        onChange={setTelefone}
                        invalid={!!errors.telefone}
                      />
                      {errors.telefone && (
                        <p className="mt-1.5 text-[12px] text-accent-vermelho">{errors.telefone}</p>
                      )}
                    </div>

                    {/* Colaboradores */}
                    <div>
                      <Label htmlFor="form-equipe" icon={Users}>
                        Quantos colaboradores vocês possuem hoje
                      </Label>
                      <div className="relative">
                        <select
                          id="form-equipe"
                          value={equipe}
                          onChange={(e) => setEquipe(e.target.value)}
                          className={`${fieldClass(!!errors.equipe)} appearance-none pr-11 ${
                            equipe ? 'text-white' : 'text-white/30'
                          }`}
                        >
                          <option value="" disabled className="bg-azul-escuro text-white/50">
                            Selecione o tamanho da equipe
                          </option>
                          {COLABORADORES.map((opcao) => (
                            <option key={opcao} value={opcao} className="bg-azul-escuro text-white">
                              {opcao}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                      </div>
                      {errors.equipe && (
                        <p className="mt-1.5 text-[12px] text-accent-vermelho">{errors.equipe}</p>
                      )}
                    </div>

                    {/* Dificuldade */}
                    <div>
                      <Label htmlFor="form-dificuldade" icon={MessageSquare}>
                        Maior dificuldade que vocês enfrentam hoje
                      </Label>
                      <textarea
                        id="form-dificuldade"
                        rows={4}
                        value={dificuldade}
                        onChange={(e) => setDificuldade(e.target.value)}
                        placeholder="Ex.: o faturamento cresce, mas o lucro não aparece no fim do mês."
                        className={`${fieldClass(!!errors.dificuldade)} resize-none leading-relaxed`}
                      />
                      {errors.dificuldade && (
                        <p className="mt-1.5 text-[12px] text-accent-vermelho">
                          {errors.dificuldade}
                        </p>
                      )}
                    </div>

                    {falhaEnvio && (
                      <div className="flex items-start gap-3 rounded-lg border border-accent-vermelho/40 bg-accent-vermelho/10 px-4 py-3">
                        <AlertTriangle className="w-4 h-4 mt-0.5 shrink-0 text-accent-vermelho" />
                        <p className="text-[13px] leading-relaxed text-white/80">
                          Não conseguimos enviar agora. Tente novamente em alguns
                          instantes ou{' '}
                          <a
                            href={mensagemUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline font-semibold text-white hover:text-accent-vermelho"
                          >
                            fale direto no WhatsApp
                          </a>
                          .
                        </p>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={enviando}
                      aria-busy={enviando}
                      className="btn-shiny w-full !text-sm !px-7 !py-4 justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      <span>
                        {enviando ? (
                          <>
                            Enviando...
                            <Loader2 className="w-4 h-4 animate-spin" />
                          </>
                        ) : (
                          <>
                            Quero meu diagnóstico
                            <ArrowRight className="w-4 h-4" />
                          </>
                        )}
                      </span>
                    </button>

                    <p className="text-center text-[12px] text-white/40 leading-relaxed">
                      Ao enviar, você recebe a confirmação e nossa equipe entra em
                      contato pelo WhatsApp informado.
                    </p>
                  </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
