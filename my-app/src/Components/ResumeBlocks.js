import './ResumeBlocks.css';
// Images
import calSol from '../Assets/CalSol.jpeg';
import codeBase from '../Assets/CodeBase.png';
import CAM from '../Assets/CAM.jpeg';
import SFPUC from '../Assets/SFPUC.png';
import WestPortal from '../Assets/WestPortal.jpg';

function ResumeBlock({ job, description1, description2, description3, logo }) {
    return (
        <div className='block'>
            <div className='titleLogo'>
                <img className='logo' src={logo}></img>
                <div className='jobContainer'>
                    <div className='job'>{job}</div>
                </div>
            </div>
            <div className='description'>{description1}</div>
            <div className='description'>{description2}</div>
            <div className='description'>{description3}</div>
        </div>
    )
}

function Experience() {
    return (
        <div className='header'>
            Experience
            <div className='blockRow'>
                <ResumeBlock job={"Codebase"}
                description1={"- Developed website and database for local nonprofit to manage community partnerships and donations"}
                description2={"- Designed front-end elements for user-friendly interface"}
                description3={"- Managed client relationships through consistent communication and effective stand-up meetings"}
                logo={codeBase}/>
                <ResumeBlock job={"CalSol"} 
                description1={"- Led revision of temperature & voltage sense boards to fit updated battery box architecture"}
                description2={"- Contributed to design process for upcoming next-generation vehicle"}
                description3={"- Headed an initiative to standardize connectors throughout the battery management system"}
                logo={calSol}/>
                <ResumeBlock 
                job={"Project Pull"} 
                description1={"- Partnered with civil engineers at the Treasure Island Development Agency to accelerate design efforts"} 
                description2={"- Participated in fieldwork with Municipal Transport Authority"}
                description3={"- Analyzed and provided input on future development initiatives"}
                logo={SFPUC}/>
                <ResumeBlock job={"CAM Education"} 
                description1={"- Was head of operations for local academic summer camp with over 100 students"} 
                description2={"- Managed a team of seven tutors"}
                description3={"- Created graphics for social media marketing campaign"}
                logo={CAM}/>
                <ResumeBlock job={"West Portal Elementary"} 
                description1={"- Worked with a team of three to create an original 60-minute engineering curriculum"} 
                description2={"- Taught basic engineering concepts to groups of 30 elementary schoolers"}
                description3={"- Engaged students and fostered a space for creativity and problem-solving"}
                logo={WestPortal}/>
            </div>
        </div>
    )
}

export {Experience, ResumeBlock};