import React from 'react';
import Header from './header';
import Sidebar from './sidebar';
import Skills from './skills';
import Content from './contents';
import Footer from './footer';
import Skill from './skill';


class App extends React.Component {
    render() {
        return (
            <div>
                <Header>
                    <Skills>
                        <Skill/>
                    </Skills>
                </Header>
                <div className="wrapper">
                    <Sidebar />
                    <Content />                    
                </div>
                <Footer/>
            </div>
        )
    }
};

export default App;