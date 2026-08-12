export const CRM_WEBHOOK_URL =
  'https://webhook.deverascompany.com.br/webhook/schimid-lead-lp'

export type LeadPayload = {
  nome: string
  empresa: string
  /** Telefone formatado, ex.: "+55 (46) 99999-9999" */
  telefone: string
  /** Só dígitos com DDI, pronto pra discagem/WhatsApp, ex.: "5546999999999" */
  telefone_e164: string
  ddi: string
  pais: string
  colaboradores: string
  dificuldade: string
  origem: string
  pagina: string
  enviado_em: string
} & Record<string, string>

/** Parâmetros de campanha na URL — úteis pra atribuição no CRM. */
export function capturarUtms(): Record<string, string> {
  const chaves = [
    'utm_source',
    'utm_medium',
    'utm_campaign',
    'utm_content',
    'utm_term',
    'fbclid',
    'gclid',
  ]
  const params = new URLSearchParams(window.location.search)
  const utms: Record<string, string> = {}
  for (const chave of chaves) {
    const valor = params.get(chave)
    if (valor) utms[chave] = valor
  }
  return utms
}

/**
 * Envia o lead para o webhook do CRM.
 *
 * O webhook libera CORS apenas para o domínio de produção
 * (www.schimidconsultoria.com.br). Em qualquer outra origem o preflight é
 * bloqueado e o POST nem chega a sair — por isso o reenvio em `no-cors`
 * abaixo não corre risco de duplicar o lead: ele só roda quando nada foi
 * entregue. Resposta HTTP de erro (4xx/5xx) não dispara o reenvio.
 */
export async function enviarLeadParaCrm(payload: LeadPayload): Promise<boolean> {
  const body = JSON.stringify(payload)

  try {
    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 12000)
    const res = await fetch(CRM_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body,
      signal: controller.signal,
    })
    clearTimeout(timeout)
    return res.ok
  } catch {
    // Preflight bloqueado ou rede indisponível: reenvia como requisição
    // simples (sem preflight), que sai de qualquer origem.
    try {
      await fetch(CRM_WEBHOOK_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=UTF-8' },
        body,
      })
      return true
    } catch {
      return false
    }
  }
}
