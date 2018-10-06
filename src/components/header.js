import React from 'react'

class Header extends React.Component {

    render() {
        return (
            <header className="header-container">
                <header>
                    <p className="header-title">Mateusz Żak</p>
                    <p className="header-subtitle">Web Developer</p>
                    {this.props.children}
                </header>                
            </header>
        )
    }
}

export default Header;