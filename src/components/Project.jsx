import React from 'react'
import { CgArrowLongRight } from 'react-icons/cg'
import { useNavigate, Link } from 'react-router-dom'


const Project = ({ img, content, name, link, lang }) => {
    const navigate = useNavigate()
    return (
        <div className="card max-md:w-full h-full max-md:h-[300px] border border-[#414141]">
            <div className="projectimg h-[100%] rounded-[inherit] w-[100%] overflow-hidden" id="noise">
                <img src={img} className="object-cover -full max-xl:h-full max-md:w-full " alt="" />
            </div>
            <div className="card-content flex flex-col relative gap-2 p-5">
                <div className="flex justify-between items-center">
                    <div className="projectname text-[32px] max-md:text-[16px]">{name} <span className='opacity-60 text-[12px]'>( {lang} )</span> </div>
                </div>
                <div className="projectcontent text-[#a0a0a070] max-md:text-[12px]">
                    {content.length > 80 ? content.substring(0, 80) + '...' : content}
                </div>
                <Link to={link} target='_blank'>
                    <div className="btns flex items-center gap-2 border w-fit p-2 rounded-lg border-[#343434]">
                        Visit <CgArrowLongRight />
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Project
