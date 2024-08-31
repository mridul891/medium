import { useState } from "react"
import { Editor } from "../components/Editor"
import axios from "axios"
import { BACKEND_URL } from "../confi"
import { useNavigate } from "react-router-dom"


const CreateBlog = () => {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const navigate = useNavigate()
    return <div className="flex  justify-center p-4 ">
        <div className="w-full flex flex-col gap-10 mt-10 md:w-[80vw] lg:w-[80vw] ">
            <div>
                <input type="text" id="helper-text" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4" placeholder="Title..." onChange={(e) => setTitle(e.target.value)} />
            </div>

            <div>
                <Editor onChange={(e) => setContent(e.target.value)} />
                <button type="submit" onClick={async () => {
                    const response = await axios.post(`${BACKEND_URL}/api/v1/blog/create`,
                        { title, content },
                        {
                            headers: {
                                Authorization: localStorage.getItem("mediumtoken")

                            }
                        })

                    navigate(`/blog/${response.data.id}`)
                }} className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200">
                    Publish post
                </button>
            </div>
        </div>
    </div>
}

export default CreateBlog