import React from 'react'
import HeroSection from '../components/HeroSection'
import headerImage from '../images/project-hero.png'
import DoubleSection from '../components/DoubleSection'
import section1Image from '../images/project-1.png'
import Footer from '../components/Footer'


function ProjectManagement() {
    const pageContent = [{
        section: 'hero', title: "We manage prefectly the   buildig and deployment  of your IT projects", content: "", image: headerImage
    },

    {
        section: 'section-one', title: "", content: "With our IT project management services, you will save time. Our project managers will undertake the hardest work of coordinating the working process to implement your idea.\n Our project manager can get onboard at any stage of the project, but the biggest success comes when this manager works with the team from the onset of project analysis and estimation.\n    Our Project Manager understands every technical detail well enough to estimate its value for the overall success of the project.\n\n The professional project management services offer:\n\n 1. Coordination of Team Work. \n * Lead the project from analysis and scheduling to support of the released product;\n * Determine the requirements, resources and schedule for project implementation;\n * Create and maintain technical and project documentation; \n * Perform team assessment and evaluation;\n * Assign individual responsibilities within the team;\n  * Manage the day-to-day operational aspects of a project and scope control;\n * Effectively predict, prevent and/or solve project issues. \n\n2. Realistic Schedule Creation\n 3. Software Development Life cycle Planning\n 4. Remote Project Management", buttonText: "I want this", image: section1Image
    },

    ]


    return (
        <div>
            <HeroSection title={pageContent[0].title} image={pageContent[0].image} />
            <h1 className="font-bold text-center text-4xl mt-8 text-white">Project Management</h1>
            <DoubleSection title={pageContent[1].title} content={pageContent[1].content} buttonText={pageContent[1].buttonText} image={pageContent[1].image} switchSide={true} />

          
        </div>
    )
}

export default ProjectManagement
