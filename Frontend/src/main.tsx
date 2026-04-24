import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Layout from './Layout'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Workshop from './pages/Workshop'
import DigiCareGuide from './pages/DigiCareGuide'

const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/shop',
                element: <Shop />,
            },
            {
                path: '/workshop',
                element: <Workshop />,
            },
            {
                path: '/faq',
                element: <DigiCareGuide />,
            },
        ],
    },
])

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
)
