import { useEffect, useMemo, useRef, useState } from 'react'
import { ChevronDown, Search } from 'lucide-react'
import {
  COUNTRIES,
  applyMask,
  maskPlaceholder,
  maxDigits,
  normalize,
  type Country,
} from '../lib/countries'

function Flag({ iso2, className = '' }: { iso2: string; className?: string }) {
  return (
    <img
      src={`https://flagcdn.com/w40/${iso2}.png`}
      srcSet={`https://flagcdn.com/w80/${iso2}.png 2x`}
      alt=""
      aria-hidden
      loading="lazy"
      width={24}
      height={16}
      className={`w-6 h-4 object-cover rounded-[2px] shadow-[0_0_0_1px_rgba(255,255,255,0.15)] ${className}`}
    />
  )
}

type Props = {
  country: Country
  onCountryChange: (country: Country) => void
  value: string
  onChange: (digits: string) => void
  invalid?: boolean
  id?: string
}

export default function PhoneInput({
  country,
  onCountryChange,
  value,
  onChange,
  invalid,
  id,
}: Props) {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const wrapperRef = useRef<HTMLDivElement>(null)
  const searchRef = useRef<HTMLInputElement>(null)

  const results = useMemo(() => {
    const q = normalize(query)
    if (!q) return COUNTRIES
    const onlyDigits = q.replace(/\D/g, '')
    return COUNTRIES.filter(
      (c) =>
        normalize(c.name).includes(q) ||
        (onlyDigits.length > 0 && c.dial.startsWith(onlyDigits)),
    )
  }, [query])

  // Fecha ao clicar fora
  useEffect(() => {
    if (!open) return
    function handlePointer(event: MouseEvent) {
      if (!wrapperRef.current?.contains(event.target as Node)) setOpen(false)
    }
    function handleKey(event: KeyboardEvent) {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', handlePointer)
    document.addEventListener('keydown', handleKey)
    return () => {
      document.removeEventListener('mousedown', handlePointer)
      document.removeEventListener('keydown', handleKey)
    }
  }, [open])

  useEffect(() => {
    if (open) searchRef.current?.focus()
    else setQuery('')
  }, [open])

  function select(next: Country) {
    onCountryChange(next)
    onChange(value.slice(0, maxDigits(next)))
    setOpen(false)
  }

  return (
    <div ref={wrapperRef} className="relative">
      <div
        className={`flex items-center rounded-lg bg-white/[0.06] border transition-colors duration-200 focus-within:bg-white/[0.09] ${
          invalid
            ? 'border-accent-vermelho'
            : 'border-white/10 focus-within:border-azul-brilho'
        }`}
      >
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-label={`País selecionado: ${country.name}. Trocar país`}
          className="flex items-center gap-1.5 pl-3 pr-2 py-3.5 rounded-l-lg text-white/80 hover:text-white transition-colors"
        >
          <Flag iso2={country.iso2} />
          <ChevronDown
            className={`w-3.5 h-3.5 transition-transform duration-200 ${
              open ? 'rotate-180' : ''
            }`}
          />
        </button>

        <span className="w-px self-stretch my-2.5 bg-white/10" />

        <span className="pl-3 font-sub text-[15px] text-white/60 tabular-nums select-none">
          +{country.dial}
        </span>

        <input
          id={id}
          type="tel"
          inputMode="numeric"
          autoComplete="tel-national"
          value={applyMask(country, value)}
          placeholder={maskPlaceholder(country)}
          onChange={(e) => {
            const digits = e.target.value.replace(/\D/g, '')
            onChange(digits.slice(0, maxDigits(country)))
          }}
          className="flex-1 min-w-0 bg-transparent px-2.5 py-3.5 text-[15px] text-white placeholder:text-white/30 outline-none"
        />
      </div>

      {open && (
        <div className="absolute z-30 mt-2 w-full max-w-[340px] rounded-xl border border-white/15 bg-azul-escuro shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] overflow-hidden">
          <div className="flex items-center gap-2 px-3 py-2.5 border-b border-white/10">
            <Search className="w-4 h-4 text-white/40 shrink-0" />
            <input
              ref={searchRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar país ou DDI"
              className="w-full bg-transparent text-sm text-white placeholder:text-white/30 outline-none"
            />
          </div>

          <ul
            role="listbox"
            className="max-h-60 overflow-y-auto overscroll-contain py-1 [scrollbar-width:thin]"
          >
            {results.map((c) => (
              <li key={c.iso2 + c.dial}>
                <button
                  type="button"
                  role="option"
                  aria-selected={c.iso2 === country.iso2}
                  onClick={() => select(c)}
                  className={`w-full flex items-center gap-3 px-3 py-2 text-left text-sm transition-colors ${
                    c.iso2 === country.iso2
                      ? 'bg-azul-royal/40 text-white'
                      : 'text-white/80 hover:bg-white/[0.07] hover:text-white'
                  }`}
                >
                  <Flag iso2={c.iso2} />
                  <span className="flex-1 truncate">{c.name}</span>
                  <span className="text-white/45 tabular-nums">+{c.dial}</span>
                </button>
              </li>
            ))}
            {results.length === 0 && (
              <li className="px-3 py-6 text-center text-sm text-white/40">
                Nenhum país encontrado
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  )
}
