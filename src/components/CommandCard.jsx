import { FaCopy } from 'react-icons/fa';

function CommandCard({ command, usage, example }) {
  const handleCopy = () => {
    navigator.clipboard.writeText(example);
  };

  return (
    <div className="bg-white  p-4 rounded shadow-md">
      <h3 className="text-lg font-semibold mb-1">{command}</h3>
      <p className="text-sm text-gray-600 ">{usage}</p>
      <div className="mt-2 flex items-center justify-between">
        <code className="bg-gray-200  px-2 py-1 rounded">{example}</code>
        <button onClick={handleCopy} title="Copy" className="ml-2 text-gray-500 hover:text-gray-800">
          <FaCopy />
        </button>
      </div>
    </div>
  );
}

export default CommandCard;
