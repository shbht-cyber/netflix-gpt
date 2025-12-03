import React from "react";
import { BG_URL } from "../../utils/constants";

const LoginForm = ({
  formData,
  errors,
  isSignUp,
  onInputChange,
  onSubmit,
  toggleMode,
}) => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url('${BG_URL}')`,
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <form
        onSubmit={onSubmit}
        className="absolute top-1/2 left-1/2 w-[350px] -translate-x-1/2 -translate-y-1/2 bg-black/70 p-8 rounded-lg text-white"
      >
        <h2 className="text-3xl font-semibold mb-6 text-center">
          {isSignUp ? "Sign Up" : "Sign In"}
        </h2>

        {isSignUp && (
          <div className="mb-4">
            <input
              type="text"
              placeholder="Full Name"
              name="name"
              value={formData.name}
              onChange={onInputChange}
              className="w-full p-3 bg-gray-700 rounded-md outline-none"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>
        )}

        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={onInputChange}
            className="w-full p-3 bg-gray-700 rounded-md outline-none"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <div className="mb-4">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={onInputChange}
            className="w-full p-3 bg-gray-700 rounded-md outline-none"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password}</p>
          )}
        </div>

        {errors?.auth && (
          <p className="text-red-500 text-sm mb-2">{errors.auth}</p>
        )}

        <button className="w-full bg-red-600 py-3 rounded-md hover:bg-red-700 transition">
          {isSignUp ? "Create Account" : "Sign In"}
        </button>

        <p className="text-center mt-5 text-gray-400">
          {isSignUp ? "Already have an account?" : "New to Netflix?"}{" "}
          <span
            className="text-white cursor-pointer hover:underline"
            onClick={toggleMode}
          >
            {isSignUp ? "Sign In" : "Sign Up now"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
