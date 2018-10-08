import React from 'react'

class Sidebar extends React.Component {
    render() {
        return (
            <div className="sidebar">                
                    <ul className="side-menu">
                        <li>Home</li>
                        <li>About</li>
                        <li>Portfolio</li>
                        <li>Blog</li>
                    </ul>                
            </div>
        )
    }
}

export default Sidebar
