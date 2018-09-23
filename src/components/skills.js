import React from 'react'


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
        const componentClasses = ['skills'];
        if (this.state.visibility){
            componentClasses.push('show');
        }
        return (
            <div>
                <div className="skills-container">
                    <div className="skills-title"><h1>Skills</h1></div>
                    <div onClick={this.handleToggleVisibility} className="skills-subtitle">{this.state.visibility ? 'Hide skills' : 'Show skills'}</div>             </div>
               
                {this.state.visibility && (<div className={componentClasses.join(' ')}>
                    <ul>
                        <li>a</li>
                        <li>b</li>
                        <li>c</li>
                        <li>d</li>
                        <li>e</li>
                    </ul>
                </div>)
                }
            </div>)
    }
}

export default Skills;