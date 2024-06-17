// import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import { Route,Routes } from 'react-router-dom';
// import Details from './Details';
// import ManagerDashboard from './components/ManagerDashboard';
import Dashboard from './components/Dashboard';



function App() {

  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      {/* <Route path='/details' element={<ManagerDashboard />} /> */}
      <Route path='/details' element={<Dashboard />} />

    </Routes>
  </>
  )
}

export default App
