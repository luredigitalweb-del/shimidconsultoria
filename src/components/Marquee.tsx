const topItems = [
  'Gestão de Oficinas',
  'Mais Lucro Líquido',
  'Processos que Funcionam',
  'Equipe Autogerenciável',
  'Método Comprovado',
]

const bottomItems = [
  'Consultoria Prática',
  'Resultados Reais',
  'Schimid Consultoria',
  'Do Caos à Gestão',
  'Oficinas de Alto Padrão',
]

function Row({
  items,
  animation,
  duration,
  className,
  dotClassName,
}: {
  items: string[]
  animation: string
  duration: number
  className: string
  dotClassName: string
}) {
  return (
    <div className={`flex w-full overflow-hidden whitespace-nowrap py-4 ${className}`}>
      <div
        className="flex w-max will-change-transform"
        style={{ animation: `${animation} ${duration}s linear infinite` }}
      >
        {[0, 1, 2].map((copy) => (
          <div key={copy} className="flex items-center" aria-hidden={copy > 0}>
            {items.map((text) => (
              <span
                key={text}
                className="flex items-center px-8 font-sub text-[13px] font-semibold uppercase tracking-[0.22em]"
              >
                {text}
                <span className={`ml-8 w-1.5 h-1.5 rotate-45 ${dotClassName}`} />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Marquee() {
  return (
    <section
      aria-label="Destaques Schimid"
      className="relative marquee-mask border-t border-white/10"
    >
      {/* Faixa de cima — escura (separa do banner) */}
      <Row
        items={topItems}
        animation="marquee-left"
        duration={40}
        className="bg-azul-escuro text-cinza-claro shadow-[inset_0_-1px_0_rgba(255,255,255,0.06)] relative z-20"
        dotClassName="bg-accent-vermelho"
      />
      {/* Faixa de baixo — vermelha (flui pra seção Dores) */}
      <Row
        items={bottomItems}
        animation="marquee-right"
        duration={46}
        className="bg-gradient-to-b from-azul-royal to-azul-medio text-white shadow-[0_12px_30px_-10px_rgba(0,0,0,0.4)] relative z-10"
        dotClassName="bg-white/80"
      />
    </section>
  )
}
