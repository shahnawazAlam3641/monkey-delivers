import React, {lazy, Suspense} from 'react';
import  ReactDOM  from 'react-dom/client';
import Header from './components/HEader';
import Body from './components/Body';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Search from './components/Search';
// import Grocery from './components/Grocery';
import Help from './components/Help';
import Cart from './components/Cart';
import Login from './components/Login';


const Grocery = lazy(()=> import('./components/Grocery'))

import RestaurantMenu from './components/RestaurantMenu';
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
                element: <Suspense><Grocery/></Suspense> 
            },
            {
                path:'/about',
                element:<Help/>
            },
            {
                path:'/cart',
                element:<Cart/>
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/restaurant/:resId',
                element:<RestaurantMenu/>
            },
        ]
    }
])


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter}/>)