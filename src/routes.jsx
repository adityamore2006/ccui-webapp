import App from "./App";
import Homepage from './pages/Homepage'
import  Advisors from './pages/Advisors'
import  Contact from './pages/Contact'
import  Finlit from './pages/Finlit'
import  Merch from './pages/Merch'
import  Services from './pages/Services'
import  Students from './pages/Students'
import  Support from './pages/Support'

export const routes = [
    {
        path: '/',
        element: <App />,
        children: [
            {index: true, element: <Homepage/>},
            {path: 'advisors', element: <Advisors/>},
            {path: 'contact', element: <Contact/>},
            {path: 'finlit', element: <Finlit/>},
            {path: 'merch', element: <Merch/>},
            {path: 'services', element: <Services/>},
            {path: 'students', element: <Students/>},
            {path: 'support', element: <Support/>}
        ]
    }
]