import './ResumeBlocks.css';
// Images
import calSol from '../Assets/CalSol.jpeg';
import codeBase from '../Assets/CodeBase.png';
import CAM from '../Assets/CAM.jpeg';
import SFPUC from '../Assets/SFPUC.png';
import WestPortal from '../Assets/WestPortal.jpg';

function ResumeBlock({ job, description, logo }) {
    return (
        <div className='block'>
            <div className='titleLogo'>
                <img className='logo' src={logo}></img>
                <div className='jobContainer'>
                    <div className='job'>{job}</div>
                </div>
            </div>
            <div className='description'>{description}</div>
        </div>
    )
}

function Experience() {
    return (
        <div className='header'>
            Experience
            <div className='blockRow'>
                <ResumeBlock job={"Codebase"} description={"This is me talking about my job, It was super cool and I'm excited to see where it takes me"} logo={codeBase}/>
                <ResumeBlock job={"CalSol"} description={"This is me talking about my job, It was super cool and I'm excited to see where it takes me"} logo={calSol}/>
                <ResumeBlock job={"Project Pull"} description={"This is me talking about my job, It was super cool and I'm excited to see where it takes me"} logo={SFPUC}/>
                <ResumeBlock job={"CAM Education"} description={"This is me talking about my job, It was super cool and I'm excited to see where it takes me"} logo={CAM}/>
                <ResumeBlock job={"West Portal Elementary"} description={"This is me talking about my job, It was super cool and I'm excited to see where it takes me"} logo={WestPortal}/>
            </div>
        </div>
    )
}

export {Experience, ResumeBlock};