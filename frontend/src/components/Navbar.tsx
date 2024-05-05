import { useNavigate } from "react-router-dom";
import { Button } from "./Button";
import { useRecoilValue } from "recoil";
import { userAtom } from "../store/atoms/userAtom";

export const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("Authorizaiton");
    localStorage.removeItem("recoil-persist");
    navigate('/user/signin');
    alert("you're now logged out!");
  };

  const user = useRecoilValue(userAtom);

  if (user._id) {
    return (
      <div className="w-full p-5 bg-red-200 flex justify-between px-16">
        <div> navbar </div>
        <div className="flex gap-10">
          <div className="py-2 px-6 border-4"> {user.username} </div>
          <Button text="Logout" onClick={handleLogout} />
        </div>
      </div>
    );
  } else {
    return (
      <div className="w-full p-5 bg-red-200 flex justify-between px-16">
        <div> navbar </div>
        <div className="flex gap-10">
          <Button
            text="signin"
            onClick={() => {
              navigate("/user/signin");
            }}
          />
        </div>
      </div>
    );
  }
};
