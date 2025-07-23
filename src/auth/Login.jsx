import { useState } from 'react';
import { useAuth } from './authContext';

function Login() {
  const { login, signup } = useAuth();
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = isSignup
      ? signup(email, password)
      : login(email, password);

    if (!success) {
      setError(isSignup ? 'User already exists' : 'Invalid credentials');
    } else {
      setError('');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-80">
        <h2 className="text-xl font-bold mb-4 text-center">
          {isSignup ? 'Sign Up' : 'Login'}
        </h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 mb-3 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-3 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          {isSignup ? 'Create Account' : 'Login'}
        </button>
        <p className="text-sm mt-4 text-center">
          {isSignup ? 'Already have an account?' : 'Don\'t have an account?'}{' '}
          <button
            type="button"
            onClick={() => setIsSignup(!isSignup)}
            className="text-blue-600 underline"
          >
            {isSignup ? 'Login' : 'Sign Up'}
          </button>
        </p>
        {error && <p className="text-red-500 mt-2 text-sm">{error}</p>}
      </form>
    </div>
  );
}

export default Login;
