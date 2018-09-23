import React from 'react'

class Header extends React.Component {

    render() {
        return (
            <div>
                <header className="header-container">
                    <p className="header-title">Mateusz Żak</p>
                    <p className="header-subtitle">Web Developer</p>
                    {this.props.children}
                </header>                
            </div>
        )
    }
}

export default Header;