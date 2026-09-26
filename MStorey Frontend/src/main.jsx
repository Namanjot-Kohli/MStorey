import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import App from './App.jsx'
import Home from './pages/Home.jsx' 
import Products from './pages/Products.jsx'
import Dummy_ProductCard from './components/Dummy_ProductCard.jsx'

import {createBrowserRouter, RouterProvider} from "react-router-dom"


import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import { MantineProvider } from '@mantine/core';


const router = createBrowserRouter([
  {path:"/", element: <Home /> },
  {path:"/products/:categories", element: <Products />},
  {path:"/jackass", element: <Dummy_ProductCard />}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MantineProvider>
      <RouterProvider router={router} />
    </MantineProvider>
  </StrictMode>,
)
