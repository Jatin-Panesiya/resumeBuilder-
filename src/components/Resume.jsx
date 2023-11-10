import { useSelector } from "react-redux"


const Resume = () => {
    const data = useSelector((state) => state.main.users)
    const educationData = useSelector((state) => state.education)
    const skillData = useSelector((state) => state.skill)
    const interests = useSelector((state) => state.interest)
    const experience = useSelector((state) => state.experience)
    const projects = useSelector((state) => state.projects)
    const summary = useSelector((state) => state.summary)
    const additional = useSelector((state) => state.additional)

    return (
        <div className="grid gap-3 px-5">
            {
                data.length > 0 &&
                <div >
                    <p>Personal Details : </p>

                    {
                        data.map(({ name, email, phone, address }, i) => {
                            return (
                                <div key={i} className="grid gap-1">
                                    <p>Name :  {name}</p>
                                    <p>Phone :  {phone}</p>
                                    <p>Email :  {email}</p>
                                    <p>Address :  {address}</p>
                                </div>
                            )
                        })
                    }
                </div>
            }

            {
                educationData.length > 0 &&
                <div className="flex">
                    <p>Degree : </p>
                    {
                        educationData.map((e, i) => {
                            return (
                                <div key={i} className="flex">
                                    <p className="bg-slate-200 mx-2 px-2"> {e.degree}</p>
                                </div>
                            )
                        })
                    }
                </div>
            }


            {
                skillData.length > 0 &&
                <div className="flex items-center">

                    <p >Skills : </p>
                    {
                        skillData.map((skill, i) => {
                            return (
                                <div key={i}>
                                    <p className="bg-slate-200 mx-2 px-2">{skill}</p>
                                </div>
                            )
                        })
                    }
                </div>
            }

            {
                interests.length > 0 &&
                <div className="flex items-center">
                    <p >Interest : </p>
                    {
                        interests.map((interest, i) => {
                            return (
                                <div key={i}>
                                    <p className="bg-slate-200 mx-2 px-2">{interest}</p>
                                </div>
                            )
                        })
                    }
                </div>
            }

            {
                experience.length > 0 &&
                <div className="flex">
                    <p className="">Experience : </p>
                    {
                        experience.map((e, i) => {
                            return (
                                <div key={i}>
                                    <p className="bg-slate-200 mx-2 px-2">{e.company}</p>
                                </div>
                            )
                        })
                    }
                </div>
            }

            {
                projects.length > 0 &&
                <div className="flex">
                    <p className="">Projects : </p>
                    {
                        projects.map((e, i) => {
                            return (
                                <div key={i}>
                                    <p className="bg-slate-200 mx-2 px-2">{e.title}</p>
                                </div>
                            )
                        })
                    }
                </div>
            }
            {
                summary !== "" &&
                <p className="flex">Summary : <p className="bg-slate-200 mx-2 px-2"> {summary}</p></p>
            }

            {
                additional.length > 0 &&


                additional.map((e, i) => {
                    return (
                        <div key={i} className="grid gap-2" >
                        <p className="flex">Github : <p className="bg-slate-200 mx-2 px-2"> {e.github}</p></p>
                        <p className="flex">Linkedin : <p className="bg-slate-200 mx-2 px-2"> {e.linkedin}</p></p>

                
                            <span className="flex gap-3 flex-wrap break-words">
                                <p>Languages : </p>
                                {
                                    e.language.map((e, i) => {
                                        return (
                                            <div key={i}>
                                                <p className="bg-slate-200 px-3 rounded-md">{e}</p>
                                            </div>
                                        )
                                    })
                                }
                            </span>

                        </div>
                    )
                })

            }
        </div>
    )
}

export default Resume