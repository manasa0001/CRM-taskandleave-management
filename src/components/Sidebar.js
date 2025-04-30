
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white flex flex-col p-4">
      <h2 className="text-2xl font-bold mb-6">Employee Portal</h2>
      <nav className="flex flex-col gap-4">
        <Link to="/" className="hover:bg-gray-700 p-2 rounded">Dashboard</Link>
        <Link to="/tasks" className="hover:bg-gray-700 p-2 rounded">Tasks</Link>
        <Link to="/leaves" className="hover:bg-gray-700 p-2 rounded">Leaves</Link>
      </nav>
    </div>
  );
};

export default Sidebar;
