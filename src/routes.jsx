import App from "./App";
import Homepage from './pages/Homepage'
import  Advisors from './pages/Advisors'
import  Contact from './pages/Contact'
import  Finlit from './pages/Finlit'
import  Merch from './pages/Merch'
import  Services from './pages/Services'
import  Students from './pages/Students'
import  Support from './pages/Support'
import Team from "./pages/Team";

export const routes = [
    {
        path: '/',
        element: <App />,
        children: [
            {index: true, element: <Homepage/>},
            {
                path: 'team', 
                element: <Team/>,
                children: [
                    {index: true, element: <Students/>}, // default to students when /team is visited
                    {path: 'students', element: <Students/>},
                    {path: 'advisors', element: <Advisors/>}
                ]
            },
            {path: 'homepage', element: <Homepage/>},
            {path: 'contact', element: <Contact/>},
            {path: 'finlit', element: <Finlit/>},
            {path: 'merch', element: <Merch/>},
            {path: 'services', element: <Services/>},
            {path: 'support', element: <Support/>}
        ]
    }
]