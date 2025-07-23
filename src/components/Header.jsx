import { Link } from 'react-router-dom';

import { FaHome, FaCodeBranch, FaBookmark } from 'react-icons/fa';
import { FaBackward } from 'react-icons/fa6';
import { useAuth } from '../auth/authContext';


function Header() {
  const { user, logout } = useAuth();

  return (
    <header className="bg-blue-600 text-white p-6 shadow">
      <nav className="max-w-6xl mx-auto flex justify-between items-center">
        <div className=" text-l font-bold flex items-center gap-3">
         
            <FaBackward className="w-5 h-5 cursor-pointer"
              onClick={() => window.history.back()} />
            Git Command Explorer
          
        </div>

        <div className="flex gap-4 text-l items-center">
          <Link to="/" className="flex items-center gap-1 hover:underline">
            <FaHome className="transition-transform duration-200 hover:scale-110 hover:text-gray-300" />
             Home
          </Link>

          <Link to="/git" className="flex items-center gap-1 hover:underline">
            <FaCodeBranch className="transition-transform duration-200 hover:scale-110 hover:text-gray-300" />
             Commands
          </Link>

          <Link to="/bookmark" className="flex items-center gap-1 hover:underline">
             <FaBookmark className="transition-transform duration-200 hover:scale-110 hover:text-gray-300"/>
             Bookmarks
          </Link>


        {user && (
          <button
            onClick={logout}
            className="bg-red-400 text-white px-3 py-1 rounded hover:bg-red-600"
          >
            Logout
          </button>
        )}

        </div>
      </nav>
    </header>
  );
}

export default Header;
