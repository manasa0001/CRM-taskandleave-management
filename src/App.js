
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Task from './pages/Task';
import Leave from './pages/Leave';

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 bg-gray-100 min-h-screen">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/tasks" element={<Task />} />
            <Route path="/leaves" element={<Leave />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
