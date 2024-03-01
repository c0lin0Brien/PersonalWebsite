import './ResumeBlocks.css';

function ResumeBlock({ job, description }) {
    return (
        <div className='block'>
            <div className='titleLogo'>
                <div className='logo'></div>
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
                <ResumeBlock job={"Codebase"} description={"This is me talking about my job, It was super cool and I'm excited to see where it takes me"} />
                <ResumeBlock job={"CalSol"} description={"This is me talking about my job, It was super cool and I'm excited to see where it takes me"} />
                <ResumeBlock job={"Project Pull"} description={"This is me talking about my job, It was super cool and I'm excited to see where it takes me"} />
                <ResumeBlock job={"CAM Education"} description={"This is me talking about my job, It was super cool and I'm excited to see where it takes me"} />
                <ResumeBlock job={"West Portal Elementary"} description={"This is me talking about my job, It was super cool and I'm excited to see where it takes me"} />
            </div>
        </div>
    )
}

export default Experience;