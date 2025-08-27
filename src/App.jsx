import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <ul className='flex'>
          <li><Link to="advisors">Board of Advisors</Link></li>
          <li><Link to="contact">Contact Us</Link></li>
          <li><Link to="finlit">Financial Literacy</Link></li>
          <li><Link to="student">Student Team</Link></li>
          <li><Link to="services">Services & Products</Link></li>
          <li><Link to="support">Support </Link></li>
          <li><Link to="merch">Merchandise</Link></li>          
        </ul>
      </header>

      <main>
        <div> hello </div>
        <Outlet/> {/* rendered pages */}
      </main>

      <footer>{/* shared footer */}</footer>
    </>
  )
}

export default App
