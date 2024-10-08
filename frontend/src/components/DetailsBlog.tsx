import { useBlog } from "../hooks"
import { FullBlog } from "../pages/FullBlog"
import { Skeleton } from "./Skeleton"

export const DetailsBlog = ({ id }: { id: string }) => {
    const { loading, blog } = useBlog({ id })
    if (loading) {
        return <div>
            <Skeleton />
        </div>
    }
    return (
        <div>
            {blog.map((bl) => <FullBlog blogs={bl} />)}
        </div>
    )
}

