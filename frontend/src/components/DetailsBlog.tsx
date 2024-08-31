import { useBlog } from "../hooks"
import { FullBlog } from "../pages/FullBlog"

export const DetailsBlog = ({ id }: { id: string }) => {
    console.log(id)
    const { loading, blog } = useBlog({ id })
    if (loading) {
        return <div>
            loading...
        </div>
    }
    return (
        <div>
            {blog.map((bl) => <FullBlog blogs={bl} />)}
        </div>
    )
}

