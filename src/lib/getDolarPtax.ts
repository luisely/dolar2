import { format } from "date-fns"

export default async function getDolarPtax() {
  const currentDate = format(new Date(), 'MM-dd-yyyy')

  const res = await fetch(`https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarPeriodo(dataInicial=@dataInicial,dataFinalCotacao=@dataFinalCotacao)?@dataInicial='04-27-2021'&@dataFinalCotacao='${currentDate}'&$top=2&$orderby=dataHoraCotacao%20desc&$format=json&$select=cotacaoCompra,cotacaoVenda,dataHoraCotacao`, { next: { revalidate: 60 }})

  if (!res.ok) return undefined
  
  return res.json()
}
