import { Route, Routes } from "react-router-dom";
import { Signup } from "../pages/Signup";
import { Signin } from "../pages/Signin";

const Pages = () => {
  return (

    <Routes>
      {/* app/signup or app/signin */}
        <Route path="/signup" element = { <Signup />} />
        <Route path="/signin" element = { <Signin />} />
    </Routes>
  );
};

export default Pages;
