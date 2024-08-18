import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import TargetBackgroundUi from './ui/targetBackgroundUi';
import { useNavigate } from 'react-router-dom';
import DefaultButton from './defaultButton';
import { NavbarMenu } from './navbarMenu';

function Navbar({navigation}) {
  const [isLogged, setIsLogged] = useState(true);
  const navigate = useNavigate();

  return (
    <>
      <TargetBackgroundUi />
      <nav className='fixed z-50 w-screen min-h-10 flex justify-between items-center px-5 py-2 gap-5'>
        <Link className='font-bold text-xl bg-gradient-to-br from-secondary to-accent bg-clip-text text-transparent' to='/'>Apollo</Link>
        <div className='flex justify-between items-center gap-5'>
          {isLogged && <>
            <NavbarMenu/>
          </>}
        </div>
        <DefaultButton
          onClick={() => navigate('/signin')}
          classes='px-4 py-1'
        >
          Sign In
        </DefaultButton>
      </nav>
      <main className="grid w-screen min-h-screen place-content-center py-16">
        <Outlet />
      </main>
    </>
  )
}

export default Navbar;
