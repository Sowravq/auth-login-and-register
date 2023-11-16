import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ContaxProvaider from './components/ContaxApi/ContaxProvaider';
import Accordion from './pages/Accordion';
import RouteProvaider from './components/RouteProvaider/RouteProvaider';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:"/",
        element:  <Home></Home> 
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/register",
        element:<Register></Register>
      },
      {
        path:"/accordin",
        element:<RouteProvaider><Accordion></Accordion></RouteProvaider>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContaxProvaider>
    <RouterProvider router={router} />
    </ContaxProvaider>
  </React.StrictMode>,
)
