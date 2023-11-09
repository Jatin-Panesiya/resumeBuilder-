import { nanoid } from "@reduxjs/toolkit";
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { addProject, removeProject } from "../store/projectsSlice";

const Projects = () => {
    const dispatch = useDispatch();
    const storeData = useSelector((state) => state.projects)

    const defaultData = { id: nanoid(), title: '', description: '', technologies: '' };

    const [data, setData] = useState(defaultData);

    const handleInput = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const handleAdd = () => {
        dispatch(addProject(data))
        setData(defaultData)
    }
    useEffect(() => {
        console.log(storeData)
    }, [storeData])

    const handleRemove = (id) => {
        dispatch(removeProject(id))
    }
    return (
        <div className="grid md:justify-around m-5 md:flex items-center justify-center">
            <div className="grid gap-3 w-96 m-auto py-5">
            <h1 className="font-bold text-center text-xl py-5">Projects</h1>

                <input
                    className="border border-black ps-5 py-1 rounded"
                    type="text"
                    name='title'
                    placeholder="Project Name *"
                    onChange={handleInput}
                    value={data.title}
                />
                <textarea
                    rows={4}
                    className="border border-black ps-5 py-1 rounded"
                    type="text"
                    name='description'
                    placeholder="Description *"
                    onChange={handleInput}
                    value={data.description}
                />
                <textarea
                    rows={2}
                    className="border border-black ps-5 py-1 rounded"
                    type="text"
                    name='technologies'
                    placeholder="Technologies used *"
                    onChange={handleInput}
                    value={data.technologies}
                />
                <button onClick={handleAdd} className="bg-sky-400 font-bold py-1 rounded">Add</button>

            </div>
            {
                storeData.length > 0 &&
                <div className="flex gap-5 flex-wrap justify-center md:w-[52rem]">
                    {
                        storeData.map((e, i) => {
                            return (
                                <div key={i} className="w-72 bg-emerald-700 break-words m-auto text-white p-5 rounded ">
                                    <p>Title : {e.title}</p> 
                                    <p>Technologies : {e.technologies}</p>
                                    <p >Description : {e.description}</p>

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

export default Projects