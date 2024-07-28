function Navbar() {

  return (
    <nav className='fixed w-screen min-h-10 flex justify-between items-center px-5 py-2 gap-5'>
      <div className='flex justify-between items-center gap-5'>
        <a className='font-bold text-xl bg-gradient-to-br from-secondary to-accent bg-clip-text text-transparent' href='#'>Apollo</a>
        <a href='#'>Home</a>
        <a href='#'>About</a>
        <a href='#'>Contact</a>
        <a href='#'>Services</a>
      </div>
      <button className='bg-inverted-background font-medium text-inverted-foreground px-4 py-1 rounded-lg'>Sign In</button>
    </nav>
  )
}

export default Navbar
