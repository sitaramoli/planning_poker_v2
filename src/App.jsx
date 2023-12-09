import React, { useContext, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import { ThemeContext } from './context/ThemeContext'
import HomePage from './pages/Home/Home'
import PageNotFound from './pages/PageNotFound/PageNotFound'
import LoginPage from './pages/login/Login'
import SignupPage from './pages/signup/Signup'

const App = () => {
  const { theme } = useContext(ThemeContext);
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className='App'>
      <ToastContainer position='top-right' theme='colored' />
      <BrowserRouter>
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route path='/' element={<HomePage />} />
          </Route>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignupPage />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
