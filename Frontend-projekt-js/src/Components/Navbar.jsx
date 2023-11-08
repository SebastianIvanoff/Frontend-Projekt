import {Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="nav-part-one">
         <div className='navtitle'>GarageBNB</div>
    <div>
      <Link to={'/'} className='navLink'>Parkering</Link>
    </div>
      </div>
   
    <div className='nav-search'>
      <input type="text" />
      <button>Search</button>
    </div>

    <div className='nav-part-two'>
      <Link to={'#'} className='navLink'>Mina Parkeringar</Link>
      <Link to={'/login'} className='navLink'>Logga in</Link>
    </div>
    </div>
  )
}

export default Navbar