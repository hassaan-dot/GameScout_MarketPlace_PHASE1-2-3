// import React, { useState } from "react";
// // import './styles.css'

// const LoginPage = () => {
//   const [formData, setFormData] = useState({
//     username: "",
//     password: "",
//     remember: false,
//   });

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form Submitted", formData);
//     // Add your form submission logic here
//   };

//   return (
//     <div className="glass-container">
//       <div className="login-box">
//         <h2>Login</h2>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             id="username"
//             name="username"
//             value={formData.username}
//             onChange={handleChange}
//             required
//             placeholder="Username"
//           />
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//             placeholder="Password"
//           />
//           <div className="options">
//             <input
//               type="checkbox"
//               id="remember"
//               name="remember"
//               checked={formData.remember}
//               onChange={handleChange}
//             />
//             <label htmlFor="remember">Remember me</label>
//             <a href="#">Forgot Password?</a>
//           </div>
//           <button type="submit">Login</button>
//           <p>
//             Don't have an account? <a href="#" id="register">Register</a>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;
import React, { useState } from "react";
import { Images } from "../../Resources/Images/index";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const Connect = () => {
    return navigate("/Home");
  };
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    remember: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
  };

  return (
    <div
      className="flex justify-center items-center h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${Images.BackgroundLogin})` }}
    >
      <div className="w-96 md:w-[400px] relative z-10 bg-red shadow-lg rounded-3xl p-8 backdrop-blur-md">
        <div className="text-center mb-8">
          <h2 className="text-white text-3xl font-semibold">Login</h2>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col">
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            placeholder="Username"
            className="p-3 mt-4 bg-transparent border border-white text-white rounded-lg placeholder-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            placeholder="Password"
            className="p-3 mt-4 bg-transparent border border-white text-white rounded-lg placeholder-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <div className="flex items-center mt-6 text-white text-sm">
            <input
              type="checkbox"
              id="remember"
              name="remember"
              checked={formData.remember}
              onChange={handleChange}
              className="mr-2"
            />
            <label htmlFor="remember">Remember me</label>
            <a href="#" className="ml-auto text-indigo-300 hover:text-white">
              Forgot Password?
            </a>
          </div>
          <button
            onClick={() => Connect()}
            type="submit"
            className="mt-6 bg-[#8C6DFD] text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Login
          </button>
          <p className="text-sm text-white mt-6">
            Don't have an account?{" "}
            <a
              href="#"
              className="font-semibold underline text-indigo-300 hover:text-white"
            >
              Register
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
