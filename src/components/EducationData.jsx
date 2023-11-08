import { useState } from "react"
import { educationDataRemove, educationDataStore } from "../store/educationSlice";
import { useDispatch,useSelector } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { nanoid } from "@reduxjs/toolkit";


const EducationData = () => {
    const dispatch = useDispatch();

    const storeEducationData  = useSelector((state)=>state.education)

    const notify = () => toast("your data saved , you can move");


    const [educationData, setEducationData] = useState({ id: nanoid(), degree: '', university: '', passingYear: '', percentage: '' });


    const handleInput = (e) => {
        setEducationData({ ...educationData, [e.target.name]: e.target.value })
    }

    const handleSubmit = () => {
        dispatch(educationDataStore(educationData));
        setEducationData({ id: nanoid(), degree: '', university: '', passingYear: '', percentage: '' });
        notify();
      }
      

    const handleRemove = (id) => {
        dispatch(educationDataRemove(id))
        notify();


    }
    return (
        <div>
            <div className="w-96 m-auto grid gap-3">
                <h1 className="font-bold text-center text-xl py-5">Education Details</h1>
                <input
                    className="border border-black px-5 rounded py-1 w-full"
                    type="text"
                    placeholder="University"
                    onChange={handleInput}
                    name='university'
                    value={educationData.university}
                />
                <input
                    className="border border-black px-5 rounded py-1 w-full"
                    type="text"
                    placeholder="Enter Degree"
                    onChange={handleInput}
                    name='degree'
                    value={educationData.degree}

                />
                <input
                    className="border border-black px-5 rounded py-1 w-full"
                    type="number"
                    placeholder="Passing Year"
                    onChange={handleInput}
                    name='passingYear'
                    value={educationData.passingYear}

                />
                <input
                    className="border border-black px-5 rounded py-1 w-full"
                    type="number"
                    placeholder="Percentage"
                    onChange={handleInput}
                    name='percentage'
                    value={educationData.percentage}

                />
                <button
                    onClick={handleSubmit} className="bg-sky-400 py-1 text-lg rounded font-bold font-mono">
                    Add
                </button>
                <ToastContainer />
                <p className="uppercase text-[13px] text-center text-red-500 font-bold ">Click on add button before moving to another tab</p>

            </div>

            <div className="flex gap-5 flex-wrap">
                {
                    storeEducationData.map((e, i) => {
                        return (
                            <div key={i} className="w-72 bg-emerald-700  text-white m-2 p-5 rounded grid">
                                <p>Degree : {e.degree}</p>
                                <p>University : {e.university}</p>
                                <p>Marks : {e.percentage}%</p>
                                <p>Passing year : {e.passingYear}</p>
                                <button onClick={() => handleRemove(e.id)} className="w-full m-auto bg-red-500 rounded my-3 font-semibold">Delete</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default EducationData