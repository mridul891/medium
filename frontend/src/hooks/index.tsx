import axios from "axios";
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../confi";

interface Blog {
    "title": string
    "content": string
    "author": {
        "name": string
    }
    "id": string
}
export const useBlogs = () => {

    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState<Blog[]>([]);

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
            headers: {
                Authorization: localStorage.getItem("mediumtoken")
            }
        })
            .then((res) => {
                console.log(res.data.blogs)
                setBlogs(res.data.blogs);
                setLoading(false);
            })
        console.log("done")
    }, [])

    return { loading, blogs }
}
// gets the particular blog
interface SingleBlog {
    "id": string
    "title": string
    "content": string
    "published": boolean
    "authorId": string
}
export const useBlog = ({ id }: { id: string }) => {
    const [loading, setLoading] = useState(true);
    const [blog, setblog] = useState<SingleBlog[]>([]);

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/entry/${id}`, {
            headers: {
                Authorization: localStorage.getItem("mediumtoken")
            }
        })
            .then((res) => {
                console.log(res.data.blog)
                setblog(res.data.blog);
                setLoading(false);
            })
    }, [id])

    return { loading, blog }
}


export const useDebounce = ({ time , inputValue }: { time: number, inputValue: string }) => {
    const [debouncedvalue, setDebouncedValue] = useState(inputValue)

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(inputValue)
        }, (time));
        return () => clearInterval(handler)
    }, [inputValue, debouncedvalue])

    return debouncedvalue

}