import { Navbar } from "./components/Navbar"
import { Home } from "./pages/Home"
import { Projects } from "./pages/Projects"
import { Photography } from "./pages/Photography"
import { Music } from "./pages/Music"
import { Route, Routes } from "react-router-dom"

const App = () => {
  const routes = [
    {
      id: 0,
      path: "/",
      element: <Home />
    },
    {
      id: 1,
      path: "/projects",
      element: <Projects />
    },
    {
      id: 2,
      path: "/photography",
      element: <Photography />
    },
    {
      id: 3,
      path: "/music",
      element: <Music />
    },
  ]
  const routeElements = routes.map(route => (
    <Route key={route.id} path={route.path} element={route.element} />
  ))

  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>{routeElements}</Routes>
      </div>
    </>
  )
}

export default App;
