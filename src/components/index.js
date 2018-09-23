import React from 'react';
import Header from './header';
import Sidebar from './sidebar';
import Skills from './skills';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header>
                   <Skills/>
                </Header>
                <Sidebar/>                
            </div>
        )
    }
};

export default App;