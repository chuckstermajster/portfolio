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
                <div className="wrapper">
                <Header>
                    <Skills>
                        <Skill/>
                    </Skills>
                </Header>                
                    <Sidebar />
                    <Content />              
                <Footer/>
                </div>
            </div>
        )
    }
};

export default App;