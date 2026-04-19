import Sidebar from "../components/common/Sidebar";
import Navbar from "../components/common/Navbar";
import { useAuth } from "../context/AuthContext";

const StudentLayout = ({ children }) => {
  const { user } = useAuth();

  return (
    <div className="flex">
      <Sidebar role={user?.role} />

      <div className="flex-1">
        <Navbar user={user} />

        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export default StudentLayout;