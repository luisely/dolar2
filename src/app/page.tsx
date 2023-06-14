import Card from '@/components/Card'
import { formatDate } from '@/lib/formatDate'
import getDolar from '@/lib/getDolar'
import getDolarPtax from '@/lib/getDolarPtax'

export default async function Home() {
  const dolarData: Promise<Dolar> = getDolar()
  const ptaxData: Promise<Ptax> = getDolarPtax()

  const [dolar, ptax] = await Promise.all([dolarData, ptaxData])

  const dateUpdated = formatDate(ptax.value[0].dataHoraCotacao)
  const dolarUpdated = formatDate(dolar.USDBRL.create_date)

  return (
    <main className="md:flex md:justify-center md:items-center h-screen mt-12 md:mt-0">
      <div className='space-y-10'>
        <div className="md:grid md:grid-cols-3 md:justify-center md:align-center md:gap-5 xl:gap-16">
          <Card text="Valor Dolar" value={dolar.USDBRL.bid} updateAt={dolarUpdated}/>
          <Card text="PTAX Compra" value={ptax.value[0].cotacaoCompra.toString()} updateAt={dateUpdated}/>
          <Card text="PTAX Venda" value={ptax.value[0].cotacaoVenda.toString()} updateAt={dateUpdated}/>
        </div>
      </div>
    </main>
  )
}
