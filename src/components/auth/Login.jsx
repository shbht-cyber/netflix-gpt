import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";

import Header from "../common/Header";
import LoginForm from "./LoginForm";
import {
  validateEmail,
  validatePassword,
  validateName,
} from "../../utils/validation";
import { auth } from "../../utils/firbase";
import { USER_AVATAR } from "../../utils/constants";
import { addUser } from "../../utils/redux/userSlice";

const Login = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "test1@gmail.com",
    password: "Test@123",
  });

  const [errors, setErrors] = useState({});
  const [isSignUp, setIsSignUp] = useState(false);

  const dispatch = useDispatch();

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

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, formData.email, formData.password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        updateProfile(user, {
          displayName: formData.name,
          photoURL: USER_AVATAR,
        })
          .then(() => {
            const { uid, email, displayName, photoURL } = auth.currentUser;
            dispatch(
              addUser({
                uid: uid,
                email: email,
                displayName: displayName,
                photoURL: photoURL,
              })
            );
          })
          .catch((error) => {
            setErrors({
              auth: error.message,
            });
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrors({
          auth: errorCode + errorMessage,
        });
      });
  };

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, formData.email, formData.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrors({
          auth: errorCode + errorMessage,
        });
      });
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
      if (isSignUp) {
        handleSignUp();
      } else {
        handleSignIn();
      }
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
