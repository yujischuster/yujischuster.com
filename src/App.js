import { Navbar } from "./components/Navbar"
import { Home } from "./pages/Home"
import { Projects } from "./pages/Projects"
import { Photography } from "./pages/Photography"
import { Music } from "./pages/Music"
import { Route, Routes } from "react-router-dom"

const App = () => {
  const routes = [
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/projects",
      element: <Projects />
    },
    {
      path: "/photography",
      element: <Photography />
    },
    {
      path: "/music",
      element: <Music />
    },
  ]
  const routeElements = routes.map(route => (
    <Route path={route.path} element={route.element} />
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
