
type Props = {
  text: string
  value: string
  updateAt: string
}

export default function Card({text,value, updateAt}: Props) {
  return (
    <div className='text-center transition-all ease-in md:w-60 xl:w-80 xl:text-4xl text-2xl bg-white rounded-xl px-4 py-2 md:p-6 m-8 md:m-0 text-black hover:text-blue-500'>
      <h1 className="font-semibold">{text}</h1>
      <p className="font-normal p-3">R$ {value}</p>
      <small className="text-xs md:text-sm xl:text-base">{updateAt}</small>
    </div>
  )
}
