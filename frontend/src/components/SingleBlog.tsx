import { Appbar } from "./Appbar"
import { Blog } from "../hooks"
import { Avatar } from "./BlogCard"

export const SingleBlog = ({blog}: {blog:Blog}) =>{
    return <div>
        <Appbar />
        <div className="mx-20">
            <div className="grid grid-cols-12 mx-10 pt-12 max-w-screen-xl">
                <div className="col-span-8 ">
                    <div className="text-5xl font-extrabold">
                        {blog.title}
                    </div>
                    <div className="text-slate-500 pt-2">
                        Posted on 20' May 2024
                    </div>
                    <div className="pt-4">
                        {blog.content}
                    </div>
                </div>
                <div className="col-span-4">
                    <div className="text-slate-600 text-lg pb-4">
                        Author
                    </div>
                    <div className="flex">
                        <div className="pr-4 flex flex-col justify-center">
                            <Avatar size="big" name={blog.author.name || "Anonymous"} />
                        </div>
                        <div>
                            <div className="text-xl font-bold">
                                {blog.author.name || "Anonymous"}
                            </div>
                            <div className="pt-1 text-slate-500">
                                Random catch phrase about the author's ability to grab the user's attention!
                            </div>
                        </div>
                        
                    </div>
                    
                    
                </div>
            </div>
        </div>
    </div>
}