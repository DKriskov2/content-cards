import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap'

class Header extends Component {
  render () {
    return (
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
              <NavItem eventKey={3}>
                Favorites
                { this.props.favoritesLength > 0 &&
                  <div className='notification'>{this.props.favoritesLength}</div>
                }
              </NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    favoritesLength: state.favoritePlaces.length
  }
}

export default connect(mapStateToProps, {})(Header)