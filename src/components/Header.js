import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap'

const Header = () => (
  <Navbar collapseOnSelect fluid>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/">Nearby Places</Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        <IndexLinkContainer to="/">
          <NavItem eventKey={1}>Home</NavItem>
        </IndexLinkContainer>
        <LinkContainer to="/places">
          <NavItem eventKey={2}>Places</NavItem>
        </LinkContainer>
        <LinkContainer to="/favorites">
          <NavItem eventKey={3}>Favorites</NavItem>
        </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header