import { Link } from "react-router-dom"
import { Avatar } from "./Blogcard"


export const Appbar = () => {


    return <div className="border-b flex justify-between items-center py-5 px-10 text-2xl font-bold">
        <Link to="/">
            <div className="text-4xl font-extrabold">BlogEz</div>
        </Link>
        <div className="text-lg flex items-center justify-center gap-10 ">
            <Link to="/create">
                <div className="bg-lime-500 px-4 py-3 rounded-full font-mono">New Blog</div>
            </Link>
            <Avatar name={"anonymous"} />
        </div>
    </div>
}