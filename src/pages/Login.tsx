import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, Lock, UserCog, UserCheck } from 'lucide-react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

const SECRET_KEY = '1234'; // Replace with actual secure method in production

const Login = () => {
  const { login } = useAuth();
  const [userType, setUserType] = useState('patient');
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [showSecretModal, setShowSecretModal] = useState(false);
  const [secretInput, setSecretInput] = useState('');
  const [isDoctorAllowed, setIsDoctorAllowed] = useState(false);
  const [error, setError] = useState('');

  const handleDoctorClick = () => {
    setShowSecretModal(true);
  };

  const verifySecretKey = () => {
    if (secretInput === SECRET_KEY) {
      setIsDoctorAllowed(true);
      setUserType('doctor');
      setShowSecretModal(false);
      setError('');
    } else {
      setError('Invalid secret key');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post('http://localhost:5000/login', {
        ...formData,
        role: userType
      });

      login(response.data.token, response.data.user); // Will auto-redirect inside context
    } catch (error) {
      console.error('Login error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gradient-to-b from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 relative">
        {/* Secret Key Modal */}
        {showSecretModal && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl p-6 w-96 shadow-lg text-center">
              <h3 className="text-lg font-semibold mb-4">Enter Hospital Secret Key</h3>
              <input
                type="password"
                value={secretInput}
                onChange={(e) => setSecretInput(e.target.value)}
                placeholder="Enter secret key"
                className="w-full px-4 py-2 mb-3 border border-gray-300 rounded-md"
              />
              {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
              <div className="flex justify-end gap-2">
                <button
                  onClick={() => setShowSecretModal(false)}
                  className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md"
                >
                  Cancel
                </button>
                <button
                  onClick={verifySecretKey}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h2>
            <p className="text-gray-600">Sign in to access your account</p>
          </div>

          {/* User Type Buttons */}
          <div className="mt-8 flex justify-center space-x-4">
            <button
              type="button"
              className={`flex items-center px-4 py-3 rounded-xl transition-all duration-200 ${
                userType === 'patient' ? 'bg-blue-600 text-white shadow-lg' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
              onClick={() => {
                setUserType('patient');
                setIsDoctorAllowed(false);
              }}
            >
              <UserCheck className="h-5 w-5 mr-2" />
              Patient
            </button>
            <button
              type="button"
              className={`flex items-center px-4 py-3 rounded-xl transition-all duration-200 ${
                userType === 'doctor' ? 'bg-blue-600 text-white shadow-lg' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
              onClick={handleDoctorClick}
            >
              <UserCog className="h-5 w-5 mr-2" />
              Doctor
            </button>
          </div>

          {/* Only show form if allowed doctor or patient */}
          {(userType === 'patient' || isDoctorAllowed) && (
            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="appearance-none block w-full pl-10 px-3 py-3 border border-gray-300 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      required
                      value={formData.password}
                      onChange={handleChange}
                      className="appearance-none block w-full pl-10 px-3 py-3 border border-gray-300 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your password"
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                    Remember me
                  </label>
                </div>
                <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-500">
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transform transition-all duration-200 hover:scale-[1.02] ${
                  isLoading ? 'opacity-75 cursor-not-allowed' : ''
                }`}
              >
                {isLoading ? 'Signing in...' : 'Sign in'}
              </button>

              <div className="text-center">
                <p className="text-sm text-gray-600">
                  Don't have an account?{' '}
                  <Link to="/signup" className="font-medium text-blue-600 hover:text-blue-500">
                    Sign up
                  </Link>
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
