import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { useSelector } from 'react-redux'

import Logo from '../../logo.svg'
import AppLink from '../AppLink'

export default function RouterHeader() {
  const { menus } = useSelector(({ baseReducer }) => baseReducer)
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt="Logo"
              src={Logo}
              width="48"
              height="48"
              className="d-inline-block App-logo"
            />
            React Notes
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {
                menus.map(({ name, to, children, type }) => (
                  <Nav.Link key={to} as={AppLink} to={to} name={name} type={type}></Nav.Link>
                ))
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}
