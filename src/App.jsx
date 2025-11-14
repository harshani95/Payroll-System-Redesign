import {
  BrowserRouter as BroWserRouter,
  Routes,
  Route,
} from "react-router-dom";
import EmployeeRegistration from './pages/EmployeeRegistration';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';

function App() {
  
  return (
     <>
      <BroWserRouter>
        <Routes>
          <Route path="/register" element={<EmployeeRegistration />} />
          <Route path="/dashboard" element={<Dashboard />} />
           <Route path="/" element={<Home />} />
        </Routes>
      </BroWserRouter>
    
    </>
    
  )
}

export default App
