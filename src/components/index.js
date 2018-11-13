import React from 'react';
import Header from './header';
import Skills from './skills';
import Content from './contents';
import Footer from './footer';
import Skill from './skill';
import SidebarWrapper from './sidebarWrapper';


class App extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <Header>
                    <Skills>
                        <Skill />
                    </Skills>
                </Header>
                <SidebarWrapper />
                <Content />
                <Footer />
            </div>
        )
    }
};

export default App;