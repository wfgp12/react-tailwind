// Libraries
import { useRoutes, BrowserRouter } from 'react-router-dom'

// Pages
import Account from '../Account'
import Home from '../Home'
import NotFound from '../NotFound'
import Order from '../Order'
import Orders from '../Orders'

// Styles
import './App.css'
import SignIn from '../SignIn'
import NavBar from '../../components/NavBar'

const AppRoutes = () => {
  const routes: React.ReactElement<unknown, string | React.JSXElementConstructor<unknown>> | null = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/my-order', element: <Order /> },
    { path: '/my-orders', element: <Orders /> },
    { path: '/account', element: <Account /> },
    { path: '/sign-in', element: <SignIn /> },
    { path: '/*', element: <NotFound /> },
  ])
  return routes;
}

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <NavBar />
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
