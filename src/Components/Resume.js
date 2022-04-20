import React from 'react';
import ReactWordcloud from 'react-wordcloud';
import { Resizable } from "re-resizable";
import styled from 'styled-components';

const options = {
    enableTooltip: false,
    fontFamily: "impact",
    fontSizes: [40, 60],
    fontStyle: "oblique",
    fontWeight: "bold",
    padding: 1,
    rotations: 1,
    rotationAngles: [0, 90],
    transitionDuration: 2000
};

const resizeStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "solid 10px #ddd",
    background: "#f0f0f0",
    margin: "10px 0px",
    opacity: 0.9
};

const software_skills = [
    // text: "SSMS, SAP-ERP, MS SharePoint, MS Dynamics, MS Excel, MS Access"
    {
        text: 'SSMS',
        value: 60,
    },
    {
        text: 'SAP-ERP',
        value: 77,
    },
    {
        text: 'MS SharePoint',
        value: 30,
    },
    {
        text: 'MS Dynamics',
        value: 20,
    },
    {
        text: 'MS Access',
        value: 70,
    },
    {
        text: 'MS Excel',
        value: 77,
    }
]

const data_concepts_skills = [
    //   "data_concepts": "Analysis, Visualization, Manipulation, Extraction, Validation, Cleansing, Reporting"
    {
        text: 'Analysis',
        value: 70,
    },
    {
        text: 'Visualization',
        value: 77,
    },
    {
        text: 'Manipulation',
        value: 65,
    },
    {
        text: 'Extraction',
        value: 64,
    },
    {
        text: 'Validation',
        value: 65,
    }
]

const languages_skills = [
    //   "languages": "SQL, T-SQL, VBA, Python"
    {
        text: 'SQL',
        value: 15,
    },
    {
        text: 'T-SQL',
        value: 10,
    },
    {
        text: 'VBA',
        value: 10,
    },
    {
        text: 'Python',
        value: 10,
    }
]

function Resume({ data }) {
    if (data) {
        var education = data.education.map(function (education_arg) {
            return <Box bgcolor={"#0a3e61"}><div key={education_arg.school}><h3><WhiteText>{education_arg.school}</WhiteText></h3>
                <p className="info"><WhiteText>{education_arg.degree}</WhiteText><br></br><em className="date"><WhiteText>{education_arg.graduated}</WhiteText></em></p>
                <p><WhiteText>{education_arg.description}</WhiteText></p></div></Box>
        })
        var certifications = data.certifications.map(function (certifications_arg) {
            var certificationImage = 'images/' + certifications_arg.image;
            return <Box bgcolor={"#0a3e61"}> <div key={certifications_arg.school}><h3><WhiteText>{certifications_arg.school}</WhiteText></h3>
                <p className="info"><WhiteText>{certifications_arg.degree}</WhiteText><br></br><em className="date"><WhiteText>{certifications_arg.graduated}</WhiteText></em></p>
                <p>{certifications_arg.description}</p>
                 <MCPImage src={certificationImage} width= "150px" alt="certification"></MCPImage></div> </Box>

        })
        // let bgcolors = ["#0a3e61", "#0a3e61", "#0a3e61"];
        // let counter_bgcolors = -1;
        var work = data.work.map(function (work_arg) {
            // return <Box bgcolor={bgcolors[++counter_bgcolors]}>
            return <Box bgcolor={"#0a3e61"}>
                <div key={work_arg.company}>
                    <h3>
                        <WhiteText>{work_arg.company}</WhiteText>
                    </h3>
                    <p className="info">
                        <WhiteText>
                            {work_arg.title}
                            <span>&bull;</span> <em className="date">{work_arg.years}</em>
                        </WhiteText>
                    </p>
                    <p>{work_arg.description.map(function (description) {
                        return <li key={description}>{description}</li>
                    })}</p>
                </div>
            </Box>
        });
        var skills = <>
            {/* data.skills.map(function (skills) {
             return <div key={skills.software}><h3>Software</h3>{skills.software}<h3>Data Concepts</h3>{skills.data_concepts}<h3>Languages</h3>{skills.languages}</div>
         }) */}
            <BoxTitle bgcolor={"#0a3e61"}>SOFTWARE</BoxTitle>
            <Resizable style={resizeStyle}>
                <div style={{ width: "100%", height: "100%" }}>
                    <ReactWordcloud options={options} words={software_skills} />
                </div>
            </Resizable>
            <BoxTitle bgcolor={"#0a3e61"}>DATA CONCEPTS</BoxTitle>
            <Resizable style={resizeStyle}>
                <div style={{ width: "100%", height: "100%" }}>
                    <ReactWordcloud options={options} words={data_concepts_skills} />
                </div>
            </Resizable>
            <BoxTitle bgcolor={"#0a3e61"}>LANGUAGES</BoxTitle>
            <Resizable style={resizeStyle}>
                <div style={{ width: "100%", height: "100%" }}>
                    <ReactWordcloud options={options} words={languages_skills} />
                </div>
            </Resizable>
        </>
    }

    return (
        <section id="resume">
            <CertificationsEducation bgImage="url('images/education_background.jpg')">
                <div className="row education">
                    <div className="three columns header-col">
                        <WhiteTextTitle><BoxTopic bgcolor={"#3477eb"}>Certifications</BoxTopic> </WhiteTextTitle>
                    </div>
                    <div className="nine columns main-col">
                        <div className="row item">
                            <div className="twelve columns">
                             <WhiteText> {certifications}</WhiteText>
                            </div>
                        </div>
                    </div>
                    <div className="three columns header-col">
                        <WhiteTextTitle><BoxTopic bgcolor={"#3477eb"}>Education</BoxTopic> </WhiteTextTitle>
                    </div>
                    <div className="nine columns main-col">
                        <div className="row item">
                            <div className="twelve columns">
                            <WhiteText>{education}</WhiteText>
                            </div>
                        </div>
                    </div>
                </div>
            </CertificationsEducation>

            <Work bgImage="url('images/work_background.jpg')">
                <div className="row work">
                    <div className="three columns header-col">
                     <WhiteTextTitle><span> <BoxTopic bgcolor={"#3477eb"}>Work</BoxTopic> </span></WhiteTextTitle>
                    </div>

                    <div className="nine columns main-col">
                        {work}
                    </div>
                </div>
            </Work>

            <Skills bgImage="url('images/skills_background.jpg')">
                <div className="row skill">
                    <div className="three columns header-col">
                        <WhiteTextTitle><BoxTopic bgcolor={"#3477eb"}>Skills</BoxTopic></WhiteTextTitle>
                    </div>

                    <div className="nine columns main-col">
                        {/* <p>{skillmessage}</p> */}

                        <div>
                            <ul className="skills">
                                {skills}
                            </ul>
                        </div>
                    </div>
                </div>
            </Skills>
        </section>
    );
}

export default Resume;

const Box = styled.div`
    background: ${props => props.bgcolor}; 
    opacity: 0.9;
    margin: 30px;
    padding: 20px;
    border-radius: 20px;
    transition: 0.5s;
    box-shadow: 5px 5px 20px rgba(255, 255, 255, 0.5);
    &:hover {
        background: #0a2e51;
        box-shadow: 10px 10px 40px rgba(255, 255, 255, 1);
        transform: scale(1.05);
    }
`

const BoxTitle = styled.div`
    background: ${props => props.bgcolor};
    text-align: center;
    font-size: 20px;
    opacity: 0.9;
    margin: 30px;
    border-radius: 20px;
`

const BoxTopic = styled.div`
background: ${props => props.bgcolor};
    text-align: center;
    opacity: 0.9;
    margin: 20px;
    padding: 3px;
    border-radius: 20px;
    width: 200px;
`

const Work = styled.div`
    background-image: ${props => props.bgImage};
    color: white;
    padding-top: 20px;
    border-radius: 0px;
    box-shadow: 1px 1px 3px rgb(0, 0, 0, 0.25);
`

const WhiteTextTitle = styled.h1`
    color: white;
`

const WhiteText = styled.span`
    color: white;
`

const Skills = styled.div`
    background-image: ${props => props.bgImage};
    color: white;
    padding-top: 20px;
    border-radius: 0px;
    box-shadow: 1px 1px 3px rgb(0, 0, 0, 0.25);
`

const CertificationsEducation = styled.div`
    background-image: ${props => props.bgImage};
    color: white;
    padding-top: 20px;
    border-radius: 0px;
    box-shadow: 1px 1px 3px rgb(0, 0, 0, 0.25);
`

const MCPImage = styled.img`
    margin: 0 38%;
    transition: 1s;
    &:hover {
        transform: scale(1.3) rotate(360deg);
    }
`
