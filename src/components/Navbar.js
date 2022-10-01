import { Link, useMatch, useResolvedPath } from "react-router-dom"

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
  
  return (
    <nav className="nav">
      <ul>{linkElements}</ul>
    </nav>
  )
}

const CustomLink = ({ to, children, ...props }) => {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}