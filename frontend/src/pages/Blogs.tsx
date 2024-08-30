import { Blogcard } from "../components/Blogcard"


export const Blogs = () => {
    return (
        <div className="flex justify-center  ">
            <div className="flex flex-col justify-center lg:max-w-2xl">
                <Blogcard
                    title="How an Ugly Single-Page Website Makes $5000 a Month with Affiliate Marketing "
                    content="No need to create a fancy and modern website with hundreds of pages to make money online.Making money online is dream for man"
                    authorName="Mridul Pandey"
                    publishDate="Dec 3,2024" />
                <Blogcard
                    title="How an Ugly Single-Page Website Makes $5000 a Month with Affiliate Marketing "
                    content="No need to create a fancy and modern website with hundreds of pages to make money online.Making money online is dream for man"
                    authorName="Mridul Pandey"
                    publishDate="Dec 3,2024" />
                <Blogcard
                    title="How an Ugly Single-Page Website Makes $5000 a Month with Affiliate Marketing "
                    content="No need to create a fancy and modern website with hundreds of pages to make money online.Making money online is dream for man"
                    authorName="Mridul Pandey"
                    publishDate="Dec 3,2024" />
            </div>
        </div>
    )
}

