import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout';
import Home from './Components/Home';
import About from './Components/About';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';

const routes = createBrowserRouter([
  {
    path: '/rt1',
    element: <Layout/>,
    children: [
      {index:true, element: <Home/>},
      {path: 'home', element: <Home/>},
      {path:'about', element: <About/>},
      {path:'portfolio', element: <Portfolio/>},
      {path:'contact', element: <Contact/>},
    ],
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={routes}/>
    </>
  )
}
