import { Link } from "react-router-dom"
import { Avatar } from "./BlogCard"

export const Appbar = () =>{
    return <div className="border-b flex justify-between px-10 py-4">
        <Link to="/blogs" className="flex flex-col justify-center">
            <div >
                Quill
            </div>
        </Link>
        <div>
            <Avatar name="Siddhi" size={"big"}/>
        </div>
        
    </div>
}