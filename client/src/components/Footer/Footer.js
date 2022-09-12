import React from 'react'

// Connect links
// add social icons
// connect icons to page links
const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
  <div className="grid grid-flow-col gap-4">
    <p className="link link-hover">About Us</p> 
    <p className="link link-hover">Contact</p> 
    <p className="link link-hover">Terms & Privacy</p>
  </div> 
  <div>
    <div className="grid grid-flow-col gap-4">
      <p>Icon</p>
      <p>Icon</p>
      <p>Icon</p>
    </div>
  </div> 
  <div>
    <p>Copyright © 2022 - All right reserved by ACME Industries Ltd</p>
  </div>
</footer>
  )
}

export default Footer