import React from 'react'
import Hamburger from './hamburger'
import Sidebar from './sidebar'

class SidebarWrapper extends React.Component {
    render() {
        return (
            <div id="sidebar-wrapper">            
            <Hamburger/>
            <Sidebar/>            
            </div>
        )
    }
}

export default SidebarWrapper;