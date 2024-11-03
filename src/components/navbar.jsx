import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import TargetBackgroundUi from './ui/targetBackgroundUi';
import { useNavigate } from 'react-router-dom';
import DefaultButton from './defaultButton';
import { NavbarMenu } from './navbarMenu';
import { useAuth } from './authProvider';
import { BackgroundLines } from './ui/backgroundLines';

function Navbar() {
  const { isLogged, handleLogout } = useAuth();
  const navigate = useNavigate();

  const navbarContent = () => (
    <>
      {(!isLogged || window.location.pathname === "/") && <TargetBackgroundUi />}
      <nav className={`fixed z-50 w-screen min-h-10 flex justify-between items-center px-5 py-2 gap-5 ${isLogged && 'backdrop-blur-md'}`}>
        <Link
          className='font-bold text-xl bg-gradient-to-br from-secondary to-accent bg-clip-text text-transparent'
          to={isLogged ? '/dashboard' : '/'}
        >
          Apollo
        </Link>
        <div className='flex justify-between items-center gap-5'>
          {isLogged && <>
            <NavbarMenu/>
          </>}
        </div>
        <DefaultButton
          onClick={() => {
            if (isLogged) {
              handleLogout();
            } else {
              navigate('/signin');
            }
          }}
          classes='px-4 py-1'
        >
          {isLogged ? 'Sign Out' : 'Sign In'}
        </DefaultButton>
      </nav>
      <main className="grid w-screen min-h-screen place-content-center py-16">
        <Outlet />
      </main>
    </>
  )

  if (window.location.pathname === "/") {
    return (
      <BackgroundLines>
        {navbarContent()}
      </BackgroundLines>
    )
  } else {
    return navbarContent();
  }
}

export default Navbar;
