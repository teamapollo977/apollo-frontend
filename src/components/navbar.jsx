import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import TargetBackgroundUi from './ui/targetBackgroundUi';
import { useNavigate } from 'react-router-dom';

function Navbar({navigation}) {
  const [isLogged, setIsLogged] = useState(false);
  // navigate
  const navigate = useNavigate();

  return (
    <>
      <TargetBackgroundUi />
      <nav className='fixed w-screen min-h-10 flex justify-between items-center px-5 py-2 gap-5'>
        <div className='flex justify-between items-center gap-5'>
          <Link className='font-bold text-xl bg-gradient-to-br from-secondary to-accent bg-clip-text text-transparent' to='/'>Apollo</Link>
          {isLogged || navigation && <>
            <Link to='/home'>Home</Link>
            <Link to='#'>About</Link>
            <Link to='#'>Contact</Link>
            <Link to='#'>Services</Link>
          </>}
        </div>
        <button
          onClick={() => navigate('/signin')}
          className='bg-gradient-to-br from-inverted-background to-inverted-medium font-medium text-inverted-foreground px-4 py-1 rounded-lg'
        >
          Sign In
        </button>
      </nav>
      <Outlet />
    </>
  )
}

export default Navbar;
