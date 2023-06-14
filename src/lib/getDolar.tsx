
export default async function getDolar() {
  const res = await fetch('https://economia.awesomeapi.com.br/last/USD-BRL', { cache: 'no-cache' })

  if (!res.ok) return undefined

  return res.json()
}
