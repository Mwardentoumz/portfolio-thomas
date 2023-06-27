import { FaMapPin } from "react-icons/fa"
import { HiMail } from "react-icons/hi"







export default function Contact (){
    return(
        <div
        name='contact'
        className="bg-white dark:bg-gray-300 text-[#8892b0] dark:text-[#8892b0] rounded-2xl shadow-xl flex flex-col p-5 items-center mt-10"
        >
            <h1 className="text-2xl sm:text-3xl md:text-4xl ">Contact</h1>
            <p className="text-2xl sm:text-3xl md:text-4xl">An idea, a project, contact me!</p>
                <div className="flex flex-col md:flex-row mt-5 gap-10">
                
                    <div className="sm:text-xl md:text-2xl lg:md:text-3xl flex flex-col justify-center items-center">
                        <FaMapPin fill="red" className="shadow-md border-gray-slate-400 border-2 dark:bg-white rounded-full h-10 w-10 p-1 items-center justify-center flex hover:scale-105"/>
                        <h2 className="font-bold">Location</h2>
                        <p>Located in Haute Savoie, France</p>
                    </div>
                
                
                    <div className="sm:text-xl md:text-2xl lg:md:text-3xl flex flex-col justify-center items-center">
                        <HiMail fill='blue'className="shadow-md border-gray-slate-400 border-2 dark:bg-white rounded-full h-10 w-10 p-1 items-center justify-center flex hover:scale-105"/>
                        <h2 className="font-bold">Mail</h2>
                        <p>thomas.thivolet@gmail.com</p>
                    </div>
                </div>
        </div>
    )
}