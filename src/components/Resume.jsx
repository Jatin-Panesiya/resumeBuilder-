import { useSelector } from "react-redux"


const Resume = () => {
    const data = useSelector((state) => state.main.users)
    const educationData = useSelector((state) => state.education)
    const skillData = useSelector((state) => state.skill)
    const interests = useSelector((state) => state.interest)
    const experience = useSelector((state) => state.experience)

    return (
        <div>
            {
                data.map(({ name, email, phone, address }, i) => {
                    return (
                        <div key={i}>
                            <p>Name :  {name}</p>
                            <p>Phone :  {phone}</p>
                            <p>Email :  {email}</p>
                            <p>Address :  {address}</p>
                        </div>
                    )
                })
            }
            {
                educationData.map((e, i) => {
                    return (
                        <div key={i}>
                            <p>Degree : {e.degree}</p>
                        </div>
                    )
                })
            }
            {
                skillData.length > 0 &&
                <div className="flex items-center">

                    <p >Skills : </p>
                    {
                        skillData.map((skill, i) => {
                            return (
                                <div key={i}>
                                    <p className="px-1">{skill},</p>
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
                                    <p className="px-1">{interest},</p>
                                </div>
                            )
                        })
                    }
                </div>
            }

            {
                experience.length > 0 &&
                <div className="flex">
                    <p className="px-3">Experience : </p>
                    {
                        experience.map((e,i)=>{
                            return(
                                <div key={i}>
                                    <p>{e.company}</p>
                                </div>
                            )
                        })
                    }
                </div>
            }
        </div>
    )
}

export default Resume