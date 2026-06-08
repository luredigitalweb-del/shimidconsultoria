import { motion } from 'framer-motion'
import { Check, Star, ArrowRight, MapPin, Calendar } from 'lucide-react'
import { WHATSAPP_URL } from '../lib/constants'

type Section = {
  title: string
  items: string[]
}

type Plan = {
  tag: string
  title: string
  subtitle: string
  duration: string
  durationLabel: string
  location?: string
  featured?: boolean
  badgeLabel?: string
  sections: Section[]
}

const plans: Plan[] = [
  {
    tag: 'Imersão Presencial',
    title: 'Mentoria Presencial',
    subtitle:
      'Donos de oficinas que querem vivenciar o método na prática e desenhar um plano de ação imediato direto da fonte.',
    duration: '1 a 2 dias',
    durationLabel: 'Presencial intensivo',
    location: 'Oficina Schimid · Chopinzinho/PR',
    featured: true,
    badgeLabel: 'Mais Procurado',
    sections: [
      {
        title: 'O que você vai viver na prática',
        items: [
          'Imersão completa na rotina de uma oficina estruturada, rentável e leve',
          'Diagnóstico 360° — análise profunda da sua operação atual',
          'Plano de ação com prazos e prioridades bem definidos',
          'Acompanhamento direto dos sócios Diego e Jocenir',
          'Análise de indicadores que movem o lucro da empresa',
          'Acesso total: Atendimento, Checklist Digital, Orçamentação, Compras, Produção e Financeiro Essencial',
        ],
      },
      {
        title: 'Ferramentas e entregas inclusas',
        items: [
          'Planilha de precificação prática e simples',
          'Modelos de checklist e checkout profissional',
          'Planilha de controle de agendamento e produtividade',
          'Plano de ação 100% personalizado',
        ],
      },
    ],
  },
  {
    tag: 'Acompanhamento Recorrente',
    title: 'Consultoria Contínua',
    subtitle:
      'Quem busca uma transformação estruturada mês a mês, com acompanhamento de perto para garantir a implantação de cada processo.',
    duration: 'Mensal',
    durationLabel: 'Cadência recorrente',
    sections: [
      {
        title: 'Como funciona',
        items: [
          'Diagnóstico inicial — mapeamento completo dos setores, equipe e gargalos financeiros',
          'Plano de ação estruturado com cronograma passo a passo',
          'Suporte recorrente via encontros online semanais',
          'Análise mensal de indicadores via aplicativo ou planilhas',
          'Apoio em decisões estratégicas nos momentos mais importantes do seu negócio',
        ],
      },
      {
        title: 'Pilares de evolução da oficina',
        items: [
          'Organização de setores, equipe, financeiro e atendimento',
          'Separação total entre CNPJ e CPF',
          'Organograma, cargos, salários e bonificações por metas',
          'Liberdade geográfica e de tempo — operação autogerenciável',
        ],
      },
    ],
  },
]

export default function Servicos() {
  return (
    <section id="mentoria" className="section-pad relative bg-white text-azul-escuro overflow-hidden">
      <div className="container-x relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16 md:mb-20"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="h-px w-12 bg-accent-vermelho" />
            <span className="font-sub text-[11px] uppercase tracking-[0.35em] text-accent-vermelho">
              Mentoria e Consultoria
            </span>
            <span className="h-px w-12 bg-accent-vermelho" />
          </div>
          <h2 className="font-display font-bold text-3xl md:text-5xl uppercase leading-[1.05]">
            <span className="text-azul-escuro">Como </span>
            <span className="text-accent-vermelho">trabalhamos.</span>
          </h2>
          <p className="mt-6 text-base md:text-lg text-azul-escuro/65 max-w-2xl mx-auto leading-relaxed">
            Dois formatos para estruturar sua oficina. Escolha o que faz sentido pro seu momento.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 items-start">
          {plans.map((p, i) => {
            const isBlue = !!p.featured
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`group relative rounded-3xl p-7 md:p-10 transition-all duration-300 flex flex-col ${
                  isBlue
                    ? 'bg-azul-eletrico text-white shadow-[0_30px_80px_-20px_rgba(37,99,235,0.55)] lg:-translate-y-2'
                    : 'bg-white text-azul-escuro border-2 border-azul-escuro/15 shadow-[0_20px_60px_-30px_rgba(10,14,26,0.3)] hover:-translate-y-1 hover:border-azul-escuro/30'
                }`}
              >
                {/* Badge featured */}
                {p.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-2 px-5 py-2 rounded-full bg-accent-vermelho text-white font-sub font-semibold text-xs uppercase tracking-[0.15em] shadow-[0_10px_30px_rgba(225,25,25,0.45)]">
                    <Star className="w-3.5 h-3.5 fill-white text-white" strokeWidth={0} />
                    {p.badgeLabel}
                  </div>
                )}

                {/* Tag */}
                <span
                  className={`font-sub text-[11px] uppercase tracking-[0.3em] ${
                    isBlue ? 'text-white/75' : 'text-accent-vermelho'
                  }`}
                >
                  {p.tag}
                </span>

                {/* Title */}
                <h3
                  className={`mt-3 font-display font-bold text-3xl md:text-4xl uppercase leading-tight ${
                    isBlue ? 'text-white' : 'text-azul-escuro'
                  }`}
                >
                  {p.title}
                </h3>

                {/* Subtitle (Ideal para) */}
                <p className={`mt-4 text-[14.5px] leading-relaxed ${isBlue ? 'text-white/85' : 'text-azul-escuro/65'}`}>
                  <span className={`font-sub text-[10px] uppercase tracking-[0.2em] mr-2 ${isBlue ? 'text-white/60' : 'text-azul-escuro/50'}`}>
                    Ideal para:
                  </span>
                  {p.subtitle}
                </p>

                {/* Meta info: duração + local */}
                <div className={`mt-6 grid ${p.location ? 'sm:grid-cols-2' : 'grid-cols-1'} gap-3 pb-6 border-b ${isBlue ? 'border-white/15' : 'border-azul-escuro/10'}`}>
                  <div className="flex items-start gap-3">
                    <Calendar className={`w-5 h-5 flex-shrink-0 mt-0.5 ${isBlue ? 'text-white/80' : 'text-accent-vermelho'}`} strokeWidth={1.6} />
                    <div>
                      <p className={`font-display font-bold text-lg leading-tight uppercase ${isBlue ? 'text-white' : 'text-azul-escuro'}`}>
                        {p.duration}
                      </p>
                      <p className={`font-sub text-[10px] uppercase tracking-[0.15em] mt-0.5 ${isBlue ? 'text-white/60' : 'text-azul-escuro/50'}`}>
                        {p.durationLabel}
                      </p>
                    </div>
                  </div>
                  {p.location && (
                    <div className="flex items-start gap-3">
                      <MapPin className={`w-5 h-5 flex-shrink-0 mt-0.5 ${isBlue ? 'text-white/80' : 'text-accent-vermelho'}`} strokeWidth={1.6} />
                      <div>
                        <p className={`font-display font-bold text-sm leading-tight ${isBlue ? 'text-white' : 'text-azul-escuro'}`}>
                          Local
                        </p>
                        <p className={`text-[12px] mt-0.5 ${isBlue ? 'text-white/75' : 'text-azul-escuro/65'}`}>
                          {p.location}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Sections (cada um com title + items) */}
                <div className="mt-6 space-y-7 flex-1">
                  {p.sections.map((sec) => (
                    <div key={sec.title}>
                      <h4
                        className={`font-sub text-[11px] uppercase tracking-[0.25em] mb-3 ${
                          isBlue ? 'text-white/70' : 'text-accent-vermelho'
                        }`}
                      >
                        {sec.title}
                      </h4>
                      <ul className="space-y-2.5">
                        {sec.items.map((it) => (
                          <li
                            key={it}
                            className={`flex items-start gap-3 text-[14px] leading-relaxed ${
                              isBlue ? 'text-white' : 'text-azul-escuro/85'
                            }`}
                          >
                            <span
                              className={`flex-shrink-0 flex items-center justify-center w-4 h-4 rounded-full mt-0.5 ${
                                isBlue
                                  ? 'bg-white text-azul-eletrico'
                                  : 'bg-accent-vermelho text-white'
                              }`}
                            >
                              <Check className="w-2.5 h-2.5" strokeWidth={3.5} />
                            </span>
                            <span>{it}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className={`group/btn relative mt-8 w-full inline-flex items-center justify-center gap-2 py-4 rounded-full font-sub font-semibold uppercase tracking-[0.15em] text-sm overflow-hidden transition-all ${
                    isBlue
                      ? 'bg-white text-azul-eletrico hover:bg-azul-escuro hover:text-white'
                      : 'bg-accent-vermelho text-white hover:bg-vermelho-escuro shadow-[0_10px_30px_rgba(225,25,25,0.35)]'
                  }`}
                >
                  <span className="relative z-10 transition-transform duration-300 group-hover/btn:-translate-x-1">
                    Quero saber mais
                  </span>
                  <ArrowRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </a>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
