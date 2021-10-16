import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Nav, NavDropdown } from 'react-bootstrap'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

export default function NavDropdownLink({ title, href, listitems = [] }) {
  return (
    <>
      {listitems.length > 0 ? (
        <NavDropdown
          title={
            <>
              {title}{' '}
              <FontAwesomeIcon icon={faChevronDown} className="arrow-link" />
            </>
          }
          className="navdropdown"
        >
          {listitems.map((item, index) => (
            <>
              {index >= 1 && <NavDropdown.Divider />}
              <Link key={index} href={item.href} passHref>
                <NavDropdown.Item>{item.title}</NavDropdown.Item>
              </Link>
            </>
          ))}
        </NavDropdown>
      ) : (
        <Link href={href} passHref>
          <Nav.Link>
            {title}{' '}
          </Nav.Link>
        </Link>
      )}
    </>
  )
}
