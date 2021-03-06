import React from 'react';

const Skill = (props) => {
    return (
        <div className="skill">
            <p className="skill-name">{props.skillname}</p>
            <progress className="progress" value={props.skillvalue} max="100"></progress><span>{props.skillvalue}%</span>
            <hr className="line"/>
            <p className="skill-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore obcaecati reprehenderit culpa harum quisquam sapiente est tempore repellendus architecto veniam unde quasi cum praesentium illo officia alias, provident quae atque?</p>
        </div>
             
    )
}

export default Skill;