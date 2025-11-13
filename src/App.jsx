import {
  BrowserRouter as BroWserRouter,
  Routes,
  Route,
} from "react-router-dom";
import EmployeeRegistration from './pages/EmployeeRegistration';
import Dashboard from './pages/Dashboard';

function App() {
  
  return (
     <>
      <BroWserRouter>
        <Routes>
          <Route path="/" element={<EmployeeRegistration />} />
          <Route path="/home" element={<Dashboard />} />
          
        </Routes>
      </BroWserRouter>
    </>
    
  )
}

export default App
