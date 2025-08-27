
import { Outlet, Link, useLocation } from 'react-router-dom'

const Team = () => {
    const location = useLocation()
    
    return (
        <div className="space-y-6">
            <div className="flex gap-4 border-b border-slate-200 pb-4">
                <Link 
                    to="/team/students"
                    className={`px-4 py-2 rounded font-medium transition-colors ${
                        location.pathname === '/team/students' || location.pathname === '/team'
                            ? 'bg-indigo-600 text-white'
                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                >
                    Student Team
                </Link>
                <Link 
                    to="/team/advisors"
                    className={`px-4 py-2 rounded font-medium transition-colors ${
                        location.pathname === '/team/advisors'
                            ? 'bg-indigo-600 text-white'
                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                >
                    Board of Advisors
                </Link>
            </div>
            
            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default Team