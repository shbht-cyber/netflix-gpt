import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { FaBell } from "react-icons/fa";

import { LOGO } from "../../utils/constants";
import { addUser, removeUser } from "../../utils/redux/userSlice";
import { auth } from "../../utils/firbase";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-6 py-4 bg-gradient-to-b from-black/90 to-transparent flex items-center justify-between">
      {/* Logo */}
      <img src={LOGO} alt="Netflix-logo" className="w-28 cursor-pointer" />

      {user && (
        <nav className="flex items-center gap-8 text-gray-300 font-medium">
          <ul className="hidden md:flex gap-6 text-sm">
            <li className="cursor-pointer hover:text-white transition">Home</li>
            <li className="cursor-pointer hover:text-white transition">
              TV Shows
            </li>
            <li className="cursor-pointer hover:text-white transition">
              Movies
            </li>
            <li className="cursor-pointer hover:text-white transition">
              New & Popular
            </li>
            <li className="cursor-pointer hover:text-white transition">
              My List
            </li>
          </ul>

          <FaBell className="hidden md:block cursor-pointer hover:text-white transition" />

          {/* Profile */}
          <div className="flex justify-center items-center">
            <div className="flex justify-center items-center gap-2">
              <img
                src={user?.photoURL}
                alt="user"
                className="w-8 h-8 rounded cursor-pointer"
              />

              <p className="text-white">{user.displayName}</p>
            </div>

            <button
              onClick={handleSignOut}
              className="ml-2 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white px-4 py-2 rounded-md font-semibold shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              aria-label="Sign out"
              title="Sign out"
            >
              Sign Out
            </button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
