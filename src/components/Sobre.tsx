import { motion } from 'framer-motion'
import socio1 from '../assets/socio-1.jpg'
import socio2 from '../assets/socio-2.jpg'
import chave from '../assets/chave.png'

const socios = [
  {
    img: socio1,
    name: 'Jocenir Modkowski',
    role: 'Cofundador',
    bio: 'Operação, processos e gestão de equipe.',
  },
  {
    img: socio2,
    name: 'Diego Schimid',
    role: 'Cofundador',
    bio: 'Estratégia, posicionamento e relacionamento.',
  },
]

export default function Sobre() {
  return (
    <section id="sobre" className="section-pad relative bg-white text-azul-escuro overflow-hidden">
      {/* Chave decorativa no canto */}
      <img
        src={chave}
        alt=""
        aria-hidden
        className="pointer-events-none select-none absolute -bottom-28 -left-24 w-[320px] md:w-[480px] opacity-90 -rotate-12 drop-shadow-xl"
      />

      <div className="container-x relative grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* TEXTO — esquerda */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="h-px w-12 bg-accent-vermelho" />
            <span className="font-sub text-[11px] uppercase tracking-[0.35em] text-accent-vermelho">
              Quem somos
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl uppercase leading-[1.03]">
            <span className="text-azul-escuro">Nascemos dentro da oficina. </span>
            <span className="shimmer-text-red">Não de dentro de uma sala de aula.</span>
          </h2>

          <div className="mt-8 space-y-4 text-azul-escuro/75 text-[15px] md:text-base leading-relaxed">
            <p>
              Nossa trajetória começou enfrentando os mesmos desafios que você
              enfrenta hoje: falta de processos, gestão travada, equipe sem
              resultado, financeiro sem previsibilidade.
            </p>
            <p>
              Com anos de operação real, estruturamos métodos próprios de gestão,
              atendimento, produtividade e liderança — transformamos a Schimid
              Mecânica em um modelo profissional e escalável.
            </p>
          </div>

          <p className="mt-7 font-sub text-lg md:text-xl text-azul-escuro border-l-2 border-accent-vermelho pl-4">
            A partir dessa experiência prática,{' '}
            <span className="text-accent-vermelho font-bold">nasceu a consultoria.</span>
          </p>
        </motion.div>

        {/* SÓCIOS — direita */}
        <div className="grid grid-cols-2 gap-4 md:gap-6">
          {socios.map((s, i) => (
            <motion.figure
              key={s.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl border border-azul-escuro/10">
                <img
                  src={s.img}
                  alt={s.name}
                  className="w-full h-full object-cover"
                />
                {/* Faixa lateral vermelha (referência identidade visual) */}
                <div className="absolute top-0 bottom-0 right-0 w-1.5 bg-accent-vermelho" />
              </div>
              <figcaption className="mt-4">
                <p className="font-display font-bold text-lg md:text-xl text-azul-escuro uppercase leading-tight">
                  {s.name}
                </p>
                <p className="mt-1 font-sub text-[10px] md:text-[11px] uppercase tracking-[0.25em] text-accent-vermelho">
                  {s.role}
                </p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
