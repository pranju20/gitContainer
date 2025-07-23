import { Routes, Route } from 'react-router-dom';
import { useAuth } from './auth/authContext';
import Home from './pages/home';
import GitExplorer from './pages/gitExplorer';
import Header from './components/Header';
import Bookmark from './components/Bookmark';
import Feedback from './components/Feedback';
import Login from './auth/Login';

function App() {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      {user ? (
        <>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/git" element={<GitExplorer />} />
            <Route path="/bookmark" element={<Bookmark />} />
          </Routes>
          <Feedback />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
