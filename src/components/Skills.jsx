import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { addSkills, removeSkills } from "../store/skillSlice"
import { useRef } from "react"
const Skills = () => {
  const dispatch = useDispatch()
  const inputD = useRef()

  const data = useSelector((state) => state.skill)
  const [inputedSkill, setInputedSkill] = useState('')
  const handleInput = (e) => {
    setInputedSkill(e.target.value)
  }
  const handleAdd = () => {

    dispatch(addSkills([inputedSkill]))
    setInputedSkill('')
    inputD.current.focus()
  }
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAdd()
    }
  }

  const handleRemove = (skill) => {
    dispatch(removeSkills(skill))
  }
  return (
    <div className="w-96 m-auto py-5 grid gap-5">
      <div className="flex items-center gap-3 ">
        <input value={inputedSkill} ref={inputD} type="text" onKeyDown={handleKeyPress} onChange={handleInput} placeholder="Enter Skills" className="border py-1 border-black ps-5 rounded" />
        <button onClick={handleAdd} className="bg-sky-400 font-semibold px-5 py-1 rounded-xl">Add</button>
      </div>
      {
        data.length > 0 ?
          <div className="flex flex-wrap gap-5">
            {
              data.map((skill, i) => {
                return (
                  <div key={i} className="flex items-center justify-between gap-5">
                    <div className="bg-gradient-to-tl shadow-sm shadow-green-400 from-slate-200 to-gray-400 py-1 w-auto gap-3 flex justify-between px-2 rounded-md items-center ">
                      <p className="" >{skill}</p>
                      <button onClick={() => handleRemove(skill)} className="text-[16px] text-red-500">X</button>
                    </div>
                  </div>
                )
              })
            }
          </div> : null
      }
    </div>
  )
}

export default Skills