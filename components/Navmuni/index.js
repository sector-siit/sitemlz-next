import Image from 'next/image'
import Link from 'next/link'
import {
  Container,
  Navbar,
  Image as ImageB,
  Nav,
  NavDropdown
} from 'react-bootstrap'
import {
  faUserCircle,
  faTh,
  faSearch,
  faChevronDown
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import NavDropdownLink from './NavDropdownLink'

export default function Navmuni() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="primary">
        <Container>
          <Link href="/" passHref>
            <Nav.Link>
              <Image
                src="/images/principal/LogoNew.png"
                width={250}
                height={85}
                alt="Municipio de Lomas de Zamora"
              />
            </Nav.Link>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            className="justify-content-center"
            id="responsive-navbar-nav"
          >
            <Nav>
              <NavDropdownLink
                title="Municipio"
                href="/"
              />
              <NavDropdownLink
                title="Gestion"
                listitems={[
                  { title: 'Gestion', href: 'Gestion' }
                ]}
              />
              <NavDropdownLink
                title="Noticias"
                listitems={[
                  { title: 'Noticias', href: 'Noticias' }
                ]}
              />
              <NavDropdownLink
                title="Reclamos"
                listitems={[
                  { title: 'Reclamos', href: 'Reclamos' }
                ]}
              />
              <NavDropdownLink
                title="Consultas"
                href="/consultas"
              />
              <NavDropdownLink
                title="Tramites"
                listitems={[
                  { title: 'Vehiculos a Compactar', href: '/Turnos' },
                  { title: 'Turnos', href: '/Turnos' },
                  { title: 'Certificado unico de discapacidad', href: '/Turnos' },
                ]}
              />
            </Nav>
          </Navbar.Collapse>
          <Nav>
            <Nav.Link href="#buscar">
              <FontAwesomeIcon icon={faSearch} className="navbar-div__icon" />
            </Nav.Link>
            <Nav.Link href="#usuario">
              <FontAwesomeIcon
                icon={faUserCircle}
                className="navbar-div__icon"
              />
            </Nav.Link>
            <Nav.Link href="#app">
              <FontAwesomeIcon icon={faTh} className="navbar-div__icon" />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}
