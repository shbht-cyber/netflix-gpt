import { useState } from "react";

import Header from "../common/Header";
import LoginForm from "./LoginForm";
import {
  validateEmail,
  validatePassword,
  validateName,
} from "../../utils/validation";

const Login = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleMode = () => {
    setIsSignUp(!isSignUp);
    setErrors({});
    setFormData({
      name: "",
      email: "",
      password: "",
    });
  };

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};

    if (isSignUp) {
      newErrors.name = validateName(formData.name);
    }

    newErrors.email = validateEmail(formData.email);
    newErrors.password = validatePassword(formData.password);

    setErrors(newErrors);

    if (Object.values(newErrors).every((err) => err === "")) {
      console.log("Form Submitted:", formData);
    }
  };

  return (
    <div>
      <Header />

      <LoginForm
        formData={formData}
        errors={errors}
        onInputChange={onInputChange}
        onSubmit={onSubmit}
        isSignUp={isSignUp}
        toggleMode={toggleMode}
      />
    </div>
  );
};

export default Login;
