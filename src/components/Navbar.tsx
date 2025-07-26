import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Stethoscope, Menu, X, LogOut, Upload, History, Layout } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout, isAuthenticated } = useAuth();

  const getNavLinks = () => {
    if (!isAuthenticated) {
      return (
        <>
          <Link to="/" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium">
            Home
          </Link>
          <Link to="/about" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium">
            About
          </Link>
          <Link to="/contact" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium">
            Contact
          </Link>
          <Link to="/login" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium">
            Login
          </Link>
          <Link
            to="/signup"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700"
          >
            Get Started
          </Link>
        </>
      );
    }

    if (user?.role === 'patient') {
      return (
        <>
          <Link to="/detection" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium">
            <Upload className="h-4 w-4 inline mr-1" />
            Detection
          </Link>
          <Link to="/history" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium">
            <History className="h-4 w-4 inline mr-1" />
            My History
          </Link>
        </>
      );
    }

    if (user?.role === 'doctor') {
      return (
        <>
          <Link to="/doctor-dashboard" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium">
            <Layout className="h-4 w-4 inline mr-1" />
            Dashboard
          </Link>
          <Link to="/history" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium">
            <History className="h-4 w-4 inline mr-1" />
            Patient Records
          </Link>
        </>
      );
    }
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to={isAuthenticated ? (user?.role === 'doctor' ? '/doctor-dashboard' : '/detection') : '/'} className="flex items-center group">
              <div className="bg-blue-100 p-2 rounded-lg group-hover:bg-blue-200 transition-colors duration-200">
                <Stethoscope className="h-8 w-8 text-blue-600" />
              </div>
              <div className="ml-3">
                <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                  SkinCare AI
                </span>
                <span className="block text-xs text-gray-500">Advanced Detection System</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {getNavLinks()}
            {isAuthenticated && (
              <button
                onClick={logout}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-red-600 hover:bg-red-700"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
          {getNavLinks()}
          {isAuthenticated && (
            <button
              onClick={logout}
              className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-red-600 hover:text-red-700 hover:bg-red-50"
            >
              <LogOut className="h-4 w-4 inline mr-2" />
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;