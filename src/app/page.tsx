import Card from '@/components/Card'
import getDolar from '@/lib/getDolar'
import getDolarPtax from '@/lib/getDolarPtax'
import { format, parseISO } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export default async function Home() {
  const dolarData: Promise<Dolar> = getDolar()
  const ptaxData: Promise<Ptax> = getDolarPtax()

  const [dolar, ptax] = await Promise.all([dolarData, ptaxData])

  const dateUpdated = format(parseISO(ptax.value[0].dataHoraCotacao), 'd MMMM yyyy HH:mm:ss', {
    locale: ptBR
  })

  const dataAtual = format(new Date(), 'dd/MM/yyyy', {
    locale: ptBR,
  })

  return (
    <main className="md:flex md:justify-center md:mt-28 mt-10">
      <div className='space-y-10'>
        <div>
          <h3 className="text-4xl md:text-6xl font-bold text-center tracking-wider p-4">{dataAtual} </h3>
        </div>
        <div className="md:grid md:grid-cols-3 md:max-w-screen-md md:justify-center md:align-center md:gap-5">
          <Card text="Valor Dolar" value={dolar.USDBRL.bid}/>
          <Card text="PTAX Compra" value={ptax.value[0].cotacaoCompra.toString()}/>
          <Card text="PTAX Venda" value={ptax.value[0].cotacaoVenda.toString()}/>
        </div>
        <div>
          <p className="text-center" >Ultima atualização: {dateUpdated}</p>
        </div>
      </div>
    </main>
  )
}
