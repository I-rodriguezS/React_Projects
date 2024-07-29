import { EVENTS } from "./conts"
import { useEffect, useState } from "react"
import { match } from 'path-to-regexp'
import { appRoutes } from "./App.jsx"

export function Router({ routes = [], defaultComponent: DefaultComponent = () => <h1>404</h1> }) {
    const [currentPath, setCurrentPath] = useState(window.location.pathname)
    
    const home = '/'
    const abt = 'about'
    const search = '/search/:query'
      
    useEffect(() => {
      const onLocatonChange = () => {
      setCurrentPath(window.location.pathname)
      }
  
      window.addEventListener(EVENTS.PUSHSTATE, onLocatonChange)
      window.addEventListener(EVENTS.POPSTATE, onLocatonChange)
  
      return () => {
        window.removeEventListener(EVENTS.PUSHSTATE, onLocatonChange)
      }
    }, [])

    let routeParams = {appRoutes}

    const Page = routes.find(({ path }) => {
        console.log('path ' + path)
        console.log(' Current path:' + currentPath)
        path = path ?? '/';
        if (home === currentPath) return true

        const matcherUrl = match(path, { decode: decodeURIComponent})
        const matched = matcherUrl(currentPath)
        if (!matched) return false

        routeParams = matched.params
        return true
      })?.Component
    
    return Page 
    ? <Page routeParams={appRoutes}/> 
    : <DefaultComponent routeParams={appRoutes}/>
  }
  