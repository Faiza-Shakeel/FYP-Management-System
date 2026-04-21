import React from "react";

const PublicLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 shadow-md bg-white">
        <h1 className="text-xl font-bold text-blue-700">
          FYP Management System
        </h1>

        <div className="space-x-4">
          <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50">
            Login
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Signup
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-20 bg-gray-50">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Final Year Project Management System
        </h1>

        <p className="max-w-2xl text-gray-600 mb-6">
          A centralized platform to manage, track, and streamline final year
          projects for students, supervisors, and administrators efficiently.
        </p>

        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Get Started
        </button>
      </section>

      {/* Features Section */}
      <section className="px-8 py-16 bg-white">
        <h2 className="text-2xl font-semibold text-center mb-10">
          Key Features
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          
          <div className="p-6 border rounded-lg shadow-sm hover:shadow-md">
            <h3 className="text-lg font-semibold mb-2">Project Submission</h3>
            <p className="text-gray-600">
              Students can easily submit and manage their final year projects.
            </p>
          </div>

          <div className="p-6 border rounded-lg shadow-sm hover:shadow-md">
            <h3 className="text-lg font-semibold mb-2">Supervisor Guidance</h3>
            <p className="text-gray-600">
              Supervisors can track progress and provide feedback efficiently.
            </p>
          </div>

          <div className="p-6 border rounded-lg shadow-sm hover:shadow-md">
            <h3 className="text-lg font-semibold mb-2">Admin Control</h3>
            <p className="text-gray-600">
              Admins can manage users, projects, and overall system workflow.
            </p>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto bg-gray-100 text-center py-4 text-gray-600">
        © 2026 FYP Management System | University Portal
      </footer>

    </div>
  );
};

export default PublicLayout;