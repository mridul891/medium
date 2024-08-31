import { Link, useNavigate } from "react-router-dom"
import { Quote } from "../components/Quote"
import { LabelInput } from "../components/LabelInput"
import { useState } from "react"
import { SignUpInput } from "@mridul891/medium-common"
import { BACKEND_URL } from "../confi"
import axios from "axios"

export const Signup = () => {
    const [postInputs, setPostInputs] = useState<SignUpInput>({
        email: "",
        password: "",
        name: ""
    })
    const navigate = useNavigate();

    const sendRequest = async () => {
        console.log(postInputs)
        const response = await axios.post(`${BACKEND_URL}/api/v1/user/signup`, postInputs)
        const jwt = await response.data.jwt
        localStorage.setItem("mediumtoken", jwt)
        navigate('/')
    }


    return (
        <div className="grid grid-cols-2">
            <div>
                <div className="h-screen flex flex-col justify-center w-screen px-10 lg:w-[40vw] lg:px-[5rem]">
                    <div>
                        <div className="text-3xl font-extrabold ">
                            Create an account
                        </div>
                        <div className="text-slate-400 ">
                            {"Don't have an account"}
                            <Link to={"/signin"} className="pl-2 underline">
                                {"Sign in"}
                            </Link>
                        </div>
                    </div>
                    <div className="mt-10 font-bold">
                        <LabelInput label="Name" placeholder="Enter your name" onChange={(e) => {
                            setPostInputs((c) => ({
                                ...c,
                                name: e.target.value
                            }))
                        }} />
                        <LabelInput label="Email" placeholder="Enter your email" onChange={(e) => {
                            setPostInputs((c) => ({
                                ...c,
                                email: e.target.value
                            }))
                        }} />
                        <LabelInput label="Password" type="password" placeholder="Enter your name" onChange={(e) => {
                            setPostInputs((c) => ({
                                ...c,
                                password: e.target.value
                            }))
                        }} />
                        <button type="button" onClick={sendRequest} className="text-white w-full mt-5 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"> Sign in </button>
                    </div>
                </div>
            </div>
            <div className="invisible lg:visible">
                <Quote />
            </div>
        </div>
    )
}
