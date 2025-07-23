import { Link } from 'react-router-dom';
import git from '../assets/images/git.jpg';


function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh] text-center p-4">
        <div className="flex items-left gap-3">
                  
                    <img
                      src={git}
                      className="w-60 h-60 rounded-full shadow-lg"
                      onClick={() => window.history.back()}
                    />
                </div>
      <h1 className="text-4xl font-bold mb-4">Git Command Explorer</h1>
      <p className="mb-6">Your Git command cheat sheet - organized, explained, and ready to use</p>
      <Link to="/git" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
        Explore Commands
      </Link>
       
    </div>
    
  );
}

export default Home;
