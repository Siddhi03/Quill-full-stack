import { ChangeEvent, useState} from "react";
import {Link, useNavigate} from "react-router-dom"
import { SignupInput} from "@jainsiddhi03/common-app";
import axios from "axios";
import { BACKEND_URL } from "../config";

export const SignupAuth = ()=>{
    const [postSignupInputs, setPostSignupInputs] = useState<SignupInput>({
        name: "",
        email:"",
        password:""
    });

    const navigate = useNavigate();

    async function sendRequest(){
        try{
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/signup`,postSignupInputs);
            const jwt = response.data;
            localStorage.setItem("token", jwt);
            navigate("/blogs");
        }catch(e){
            alert("Error while signing up")
        }
    }

    return <div className="h-screen flex justify-center flex-col">
        <div className="flex justify-center">
            <div>
                <div className="px-10 pb-6">
                    <div className="text-3xl font-extrabold">
                        Create an account
                    </div>
                    <div  className="text-slate-500 mt-0.5" >
                        Already have an account?
                        <Link to="/signin" className="pl-2 underline">Sign in</Link>
                    </div>
                </div>            
                <LabelledInput label="Name" placeholder="Siddhi Jain" onChange={(e)=>{
                    setPostSignupInputs(c=>({
                        ...c,
                        name:e.target.value
                    }))
                }}/>
                <LabelledInput label="Email" placeholder="jainsiddhi@gmail.com" onChange={e=>{
                    setPostSignupInputs(c=>({
                        ...c,
                        email: e.target.value
                    }))
                }} />

                <LabelledInput label="Password" placeholder="123456" type = {"password"} onChange={e=>{
                    setPostSignupInputs(c=>({
                        ...c,
                        password: e.target.value
                    }))
                }}/>            
                <button onClick={sendRequest} type="button" className="mt-8 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                    Sign up
                </button>

            </div>
            

            
        </div>

    </div>
}

interface LabelledInputType {
    label : string;
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement>)=> void;
    type?:string
}

function LabelledInput({label, placeholder, onChange, type}:LabelledInputType){
    return <div>
        <label  className="block mb-2 text-sm font-bold text-gray-900 dark:text-white pt-5">{label}</label>
        <input onChange= {onChange} type={type ||"text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm
         rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
         dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={placeholder} required />
    </div>
}