import React from "react";
import { Link } from "react-router-dom";
import {
  Brain,
  Shield,
  UserPlus,
  Activity,
  Award,
  BarChart as ChartBar,
} from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-indigo-100 opacity-50 z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-8">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                AI-Powered
              </span>
              <br />
              Skin Cancer Detection
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed">
              Early detection saves lives. Our advanced AI system helps detect
              skin cancer with{" "}
              <span className="text-blue-600 font-semibold">97% accuracy</span>,
              providing quick and reliable results within minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/signup"
                className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-xl text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-150 ease-in-out shadow-lg hover:shadow-xl"
              >
                Get Started
                <svg
                  className="ml-2 -mr-1 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link
                to="/login"
                className="inline-flex items-center px-8 py-4 border-2 border-blue-600 text-lg font-medium rounded-xl text-blue-600 bg-transparent hover:bg-blue-50 transition-colors duration-150 ease-in-out"
              >
                Login
              </Link>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:-translate-y-1 transition-transform duration-300">
              <div className="flex items-center justify-between mb-4">
                <Activity className="h-12 w-12 text-blue-600" />
                <span className="text-4xl font-bold text-gray-900">97%</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Accuracy Rate
              </h3>
              <p className="text-gray-600">
                High precision in detecting skin cancer cases
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:-translate-y-1 transition-transform duration-300">
              <div className="flex items-center justify-between mb-4">
                <ChartBar className="h-12 w-12 text-green-600" />
                <span className="text-4xl font-bold text-gray-900">50K+</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Scans Analyzed
              </h3>
              <p className="text-gray-600">
                Successfully processed skin examinations
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:-translate-y-1 transition-transform duration-300">
              <div className="flex items-center justify-between mb-4">
                <Award className="h-12 w-12 text-purple-600" />
                <span className="text-4xl font-bold text-gray-900">200+</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Expert Doctors
              </h3>
              <p className="text-gray-600">
                Certified dermatologists on our platform
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-white relative">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">
        Advanced Technology for Better Healthcare
      </h2>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        Our platform combines cutting-edge AI technology with medical
        expertise to provide accurate and timely skin cancer detection.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-12">
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-3xl shadow-lg transform hover:-translate-y-1 transition-all duration-300">
        <div className="bg-blue-100 rounded-2xl p-4 inline-block mb-6">
          <Brain className="h-12 w-12 text-blue-600" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-4">
          Advanced AI Technology
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Utilizing state-of-the-art CNN models trained on millions of
          images for accurate skin cancer detection with minimal false
          positives.
        </p>
      </div>

      <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-3xl shadow-lg transform hover:-translate-y-1 transition-all duration-300">
        <div className="bg-green-100 rounded-2xl p-4 inline-block mb-6">
          <Shield className="h-12 w-12 text-green-600" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-4">
          Quick Results
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Get rapid analysis of skin lesions with detailed reports and
          recommendations within minutes of uploading your scan.
        </p>
      </div>

      <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-3xl shadow-lg transform hover:-translate-y-1 transition-all duration-300">
        <div className="bg-purple-100 rounded-2xl p-4 inline-block mb-6">
          <UserPlus className="h-12 w-12 text-purple-600" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-4">
          Expert Consultation
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Connect with qualified dermatologists for professional advice
          and personalized treatment recommendations.
        </p>
      </div>
    </div>
  </div>

  {/* Right-Aligned Button (absolute to page) */}
  <div className="absolute right-8  bottom-4">
    <Link
      to="/aboutai"
      className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-xl text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-150 ease-in-out shadow-lg hover:shadow-xl"
    >
      View More
      <svg
        className="ml-2 -mr-1 w-5 h-5"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          fillRule="evenodd"
          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
    </Link>
  </div>
</div>


      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of users who trust our platform for early skin cancer
            detection. Your health is our priority.
          </p>
          <Link
            to="/signup"
            className="inline-flex items-center px-8 py-4 border-2 border-white text-lg font-medium rounded-xl text-white hover:bg-white hover:text-blue-600 transition-colors duration-150 ease-in-out"
          >
            Create Free Account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
