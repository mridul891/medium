
import { Avatar } from "../components/Blogcard"

interface BlogsDetail {
    "title": string
    "content": string
    "author": {
        "name": string
    }
    "published": boolean,
    "authorId": string,
    "id": string
}
export const FullBlog = ({ blogs }: { blogs: BlogsDetail }) => {

    return <div className="h-screen ">
        <div className="flex justify-center">
            <div className="lg:grid lg:grid-cols-12 px-10 w-full max-w-screen-xl pt-14">
                <div className=" col-span-8 ">
                    <div className="text-5xl font-extrabold">
                        {blogs.title}
                    </div>

                    <div className="pt-4">{blogs.content}</div>
                </div>
                <div className=" absolute bottom-3  lg:relative col-span-4 lg:flex lg:flex-col lg:gap-3">
                    <div className="text-xl text-center font-semibold">Author </div>
                    <div className="flex gap-5">
                        <div>
                            <Avatar name={blogs.author.name} />
                        </div>
                        <div>
                            <h1 className="font-bold  text-xl lg:text-4xl ">{blogs.author.name}</h1>
                            <p className="text-lg lg:text-xl font-semibold text-slate-500">Random Catch Phrase about the author's ability to grab the user's attention </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}