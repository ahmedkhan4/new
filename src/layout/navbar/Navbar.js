import React from 'react'

const Navbar = () => {
  return (
    <>
      <div className='row'>
        <div className='col-lg-2 col-md-2 col-sm-2'>Logo</div>
        <div className='col-lg-8 col-md-4 col-sm-4'>
          <ul className='d-inline-flex'>
            <li>Home</li>
            <li>Services</li>
            <li>Contact Us</li>
            <li>About Us</li>
          </ul>
        </div>
        <div className='col-lg-2 col-md-2 col-sm-2'>
          Profile
        </div>
      </div>
    </>
  )
}

export default Navbar
