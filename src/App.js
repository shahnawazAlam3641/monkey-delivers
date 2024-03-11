import React from 'react';
import  ReactDOM  from 'react-dom/client';
import Header from './components/HEader';
import Body from './components/Body';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Search from './components/Search';
import Grocery from './components/Grocery';
import About from './components/About';
import Cart from './components/Cart';
import Login from './components/Login';
const App = ()=>{
    return (
        <div>
            <Header/>
            <Outlet/>
            
        </div>    
)
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: '/',
                element: <Body/>
            },
            {
                path:'/search',
                element:<Search/>
            },
            {
                path:'/grocery',
                element:<Grocery/>
            },
            {
                path:'/about',
                element:<About/>
            },
            {
                path:'/cart',
                element:<Cart/>
            },
            {
                path:'/login',
                element:<Login/>
            },
        ]
    }
])


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter}/>)