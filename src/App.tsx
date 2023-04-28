import { useState } from 'react'
import { Li } from './component/Li';


function App() {
  const [lines, setLines] = useState([])
  const [count, setCount] = useState('');
  const [valueIpProb, setValueIpProb] = useState('');

  const [mark, setMark] = useState<boolean>(false)
  const [bold, setBold] = useState<boolean>(false)
  const [capitalizee, setCapitalizee] = useState<boolean>(false)


  const [digitando, setDigitando] = useState(false)

  const isDigitando = () => {

    setDigitando(true)

    setTimeout(() => {
      setDigitando(false)
    }, 3000)
  }

  return (
    <main className='min-h-screen'>
      <div className='gap-1 flex flex-col p-4'>

        <div className='w-full gap-2 flex'>
          <button
            className='transition-all bg-slate-50 p-4 w-1/2 rounded-md border shadow-md hover:shadow-xl'
            onClick={() => setMark(oldPrev => !oldPrev)}
          >
            MARk ({mark ? 'ON' : 'OFF'})
          </button>
          <button
            className='transition-all bg-slate-50 p-4 w-1/2 rounded-md border shadow-md hover:shadow-xl'
            onClick={() => setBold(oldPrev => !oldPrev)}
          >
            ALL TEXT BOLD ({bold ? 'ON' : 'OFF'})
          </button>
          <button
            className='transition-all bg-slate-50 p-4 w-1/2 rounded-md border shadow-md hover:shadow-xl'
            onClick={() => setCapitalizee(oldPrev => !oldPrev)}
          >
            PR. LETRA MAIÚSCULA ({capitalizee ? 'ON' : 'OFF'})
          </button>

          <button
            className='transition-all bg-slate-50 p-4 w-1/2 rounded-md border shadow-md hover:shadow-xl'
            onClick={() => (setLines([]), setCount(''), setValueIpProb(''))}
          >
            LIMPAR
          </button>
        </div>

        <div className='mt-5 flex flex-col gap-4'>
          <input
            type="text"
            className='w-full border rounded-xl p-4'
            value={valueIpProb}
            onChange={e => setValueIpProb(e.target.value)}
            placeholder='Problema'
          />

          <textarea
            name=""
            id=""
            className='w-full min-h-[300px]  border rounded-md p-4'
            value={count}
            onChange={(e) => (setCount(e.target.value), isDigitando())}
            onKeyDown={(e) => e.keyCode === 13 && setLines((): any => [count])}
            wrap="hard"
            placeholder='Resumo e solução'
          >


          </textarea>
        </div>

      </div>

      <div className='border m-4 p-4' >
        <div className="text-slate-700 py-10 space-x-1">
          <h3
            className='text-lg font-semibold border-b'
          >
            Problema:
          </h3>

          <span className='capitalize'>
            {valueIpProb}
          </span>


        </div>
      </div>

      <div className='border m-4 p-4' >
        <div role="list" className="marker:text-slate-900 list-disc  text-slate-700 py-10 text-gra">
          <h3
            className='text-lg font-semibold border-b'
          >Resumo e Solução</h3>
          {
            !digitando ?
              lines?.map((item: string): any => (
                item.split('\n').map((item, id) => <Li item={item} key={id} mark={mark} bold={bold} capitalizee={capitalizee} />)
              ))
              :
              'Digitando....'
          }
        </div>
      </div>
    </main>
  )
}

export default App
