import React from 'react'
import { CgArrowLongRight } from 'react-icons/cg'
import { useNavigate, Link } from 'react-router-dom'


const Project = ({ img, content, name, link, lang }) => {
    const navigate = useNavigate()
    return (
        <div className="card max-md:w-full h-full max-md:h-[300px] border border-[#414141]">
            <div className="projectimg h-[100%] rounded-[inherit] w-[100%] overflow-hidden" id="noise">
                <img src={img} className="object-cover max-md:object-left -full max-xl:h-full max-md:w-full " alt="" />
            </div>
            <div className="card-content flex flex-col relative gap-2 p-5">
                <div className="flex justify-between items-center">
                    <div className="projectname text-[32px] max-lg:text-[12px]">{name} <span className='opacity-60 text-[12px]'>( {lang} )</span> </div>
                </div>
                
                <Link to={link} target='_blank'>
                    <div className="btns flex items-center max-md:text-[12px] gap-2 border w-fit p-2 rounded-lg border-[#343434]">
                        Visit <CgArrowLongRight />
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Project
