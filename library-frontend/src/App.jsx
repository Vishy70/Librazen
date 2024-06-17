import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import VHome from './components/VHome'
import VCatalogue from './components/VCatalogue'
import VLogin from './components/VLogin'

function App() 
{
  const [token, setToken] = React.useState(false)//unfortunately, {} is truthy...

  //on every rerender, save token to sessionStorage, to prevent logout on relog
  if(token)
  {
    sessionStorage.setItem('token', JSON.stringify(token))
  }

  //On mount and subsequent rerenders, if session was in progress, load token!
  React.useEffect(() => 
  {
    if(sessionStorage.getItem('token'))
    {
      const data = JSON.parse(sessionStorage.getItem('token'))
      setToken(data)
    }
  }, [])


  return (
    <BrowserRouter>
      <Routes>
        {/*token ? <VHome /> : <Navigate to='/login'/> */}
        {/*token ? <Navigate to="/"/> : <VLogin setToken={setToken}/> */}
        <Route path="/" element={token ? <VHome setToken={setToken}  token={token}/> : <Navigate to='/login'/>}></Route>
        <Route path="/login" element={token ? <Navigate to="/"/> : <VLogin setToken={setToken}/>}></Route>
        <Route path="/catalogue" element={<VCatalogue />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
