import React from 'react'

class Header extends React.Component {

    render() {
        return (
            <header className="header-container">
                <header>
                    <p className="header-title">Name</p>
                    <p className="header-subtitle">Surname</p>
                    {this.props.children}
                </header>                
            </header>
        )
    }
}

export default Header;