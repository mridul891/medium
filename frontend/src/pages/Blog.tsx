import { useParams } from "react-router-dom"
import { DetailsBlog } from "../components/DetailsBlog"



export const Blog = () => {
    const { id } = useParams()


    return (
        <div><DetailsBlog id={id || ""} /></div>
    )
}
