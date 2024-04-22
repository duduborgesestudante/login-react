import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Home} from './home'
import { Signin } from './signin';
import Login from './login';
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>

  )
}

export default App