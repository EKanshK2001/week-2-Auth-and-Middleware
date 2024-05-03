import { Route, Routes } from "react-router-dom";
import { Profile } from "../pages/Profile";

const User = () => {
  return (

    // app/pages -> homepage, shows all of the logged in user's pages
    // app/pages/109284221 -> shows selected page  
    // app/pages/create-page -> create a new page, also uses app/pages/update and delete APIs in buttons
    // app/user/signup -> user signup
    // app/user/signin -> user signin
    // app/user/927491123 -> user profile
    // 

    <Routes>
      {/* app/user/ */}
      {/* //// the problem here is that we need the /user to be private or take the id as input */}
      <Route path="/" element = { <Profile />} />
    </Routes>
  );
};

export default User;
