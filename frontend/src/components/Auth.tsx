import { SignUpInput, } from "@mridul891/medium-common"
import axios from "axios"
import { ChangeEvent, useState } from "react"
import { Link } from "react-router-dom"


export const Auth = ({ type }: { type: "signup" | "signin" }) => {

    


    async function sendRequest() {
        try {
            axios.post(`${BACKEND_URL}/api/v1/user/signup`)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="h-screen flex flex-col justify-center w-screen px-10 lg:w-[40vw] lg:px-[5rem]">
            <div>
                <div className="text-3xl font-extrabold ">
                    Create an account
                </div>
                <div className="text-slate-400 ">
                    {type === "signin" ? "Don't have an account" : "Already have an account?"}
                    <Link to={type === "signin" ? "/signup" : "/signin "} className="pl-2 underline">
                        {type === "signin" ? "Sign Up" : "Sign In"}
                    </Link>
                </div>
            </div>
            <div className="mt-10 font-bold">
                {type === "signup" ? <LabelInput label="Name" placeholder="Enter your name" onChange={(e) => {
                    setPostInputs((c) => ({
                        ...c,
                        name: e.target.value
                    }))
                }} /> : null}
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
                <button type="button" className="text-white w-full mt-5 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{type === "signup" ? "Sign up" : "Sign in "}</button>
            </div>
        </div>
    )
}


const LabelInput = ({ label, placeholder, onChange, type }: LabelInput) => {
    return <div className="mt-2">
        <label htmlFor="first_name" className="block mb-2 text-md font-bold "> {label}</label>
        <input type={type || "text"} onChange={onChange} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder={placeholder} required />
    </div>
}
