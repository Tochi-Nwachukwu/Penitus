import React from 'react'
import HeroSection from '../components/HeroSection'
import headerImage from '../images/data-analysis-hero.png'
import DoubleSection from '../components/DoubleSection'
import section1Image from '../images/data-analysis-1.png'
import Footer from '../components/Footer'


function DataAnalysis() {
    const pageContent = [{
        section: 'hero', title: "Make sense out of all your company’s data", content: "", image: headerImage
    },

    {
        section: 'section-one', title: "", content: "We deliver multivariate software and solutions for analyzing large, complex data sets quickly, easily and accurately. World-leading organizations rely on our solutions to get deeper insights, understand processes and make better predictions from their data.\n     Data analysis is a powerful solution for a design department to manage test data and unify analyses and test / simulation correlation process. \n A large choice of field dedicated signal processing tools is provided. The engineering teams can automate processing using a macro language. \n  The database engine provides powerful data management capabilities to improve performances and traceability of processing and data archiving. Interfaces are available to import / export data from / to simulation tools, test benches, MS-Office etc", buttonText: "I want this", image: section1Image
    },

    ]


    return (
        <div>
            <HeroSection title={pageContent[0].title} image={pageContent[0].image} />
            <h1 className="font-bold text-center text-4xl mt-8 text-white">Data Analysis</h1>
            <DoubleSection title={pageContent[1].title} content={pageContent[1].content} buttonText={pageContent[1].buttonText} image={pageContent[1].image} switchSide={true} />

           
        </div>
    )
}

export default DataAnalysis
