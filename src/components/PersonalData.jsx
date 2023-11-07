import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { personalData } from "../store/mainSlice";

const PersonalData = () => {

    const [data, setData] = useState({ username: '', phone: '', email: '', address: '' });
    const dispatch = useDispatch();

    const userData = useSelector((state) => state.main)

    const handleInput = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const handleSubmit = () => {
        dispatch(personalData(data))
        setData({ username: '', phone: '', email: '', address: '' })
    }
    useEffect(() => {
        console.log(userData.users)
    }, [userData, dispatch])

    return (
        <>
            <div className=" mt-5">
                <div className="grid gap-2 w-96 m-auto">
                    <input className="border border-black rounded ps-5 py-1"
                        type="text"
                        autoComplete="off"
                        name="username"
                        onChange={handleInput}
                        placeholder="Enter Name *"
                        value={data.username}
                        required />

                    <input className="border border-black rounded ps-5 py-1"
                        type="text"
                        autoComplete="off"
                        name="email"
                        onChange={handleInput}
                        placeholder="Enter Email *"
                        value={data.email}
                        required />

                    <input className="border border-black rounded ps-5 py-1"
                        type="text"
                        autoComplete="off"
                        name="phone"
                        onChange={handleInput}
                        placeholder="Enter Phone *"
                        value={data.phone}
                        required />

                    <textarea
                        name="address"
                        cols="10"
                        rows="5" className="border border-black rounded ps-5 py-1"
                        placeholder="Enter Address *"
                        value={data.address}
                        onChange={handleInput} />

                    <button
                        onClick={handleSubmit} className="bg-sky-400 py-1 text-lg rounded font-bold font-mono">
                        Add
                    </button>
                    <p className="uppercase text-[13px] text-center text-red-500 font-bold ">Click on add button before moving to another tab</p>
                </div>
            </div>
        </>
    )
}

export default PersonalData