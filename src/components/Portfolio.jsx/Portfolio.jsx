import { projects } from "../../data/data.js"
import { motion } from "framer-motion"
import { useState } from "react"
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs"

export default function Portfolio() {

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? projects.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }
    const nextSlide = () => {
        const isLastSlide = currentIndex === projects.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    return (
        <div
            name="projects"
            className="w-full h-auto mb-5">


            <div
                className="max-w-[1400px] h-[1200px] dark:bg-gray-300 bg-white shadow-xl text-white w-full mx-auto relative flex flex-col group rounded-2xl items-center p-5">

                <div
                    className="text-4xl flex flex-col justify-center items-center font-bold inline text-[#8892b0] border-pink-600 pb-8">
                    <h1>My Work !</h1>
                    <p className="lg:text-3xl md:text-2xl sm:text-xl text-lg">Do not hesitate to visit the demos, or you can go see the code on GitHub.</p>
                </div>
                <div
                    style={{ backgroundImage: `url(${projects[currentIndex].image})` }}
                    className="linearAnim w-full h-full bg-center shadow-md bg-cover duration-500 rounded-2xl min-h-[500px]">
                </div>
                {/** Left arrow */}
                <div
                    className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                    <BsChevronCompactLeft onClick={prevSlide} size={30} />

                </div>
                {/** right arrow */}
                <div
                    className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                    <BsChevronCompactRight onClick={nextSlide} size={30} />
                </div>
                <div

                    className="duration-300 ease-in w-full flex flex-col text-[#8892b0] dark:text-[#8892b0]  items-center p-5 rounded-2xl bg-center bg-cover duration-500 font-sans">
                    <h1 className="lg:text-4xl text-2xl mb-5 font-bold">{projects[currentIndex].title}</h1>
                    <p className="lg:text-xl text-lg font-sans">{projects[currentIndex].description}</p>

                    <div className="mt-4">
                        <ul className="flex flex-col list-none text-xl font-sans">
                            {projects[currentIndex].stack.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}

                        </ul>
                    </div>

                    <div className="flex gap-10 mt-5">
                        <button className="bg-[#f9f9f9] shadow-lg text-xl p-2 rounded-xl dark:bg-slate-900 bg-white dark:bg-slate-900 text-black dark:text-white font-sans"><a href={projects[currentIndex].url}>Demo</a></button>
                        <button className="bg-[#f9f9f9] shadow-lg text-xl p-2 rounded-xl dark:bg-slate-900 bg-white dark:bg-slate-900 text-black dark:text-white font-sans"><a href={projects[currentIndex].code}>Github</a></button>

                    </div>

                </div>
            </div>






        </div>
    )
}