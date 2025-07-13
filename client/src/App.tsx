import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import { LoginPage, RegistPage, HabitsPage } from './pages';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={ <LoginPage/> } />
          <Route path='/regist' element={ <RegistPage/> } />
          <Route path='/home' element={ <HabitsPage/> } />
        </Routes>
    </Router>
    </>
  )
}

export default App
