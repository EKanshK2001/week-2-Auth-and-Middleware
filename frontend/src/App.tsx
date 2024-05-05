import { Route, Routes } from "react-router-dom";
import User from "./routes/userPages";
import Pages from "./routes/pages";

const App = () => {
  return (
    // app/pages -> homepage, shows all of the logged in user's pages
    //* app/pages/109284221 -> shows selected page
    //! app/pages/create-page -> create a new page, also uses app/pages/update and delete APIs in buttons
    //? app/user/signup -> user signup
    //TODO app/user/signin -> user signin
    // app/user/927491123 -> user profile

    //app/page
    

    <Routes>
      {/* app/ */}
      {/* <Route path="/*" element= { <AuthPages /> }/> */}
      <Route path="/*" element= { <Pages /> }/>
      <Route path="/user/*" element = {<User />} />
    </Routes>
      
  );
};
export default App;
