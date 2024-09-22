import React, { useState } from 'react'
import { projects } from '../lists/projects'
import Project from './Project'

const ProjectSection = () => {
    const [more, setMore] = useState(true)
    return (

        <section className="projects p-10 overflow-x-hidden" id="projects">
            <div className="heading text-[50px] max-md:text-[28px] pb-10">
                <span className="md:px-2">//</span>
                My Projects
                <span id='hash' className="text-[#ff00ff] hash relative">#</span>
            </div>
            <div id="card">
                {(more ? projects.slice(0, 3) : projects).map(proj => (
                    <Project link={proj.projectlink} lang={proj.projectlanguages} name={proj.projectname} img={proj.projectimage} content={proj.projectcontent} />
                ))}


                <div className="more w-[200px] h-[50px] mx-auto font-bold my-10 flex justify-center items-center bg-white text-black rounded-lg hover:bg-[#0a0a0a] border-[#252525] hover:text-white hover:border transition-all duration-200 " onClick={() => setMore(!more)}>
                    {more ? 'Show More' : 'Show Less'}
                </div>
            </div>
        </section>
    )
}

export default ProjectSection
