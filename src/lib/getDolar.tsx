
export default async function getDolar() {
  const res = await fetch('https://economia.awesomeapi.com.br/last/USD-BRL', { next: { revalidate: 60 }})

  if (!res.ok) return undefined

  return res.json()
}
