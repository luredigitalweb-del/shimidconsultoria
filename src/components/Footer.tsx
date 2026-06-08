import logoSchimid from '../assets/logo-schimid.png'

export default function Footer() {
  return (
    <footer className="relative bg-azul-escuro border-t border-white/5 px-6 md:px-10 py-10 md:py-12">
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
  )
}
