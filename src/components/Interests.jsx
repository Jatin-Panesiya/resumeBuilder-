import { useState } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { addInterests,removeInterest } from "../store/interestSlice";
import { useRef } from "react";

const Interests = () => {
  const [data, setData] = useState('');
  const dispatch = useDispatch()
  const inputD = useRef()

  const storeData = useSelector((state) => state.interest)

  const handleSubmit = () => {
    dispatch(addInterests(data))
    setData('')
    inputD.current.focus()
  }
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit()
    }
  }
  const handleRemove = (interest) => {
    dispatch(removeInterest(interest))
  }

  return (
    <div className="w-96 grid gap-3 m-auto py-5">
      <div className="flex items-center gap-3">
        <input className="border py-1 border-black ps-5 rounded" type="text" onChange={(e) => setData(e.target.value)} ref={inputD} value={data} onKeyDown={handleKeyPress} placeholder="Enter Interests" />
        <button onClick={handleSubmit} className="bg-green-500 text-white px-5 py-1 rounded-xl">Add</button>
      </div>
      {
        storeData.length > 0 ?

          <div className="flex flex-wrap gap-3">
            {
              storeData.map((interest, i) => {
                return (
                  <div key={i}>
                    <div className="bg-gradient-to-tl shadow-sm shadow-green-400 from-slate-200 to-gray-400 py-1 w-auto gap-3 flex  justify-between px-2 rounded-md items-center ">
                      <p className="" >{interest}</p>
                      <button onClick={() => handleRemove(interest)} className="text-[16px] text-red-500">X</button>
                    </div>
                  </div>
                )
              })
            }
          </div>

          : null

      }
    </div>
  )
}

export default Interests