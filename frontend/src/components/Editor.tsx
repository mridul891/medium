import { ChangeEvent } from "react"

export const Editor = ({onChange} : {onChange : (e: ChangeEvent<HTMLTextAreaElement>)=>void}) => {

    return <>
        <form>
            <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50  ">
                <div className="px-4 py-2 bg-white rounded-b-lg">
                    <label htmlFor="editor" className="sr-only">Publish post</label>
                    <textarea id="editor" onChange ={onChange}  className="block focus:outline-none w-full px-0 text-sm text-gray-800 bg-white border-0 " placeholder="Write an article..." required ></textarea>
                </div>
            </div>
            
        </form>
    </>

}
