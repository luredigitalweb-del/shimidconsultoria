import { motion } from 'framer-motion'
import { Check, X } from 'lucide-react'

type Item = { title: string; desc: string }

const sim: Item[] = [
  {
    title: 'Fatura acima de R$ 80.000 por mês',
    desc: 'Sabe que sua oficina tem potencial para reter muito mais lucro líquido.',
  },
  {
    title: 'Quer crescer com organização, não com caos',
    desc: 'Deseja ver os mecânicos produzindo mais, com processos-chave rodando redondos.',
  },
  {
    title: 'Busca qualidade de vida sem abrir mão do resultado',
    desc: 'Quer implementar bonificações por metas e ter uma equipe engajada que permita à empresa faturar sem precisar trabalhar aos sábados.',
  },
  {
    title: 'Quer parar de ser o único que resolve tudo',
    desc: 'Deseja transformar sua oficina em uma empresa autogerenciável, onde cada líder sabe exatamente o que fazer mesmo sem a sua presença.',
  },
  {
    title: 'Está disposto a aplicar o método na prática',
    desc: 'Pronto para separar de vez o CNPJ do CPF e profissionalizar a gestão.',
  },
]

const nao: Item[] = [
  {
    title: 'Busca fórmulas mágicas sem comprometimento',
    desc: 'Acha que o faturamento vai dobrar sozinho sem que você precise liderar e aplicar processos.',
  },
  {
    title: 'Não tem disposição para mudar a forma de operar',
    desc: 'Prefere continuar centralizando tudo e sendo escravo da própria oficina em vez de dar autonomia à equipe.',
  },
  {
    title: 'Ainda não atingiu um faturamento mínimo estruturado',
    desc: 'Se a operação ainda está no estágio inicial e não fatura o piso ideal para absorver uma consultoria de alto impacto.',
  },
  {
    title: 'Quer resultado sem aplicar o método',
    desc: 'Não está disposto a usar as planilhas de precificação, ferramentas de agendamento ou o checklist digital no dia a dia.',
  },
  {
    title: 'Não acredita em consultoria prática',
    desc: 'Prefere continuar operando no amadorismo, sem acompanhar indicadores e metas reais mês a mês.',
  },
]

export default function ParaQuem() {
  return (
    <section id="para-quem" className="section-pad relative bg-white text-azul-escuro overflow-hidden">
      <div className="container-x relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto mb-16 text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="h-px w-12 bg-accent-vermelho" />
            <span className="font-sub text-[11px] uppercase tracking-[0.35em] text-accent-vermelho">
              Para quem é
            </span>
            <span className="h-px w-12 bg-accent-vermelho" />
          </div>
          <h2 className="font-display font-bold text-3xl md:text-5xl uppercase leading-[1.05]">
            <span className="text-azul-escuro">Antes de seguir, </span>
            <span className="text-accent-vermelho">seja honesto consigo mesmo.</span>
          </h2>
        </motion.div>

        {/* Tabela — empilha no mobile, 2 colunas no desktop */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 md:grid-cols-2 rounded-2xl border border-azul-escuro/15 bg-white shadow-[0_20px_60px_-30px_rgba(10,14,26,0.25)] overflow-hidden"
        >
          {/* Coluna: É pra você */}
          <div className="md:border-r border-azul-escuro/10">
            <div className="h-1.5 bg-azul-eletrico" />
            <div className="px-6 md:px-10 py-6 border-b border-azul-escuro/10 bg-azul-eletrico/5">
              <div className="flex items-center gap-3.5">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-azul-eletrico text-white shadow-[0_8px_20px_rgba(37,99,235,0.4)]">
                  <Check className="w-5 h-5" strokeWidth={3.5} />
                </span>
                <div>
                  <h3 className="font-display font-bold text-lg md:text-2xl text-azul-escuro uppercase leading-none">
                    É pra você
                  </h3>
                  <p className="mt-1 font-sub text-[10px] uppercase tracking-[0.25em] text-azul-eletrico">
                    Pronto para escalar
                  </p>
                </div>
              </div>
            </div>
            <ul className="divide-y divide-azul-escuro/10">
              {sim.map((s, i) => (
                <motion.li
                  key={s.title}
                  initial={{ opacity: 0, x: -28 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ duration: 0.45, ease: 'easeOut', delay: i * 0.06 }}
                  className="group relative flex items-start gap-3 md:gap-4 px-6 md:px-8 py-5 md:py-6 transition-colors hover:bg-azul-eletrico/[0.05]"
                >
                  <span className="absolute left-0 top-0 h-full w-1 bg-azul-eletrico origin-top scale-y-0 transition-transform duration-300 group-hover:scale-y-100" />
                  <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-azul-eletrico text-white mt-0.5 transition-transform duration-300 group-hover:scale-110">
                    <Check className="w-3.5 h-3.5" strokeWidth={3.5} />
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="font-display font-bold text-base md:text-lg text-azul-escuro uppercase leading-tight">
                      {s.title}
                    </p>
                    <p className="mt-1.5 text-azul-escuro/65 text-[13.5px] md:text-sm leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Coluna: Não é pra você */}
          <div className="border-t md:border-t-0 border-azul-escuro/10">
            <div className="h-1.5 bg-accent-vermelho" />
            <div className="px-6 md:px-10 py-6 border-b border-azul-escuro/10 bg-accent-vermelho/5">
              <div className="flex items-center gap-3.5">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent-vermelho text-white shadow-[0_8px_20px_rgba(225,25,25,0.4)]">
                  <X className="w-5 h-5" strokeWidth={3.5} />
                </span>
                <div>
                  <h3 className="font-display font-bold text-lg md:text-2xl text-azul-escuro uppercase leading-none">
                    Não é pra você
                  </h3>
                  <p className="mt-1 font-sub text-[10px] uppercase tracking-[0.25em] text-accent-vermelho">
                    Talvez não seja a hora
                  </p>
                </div>
              </div>
            </div>
            <ul className="divide-y divide-azul-escuro/10">
              {nao.map((n, i) => (
                <motion.li
                  key={n.title}
                  initial={{ opacity: 0, x: 28 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ duration: 0.45, ease: 'easeOut', delay: i * 0.06 }}
                  className="group relative flex items-start gap-3 md:gap-4 px-6 md:px-8 py-5 md:py-6 transition-colors hover:bg-accent-vermelho/[0.05]"
                >
                  <span className="absolute left-0 top-0 h-full w-1 bg-accent-vermelho origin-top scale-y-0 transition-transform duration-300 group-hover:scale-y-100" />
                  <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-accent-vermelho text-white mt-0.5 transition-transform duration-300 group-hover:scale-110">
                    <X className="w-3.5 h-3.5" strokeWidth={3.5} />
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="font-display font-bold text-base md:text-lg text-azul-escuro/70 uppercase leading-tight line-through decoration-accent-vermelho/50 decoration-2">
                      {n.title}
                    </p>
                    <p className="mt-1.5 text-azul-escuro/55 text-[13.5px] md:text-sm leading-relaxed">
                      {n.desc}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
