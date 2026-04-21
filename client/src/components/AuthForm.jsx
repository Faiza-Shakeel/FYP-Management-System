import { useState } from "react";

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [role, setRole] = useState("student");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    regNo: "",
    employeeId: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let dataToSend = {
      email: formData.email,
      password: formData.password,
      role,
    };

    if (role === "student") dataToSend.regNo = formData.regNo;
    if (role === "supervisor") dataToSend.employeeId = formData.employeeId;
    if (!isLogin) dataToSend.name = formData.name;

    console.log(dataToSend);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-md w-96 space-y-4"
      >
        <h2 className="text-2xl font-bold text-center">
          {isLogin ? "Login" : "Signup"}
        </h2>

        {/* Role Selection */}
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="student">Student</option>
          <option value="supervisor">Supervisor</option>
          <option value="admin">Admin</option>
        </select>

        {/* Name (Signup only) */}
        {!isLogin && (
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        )}

        {/* Email */}
           {!isLogin && (
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
  )}
    {/* Student Field */}
        {role === "student" && (
          <input
            type="text"
            name="regNo"
            placeholder="Registration No"
            value={formData.regNo}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        )}

        {/* Password */}
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

      
        {/* Supervisor Field */}
        {role === "supervisor" && (
          <input
            type="text"
            name="employeeId"
            placeholder="Employee ID"
            value={formData.employeeId}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        )}

        <button className="w-full bg-blue-500 text-white p-2 rounded">
          {isLogin ? "Login" : "Signup"}
        </button>

     <p className="text-center text-sm text-gray-600">
  {isLogin ? (
    <>
      Don't have an account?{" "}
      <span
        className="text-blue-500 hover:text-blue-700 font-medium cursor-pointer underline-offset-2 hover:underline"
        onClick={() => setIsLogin(false)}
      >
        Signup
      </span>
    </>
  ) : (
    <>
      Already have an account?{" "}
      <span
        className="text-blue-500 hover:text-blue-700 font-medium cursor-pointer underline-offset-2 hover:underline"
        onClick={() => setIsLogin(true)}
      >
        Login
      </span>
    </>
  )}
</p>
      </form>
    </div>
  );
}
