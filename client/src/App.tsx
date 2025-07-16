import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import { LoginPage, RegistPage, HabitsPage, CreateHabitsPage } from './pages';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={ <LoginPage/> } />
          <Route path='/regist' element={ <RegistPage/> } />
          <Route path='/home' element={ <HabitsPage/> } />
          <Route path='/habit' element={ <CreateHabitsPage/> } />
        </Routes>
    </Router>
    </>
  )
}

export default App
