const STORAGE_KEY = 'schimid:lead'

export type Lead = {
  nome: string
  empresa: string
  telefone: string
  equipe: string
  dificuldade: string
  whatsappUrl: string
}

export function saveLead(lead: Lead) {
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(lead))
  } catch {
    /* modo privado / storage bloqueado — a página de obrigado usa o fallback */
  }
}

export function readLead(): Lead | null {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw) as Lead
    return parsed?.nome ? parsed : null
  } catch {
    return null
  }
}
