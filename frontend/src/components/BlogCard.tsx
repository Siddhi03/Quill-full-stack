import {Link} from "react-router-dom"

interface BlogCardProps {
    id:number;
    authorName: string;
    title: string;
    content: string;
    publishedDate: string;
}
export const BlogCard = ({id, authorName, title, content, publishedDate}: BlogCardProps)=>{
    return <Link to={`/blog/${id}`}>
        <div className=" p-4 border-b border-slate-200 pb-6 w-screen max-w-screen-md cursor-pointer">
            <div className="flex">
                <Avatar name={authorName}/>
                <div className="font-light text-sm pl-2 flex justify-center flex-col">
                    {authorName}
                </div>
                <div className="flex justify-center flex-col pl-2">
                <Circle />
                </div>
                <div className="text-slate-400 text-sm pl-2 font-light flex justify-center flex-col">
                    {publishedDate}
                </div>
                
            </div>
            <div className="text-xl font-semibold pt-2">
                {title}
            </div>
            <div className="text-md font-thin">
                {content.length > 100 ? content.slice(0,100) + "..." : content}
            </div>
            <div className=" text-slate-500 text-sm font-thin pt-5">
                {`${Math.ceil(content.length/100)} min read`}
            </div>
            
        </div>
    </Link>
}

function Circle(){
    return <div className="h-1 w-1 rounded full bg-slate-400"></div>
}

export function Avatar({name, size="small"}:{name:string, size?: "small" | "big"}){
    return <div className={`relative inline-flex items-center justify-center overflow-hidden bg-gray-200 rounded-full dark:bg-gray-600 ${size === "small" ? "w-6 h-6" : "w-8 h-8"}`}>
    <span className={` text-gray-600 dark:text-gray-300 ${size === "small" ? "text-sm" : "text-lg"}`}>{name[0].toUpperCase()}</span>
    </div>
}