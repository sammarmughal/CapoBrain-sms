import React, { useContext } from 'react'
import AdminPortal from "./index"
import MyContext from '../../ContextApi/MyContext'
import { useNavigate } from 'react-router-dom'
export default function AdminPanel() {
    const { signUser } = useContext(MyContext)
    const navigate = useNavigate()
    return (
        <>
            {signUser && signUser.email === "mailto:capobrain@gmail.com" ? <AdminPortal /> : navigate("/userLogin")}
        </>
    )
}
