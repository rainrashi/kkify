import Wrapper from '../assets/wrappers/Navbar'
import { MdFormatAlignLeft } from 'react-icons/md'
import { FaUserCircle } from 'react-icons/fa'
import { IoCaretDown } from 'react-icons/io5'
import { useAppContext } from '../context/appContext'
import { useState } from 'react'
import Logo from './Logo'

const Navbar = () => {
  const [showLogout, setShowLogout] = useState(false)
  const { toggleSidebar, logoutUser, user } = useAppContext()
  return (
    <Wrapper>
      <div className='nav-center'>
        <button type='button' className='toggle-btn' onClick={toggleSidebar}>
          <MdFormatAlignLeft />
        </button>
        <div>
          <Logo />
          <h3 className='logo-text'>Halo, {user && user.name}</h3>
        </div>
        <div className='btn-container'>
          <button
            type='button'
            className='btn'
            onClick={() => setShowLogout(!showLogout)}
          >
            <FaUserCircle />
            {user && user.name}
            <IoCaretDown />
          </button>
          <div className={showLogout ? 'dropdown show-dropdown' : 'dropdown'}>
            <button type='button' className='dropdown-btn' onClick={logoutUser}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
export default Navbar
