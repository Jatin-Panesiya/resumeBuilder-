import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { personalData } from "../store/mainSlice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PersonalData = () => {

    const [data, setData] = useState({ username: '', phone: '', email: '', address: '' });
    const notify = () => toast("your data saved , you can move");

    const dispatch = useDispatch();

    const userData = useSelector((state) => state.main.users)

    const handleInput = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const handleSubmit = () => {
        dispatch(personalData(data));
        notify();
    
    };

   

    return (
        <div>
            <div className=" m-5">
                <div className="grid gap-2 w-96 m-auto">
                    <h1 className="font-bold text-center text-xl py-5">Personal Details</h1>

                    <input className="border border-black rounded ps-5 py-1"
                        type="text"
                        autoComplete="off"
                        name="username"
                        onChange={handleInput}
                        placeholder="Enter Name *"
                        required="" />

                    <input className="border border-black rounded ps-5 py-1"
                        type="text"
                        autoComplete="off"
                        name="email"
                        onChange={handleInput}
                        placeholder="Enter Email *"
                        required />

                    <input className="border border-black rounded ps-5 py-1"
                        type="text"
                        autoComplete="off"
                        name="phone"
                        onChange={handleInput}
                        placeholder="Enter Phone *"
                        required />

                    <textarea
                        name="address"
                        cols="10"
                        rows="5" className="border border-black rounded ps-5 py-1"
                        placeholder="Enter Address *"
                        onChange={handleInput} />

                    <button
                        onClick={handleSubmit} className="bg-sky-400 py-1 text-lg rounded font-bold font-mono">
                        Add
                    </button>
                    <ToastContainer />
                    <p className="uppercase text-[13px] text-center text-red-500 font-bold ">Click on add button before moving to another tab</p>
                </div>
            </div>
        </div>
    )
}

export default PersonalData