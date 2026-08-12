import { useEffect, useState } from 'react'

const NAVIGATE_EVENT = 'schimid:navigate'

/** Normaliza a rota: sem barra final, sempre começando com '/'. */
function currentPath() {
  const path = window.location.pathname.replace(/\/+$/, '')
  return path === '' ? '/' : path
}

/** Navegação client-side, sem recarregar a página. */
export function navigate(to: string) {
  if (currentPath() === to) {
    window.scrollTo({ top: 0 })
    return
  }
  window.history.pushState({}, '', to)
  window.dispatchEvent(new Event(NAVIGATE_EVENT))
  window.scrollTo({ top: 0 })
}

/** Rota atual, reagindo a navegação e ao botão voltar do navegador. */
export function usePathname() {
  const [path, setPath] = useState(currentPath)

  useEffect(() => {
    const sync = () => setPath(currentPath())
    window.addEventListener('popstate', sync)
    window.addEventListener(NAVIGATE_EVENT, sync)
    return () => {
      window.removeEventListener('popstate', sync)
      window.removeEventListener(NAVIGATE_EVENT, sync)
    }
  }, [])

  return path
}
