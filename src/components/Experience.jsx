import { useEffect, useRef, useState } from "react"
import { addExperience, removeExperience } from "../store/experienceSlice"
import { useDispatch, useSelector } from "react-redux"
import { nanoid } from "@reduxjs/toolkit";


const Experience = () => {

    const dispatch = useDispatch();
    const storeData = useSelector((state) => state.experience)
    const defaultData = { id: nanoid(), company: '', position: '', description: '', startDate: '', endDate: '', }

    const inputD = useRef()
    const inputCheck = useRef()
    const [isCurrent, setIsCurrent] = useState(false)

    const [data, setData] = useState(defaultData)

    const handleInput = (e) => {

        setData({ ...data, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        console.log(storeData)
    }, [storeData])

    const handleAdd = () => {
        dispatch(addExperience(data))
        setIsCurrent(false)
        setData(defaultData)
        inputD.current.focus();

    }
    const handleRemove = (id) => {
        dispatch(removeExperience(id))
    }
    const handleCheckBox = () => {
        setData({
            ...data,
            endDate: !isCurrent && 'currently working'
        });

        setIsCurrent(!isCurrent);
    };
    useEffect(() => {
        data.endDate
    }, [data])


    return (
        <div className="grid md:justify-around m-5 md:flex items-center justify-center">

            <div className="w-96  m-5 grid gap-3">
                <h1 className="font-bold text-center text-xl py-5">Experience</h1>

                <input
                    className="border border-black ps-5 py-1 rounded"
                    type="text"
                    placeholder="Company Name *"
                    onChange={handleInput}
                    value={data.company}
                    name="company"
                    ref={inputD}
                />

                <input
                    className="border border-black ps-5 py-1 rounded"
                    type="text"
                    placeholder="Position *"
                    onChange={handleInput}
                    value={data.position}
                    name="position"
                />

                <textarea
                    name="description"
                    cols="10"
                    rows="5"
                    className="border border-black rounded ps-5 py-1"
                    placeholder="Job Description *"
                    value={data.description}
                    onChange={handleInput}
                />
                <div className="flex items-center gap-3 text-center justify-center">
                    <div>
                        <p>From </p>
                        <input
                            className="border border-black ps-5 py-1 rounded"
                            type="date"
                            placeholder="Position *"
                            onChange={handleInput}
                            value={data.startDate}
                            name="startDate"
                        />
                    </div>
                    {
                        !isCurrent && (
                            <div>
                                <p>To </p>
                                <input
                                    className="border border-black ps-5 py-1 rounded"
                                    type={isCurrent ? 'text' : 'date'}
                                    placeholder="Position *"
                                    onChange={handleInput}
                                    value={data.endDate}
                                    name="endDate"
                                />
                            </div>
                        )
                    }

                </div>
                <div className="flex items-center gap-3">
                    <input className="cursor-pointer" onChange={handleCheckBox} type="checkbox" id="currentCheckbox" ref={inputCheck} name="current" checked={isCurrent} />
                    <label className="cursor-pointer" htmlFor="currentCheckbox">Currently Working Here</label>
                </div>

                <button onClick={handleAdd} className="bg-sky-400 font-bold py-1 rounded">Add</button>


            </div>

            {
                storeData.length > 0 &&
                <div className="flex gap-5 justify-center md:w-[52rem]">
                    {
                        storeData.map((e, i) => {
                            return (
                                <div key={i} className="w-72 bg-emerald-700  text-white m-2 p-5 rounded grid">
                                    <p>Company : {e.company}</p>
                                    <p>Position : {e.position}</p>
                                    <p>Description : {e.description}</p>
                                    <p>Start Date : {e.startDate}</p>

                                    <p>End Date : {e.endDate}</p>

                                    <button onClick={() => handleRemove(e.id)} className="w-full m-auto bg-red-500 rounded my-3 font-semibold">Delete</button>
                                </div>
                            )
                        })
                    }
                </div>
            }
        </div>
    )
}

export default Experience