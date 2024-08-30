import { Link } from "react-router-dom"
import { Auth } from "../components/Auth"
import { Quote } from "../components/Quote"
import { LabelInput } from "../components/LabelInput"
import { useState } from "react"
import { SignInInput } from "@mridul891/medium-common"

export const Signin = () => {
    const [postInputs, setPostInputs] = useState<SignInInput>({
        email: "",
        password: ""
    })
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
                            <Link to={"/signup "} className="pl-2 underline">
                                {"Sign Up"}
                            </Link>
                        </div>
                    </div>
                    <div className="mt-10 font-bold">
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
                        <button type="button" className="text-white w-full mt-5 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"> Sign in </button>
                    </div>
                </div>
            </div>
            <div className="invisible lg:visible">
                <Quote />
            </div>
        </div>
    )
}
