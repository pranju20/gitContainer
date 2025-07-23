import { Link } from 'react-router-dom';
import git from '../assets/images/git.jpg';
import { FaTerminal, FaLayerGroup, FaRegClipboard, FaCommentDots } from 'react-icons/fa';
import { motion } from 'framer-motion';

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[85vh] text-center px-4">
     
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center gap-3"
      >
        <img
          src={git}
          className="w-40 h-40 rounded-full shadow-lg border-blue-400 border-4 hover:scale-105 transition-transform duration-300"
          alt="Git logo"
        />
        <h1 className="text-4xl font-bold mt-4">Git Command Explorer</h1>
        <p className="text-lg text-gray-700 mt-2">
          Your Git command cheat sheet – organized, explained, and ready to use
        </p>
        <div className="mt-6">
          <Link
            to="/git"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors"
          >
            <FaTerminal />
            Explore Commands
          </Link>
        </div>
      </motion.div>


      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl"
      >
        <div className="p-5 rounded-xl bg-blue-100 shadow hover:shadow-md transition">
          <div className="text-blue-700 text-2xl mb-2">
            <FaLayerGroup />
          </div>
          <h3 className="text-lg font-semibold text-blue-900">Categorized Commands</h3>
          <p className="text-sm text-blue-800 mt-1">Find Git commands grouped by topic for easy access.</p>
        </div>

        <div className="p-5 rounded-xl bg-green-100 shadow hover:shadow-md transition">
          <div className="text-green-700 text-2xl mb-2">
            <FaRegClipboard />
          </div>
          <h3 className="text-lg font-semibold text-green-900">One-Click Copy</h3>
          <p className="text-sm text-green-800 mt-1">Copy any Git command instantly with one tap.</p>
        </div>

        <div className="p-5 rounded-xl bg-pink-100 shadow hover:shadow-md transition">
          <div className="text-pink-700 text-2xl mb-2">
            <FaCommentDots />
          </div>
          <h3 className="text-lg font-semibold text-pink-900">Feedback Ready</h3>
          <p className="text-sm text-pink-800 mt-1">Submit suggestions or improvements anytime.</p>
        </div>
      </motion.div>
    </div>
  );
}

export default Home;
