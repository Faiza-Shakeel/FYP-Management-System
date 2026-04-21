import DashboardLayout from './layouts/DashboardLayout';
import AuthForm from './components/AuthForm';
import PublicLayout from './layouts/PublicLayout';
import { Routes, Route } from 'react-router-dom';

function App() {
  // Define unique links for each role
  const studentMenu = [
    { label: 'Overview', path: '/student', icon: '📊' },
    { label: 'Project Upload', path: '/student/upload', icon: '📁' },
    { label: 'My Team', path: '/student/team', icon: '👥' },
  ];

  const adminMenu = [
    { label: 'Admin Stats', path: '/admin', icon: '📈' },
    { label: 'Manage Users', path: '/admin/users', icon: '⚙️' },
  ];

  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<PublicLayout />} />
      <Route path="/login" element={<AuthForm type="login" />} />

      {/* Student Panel */}
      <Route path="/student" element={<DashboardLayout role="Student" menuItems={studentMenu} />}>
        {/* <Route index element={<StudentHome />} />
        <Route path="upload" element={<ProjectUpload />} /> */}
      </Route>

      {/* Admin Panel */}
      <Route path="/admin" element={<DashboardLayout role="Admin" menuItems={adminMenu} />}>
        {/* <Route index element={<AdminDashboard />} /> */}
      </Route>
    </Routes>
  );
}
export default App;