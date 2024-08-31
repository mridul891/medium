import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import { useDebounce } from "../hooks";
import { BACKEND_URL } from "../confi";
import axios from "axios";

export const Editor = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');


    const createPost = async () => {
        await axios.post(`${BACKEND_URL}/api/v1/blog/create`, value, {
            headers: {
                Authorization: localStorage.getItem('mediumToken')
            }
        }).then((res) => console.log(res))

    }

    return <>
        
    </>

}
