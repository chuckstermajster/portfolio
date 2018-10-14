import React from 'react'
import Skill from './skill'


class Skills extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: true
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
                    <div onClick={this.handleToggleVisibility} className="skills-subtitle"><p>{this.state.visibility ? 'Hide skills' : 'Show skills'}</p></div>
                </div>
                {
                    this.state.visibility && (<div className="skills-list">
                       
                            <Skill skillname="HTML" skillvalue="60" />
                            <Skill skillname="CSS" skillvalue="75" />
                            <Skill skillname="Javsascript" skillvalue="30" />
                            <Skill skillname="C#" skillvalue="30" />
                            <Skill skillname="React" skillvalue="25" />                                                 
                    </div>)
                }
            </div>)
    }
}

export default Skills;