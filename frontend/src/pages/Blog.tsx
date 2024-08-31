import { useParams } from "react-router-dom"
import { DetailsBlog } from "../components/DetailsBlog"



export const Blog = () => {
    const { id } = useParams()
    console.log(id)

    return (
        <div><DetailsBlog id={id} /></div>
    )
}
