import { useState } from 'react'
import {InputBox} from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import photo from './img/photo.jpg';



function App() {
  let [amount, setAmount] = useState(0)
  let [from,setFrom] = useState("usd")
  let [to,setTo] = useState("inr")
  let [convertedAmount,setConvertedAmount] = useState(0)

  const currencyInfo=useCurrencyInfo(from)

  const options= Object.keys(currencyInfo)

  const swap=()=>{
    setFrom(to)
    setTo(from)
    setAmount(convertedAmount)
    setConvertedAmount(amount)
  }

  const convert=()=>{
    setConvertedAmount(amount*currencyInfo[to])
  }

  return (
    <>
      <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{backgroundImage: `url(${photo})`}}>

      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 p-5 backdrop-blur-sm round-lg bg-white/30">
        <form 
        onSubmit={(e)=>{
          e.preventDefault();
          convert()
        }}>
          <div className='w-full mb-1'>
            <InputBox
            label={from}
            amount={amount}
            currencyOptions={options}
            onCurrencyChange={(currency)=>{setFrom(currency)}}
            selectCurrency={from}
            onAmountChange={(amount)=>setAmount(amount)}

            
        
            />

          </div>
          <div className="relative-w-full h-0.5">
            <button
            type="button"
            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-lg bg-blue-600 text-white px-2 py-0.5"
            onClick={swap}
            >
              swap
            </button>

          </div>
          <div className="w-full mt-1 mb-4">
          <InputBox
            label={to}
            amount={convertedAmount}
            currencyOptions={options}
            onCurrencyChange={(currency)=>{setTo(currency)}}
            selectCurrency={to}
            amountDisable={true}
            
        
            />

          </div>
          <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
          Convert {from} to {to}

          </button>

        </form>

        </div>

      </div>
      </div>
    </>
  )
}

export default App
