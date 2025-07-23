import { useEffect, useState } from 'react';
import gitCategories from '../data/gitCommands';

function Bookmarks() {
  const [bookmarked, setBookmarked] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('bookmarkedCommands')) || [];
    setBookmarked(saved);
  }, []);

 
  const allCommands = gitCategories.flatMap(cat => cat.commands);
  const bookmarkedCommands = allCommands.filter(cmd =>
    bookmarked.includes(cmd.name)
  );

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4"> Bookmarked Commands</h1>

      {bookmarkedCommands.length === 0 ? (
        <p className="text-gray-600 ">No commands bookmarked yet.</p>
      ) : (
        <ul className="space-y-4">
          {bookmarkedCommands.map((cmd, index) => (
            <li key={index} className="bg-white  p-4 rounded shadow">
              <p className="font-mono text-lg text-blue-700 ">{cmd.name}</p>
              <p className="text-sm text-gray-600 ">{cmd.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Bookmarks;
