import { Link } from "react-router-dom"

interface BlogCardProps {
    title: string
    content: string
    authorName: string
    publishDate: string
    id: string
}
export const Blogcard = ({ id, title, content, authorName, publishDate }: BlogCardProps) => {
    return (
        <Link to={`/blog/${id}`}>
            <div className="flex flex-col p-4 w-screen lg:w-[50vw] cursor-pointer">
                <div className="flex  h-full items-center">
                    <div>
                        <Avatar name={authorName} />
                    </div>
                    <div className="font-semibold pl-2">
                        {authorName} .
                    </div>
                    <div className="pl-2 font-large font-slate-600">
                        {publishDate}
                    </div>
                </div>
                <div className="text-lg lg:text-3xl font-bold">{title}</div>
                <div className="text-md font-md"  >{content.length > 100 ? content.slice(0, 100) + "..." : content}</div>
                <div className="text-slate-400">{`${Math.ceil(content.length / 100)} minute(s) read`}</div>
                <div className="bg-slate-200 h-1 w-full"></div>
            </div>
        </Link>
    )
}

export function Avatar({ name }: { name: string }) {
    return <div className="relative inline-flex items-center justify-center w-10 h-10    overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
        <span className="font-medium text-gray-600 dark:text-gray-300">{name.slice(0, 2)}</span>
    </div>
}