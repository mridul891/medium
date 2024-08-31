
import { useEffect } from "react"
import { Blogcard } from "../components/Blogcard"
import { Skeleton } from "../components/Skeleton"
import { useBlogs } from "../hooks"
import { useNavigate } from "react-router-dom"




export const Blogs = () => {
    const navigate = useNavigate()
    useEffect(() => {
        if (!localStorage.getItem("mediumtoken") || localStorage.getItem('mediumtoken') == null) {
            navigate('/signin')
        }
    }, [])
    const { loading, blogs } = useBlogs()

    if (loading) {
        return <div>
            <Skeleton />
            <Skeleton />
            <Skeleton />

        </div>
    }

    return (<>
        <div className="flex justify-center  ">
            <div className="flex flex-col justify-center lg:max-w-2xl">
                {blogs.map((blog) => <Blogcard
                    authorName={blog.author.name || "Anonymous"}
                    content={blog.content}
                    title={blog.title}
                    publishDate=""
                    id={blog.id}
                    key={blog.id}
                />
                )}
            </div>
        </div>
    </>
    )
}

