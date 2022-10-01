import { Link, useMatch, useResolvedPath } from "react-router-dom"
import styled from 'styled-components';

export const Navbar = () => {
  const links = [
    {
      path: "/",
      title: "Home"
    },
    {
      path: "/projects",
      title: "Projects"
    },
    {
      path: "/photography",
      title: "Photography"
    },
    {
      path: "/music",
      title: "Music"
    }
  ]
  const linkElements = links.map(link => (
    <CustomLink to={link.path}>{link.title}</CustomLink>
  ))

  const Nav = styled.nav`
    color: black;
    display: flex;
    justify-content: center;
    padding: 1rem 0;
  `

  const List = styled.ul`
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    gap: 1rem;
  `

  return (
    <Nav className="nav">
      <List>{linkElements}</List>
    </Nav>
  )
}

const CustomLink = ({ to, children, ...props }) => {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  const NavbarLink = styled(Link)`
    color: inherit;
    font-size: 16px;
    text-decoration: none;
    height: 100%;
    display: flex;
    align-items: center;
    padding: .25rem;
  `

  const ListItem = styled.li`
    border-bottom: ${isActive ? "4px solid blueviolet" : ""};
    margin-bottom: ${isActive ? "-4px" : ""};
  `

  return (
    <ListItem>
      <NavbarLink to={to} {...props}>
        {children}
      </NavbarLink>
    </ListItem>
  )
}