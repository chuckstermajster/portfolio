import React from 'react'
import Skill from './skill'


class Skills extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        }
    }

    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        });
    }
    render() {
        return (
            <div>
                <div className="skills-container">
                    <div className="skills-title"><h1>Skills</h1></div>
                    <div onClick={this.handleToggleVisibility} className="skills-subtitle">{this.state.visibility ? 'Hide skills' : 'Show skills'}</div>
                </div>
                {
                    this.state.visibility && (<div className="skills-list">
                       
                            <Skill skillname="Superskill" />
                            <Skill skillname="Extraskill" />
                            <Skill skillname="Megaskill" />
                            <Skill skillname="Ultraskill" />
                            <Skill skillname="Uberskill" />                        
                    </div>)
                }
            </div>)
    }
}

export default Skills;