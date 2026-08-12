import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS } from '../lib/constants'
import logoSchimid from '../assets/logo-schimid.png'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed top-4 md:top-5 inset-x-0 z-50 px-4 md:px-6 transition-all duration-300">
      <div
        className={`container-x flex items-center justify-between h-16 md:h-[68px] pl-5 md:pl-7 pr-3 md:pr-3 rounded-full transition-all duration-300 ${
          scrolled
            ? 'backdrop-blur-xl bg-azul-escuro/80 border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.4)]'
            : 'backdrop-blur-md bg-azul-escuro/50 border border-white/5'
        }`}
      >
        <a href="#top" className="flex items-center">
          <img
            src={logoSchimid}
            alt="Schimid"
            className="h-9 md:h-10 w-auto brightness-0 invert"
          />
        </a>

        <nav className="hidden lg:flex items-center gap-9">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative font-sub text-xs uppercase tracking-[0.2em] text-cinza-claro hover:text-white transition-colors group"
            >
              {l.label}
              <span className="absolute left-0 -bottom-1.5 h-px w-0 bg-azul-brilho transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <a
          href="#diagnostico"
          className="hidden xl:inline-flex btn-shiny"
        >
          <span>Diagnóstico gratuito</span>
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden p-2 text-white"
          aria-label="Menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden absolute top-[88px] right-4 left-4 rounded-3xl bg-azul-escuro/95 backdrop-blur-xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.5)] px-8 py-8 flex flex-col gap-5"
          >
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-sub text-base uppercase tracking-[0.2em] text-cinza-claro hover:text-white"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#diagnostico"
              onClick={() => setOpen(false)}
              className="btn-primary mt-4"
            >
              Diagnóstico gratuito
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
