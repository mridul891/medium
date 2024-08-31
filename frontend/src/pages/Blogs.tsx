
import { Appbar } from "../components/Appbar"
import { Blogcard } from "../components/Blogcard"
import { useBlogs } from "../hooks"



export const Blogs = () => {

    const { loading, blogs } = useBlogs()

    if (loading) {
        return <div>
            loading...
        </div>
    }

    return (<>
        <Appbar />
        <div className="flex justify-center  ">
            <div className="flex flex-col justify-center lg:max-w-2xl">
                {blogs.map((blog) => <Blogcard
                    authorName={blog.author.name || "Anonymous"}
                    content={blog.content}
                    title={blog.title}
                    publishDate="12deec2023"
                    id={blog.id}
                />
                )}
            </div>
        </div>
    </>
    )
}

