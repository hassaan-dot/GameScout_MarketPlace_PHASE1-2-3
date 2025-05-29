import React, { useState } from "react";
import { Images } from "../../Resources/Images/index";
import { useLogin } from "../../../hooks/useLogin";
import ClipLoader from "react-spinners/ClipLoader";
const LoginPage = () => {
  const { mutate: handleUserLogin, isPending } = useLogin();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const Connect = () => {
    handleUserLogin({ email: formData?.email, password: formData?.password });
    // return navigate("/Home");
  };

  const handleChange = (field, input) => {
    setFormData((prev) => ({
      ...prev,
      [field]: input,
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
            type="email"
            id="email"
            name="Email"
            value={formData.email}
            onChange={(event) => handleChange("email", event.target.value)}
            required
            placeholder="Enter you email"
            className="p-3 mt-4 bg-transparent border border-white text-white rounded-lg placeholder-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={(event) => handleChange("password", event.target.value)}
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
            className="mt-6 bg-[#8C6DFD] text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center"
          >
            Login
            {isPending && (
              <ClipLoader
                color="#ffffff"
                loading={true} // Replace with your loading state
                size={20}
                className="inline-block ml-2"
              />
            )}
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
