import React from 'react';
import  ReactDOM  from 'react-dom/client';
import Header from './components/HEader';
// import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Cuisines from './components/Cuisines';

const App = ()=>{
    return (
        <div>
            <Header/>
            <HeroSection/>
            <Cuisines/>
        </div>    
)
}


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App/>)