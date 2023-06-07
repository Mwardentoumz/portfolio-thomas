import { FaMapPin } from "react-icons/fa"
import { HiMail } from "react-icons/hi"







export default function Contact (){
    return(
        <div
        name='contact'
        className="mt-5 p-5 flex flex-col w-full h-auto md:m-0 mx-auto justify-center items-center bg-white dark:bg-gray-300 text-[#8892b0] dark:text-[#8892b0] rounded-2xl shadow-xl "
        >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:md:text-5xl text-slate-700 dark:text-white">Contact</h1>
            <p className="text-3xl sm:text-4xl md:text-5xl lg:md:text-6xl">An idea, a project, contact me!</p>
                <div className="flex flex-col md:flex-row mt-5 gap-10">
                
                    <div className="text-2xl sm:text-2xl md:text-3xl lg:md:text-4xl">
                        <FaMapPin fill="red" className="shadow-md border-gray-slate-400 border-2 dark:bg-white rounded-full h-10 w-10 p-1 items-center justify-center flex hover:scale-105"/>
                        <h2 className="font-bold">Location</h2>
                        <p>Located in Haute Savoie, France</p>
                    </div>
                
                
                    <div className="text-2xl sm:text-2xl md:text-3xl lg:md:text-4xl">
                        <HiMail fill='blue'className="shadow-md border-gray-slate-400 border-2 dark:bg-white rounded-full h-10 w-10 p-1 items-center justify-center flex hover:scale-105"/>
                        <h2 className="font-bold">Mail</h2>
                        <p>thomas.thivolet@gmail.com</p>
                    </div>
                </div>
        </div>
    )
}