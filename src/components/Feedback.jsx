import { useState } from 'react';
import { FaCommentDots, FaTimes } from 'react-icons/fa';

function FeedbackForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [gitCommand, setGitCommand] = useState('');
  const [usage, setUsage] = useState('');
  const [comments, setComments] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!gitCommand.trim()) newErrors.gitCommand = 'Git command is required.';
    if (!usage.trim()) newErrors.usage = 'Usage is required.';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }


    console.log('User Feedback:', { command: gitCommand, usage, comments });
    setSubmitted(true);
    setGitCommand('');
    setUsage('');
    setComments('');
    setErrors({});
  };

  const closePopup = () => {
    setIsOpen(false);
    setSubmitted(false);
    setGitCommand('');
    setUsage('');
    setComments('');
    setErrors({});
  };

  return (
    <>
     
      <button
        className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg transition duration-200"
        onClick={() => setIsOpen(true)}
        title="Send Feedback"
      >
        <FaCommentDots className="text-xl" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center">
          <div className="bg-white text-black p-6 rounded-xl shadow-lg w-[90%] max-w-md relative">
            {!submitted && (
              <h2 className="text-lg font-semibold mb-4 text-blue-700">
                Suggest a Git Command
              </h2>
            )}

            <button
              onClick={closePopup}
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-lg"
              title="Close"
            >
              <FaTimes />
            </button>

            {submitted ? (
              <p className="text-green-600 text-base font-medium">
                Thanks for your suggestion!
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <input
                    type="text"
                    value={gitCommand}
                    onChange={(e) => setGitCommand(e.target.value)}
                    placeholder="Git Command (e.g. git stash)"
                    className={`p-3 rounded-md border ${
                      errors.gitCommand ? 'border-red-500' : 'border-gray-300'
                    } focus:outline-none focus:ring-2 focus:ring-blue-400 w-full`}
                  />
                  {errors.gitCommand && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.gitCommand}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    type="text"
                    value={usage}
                    onChange={(e) => setUsage(e.target.value)}
                    placeholder="Usage (e.g. Stash changes temporarily)"
                    className={`p-3 rounded-md border ${
                      errors.usage ? 'border-red-500' : 'border-gray-300'
                    } focus:outline-none focus:ring-2 focus:ring-blue-400 w-full`}
                  />
                  {errors.usage && (
                    <p className="text-red-500 text-sm mt-1">{errors.usage}</p>
                  )}
                </div>

                <textarea
                  value={comments}
                  onChange={(e) => setComments(e.target.value)}
                  placeholder="Any additional comments..."
                  className="p-3 rounded-md border border-gray-300 resize-none h-24 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />

                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors"
                >
                  Submit
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default FeedbackForm;
