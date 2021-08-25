
import React from 'react';
import { useEffect } from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { useProducts } from '../../contexts/ProductContext';
import Song from '../../Song/Song';

const Header = () => {
  const { history } = useProducts()
  const { user, logout } = useAuth()


  useEffect(() => {
    console.log(user);
  }, [user])
  const handleLogout = () => {
    logout()
  }

  return (
    <>
      <Navbar collapseOnSelect expand="md" style={{ backgroundColor: 'black' }} variant="dark">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Song />
              <Link to='/'>
                <Nav.Link href='/' >Home</Nav.Link>
              </Link>
              <Link to='/productlist'>
                <Nav.Link href='/productlist' >Catalog</Nav.Link>
              </Link>
              <Link to='/cart'>
                <Nav.Link href="/cart">Busket</Nav.Link>
              </Link>
              <Link to='/fav'>
                <Nav.Link href="/fav">Favorite</Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>

          {user ? (<>
            <div style={{ color: 'white', margin: '10px', border: '1px solid white', padding: '5px', borderRadius: '5px' }}>{user.email}</div>
            <Button onClick={handleLogout} style={{ backgroundColor: 'white', color: 'black' }} >Log Out</Button>
          </>)
            :
            (<>
              <Button onClick={() => history.push('/login')} variant="secondary" style={{ marginLeft: '10px' }}>Log In</Button>
              <Button onClick={() => history.push('/registration')} variant="primary" >Sign Up</Button>
            </>)

          }
        </Container>
      </Navbar>
    </>
  );
}

export default Header;