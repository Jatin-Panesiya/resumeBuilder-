import { useSelector } from "react-redux"


const Resume = () => {
    const data = useSelector((state) => state.main.users)
    const educationData = useSelector((state) => state.education)

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
        </div>
    )
}

export default Resume