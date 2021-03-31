import React from 'react';
import styled from 'styled-components';

function Portfolio({ data }) {

    if (data) {
        var projects = data.projects.map(function (projects) {
            var projectImage = 'images/portfolio/' + projects.image;
            return <div key={projects.title} className="columns portfolio-item">
                <div className="item-wrap">
                    <a href={projects.url} title={projects.title}>
                        <img alt={projects.title} src={projectImage} />
                        <div className="overlay">
                            <div className="portfolio-item-meta">
                                <h5>{projects.title}</h5>
                                <p>{projects.category}</p>
                            </div>
                        </div>
                        <div className="link-icon"><i className="fa fa-link"></i></div>
                    </a>
                </div>
            </div>
        })
    }

    return (
        <section id="portfolio">
            <Projects bgImage="url('images/projects_background.jpg')">
                <div className="row">
                    <div className="twelve columns collapsed">
                        <BoxTitle bgcolor={"#3477eb"}>PROJECTS</BoxTitle>
                        <br></br>
                        <div id="portfolio-wrapper" className="bgrid-halves s-bgrid-thirds cf">
                           {projects}
                        </div>
                    </div>
                </div>
            </Projects>
        </section>
    );
}

export default Portfolio;

const Projects = styled.div`
    background-image: ${props => props.bgImage};
    color: white;
    padding-top: 20px;
    // margin-top: -165px;
    border-radius: 0px;
    box-shadow: 1px 1px 3px rgb(0, 0, 0, 0.25);
`

const BoxTitle = styled.div`
    background: ${props => props.bgcolor};
    font-size: 20px;
    opacity: 0.9;
    margin: auto;
    border-radius: 20px;
    width: 200px;
    color: white;
    text-align: center;
    font: 18px opensans-bold, sans-serif;
    `