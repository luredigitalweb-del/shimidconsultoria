export type Country = {
  name: string
  iso2: string
  dial: string
  /** Máscaras possíveis, da mais curta para a mais longa. '#' = dígito. */
  masks?: string[]
}

/** Lista completa de países com DDI. Nomes em pt-BR. */
export const COUNTRIES: Country[] = [
  { name: 'Afeganistão', iso2: 'af', dial: '93' },
  { name: 'África do Sul', iso2: 'za', dial: '27' },
  { name: 'Albânia', iso2: 'al', dial: '355' },
  { name: 'Alemanha', iso2: 'de', dial: '49' },
  { name: 'Andorra', iso2: 'ad', dial: '376' },
  { name: 'Angola', iso2: 'ao', dial: '244' },
  { name: 'Anguilla', iso2: 'ai', dial: '1264' },
  { name: 'Antígua e Barbuda', iso2: 'ag', dial: '1268' },
  { name: 'Arábia Saudita', iso2: 'sa', dial: '966' },
  { name: 'Argélia', iso2: 'dz', dial: '213' },
  { name: 'Argentina', iso2: 'ar', dial: '54' },
  { name: 'Armênia', iso2: 'am', dial: '374' },
  { name: 'Aruba', iso2: 'aw', dial: '297' },
  { name: 'Austrália', iso2: 'au', dial: '61' },
  { name: 'Áustria', iso2: 'at', dial: '43' },
  { name: 'Azerbaijão', iso2: 'az', dial: '994' },
  { name: 'Bahamas', iso2: 'bs', dial: '1242' },
  { name: 'Bahrein', iso2: 'bh', dial: '973' },
  { name: 'Bangladesh', iso2: 'bd', dial: '880' },
  { name: 'Barbados', iso2: 'bb', dial: '1246' },
  { name: 'Bélgica', iso2: 'be', dial: '32' },
  { name: 'Belize', iso2: 'bz', dial: '501' },
  { name: 'Benin', iso2: 'bj', dial: '229' },
  { name: 'Bermudas', iso2: 'bm', dial: '1441' },
  { name: 'Bielorrússia', iso2: 'by', dial: '375' },
  { name: 'Bolívia', iso2: 'bo', dial: '591' },
  { name: 'Bósnia e Herzegovina', iso2: 'ba', dial: '387' },
  { name: 'Botsuana', iso2: 'bw', dial: '267' },
  {
    name: 'Brasil',
    iso2: 'br',
    dial: '55',
    masks: ['(##) ####-####', '(##) #####-####'],
  },
  { name: 'Brunei', iso2: 'bn', dial: '673' },
  { name: 'Bulgária', iso2: 'bg', dial: '359' },
  { name: 'Burkina Faso', iso2: 'bf', dial: '226' },
  { name: 'Burundi', iso2: 'bi', dial: '257' },
  { name: 'Butão', iso2: 'bt', dial: '975' },
  { name: 'Cabo Verde', iso2: 'cv', dial: '238' },
  { name: 'Camarões', iso2: 'cm', dial: '237' },
  { name: 'Camboja', iso2: 'kh', dial: '855' },
  { name: 'Canadá', iso2: 'ca', dial: '1', masks: ['(###) ###-####'] },
  { name: 'Catar', iso2: 'qa', dial: '974' },
  { name: 'Cazaquistão', iso2: 'kz', dial: '7' },
  { name: 'Chade', iso2: 'td', dial: '235' },
  { name: 'Chile', iso2: 'cl', dial: '56' },
  { name: 'China', iso2: 'cn', dial: '86' },
  { name: 'Chipre', iso2: 'cy', dial: '357' },
  { name: 'Cingapura', iso2: 'sg', dial: '65' },
  { name: 'Colômbia', iso2: 'co', dial: '57' },
  { name: 'Comores', iso2: 'km', dial: '269' },
  { name: 'Congo', iso2: 'cg', dial: '242' },
  { name: 'Congo (RDC)', iso2: 'cd', dial: '243' },
  { name: 'Coreia do Norte', iso2: 'kp', dial: '850' },
  { name: 'Coreia do Sul', iso2: 'kr', dial: '82' },
  { name: 'Costa do Marfim', iso2: 'ci', dial: '225' },
  { name: 'Costa Rica', iso2: 'cr', dial: '506' },
  { name: 'Croácia', iso2: 'hr', dial: '385' },
  { name: 'Cuba', iso2: 'cu', dial: '53' },
  { name: 'Dinamarca', iso2: 'dk', dial: '45' },
  { name: 'Djibuti', iso2: 'dj', dial: '253' },
  { name: 'Dominica', iso2: 'dm', dial: '1767' },
  { name: 'Egito', iso2: 'eg', dial: '20' },
  { name: 'El Salvador', iso2: 'sv', dial: '503' },
  { name: 'Emirados Árabes Unidos', iso2: 'ae', dial: '971' },
  { name: 'Equador', iso2: 'ec', dial: '593' },
  { name: 'Eritreia', iso2: 'er', dial: '291' },
  { name: 'Eslováquia', iso2: 'sk', dial: '421' },
  { name: 'Eslovênia', iso2: 'si', dial: '386' },
  { name: 'Espanha', iso2: 'es', dial: '34' },
  { name: 'Estados Unidos', iso2: 'us', dial: '1', masks: ['(###) ###-####'] },
  { name: 'Estônia', iso2: 'ee', dial: '372' },
  { name: 'Eswatini', iso2: 'sz', dial: '268' },
  { name: 'Etiópia', iso2: 'et', dial: '251' },
  { name: 'Fiji', iso2: 'fj', dial: '679' },
  { name: 'Filipinas', iso2: 'ph', dial: '63' },
  { name: 'Finlândia', iso2: 'fi', dial: '358' },
  { name: 'França', iso2: 'fr', dial: '33' },
  { name: 'Gabão', iso2: 'ga', dial: '241' },
  { name: 'Gâmbia', iso2: 'gm', dial: '220' },
  { name: 'Gana', iso2: 'gh', dial: '233' },
  { name: 'Geórgia', iso2: 'ge', dial: '995' },
  { name: 'Gibraltar', iso2: 'gi', dial: '350' },
  { name: 'Granada', iso2: 'gd', dial: '1473' },
  { name: 'Grécia', iso2: 'gr', dial: '30' },
  { name: 'Groenlândia', iso2: 'gl', dial: '299' },
  { name: 'Guadalupe', iso2: 'gp', dial: '590' },
  { name: 'Guam', iso2: 'gu', dial: '1671' },
  { name: 'Guatemala', iso2: 'gt', dial: '502' },
  { name: 'Guiana', iso2: 'gy', dial: '592' },
  { name: 'Guiana Francesa', iso2: 'gf', dial: '594' },
  { name: 'Guiné', iso2: 'gn', dial: '224' },
  { name: 'Guiné Equatorial', iso2: 'gq', dial: '240' },
  { name: 'Guiné-Bissau', iso2: 'gw', dial: '245' },
  { name: 'Haiti', iso2: 'ht', dial: '509' },
  { name: 'Honduras', iso2: 'hn', dial: '504' },
  { name: 'Hong Kong', iso2: 'hk', dial: '852' },
  { name: 'Hungria', iso2: 'hu', dial: '36' },
  { name: 'Iêmen', iso2: 'ye', dial: '967' },
  { name: 'Ilhas Cayman', iso2: 'ky', dial: '1345' },
  { name: 'Ilhas Faroé', iso2: 'fo', dial: '298' },
  { name: 'Ilhas Marshall', iso2: 'mh', dial: '692' },
  { name: 'Ilhas Salomão', iso2: 'sb', dial: '677' },
  { name: 'Ilhas Virgens Britânicas', iso2: 'vg', dial: '1284' },
  { name: 'Índia', iso2: 'in', dial: '91' },
  { name: 'Indonésia', iso2: 'id', dial: '62' },
  { name: 'Irã', iso2: 'ir', dial: '98' },
  { name: 'Iraque', iso2: 'iq', dial: '964' },
  { name: 'Irlanda', iso2: 'ie', dial: '353' },
  { name: 'Islândia', iso2: 'is', dial: '354' },
  { name: 'Israel', iso2: 'il', dial: '972' },
  { name: 'Itália', iso2: 'it', dial: '39' },
  { name: 'Jamaica', iso2: 'jm', dial: '1876' },
  { name: 'Japão', iso2: 'jp', dial: '81' },
  { name: 'Jordânia', iso2: 'jo', dial: '962' },
  { name: 'Kosovo', iso2: 'xk', dial: '383' },
  { name: 'Kuwait', iso2: 'kw', dial: '965' },
  { name: 'Laos', iso2: 'la', dial: '856' },
  { name: 'Lesoto', iso2: 'ls', dial: '266' },
  { name: 'Letônia', iso2: 'lv', dial: '371' },
  { name: 'Líbano', iso2: 'lb', dial: '961' },
  { name: 'Libéria', iso2: 'lr', dial: '231' },
  { name: 'Líbia', iso2: 'ly', dial: '218' },
  { name: 'Liechtenstein', iso2: 'li', dial: '423' },
  { name: 'Lituânia', iso2: 'lt', dial: '370' },
  { name: 'Luxemburgo', iso2: 'lu', dial: '352' },
  { name: 'Macau', iso2: 'mo', dial: '853' },
  { name: 'Macedônia do Norte', iso2: 'mk', dial: '389' },
  { name: 'Madagascar', iso2: 'mg', dial: '261' },
  { name: 'Malásia', iso2: 'my', dial: '60' },
  { name: 'Malawi', iso2: 'mw', dial: '265' },
  { name: 'Maldivas', iso2: 'mv', dial: '960' },
  { name: 'Mali', iso2: 'ml', dial: '223' },
  { name: 'Malta', iso2: 'mt', dial: '356' },
  { name: 'Marrocos', iso2: 'ma', dial: '212' },
  { name: 'Martinica', iso2: 'mq', dial: '596' },
  { name: 'Maurício', iso2: 'mu', dial: '230' },
  { name: 'Mauritânia', iso2: 'mr', dial: '222' },
  { name: 'México', iso2: 'mx', dial: '52' },
  { name: 'Mianmar', iso2: 'mm', dial: '95' },
  { name: 'Micronésia', iso2: 'fm', dial: '691' },
  { name: 'Moçambique', iso2: 'mz', dial: '258' },
  { name: 'Moldávia', iso2: 'md', dial: '373' },
  { name: 'Mônaco', iso2: 'mc', dial: '377' },
  { name: 'Mongólia', iso2: 'mn', dial: '976' },
  { name: 'Montenegro', iso2: 'me', dial: '382' },
  { name: 'Namíbia', iso2: 'na', dial: '264' },
  { name: 'Nepal', iso2: 'np', dial: '977' },
  { name: 'Nicarágua', iso2: 'ni', dial: '505' },
  { name: 'Níger', iso2: 'ne', dial: '227' },
  { name: 'Nigéria', iso2: 'ng', dial: '234' },
  { name: 'Noruega', iso2: 'no', dial: '47' },
  { name: 'Nova Caledônia', iso2: 'nc', dial: '687' },
  { name: 'Nova Zelândia', iso2: 'nz', dial: '64' },
  { name: 'Omã', iso2: 'om', dial: '968' },
  { name: 'Países Baixos', iso2: 'nl', dial: '31' },
  { name: 'Palau', iso2: 'pw', dial: '680' },
  { name: 'Palestina', iso2: 'ps', dial: '970' },
  { name: 'Panamá', iso2: 'pa', dial: '507' },
  { name: 'Papua-Nova Guiné', iso2: 'pg', dial: '675' },
  { name: 'Paquistão', iso2: 'pk', dial: '92' },
  { name: 'Paraguai', iso2: 'py', dial: '595' },
  { name: 'Peru', iso2: 'pe', dial: '51' },
  { name: 'Polinésia Francesa', iso2: 'pf', dial: '689' },
  { name: 'Polônia', iso2: 'pl', dial: '48' },
  { name: 'Porto Rico', iso2: 'pr', dial: '1787' },
  { name: 'Portugal', iso2: 'pt', dial: '351', masks: ['### ### ###'] },
  { name: 'Quênia', iso2: 'ke', dial: '254' },
  { name: 'Quirguistão', iso2: 'kg', dial: '996' },
  { name: 'Reino Unido', iso2: 'gb', dial: '44' },
  { name: 'República Centro-Africana', iso2: 'cf', dial: '236' },
  { name: 'República Dominicana', iso2: 'do', dial: '1809' },
  { name: 'República Tcheca', iso2: 'cz', dial: '420' },
  { name: 'Romênia', iso2: 'ro', dial: '40' },
  { name: 'Ruanda', iso2: 'rw', dial: '250' },
  { name: 'Rússia', iso2: 'ru', dial: '7' },
  { name: 'Samoa', iso2: 'ws', dial: '685' },
  { name: 'San Marino', iso2: 'sm', dial: '378' },
  { name: 'Santa Lúcia', iso2: 'lc', dial: '1758' },
  { name: 'São Cristóvão e Névis', iso2: 'kn', dial: '1869' },
  { name: 'São Tomé e Príncipe', iso2: 'st', dial: '239' },
  { name: 'São Vicente e Granadinas', iso2: 'vc', dial: '1784' },
  { name: 'Seicheles', iso2: 'sc', dial: '248' },
  { name: 'Senegal', iso2: 'sn', dial: '221' },
  { name: 'Serra Leoa', iso2: 'sl', dial: '232' },
  { name: 'Sérvia', iso2: 'rs', dial: '381' },
  { name: 'Síria', iso2: 'sy', dial: '963' },
  { name: 'Somália', iso2: 'so', dial: '252' },
  { name: 'Sri Lanka', iso2: 'lk', dial: '94' },
  { name: 'Sudão', iso2: 'sd', dial: '249' },
  { name: 'Sudão do Sul', iso2: 'ss', dial: '211' },
  { name: 'Suécia', iso2: 'se', dial: '46' },
  { name: 'Suíça', iso2: 'ch', dial: '41' },
  { name: 'Suriname', iso2: 'sr', dial: '597' },
  { name: 'Tailândia', iso2: 'th', dial: '66' },
  { name: 'Taiwan', iso2: 'tw', dial: '886' },
  { name: 'Tajiquistão', iso2: 'tj', dial: '992' },
  { name: 'Tanzânia', iso2: 'tz', dial: '255' },
  { name: 'Timor-Leste', iso2: 'tl', dial: '670' },
  { name: 'Togo', iso2: 'tg', dial: '228' },
  { name: 'Tonga', iso2: 'to', dial: '676' },
  { name: 'Trinidad e Tobago', iso2: 'tt', dial: '1868' },
  { name: 'Tunísia', iso2: 'tn', dial: '216' },
  { name: 'Turcomenistão', iso2: 'tm', dial: '993' },
  { name: 'Turquia', iso2: 'tr', dial: '90' },
  { name: 'Tuvalu', iso2: 'tv', dial: '688' },
  { name: 'Ucrânia', iso2: 'ua', dial: '380' },
  { name: 'Uganda', iso2: 'ug', dial: '256' },
  { name: 'Uruguai', iso2: 'uy', dial: '598' },
  { name: 'Uzbequistão', iso2: 'uz', dial: '998' },
  { name: 'Vanuatu', iso2: 'vu', dial: '678' },
  { name: 'Vaticano', iso2: 'va', dial: '379' },
  { name: 'Venezuela', iso2: 've', dial: '58' },
  { name: 'Vietnã', iso2: 'vn', dial: '84' },
  { name: 'Zâmbia', iso2: 'zm', dial: '260' },
  { name: 'Zimbábue', iso2: 'zw', dial: '263' },
].sort((a, b) => a.name.localeCompare(b.name, 'pt-BR'))

export const DEFAULT_COUNTRY =
  COUNTRIES.find((c) => c.iso2 === 'br') ?? COUNTRIES[0]

/** Remove acentos e caixa alta pra busca tolerante. */
export function normalize(value: string) {
  return value
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .trim()
}

function digitsInMask(mask: string) {
  return (mask.match(/#/g) ?? []).length
}

/** Quantidade máxima de dígitos aceita pelo país. */
export function maxDigits(country: Country) {
  if (!country.masks?.length) return 15
  return digitsInMask(country.masks[country.masks.length - 1])
}

/** Mínimo aceitável — usado só pra validação leve. */
export function minDigits(country: Country) {
  if (!country.masks?.length) return 6
  return digitsInMask(country.masks[0])
}

/** Aplica a máscara do país sobre os dígitos digitados. */
export function applyMask(country: Country, digits: string) {
  const masks = country.masks
  if (!masks?.length) return digits

  const mask =
    masks.find((m) => digitsInMask(m) >= digits.length) ?? masks[masks.length - 1]

  let out = ''
  let i = 0
  for (const char of mask) {
    if (i >= digits.length) break
    if (char === '#') {
      out += digits[i]
      i += 1
    } else {
      out += char
    }
  }
  return out
}

/** Placeholder derivado da máscara mais longa. */
export function maskPlaceholder(country: Country) {
  const masks = country.masks
  if (!masks?.length) return 'Número de telefone'
  return masks[masks.length - 1].replace(/#/g, '0')
}
