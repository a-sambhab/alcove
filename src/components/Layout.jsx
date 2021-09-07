import React from "react"
import Navbar from "./Navbar/Navbar.jsx"
import Contact from "./Contact/Contact.jsx"
const Layout = ({ children }) => {

  return (
    <>
      <Navbar/>
      <main>{children}</main>
      <Contact/>
    </>
  )
}

export default Layout
