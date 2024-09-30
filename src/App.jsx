import { useState } from 'react'

import './App.css'

function App() {
  const [num1, setNum1] = useState(10)
  const [num2, setNum2] = useState(2)

  const [sum, setSum] = useState(0)
  const [sub, SetSub] = useState(0)
  const [multiply, setMultiply] = useState(0)
  const [divide, setDivide] = useState(0)

  const [mode, setMode] = useState(false)
  const changeTheme = () => {
    
    if (mode == false) {
      setMode(true)

    } else {
      setMode(false)
    }
  }
  return (
    <div className={ mode == false ? 'bg-white w-full h-screen flex flex-col items-center justify-center text-black':"bg-gray-800 w-full h-screen flex flex-col items-center justify-center text-white" }>
        <p className='text-2xl'>Set the numbers to apply the math operations</p>
      <div className='flex text-4xl justify-center my-5 max-md:flex-col'>
        <div className='flex mx-2'>
          <button className='btn text-2xl' onClick={() => {setNum1(num1 -1)}}>-</button>
          <p className='mx-4 '>{num1}</p>
          <button className='btn text-2xl' onClick={() => {setNum1(num1 +1)}}>+</button>

        </div>
        <div className='flex mx-2'>
          <button className='btn text-2xl' onClick={() => {setNum2(num2 -1)}}>-</button>
          <p className='mx-4 '>{num2}</p>
          <button className='btn text-2xl' onClick={() => {setNum2(num2 +1)}}>+</button>

        </div>
      </div>
      <div className='flex w-[50vw] justify-around text-xl max-md:flex-col'>
        <div className='flex flex-col items-center'>

        <p className='my-2 '>{sum}</p>
        <button className='btn bg-cyan-300' onClick={() => {setSum(num1 + num2) }}>Add</button>
        </div>
        <div className='flex flex-col items-center'>

        <p className='my-2 '>{sub}</p>
        <button className='btn bg-lime-200' onClick={() => { SetSub(num1 - num2) }}>Subtract</button>
        </div>
        <div className='flex flex-col items-center'>

        <p className='my-2 '>{multiply}</p>
        <button className='btn bg-orange-200' onClick={() => { setMultiply(num1 * num2) }}>Multiply</button>
        </div>
        <div className='flex flex-col items-center'>

        <p className='my-2 '>{divide}</p>
        <button className='btn bg-pink-200' onClick={() => {setDivide(num1 / num2)}}>Divide</button>
        </div>
      </div>
      <div className='flex flex-col items-center my-5'>
        <p className={ mode == false ? 'text-black text-3xl' : 'text-white text-3xl'}>The page now in the {mode == false ? 'light' : 'dark'} mode</p>
        <button className={ mode == false ? 'bg-black btn text-white my-3': "bg-white btn hover:bg-white text-black my-3" } onClick={changeTheme}>Change theme</button>

     </div>
    </div>
  )
}

export default App
