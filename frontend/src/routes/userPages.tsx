import { Route, Routes } from "react-router-dom";
import { Profile } from "../pages/Profile";
import { Signup } from "../pages/Signup";
import { Signin } from "../pages/Signin";

const User = () => {
  return (
    
    //* /* THESE PAGES REQUIRE AUTHENTICATED USER */
    <Routes>
      {/* app/user/ */}
      <Route path="/" element = { <Profile />} />
      <Route path="/signup" element = { <Signup />} />
      <Route path="/signin" element = { <Signin />} />
    </Routes>
  );
};

export default User;
