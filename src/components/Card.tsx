type Props = {
  text: string
  value: string
}

export default function Card({text,value}: Props) {
  return (
    <div className='text-center transition-colors ease-in md:w-60 text-2xl font-semibold bg-white rounded-xl md:p-6 m-8 md:m-0 text-black hover:text-blue-500'>
      <h1 className="font-bold">{text}</h1>
      <p className="font-normal p-3">R$ {value}</p>
    </div>
  )
}
