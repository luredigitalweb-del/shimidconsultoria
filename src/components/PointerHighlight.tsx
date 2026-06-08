import { useRef, useEffect, useState, type ReactNode } from 'react'
import { motion } from 'framer-motion'

function PointerIcon({ className }: { className?: string }) {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 16 16"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z" />
    </svg>
  )
}

type ShimmerProps = {
  children: ReactNode
  className?: string
  /** Gradient classes — defaults work on light backgrounds */
  gradientClassName?: string
}

export function ShimmerText({ children, className = '', gradientClassName }: ShimmerProps) {
  return (
    <motion.span
      initial={{ backgroundPosition: '-200% 0' }}
      animate={{ backgroundPosition: '200% 0' }}
      transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
      className={`relative z-10 inline-block bg-clip-text text-transparent bg-gradient-to-r bg-[length:200%_100%] ${
        gradientClassName ?? 'from-azul-eletrico via-azul-brilho to-azul-eletrico'
      } ${className}`}
    >
      {children}
    </motion.span>
  )
}

type PointerHighlightProps = {
  children: ReactNode
  rectangleClassName?: string
  pointerClassName?: string
  containerClassName?: string
}

export function PointerHighlight({
  children,
  rectangleClassName = 'border-azul-eletrico/60',
  pointerClassName = 'text-azul-eletrico',
  containerClassName = '',
}: PointerHighlightProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [dim, setDim] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const update = () => {
      const r = el.getBoundingClientRect()
      setDim({ width: r.width, height: r.height })
    }
    update()
    const ro = new ResizeObserver(update)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  return (
    <span
      ref={containerRef}
      className={`relative inline-block w-fit align-baseline ${containerClassName}`}
    >
      {children}
      {dim.width > 0 && dim.height > 0 && (
        <motion.span
          className="pointer-events-none absolute inset-0 z-0 hidden md:block"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          <motion.span
            className={`absolute left-0 top-0 block border ${rectangleClassName}`}
            initial={{ width: 0, height: 0 }}
            whileInView={{ width: dim.width, height: dim.height }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
          />
          <motion.span
            className="pointer-events-none absolute left-0 top-0 inline-block"
            initial={{ opacity: 0, x: 0, y: 0 }}
            whileInView={{
              opacity: 1,
              x: dim.width + 4,
              y: dim.height + 4,
            }}
            viewport={{ once: true, amount: 0.5 }}
            style={{ rotate: -90 }}
            transition={{
              opacity: { duration: 0.1, ease: 'easeInOut' },
              duration: 1,
              ease: 'easeInOut',
            }}
          >
            <PointerIcon className={`h-5 w-5 ${pointerClassName}`} />
          </motion.span>
        </motion.span>
      )}
    </span>
  )
}
