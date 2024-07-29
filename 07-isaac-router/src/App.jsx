 import './App.css'
import { HomePage } from './pages/Home.jsx'
import { AboutPage } from './pages/About.jsx'
import { Page404 } from './pages/404.jsx'
import { Router } from './Router.jsx'

export const appRoutes = [
  {
    path: '/',
    Component: HomePage
  },
  {
    path: '/about',
    Component: AboutPage
  },
  {
    path: '/search/:query',
    Component: () => <h1>Buscador</h1>
  }
]

function App() {
  return (
    <main>
      <Router routes={[
        appRoutes 
      ]}
      
      defaultComponent={Page404}/>
    </main>
  )
}


export default App
