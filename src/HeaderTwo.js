import React from 'react'
import { ImHome } from "react-icons/im";
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { FaBlog, FaStarHalfAlt } from "react-icons/fa";
import { IoNewspaperSharp } from "react-icons/io5";
import { IoMdLogIn } from "react-icons/io";
import { AiOutlineMenuFold,AiOutlineMenuUnfold } from "react-icons/ai";
function HeaderTwo() {
    return (
   
        <header className="bg-white">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    

                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex-shrink-0 flex">
                            <span className="font-bold font-serif text-gray-700 ">Gameonics</span>
                        </div>

                        <div className="absolute inset-x-0 left-0 inline-block items-center sm:hidden pl-2">
                            <AiOutlineMenuUnfold />
                        </div>

                        <div className="hidden sm:ml-16 md:ml-32 lg:ml-72 sm:block lg:justify-center"> 
                            <div className="flex flex-row sm:space-x-11 text-gray-600">
                                <a className="flex flex-row items-center transition duration-150 ease-in-out transform hover:text-gray-800 hover:-translate-y-1 hover:scale-110 ">                    
                                    <ImHome className="mx-0.5"/>
                                    <span >Home</span>
                                </a>   
                                <a className="flex flex-row items-center transition duration-150 ease-in-out transform hover:text-gray-800 hover:-translate-y-1 hover:scale-110">
                                    <IoNewspaperSharp className="mx-0.5" />
                                    <span >News</span>
                                </a>  
                                <a className="flex flex-row items-center transition duration-150 ease-in-out transform hover:text-gray-800 hover:-translate-y-1 hover:scale-110">
                                    <FaBlog className="mx-0.5" />
                                    <span >Blog</span>
                                </a>  
                                <a className="flex flex-row items-center transition duration-150 ease-in-out transform hover:text-gray-800 hover:-translate-y-1 hover:scale-110">
                                    <FaStarHalfAlt className="mx-0.5" />
                                    <span >Reviews</span>
                                </a>               
                            </div>
                        </div>
                    </div>

                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 ">
                                <a className="flex flex-row items-center text-gray-600 transition duration-150 ease-in-out transform hover:text-gray-800 hover:-translate-y-1 hover:scale-110">
                                        <IoMdLogIn className="mx-1" />
                                        <span className="pt-0.5">LOGIN</span>
                                </a>
                        </div>
                </div>
            </div>


            
        </header>
    )
}

export default HeaderTwo
