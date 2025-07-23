import { useState, useEffect } from 'react';
import gitCategories from '../data/gitCommands';
import {
  FaChevronDown,
  FaChevronRight,
  FaCheck,
  FaRegClipboard,
  FaSearch,
} from 'react-icons/fa';

function GitExplorer() {
  const [openCategory, setOpenCategory] = useState(null);
  const [copiedCommand, setCopiedCommand] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  // 🔖 Bookmarks stored in localStorage
  const [bookmarks, setBookmarks] = useState(() => {
    const saved = localStorage.getItem('bookmarkedCommands');
    return saved ? JSON.parse(saved) : [];
  });

  // Toggle category open/close
  const toggleCategory = (index) => {
    setOpenCategory((prev) => (prev === index ? null : index));
  };

  // Handle copy to clipboard
  const handleCopy = (cmd) => {
    navigator.clipboard.writeText(cmd);
    setCopiedCommand(cmd);
    setTimeout(() => setCopiedCommand(null), 1500);
  };

  // Toggle bookmark
  const toggleBookmark = (cmd) => {
    let updated;
    if (bookmarks.includes(cmd.name)) {
      updated = bookmarks.filter((item) => item !== cmd.name);
    } else {
      updated = [...bookmarks, cmd.name];
    }
    setBookmarks(updated);
    localStorage.setItem('bookmarkedCommands', JSON.stringify(updated));
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      {/* Search Bar */}
      <div className="relative max-w-md mb-10 justify-center mx-auto">
        <FaSearch className="absolute left-3 top-3 text-gray-400" />
        <input
          type="text"
          placeholder="Search commands..."
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md shadow-sm dark:bg-gray-800 dark:border-gray-700 dark:text-white"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Grid of Categories */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {gitCategories.map((category, index) => {
          const isOpen = openCategory === index;

          // Filter commands based on search query
          const filtered = category.commands.filter(
            (cmd) =>
              cmd.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
              cmd.description.toLowerCase().includes(searchQuery.toLowerCase())
          );

          if (searchQuery && filtered.length === 0) return null;

          return (
            <div
              key={index}
              className="self-start bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 
              rounded-xl p-4 shadow-md transition-shadow duration-300 flex flex-col"
            >
              <div
                onClick={() => toggleCategory(index)}
                className="flex justify-between items-center cursor-pointer select-none"
              >
                <h2 className="text-lg font-semibold text-blue-700 dark:text-blue-400">
                  {category.title}
                </h2>
                {isOpen ? <FaChevronDown /> : <FaChevronRight />}
              </div>

              {/* Expandable Command List */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen ? 'mt-4 max-h-[1000px]' : 'max-h-0'
                }`}
              >
                <ul className="space-y-3">
                  {filtered.map((cmd, i) => (
                    <li
                      key={i}
                      className="flex justify-between items-start bg-white dark:bg-gray-900 
                      rounded-md p-3 text-sm shadow-sm hover:shadow transition"
                    >
                      <div>
                        <p className="font-mono text-gray-900 dark:text-gray-100">{cmd.name}</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">{cmd.description}</p>
                      </div>
                      <div className="flex items-center gap-2 ml-2">
                        {/* Copy button */}
                        <button
                          onClick={() => handleCopy(cmd.name)}
                          className="text-blue-500 dark:text-blue-400 text-lg transition-transform hover:scale-110"
                          title="Copy command"
                        >
                          {copiedCommand === cmd.name ? (
                            <FaCheck className="text-green-500" />
                          ) : (
                            <FaRegClipboard />
                          )}
                        </button>

                        {/* Bookmark toggle */}
                        <button
                          onClick={() => toggleBookmark(cmd)}
                          className="text-yellow-500 dark:text-yellow-400 text-lg transition-transform hover:scale-110"
                          title="Bookmark this command"
                        >
                          {bookmarks.includes(cmd.name) ? '⭐' : '☆'}
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default GitExplorer;
