import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import { LoginPage, RegistPage } from './pages';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={ <LoginPage/> } />
          <Route path='/regist' element={ <RegistPage/> } />
        </Routes>
    </Router>
    </>
  )
}

export default App
